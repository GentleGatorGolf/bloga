#!/bin/bash

echo "🚀 Starting deployment process..."

# Pull latest changes
echo "📥 Pulling latest changes from git..."
git pull

# Run the build script
echo "🛠️ Running build script (github_pages_build.sh)..."
./github_pages_build.sh

# Add all changes
echo "📝 Staging changes..."
git add --all

# Prompt for a commit message
echo "❓ Enter your commit message:"
read commit_message

# Commit and push
echo "💾 Committing changes..."
git commit -m "$commit_message"

echo "📤 Pushing to GitHub..."
git push

echo "✅ Deployment complete!"
