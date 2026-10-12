/* Procedural bridal gowns: lathe-based bodice + skirt with pleats and a train,
   satin/mikado/tulle/lace fabrics and a crystal sparkle layer. */
import * as THREE from 'three';

// Skirt silhouettes: [radius, height] from waist (1.18) to floor.
export const SILHOUETTES = {
  ball:    [[0.118, 1.18], [0.2, 1.1], [0.4, 0.92], [0.6, 0.64], [0.76, 0.34], [0.85, 0.1], [0.865, 0.0]],
  aline:   [[0.118, 1.18], [0.17, 1.06], [0.28, 0.82], [0.41, 0.52], [0.53, 0.22], [0.58, 0.0]],
  mermaid: [[0.118, 1.18], [0.145, 1.02], [0.152, 0.8], [0.138, 0.56], [0.17, 0.4], [0.34, 0.17], [0.5, 0.0]],
  column:  [[0.118, 1.18], [0.148, 0.95], [0.165, 0.55], [0.2, 0.0]],
};

export const COLORS = {
  ivory:     '#f4ebdc',
  snow:      '#fbfaf6',
  champagne: '#ead2ac',
  blush:     '#f0cdc4',
  pearl:     '#e2e0e6',
  gold:      '#d8bb84',
};

/** Smooth a profile with a Catmull-Rom spline so the lathe has soft curves. */
function smoothProfile(pts, samples = 48) {
  const curve = new THREE.SplineCurve(pts.map(([r, y]) => new THREE.Vector2(r, y)));
  return curve.getPoints(samples);
}

function skirtGeometry(style, { pleats = 14, train = 0.5 } = {}) {
  const profile = smoothProfile(SILHOUETTES[style] || SILHOUETTES.ball);
  const geo = new THREE.LatheGeometry(profile, 160);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  const top = 1.18;
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const r = Math.hypot(v.x, v.z);
    if (r < 1e-4) continue;
    const a = Math.atan2(v.z, v.x);
    const k = 1 - v.y / top;            // 0 at waist → 1 at hem
    // soft pleats/folds that open toward the hem
    const fold = 1 + Math.sin(a * pleats + Math.sin(a * 3) * 0.6) * 0.035 * k * k;
    // train sweeping behind (−z)
    const back = Math.max(0, -Math.sin(a));
    const trainR = train * Math.pow(back, 2.2) * Math.pow(k, 4);
    const nr = r * fold + trainR;
    v.x = Math.cos(a) * nr;
    v.z = Math.sin(a) * nr;
    if (k > 0.92) v.y -= trainR * 0.02; // keep the hem on the floor
    pos.setXYZ(i, v.x, Math.max(0, v.y), v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

function bodiceGeometry() {
  // sweetheart-ish bodice from waist to bust line
  const pts = smoothProfile([[0.118, 1.16], [0.112, 1.22], [0.128, 1.32], [0.155, 1.42], [0.158, 1.48], [0.14, 1.52]], 24);
  return new THREE.LatheGeometry(pts, 96);
}

function torsoGeometry() {
  // dress-form torso (no head) — neck cap, shoulders, bust
  const pts = smoothProfile([[0.001, 1.8], [0.045, 1.79], [0.05, 1.7], [0.14, 1.63], [0.165, 1.56], [0.155, 1.44], [0.12, 1.25], [0.112, 1.16]], 40);
  return new THREE.LatheGeometry(pts, 64);
}

let laceTex = null;
function laceTexture() {
  if (laceTex) return laceTex;
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 256);
  g.strokeStyle = '#fff';
  g.fillStyle = '#fff';
  // floral lace motif
  const flower = (x, y, s) => {
    for (let p = 0; p < 6; p++) {
      g.beginPath();
      const a = (p / 6) * Math.PI * 2;
      g.ellipse(x + Math.cos(a) * s * 0.55, y + Math.sin(a) * s * 0.55, s * 0.42, s * 0.2, a, 0, Math.PI * 2);
      g.lineWidth = 2.2; g.stroke();
    }
    g.beginPath(); g.arc(x, y, s * 0.18, 0, Math.PI * 2); g.fill();
  };
  for (let y = 0; y <= 256; y += 64) for (let x = 0; x <= 256; x += 64) {
    flower(x + ((y / 64) % 2) * 32, y, 22);
  }
  g.lineWidth = 1;
  for (let i = 0; i < 256; i += 8) { // mesh net
    g.globalAlpha = 0.35;
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 128, 256); g.stroke();
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i - 128, 256); g.stroke();
  }
  g.globalAlpha = 1;
  laceTex = new THREE.CanvasTexture(c);
  laceTex.wrapS = laceTex.wrapT = THREE.RepeatWrapping;
  laceTex.repeat.set(10, 5);
  laceTex.anisotropy = 4;
  return laceTex;
}

export const FABRICS = {
  satin:  { roughness: 0.3,  sheen: 1.0, sheenRoughness: 0.25, clearcoat: 0.35, clearcoatRoughness: 0.4, opacity: 1, lace: false },
  mikado: { roughness: 0.48, sheen: 0.7, sheenRoughness: 0.45, clearcoat: 0.12, clearcoatRoughness: 0.6, opacity: 1, lace: false },
  tulle:  { roughness: 0.9,  sheen: 0.5, sheenRoughness: 0.8,  clearcoat: 0,    clearcoatRoughness: 1,   opacity: 0.78, lace: false },
  lace:   { roughness: 0.55, sheen: 0.9, sheenRoughness: 0.4,  clearcoat: 0.1,  clearcoatRoughness: 0.6, opacity: 1, lace: true },
};

