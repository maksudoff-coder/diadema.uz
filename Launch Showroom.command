#!/bin/bash
# Double-click to launch the Diadema site locally (classic site + 3D showroom).
# Press Ctrl+C (or close the window) to stop.
cd "$(dirname "$0")" || exit 1
PORT=4173
NAME="Diadema"
lsof -nP -iTCP:$PORT -sTCP:LISTEN -t 2>/dev/null | xargs kill -9 2>/dev/null
URL="http://localhost:$PORT/cinematic/"
echo ""
echo "  $NAME — local server"
echo "  3D Showroom:   $URL"
echo "  Classic site:  http://localhost:$PORT/"
echo ""
( sleep 1 && (open "$URL" 2>/dev/null || xdg-open "$URL" 2>/dev/null) ) &
python3 -m http.server $PORT
