#!/bin/bash
# Convert all PNG/JPG images in src/assets to WebP for responsive/next-gen image support
find src/assets -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | while read img; do
  cwebp -q 80 "$img" -o "${img%.*}.webp"
done
