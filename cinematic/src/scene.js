/* The Diadema virtual showroom: arch corridor, gowns on pedestals, floating tiara,
   founder portrait, customizer podium, gold particles and cinematic post-processing. */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { createGown, sparkleUniforms } from './dress.js';

const GOLD_GLOW = new THREE.Color('#ffcf8f').multiplyScalar(2.4);

export function createShowroom(canvas, { quality = 'high' } = {}) {
  const low = quality === 'low';
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !low, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, low ? 1.25 : 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = !low;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const BG = new THREE.Color('#0e0a09');
  scene.background = BG;
  scene.fog = new THREE.FogExp2('#0e0a09', 0.045);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.4;

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 90);

  /* ---------------- Lights ---------------- */
  scene.add(new THREE.HemisphereLight('#ffe9d2', '#1a1110', 0.35));
  const spots = [];
  function spot(x, z, target, intensity = 16) {
    const s = new THREE.SpotLight('#ffe2bd', intensity, 14, Math.PI / 7, 0.6, 1.6);
    s.position.set(x, 6.5, z);
    s.target.position.copy(target);
    s.castShadow = !low && spots.length < 4;
    s.shadow.mapSize.set(1024, 1024);
    s.shadow.bias = -0.0004;
    scene.add(s, s.target);
    spots.push(s);
    return s;
  }

  /* ---------------- Floor ---------------- */
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(60, 96),
    new THREE.MeshPhysicalMaterial({ color: '#17110f', roughness: 0.22, metalness: 0.35, clearcoat: 0.6, clearcoatRoughness: 0.2 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // gold inlay lines running the length of the corridor
  const glowMat = new THREE.MeshBasicMaterial({ color: GOLD_GLOW, toneMapped: false });
  for (const x of [-3.4, 3.4]) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.004, 44), glowMat);
    line.position.set(x, 0.003, -10);
    scene.add(line);
  }

  /* ---------------- Archways ---------------- */
  const archMetal = new THREE.MeshStandardMaterial({ color: '#b8915a', metalness: 1, roughness: 0.3 });
  const archGroup = new THREE.Group();
  const ARCH_R = 3.2, ARCH_H = 2.4;
  function arch(z, scale = 1) {
    const g = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.TorusGeometry(ARCH_R, 0.07, 16, 96, Math.PI), archMetal);
    frame.position.y = ARCH_H;
    const neon = new THREE.Mesh(new THREE.TorusGeometry(ARCH_R - 0.14, 0.012, 8, 128, Math.PI), glowMat);
    neon.position.y = ARCH_H;
    g.add(frame, neon);
    for (const x of [-ARCH_R, ARCH_R]) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, ARCH_H, 24), archMetal);
      col.position.set(x, ARCH_H / 2, 0);
      const colNeon = new THREE.Mesh(new THREE.BoxGeometry(0.02, ARCH_H, 0.02), glowMat);
      colNeon.position.set(x - Math.sign(x) * 0.14, ARCH_H / 2, 0);
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 0.12, 24), archMetal);
      base.position.set(x, 0.06, 0);
      g.add(col, colNeon, base);
    }
    g.position.z = z;
    g.scale.setScalar(scale);
    archGroup.add(g);
    return g;
  }
  [6, 1.5, -3, -7.5, -12, -16.5].forEach((z) => arch(z));
  const grandArch = arch(-21.5, 1.35);
  scene.add(archGroup);

  /* ---------------- Drapes ---------------- */
  const drapeGeo = new THREE.PlaneGeometry(46, 9, 220, 1);
  {
    const p = drapeGeo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, Math.sin(p.getX(i) * 3.1) * 0.12 + Math.sin(p.getX(i) * 1.3) * 0.08);
    drapeGeo.computeVertexNormals();
  }
  const drapeMat = new THREE.MeshStandardMaterial({ color: '#3a2422', roughness: 0.65, metalness: 0.05, side: THREE.DoubleSide });
  for (const x of [-6.2, 6.2]) {
    const d = new THREE.Mesh(drapeGeo, drapeMat);
    d.rotation.y = Math.sign(x) * -Math.PI / 2;
    d.position.set(x, 4.5, -8);
    scene.add(d);
  }

  /* ---------------- Pedestal ---------------- */
  const pedMat = new THREE.MeshPhysicalMaterial({ color: '#f1e9df', roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.15 });
  function pedestal(r = 1.05) {
    const g = new THREE.Group();
    const p = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.04, 0.2, 96), pedMat);
    p.position.y = 0.1; p.receiveShadow = true; p.castShadow = true;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r * 1.045, 0.012, 8, 160), glowMat);
    ring.rotation.x = Math.PI / 2; ring.position.y = 0.2;
    g.add(p, ring);
    return g;
  }

  /* ---------------- Collection gowns ---------------- */
  const gownSpecs = [
    { pos: [-1.95, -1.0], style: 'ball',    color: 'ivory',     fabric: 'satin', ry: 0.7 },
    { pos: [1.95, -5.4],  style: 'mermaid', color: 'champagne', fabric: 'lace',  ry: -0.6 },
    { pos: [-1.95, -9.8], style: 'aline',   color: 'blush',     fabric: 'tulle', ry: 0.6 },
    { pos: [1.95, -14.2], style: 'column',  color: 'pearl',     fabric: 'mikado', ry: -0.5 },
  ];
  const gowns = gownSpecs.map((s) => {
    const holder = new THREE.Group();
    const gown = createGown({ style: s.style, color: s.color, fabric: s.fabric, sparkleCount: low ? 600 : 1400 });
    gown.group.position.y = 0.2;
    gown.group.rotation.y = s.ry;
    holder.add(pedestal(s.style === 'ball' ? 1.05 : 0.8), gown.group);
    holder.position.set(s.pos[0], 0, s.pos[1]);
    scene.add(holder);
    spot(s.pos[0] * 0.4, s.pos[1] + 1.2, new THREE.Vector3(s.pos[0], 1, s.pos[1]), 16);
    return { ...s, holder, gown, focus: new THREE.Vector3(s.pos[0], 1.15, s.pos[1]) };
  });

  /* ---------------- Hero tiara (Diadema) ---------------- */
  const tiara = new THREE.Group();
  {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.035, 24, 160), archMetal);
    tiara.add(band);
    const gemMat = new THREE.MeshPhysicalMaterial({ color: '#ffffff', roughness: 0, transmission: 1, thickness: 0.4, ior: 2.2, iridescence: 1, envMapIntensity: 3 });
    const gemGlow = new THREE.MeshBasicMaterial({ color: new THREE.Color('#fff1d6').multiplyScalar(3), toneMapped: false });
    const N = 15;
    for (let i = 0; i < N; i++) {
      // front half spikes, tallest at the centre
      const a = Math.PI * 0.12 + (i / (N - 1)) * Math.PI * 0.76;
      const h = 0.18 + Math.pow(Math.sin((i / (N - 1)) * Math.PI), 2.4) * 0.62;
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.03, h, 12), archMetal);
      const x = Math.cos(a) * 0.9, z = Math.sin(a) * 0.9;
      spike.position.set(x, h / 2, z);
      tiara.add(spike);
      const gem = new THREE.Mesh(new THREE.OctahedronGeometry(i === (N - 1) / 2 ? 0.11 : 0.05), i % 2 ? gemGlow : gemMat);
      gem.position.set(x, h + 0.03, z);
      tiara.add(gem);
      // scroll filigree between spikes
      if (i < N - 1) {
        const a2 = a + (Math.PI * 0.76) / (N - 1) / 2;
        const loop = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.008, 8, 32), archMetal);
        loop.position.set(Math.cos(a2) * 0.9, 0.12, Math.sin(a2) * 0.9);
        loop.lookAt(0, 0.12, 0);
        tiara.add(loop);
      }
    }
    tiara.rotation.y = -Math.PI / 2; // spikes face the camera (+z)
  }
  const tiaraHolder = new THREE.Group();
  tiaraHolder.add(tiara);
  tiaraHolder.position.set(0, 2.15, 2.4);
  tiaraHolder.rotation.x = 0.28;
  scene.add(tiaraHolder);
  const tiaraLight = new THREE.PointLight('#ffd9a0', 6, 6, 1.5);
  tiaraLight.position.set(0, 2.8, 3.6);
  scene.add(tiaraLight);

  /* ---------------- Founder portrait ---------------- */
  const portrait = new THREE.Group();
  const portraitTex = new THREE.CanvasTexture(document.createElement('canvas'));
  function paintPortrait() {
    const c = portraitTex.image;
    c.width = 512; c.height = 768;
    const g = c.getContext('2d');
    const grad = g.createLinearGradient(0, 0, 0, 768);
    grad.addColorStop(0, '#f3dcd3'); grad.addColorStop(0.55, '#efe3d2'); grad.addColorStop(1, '#d8bb84');
    g.fillStyle = grad; g.fillRect(0, 0, 512, 768);
    g.fillStyle = 'rgba(176,138,78,.85)';
    g.textAlign = 'center';
    g.font = 'italic 300px "Cormorant Garamond", Georgia, serif';
    g.fillText('DN', 256, 470);
    g.font = '500 26px Jost, sans-serif';
    g.fillStyle = 'rgba(74,59,53,.8)';
    g.fillText('DINARA  NISHANOVA', 256, 600);
    portraitTex.colorSpace = THREE.SRGBColorSpace;
    portraitTex.needsUpdate = true;
  }
  paintPortrait();
  (document.fonts?.ready || Promise.resolve()).then(paintPortrait);
  {
    // arched canvas
    const shape = new THREE.Shape();
    const w = 1.1, h = 1.7;
    shape.moveTo(-w, 0); shape.lineTo(-w, h); shape.absarc(0, h, w, Math.PI, 0, true); shape.lineTo(w, 0); shape.lineTo(-w, 0);
    const geo = new THREE.ShapeGeometry(shape, 48);
    geo.computeBoundingBox();
    const uv = geo.attributes.uv, pp = geo.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (pp.getX(i) + w) / (2 * w), pp.getY(i) / (h + w));
    const pic = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: portraitTex, roughness: 0.6, emissive: '#ffffff', emissiveMap: portraitTex, emissiveIntensity: 0.25 }));
    const pts = shape.getPoints(64).map((p) => new THREE.Vector3(p.x * 1.06, p.y * 1.04 - 0.02, 0.02));
    const frame = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 200, 0.018, 8, true), glowMat);
    portrait.add(pic, frame);
    portrait.position.set(-4.4, 0.6, -17.5);
    portrait.rotation.y = 0.75;
    scene.add(portrait);
    spot(-3.2, -16, new THREE.Vector3(-4.4, 1.8, -17.5), 10);
  }

  /* ---------------- Customizer podium ---------------- */
  const podium = new THREE.Group();
  podium.add(pedestal(1.3));
  const hero = createGown({ style: 'ball', color: 'ivory', fabric: 'satin', sparkleCount: low ? 1200 : 3200, train: 0.7 });
  hero.group.position.y = 0.2;
  podium.add(hero.group);
  podium.position.set(0, 0, -25);
  scene.add(podium);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.015, 8, 200), glowMat);
  halo.position.set(0, 5.2, -25); halo.rotation.x = Math.PI / 2;
  scene.add(halo);
  spot(0, -22.5, new THREE.Vector3(0, 1, -25), 24);
  const rim = new THREE.SpotLight('#f6c9b8', 14, 12, Math.PI / 6, 0.7, 1.5);
  rim.position.set(0, 5, -29); rim.target.position.set(0, 1, -25);
  scene.add(rim, rim.target);

  /* ---------------- Gold particles ---------------- */
  const COUNT = low ? 900 : 2600;
  const pGeo = new THREE.BufferGeometry();
  const pos = new Float32Array(COUNT * 3), seed = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 1] = Math.random() * 8;
    pos[i * 3 + 2] = 12 - Math.random() * 44;
    seed[i] = Math.random();
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const particleUniforms = { uTime: { value: 0 }, uPixel: { value: 300 }, uBoost: { value: 1 } };
  const particles = new THREE.Points(pGeo, new THREE.ShaderMaterial({
    uniforms: particleUniforms,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */`
      uniform float uTime; uniform float uPixel;
      attribute float aSeed;
      varying float vA;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * (0.08 + aSeed * 0.18), 8.0);
        p.x += sin(uTime * 0.4 + aSeed * 30.0) * 0.35;
        p.z += cos(uTime * 0.3 + aSeed * 20.0) * 0.35;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.35 + 0.65 * pow(0.5 + 0.5 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 50.0), 3.0))
           * smoothstep(0.0, 1.0, p.y) * smoothstep(8.0, 6.5, p.y);
        gl_PointSize = (1.0 + aSeed * 2.6) * uPixel / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform float uBoost;
      varying float vA;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        gl_FragColor = vec4(vec3(1.0, 0.82, 0.55) * 2.2, a * a * vA * uBoost);
      }`,
  }));
  particles.frustumCulled = false;
  scene.add(particles);

  /* ---------------- Post-processing ---------------- */
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bokeh = new BokehPass(scene, camera, { focus: 6, aperture: 0.0012, maxblur: 0.006 });
  bokeh.enabled = !low;
  composer.addPass(bokeh);
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.6, 0.5, 0.95);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const film = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVignette: { value: 1.05 }, uGrain: { value: 0.045 }, uAberration: { value: 0.0016 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: /* glsl */`
      uniform sampler2D tDiffuse; uniform float uTime, uVignette, uGrain, uAberration;
      varying vec2 vUv;
      float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
      void main() {
        vec2 dir = vUv - 0.5;
        float d = length(dir);
        vec3 col;
        col.r = texture2D(tDiffuse, vUv + dir * uAberration * d * 4.0).r;
        col.g = texture2D(tDiffuse, vUv).g;
        col.b = texture2D(tDiffuse, vUv - dir * uAberration * d * 4.0).b;
        col *= smoothstep(0.85 * uVignette, 0.2, d * uVignette);        // soft vignette
        col = mix(col, col * vec3(1.04, 0.99, 0.93), 0.6);              // warm film grade
        col += (rand(vUv * 1000.0 + fract(uTime)) - 0.5) * uGrain;     // grain
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  composer.addPass(film);

  /* ---------------- Camera path ---------------- */
  // Waypoints: [camera position, look-at target]
  const WAYPOINTS = [
    [[0, 1.75, 9.5],   [0, 2.15, 2.4]],    // 0 hero: tiara in the entrance arch
    [[0.2, 1.55, 4.2], [0, 1.4, -4]],      // 1 entering the corridor
    [[0.9, 1.45, 1.6], gowns[0].focus],    // 2 gown I  (ball)
    [[-0.9, 1.45, -2.6], gowns[1].focus],  // 3 gown II (mermaid)
    [[0.9, 1.45, -7.2], gowns[2].focus],   // 4 gown III (a-line)
    [[-0.9, 1.45, -11.8], gowns[3].focus], // 5 gown IV (column)
    [[0.6, 1.6, -14.6], [-2.9, 1.65, -17.2]], // 6 founder portrait
    [[0, 1.45, -20.2], [0, 1.15, -25]],    // 7 customizer podium
    [[3.6, 4.6, -19], [0, 0.9, -25.5]],    // 8 booking: crane up
  ].map(([p, l]) => [new THREE.Vector3(...p), l.isVector3 ? l.clone() : new THREE.Vector3(...l)]);

  const posCurve = new THREE.CatmullRomCurve3(WAYPOINTS.map((w) => w[0]), false, 'centripetal', 0.5);
  const lookCurve = new THREE.CatmullRomCurve3(WAYPOINTS.map((w) => w[1]), false, 'centripetal', 0.5);
  const segs = WAYPOINTS.length - 1;

  const look = new THREE.Vector3();
  const pointer = { x: 0, y: 0, sx: 0, sy: 0 };
  window.addEventListener('pointermove', (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  /** progress k in [0, segs] — waypoint index space */
  function placeCamera(k, dolly = 0) {
    const u = THREE.MathUtils.clamp(k / segs, 0, 1);
    posCurve.getPoint(u, camera.position);
    lookCurve.getPoint(u, look);
    pointer.sx += (pointer.x - pointer.sx) * 0.04;
    pointer.sy += (pointer.y - pointer.sy) * 0.04;
    camera.position.x += pointer.sx * 0.18;
    camera.position.y -= pointer.sy * 0.1;
    camera.position.z += dolly;
    camera.position.y += dolly * 0.12;
    camera.lookAt(look);
    bokeh.uniforms.focus.value = camera.position.distanceTo(look);
  }

  /* ---------------- Resize & render ---------------- */
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h;
    // keep framing on portrait phones
    camera.fov = w / h < 0.8 ? 58 : 42;
    // on portrait screens lift the subject into the upper part of the frame (UI lives at the bottom)
    if (w / h < 0.8) camera.setViewOffset(w, h, 0, h * 0.17, w, h);
    else camera.clearViewOffset();
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    const px = h * renderer.getPixelRatio() * 0.5;
    particleUniforms.uPixel.value = px * 0.08;
    sparkleUniforms.uPixel.value = px * 0.014;
  }
  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();
  function render() {
    const t = clock.getElapsedTime();
    particleUniforms.uTime.value = t;
    sparkleUniforms.uTime.value = t;
    film.uniforms.uTime.value = t;
    tiara.rotation.y = -Math.PI / 2 + Math.sin(t * 0.4) * 0.25;
    tiaraHolder.position.y = 2.15 + Math.sin(t * 0.8) * 0.05;
    halo.rotation.z = t * 0.1;
    gowns.forEach((g, i) => { g.gown.group.rotation.y = g.ry + Math.sin(t * 0.25 + i) * 0.12; });
    composer.render();
  }

  return {
    renderer, scene, camera, composer, bloom, bokeh, film, particleUniforms,
    tiaraHolder, hero, podium, segs, placeCamera, render, resize,
  };
}