const sparkleVert = /* glsl */`
  uniform float uTime; uniform float uPixel;
  attribute float aSeed;
  varying float vTw;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vTw = pow(0.5 + 0.5 * sin(uTime * (1.5 + aSeed * 3.0) + aSeed * 40.0), 6.0);
    gl_PointSize = (2.0 + 5.0 * vTw) * uPixel / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`;
const sparkleFrag = /* glsl */`
  uniform vec3 uColor; uniform float uOpacity;
  varying float vTw;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float star = max(0.0, 1.0 - d * 2.0);
    star += max(0.0, 1.0 - abs(c.x) * 14.0) * max(0.0, 1.0 - abs(c.y) * 2.2) * 0.6;
    star += max(0.0, 1.0 - abs(c.y) * 14.0) * max(0.0, 1.0 - abs(c.x) * 2.2) * 0.6;
    gl_FragColor = vec4(uColor * (0.7 + vTw * 2.2), star * (0.15 + vTw * 0.85) * uOpacity);
  }`;

export const sparkleUniforms = { uTime: { value: 0 }, uPixel: { value: 200 } };

function sparkles(geo, count) {
  // sample points on the skirt surface (area-weighted triangles)
  const pos = geo.attributes.position, idx = geo.index;
  const tris = idx.count / 3;
  const out = new Float32Array(count * 3), seeds = new Float32Array(count);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    const t = Math.floor(Math.random() * tris) * 3;
    a.fromBufferAttribute(pos, idx.getX(t)); b.fromBufferAttribute(pos, idx.getX(t + 1)); c.fromBufferAttribute(pos, idx.getX(t + 2));
    let u = Math.random(), w = Math.random();
    if (u + w > 1) { u = 1 - u; w = 1 - w; }
    const p = a.clone().addScaledVector(b.clone().sub(a), u).addScaledVector(c.clone().sub(a), w);
    p.multiplyScalar(1.006);
    out.set([p.x, p.y, p.z], i * 3);
    seeds[i] = Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(out, 3));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  const m = new THREE.ShaderMaterial({
    uniforms: { ...sparkleUniforms, uColor: { value: new THREE.Color('#fff4dc') }, uOpacity: { value: 1 } },
    vertexShader: sparkleVert, fragmentShader: sparkleFrag,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  return new THREE.Points(g, m);
}

/**
 * A full dress on a gold stand. Returns { group, set(opts) } so the customizer can
 * switch silhouette / fabric / color / crystals in real time.
 */
export function createGown(opts = {}) {
  const state = { style: 'ball', fabric: 'satin', color: 'ivory', crystals: true, sparkleCount: 2200, train: 0.55, ...opts };
  const group = new THREE.Group();

  const fabricMat = new THREE.MeshPhysicalMaterial({ color: COLORS[state.color], side: THREE.DoubleSide, sheenColor: new THREE.Color('#fff6ea') });
  const laceMat = new THREE.MeshPhysicalMaterial({
    color: '#ffffff', map: laceTexture(), alphaMap: laceTexture(), transparent: true, alphaTest: 0.25,
    roughness: 0.6, sheen: 1, sheenColor: new THREE.Color('#ffffff'), side: THREE.DoubleSide, depthWrite: false,
  });
  const formMat = new THREE.MeshStandardMaterial({ color: '#efe6da', roughness: 0.75 });
  const goldMat = new THREE.MeshStandardMaterial({ color: '#c9a35f', metalness: 1, roughness: 0.28 });

  const torso = new THREE.Mesh(torsoGeometry(), formMat);
  const bodice = new THREE.Mesh(bodiceGeometry(), fabricMat);
  const belt = new THREE.Mesh(new THREE.TorusGeometry(0.121, 0.012, 12, 96), goldMat);
  belt.rotation.x = Math.PI / 2; belt.position.y = 1.18;
  const neckCap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 24), goldMat);
  neckCap.position.y = 1.85;
  const skirt = new THREE.Mesh(undefined, fabricMat);
  const laceLayer = new THREE.Mesh(undefined, laceMat);
  laceLayer.scale.setScalar(1.012);
  let glitter = null;

  [torso, bodice, skirt, belt, neckCap].forEach((m) => { m.castShadow = true; m.receiveShadow = true; group.add(m); });
  group.add(laceLayer);

  function rebuild() {
    skirt.geometry?.dispose();
    skirt.geometry = skirtGeometry(state.style, { train: state.style === 'column' ? 0.25 : state.train });
    laceLayer.geometry = skirt.geometry;
    if (glitter) { group.remove(glitter); glitter.geometry.dispose(); }
    glitter = sparkles(skirt.geometry, state.sparkleCount);
    glitter.visible = state.crystals;
    group.add(glitter);
  }

  function applyMaterial() {
    const f = FABRICS[state.fabric];
    fabricMat.color.set(COLORS[state.color]);
    fabricMat.roughness = f.roughness;
    fabricMat.sheen = f.sheen;
    fabricMat.sheenRoughness = f.sheenRoughness;
    fabricMat.clearcoat = f.clearcoat;
    fabricMat.clearcoatRoughness = f.clearcoatRoughness;
    fabricMat.transparent = f.opacity < 1;
    fabricMat.opacity = f.opacity;
    fabricMat.depthWrite = f.opacity === 1;
    fabricMat.needsUpdate = true;
    laceLayer.visible = f.lace;
    laceMat.color.set(COLORS[state.color]).offsetHSL(0, 0, 0.06);
  }

  function set(next) {
    const geomChanged = next.style && next.style !== state.style;
    Object.assign(state, next);
    if (geomChanged) rebuild();
    applyMaterial();
    if (glitter) glitter.visible = state.crystals;
  }

  rebuild();
  applyMaterial();

  // stand
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.2, 12), goldMat);
  pole.position.y = 1.9;
  group.add(pole);

  return { group, set, state, materials: { fabricMat, laceMat } };
}
