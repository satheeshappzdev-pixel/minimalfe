#!/bin/sh
set -e

echo "🚀 Starting Material Kit React..."

# Ensure we're in the app directory
cd /app

# Install dependencies if missing (handles volume mounts)
if [ ! -d "node_modules" ] || [ ! -f "node_modules/.bin/react-scripts" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the command (dev or build)
exec "$@"
