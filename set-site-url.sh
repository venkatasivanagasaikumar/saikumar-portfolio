#!/usr/bin/env bash
# Usage: bash scripts/set-site-url.sh https://your-domain.com
# Rewrites the Open Graph / Twitter image URLs (built with localhost) to your live domain.
set -e
URL="${1%/}"; [ -z "$URL" ] && { echo "Usage: $0 https://your-domain.com"; exit 1; }
for f in site/index.html site/404.html; do sed -i "s#http://localhost:3000#$URL#g" "$f"; done
echo "Done: social image URLs now use $URL"
