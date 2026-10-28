#!/usr/bin/env bash
# Run from the repo root after unzipping this package into it.
# Removes the old flat files so only the clean layout (site/, scripts/) remains.
set -e
for f in 404.html hero-poster.jpg hero.mp4 hero.webm icon.svg index.html index.txt og.jpg portrait.jpg set-site-url.sh trace; do
  [ -f "$f" ] && rm -f "$f"
done
rm -f apply-fix.sh
echo "Done. Now run: npm start"
