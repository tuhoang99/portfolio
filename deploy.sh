#!/bin/sh
set -e

echo "🔁 Switching to main..."
git checkout main

echo "⬇️ Pulling from origin/main..."
git pull origin main

echo "🔀 Merging develop..."
git merge develop

echo "⬆️ Pushing to origin/main..."
git push origin main

echo "✅ Done!"
