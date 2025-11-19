# Python Backend Setup with UV

This document explains how to set up and run the Python backend for executing code examples.

## Prerequisites

- Python 3.10 or higher
- `uv` package manager (will be installed automatically if not present)

## Quick Start

### Option 1: Automated Setup (Recommended)

Simply run the startup script:

```bash
./start_backend.sh
```

This will:
1. Install `uv` if not already installed
2. Sync all dependencies
3. Start the FastAPI server on `http://localhost:8000`

### Option 2: Manual Setup

If you prefer manual setup:

```bash
# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Sync dependencies
uv sync

# Run the backend
uv run uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000
```

## Using the Backend

Once the backend is running:

1. **Open the website** (`index.html`)
2. **Look for the status indicator** in the bottom-left corner
   - 🟢 Green = Backend is online and ready
   - 🔴 Red = Backend is offline
3. **Click any "▶ Run Code" button** to execute Python code

## Features

### Secure Code Execution

The backend provides:
- **Timeout enforcement** (5-30 seconds)
- **Restricted namespace** (no file I/O, network access)
- **Safe imports** (numpy, matplotlib, networkx, sympy, etc.)
- **Output capture** (stdout and stderr)
- **Variable inspection** (see computed values)

### API Endpoints

- `GET /` - API info
- `GET /health` - Health check
- `POST /execute` - Execute Python code
- `GET /examples/{module}` - Get example code for a module

### API Documentation

When the backend is running, visit:
- **Interactive docs**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Example API Usage

### Execute Code

```bash
curl -X POST "http://localhost:8000/execute" \
  -H "Content-Type: application/json" \
  -d '{
    "code": "print(\"Hello, World!\")",
    "timeout": 5
  }'
```

Response:
```json
{
  "success": true,
  "output": "Hello, World!\n",
  "error": null,
  "execution_time": 0.001234,
  "variables": null
}
```

### Get Examples

```bash
curl "http://localhost:8000/examples/logic"
```

## Dependencies

The backend uses:

- **FastAPI** - Modern web framework
- **uvicorn** - ASGI server
- **NumPy** - Numerical computing
- **Matplotlib** - Plotting
- **NetworkX** - Graph algorithms
- **SymPy** - Symbolic mathematics
- **SciPy** - Scientific computing
- **Pandas** - Data manipulation

All dependencies are managed by `uv` and specified in `pyproject.toml`.

## Troubleshooting

### Backend won't start

1. Check Python version:
   ```bash
   python --version  # Should be 3.10+
   ```

2. Check if port 8000 is already in use:
   ```bash
   lsof -i :8000  # On Unix/Mac
   netstat -ano | findstr :8000  # On Windows
   ```

3. Try a different port:
   ```bash
   uv run uvicorn backend.main:app --port 8001
   ```

### Code execution fails

- Check the backend status indicator
- Look at the browser console for error messages
- Check backend logs in the terminal

### Permission errors

Make the startup script executable:
```bash
chmod +x start_backend.sh
```

## Security Notes

The backend is designed for **local development only**. For production:

1. Add proper authentication
2. Implement rate limiting
3. Use containerization (Docker)
4. Restrict CORS origins
5. Add input validation and sanitization
6. Implement proper logging and monitoring

## Development

To add new dependencies:

```bash
# Add a package
uv add package-name

# Add a dev dependency
uv add --dev package-name
```

To update dependencies:

```bash
uv sync
```

## Architecture

```
backend/
├── main.py           # FastAPI application
├── api/              # API endpoints (future)
├── utils/            # Utility functions (future)
└── examples/         # Code examples (future)
```

## Performance

- **Cold start**: ~2-3 seconds
- **Code execution**: <1 second for most examples
- **Memory**: ~50-100MB base

## Future Enhancements

- [ ] Persistent code execution sessions
- [ ] Code history and sharing
- [ ] Visualization export (SVG, PNG)
- [ ] Jupyter kernel integration
- [ ] Docker containerization
- [ ] WebSocket support for real-time output
- [ ] Code linting and formatting
- [ ] Autocomplete suggestions

## Contributing

To contribute improvements to the backend:

1. Follow PEP 8 style guidelines
2. Add type hints to all functions
3. Write docstrings for new endpoints
4. Test with various Python code examples
5. Update this documentation

## License

Part of the Discrete Mathematics learning platform.
