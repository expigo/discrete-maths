#!/bin/bash
# Start the FastAPI backend using uv

echo "🚀 Starting Discrete Math Backend..."
echo ""

# Check if uv is installed
if ! command -v uv &> /dev/null; then
    echo "❌ uv is not installed. Installing uv..."
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.cargo/bin:$PATH"
fi

echo "✓ uv found"
echo ""

# Sync dependencies
echo "📦 Syncing dependencies with uv..."
uv sync

echo ""
echo "🌐 Starting FastAPI server on http://localhost:8000"
echo "📚 API docs available at http://localhost:8000/docs"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Run the backend
uv run uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
