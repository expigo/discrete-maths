// Python Code Execution Integration

const API_BASE_URL = 'http://localhost:8000';
let backendAvailable = false;

// Check if backend is available
async function checkBackendHealth() {
    try {
        const response = await fetch(`${API_BASE_URL}/health`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        backendAvailable = response.ok;
        return response.ok;
    } catch (error) {
        backendAvailable = false;
        return false;
    }
}

// Execute Python code via backend
async function executePythonCode(code, timeout = 5) {
    if (!backendAvailable) {
        const isHealthy = await checkBackendHealth();
        if (!isHealthy) {
            return {
                success: false,
                output: '',
                error: '❌ Backend server is not running.\n\nTo run Python code:\n1. Open a terminal\n2. Run: ./start_backend.sh\n3. Or manually: uv run uvicorn backend.main:app --reload',
                execution_time: 0
            };
        }
    }

    try {
        const response = await fetch(`${API_BASE_URL}/execute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code: code,
                timeout: timeout
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Server error');
        }

        return await response.json();
    } catch (error) {
        backendAvailable = false;
        return {
            success: false,
            output: '',
            error: `Network error: ${error.message}\n\nMake sure the backend server is running:\n./start_backend.sh`,
            execution_time: 0
        };
    }
}

// Enhanced runCode function with real execution
async function runCodeReal(button, codeId) {
    const codeContainer = button.closest('.code-container');
    const codeBlock = codeContainer.querySelector('.code-block');
    const outputDiv = codeContainer.querySelector('.code-output') || createOutputDiv(button);

    // Get the code
    const code = codeBlock.textContent.trim();

    // Show loading state
    button.disabled = true;
    button.textContent = '⏳ Running...';
    outputDiv.style.display = 'block';
    outputDiv.textContent = 'Executing code on Python backend...';
    outputDiv.className = 'code-output loading';

    try {
        // Execute code
        const result = await executePythonCode(code);

        // Display results
        if (result.success) {
            let output = `✅ Success! (${result.execution_time.toFixed(3)}s)\n\n`;
            output += result.output;

            if (result.variables && Object.keys(result.variables).length > 0) {
                output += '\n\n📊 Variables:\n';
                for (const [key, value] of Object.entries(result.variables)) {
                    output += `  ${key} = ${value}\n`;
                }
            }

            outputDiv.textContent = output;
            outputDiv.className = 'code-output success';
        } else {
            let output = `❌ Error (${result.execution_time.toFixed(3)}s)\n\n`;
            if (result.output) {
                output += `Output:\n${result.output}\n\n`;
            }
            output += `Error:\n${result.error}`;

            outputDiv.textContent = output;
            outputDiv.className = 'code-output error';
        }
    } catch (error) {
        outputDiv.textContent = `❌ Execution failed:\n\n${error.message}`;
        outputDiv.className = 'code-output error';
    } finally {
        button.disabled = false;
        button.textContent = '▶ Run Code';
    }
}

function createOutputDiv(button) {
    const outputDiv = document.createElement('div');
    outputDiv.className = 'code-output';
    outputDiv.style.display = 'none';
    button.parentNode.insertBefore(outputDiv, button.nextSibling);
    return outputDiv;
}

// Load example code
async function loadExample(module, exampleIndex = 0) {
    try {
        const response = await fetch(`${API_BASE_URL}/examples/${module}`);
        if (!response.ok) {
            throw new Error('Failed to load examples');
        }

        const data = await response.json();
        if (data.examples && data.examples.length > exampleIndex) {
            return data.examples[exampleIndex];
        }
    } catch (error) {
        console.error('Error loading example:', error);
    }
    return null;
}

// Insert example code into a code block
async function insertExample(codeBlockId, module, exampleIndex) {
    const example = await loadExample(module, exampleIndex);
    if (example) {
        const codeBlock = document.getElementById(codeBlockId);
        if (codeBlock) {
            codeBlock.textContent = example.code;
        }
    }
}

// Initialize code execution on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Check backend health
    const isHealthy = await checkBackendHealth();

    // Add status indicator
    const statusDiv = document.createElement('div');
    statusDiv.id = 'backend-status';
    statusDiv.style.cssText = `
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        padding: 0.75rem 1rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    if (isHealthy) {
        statusDiv.style.backgroundColor = '#10b981';
        statusDiv.style.color = 'white';
        statusDiv.innerHTML = '🟢 Python Backend: Online';
        statusDiv.title = 'Click to test connection';
    } else {
        statusDiv.style.backgroundColor = '#ef4444';
        statusDiv.style.color = 'white';
        statusDiv.innerHTML = '🔴 Python Backend: Offline';
        statusDiv.title = 'Start backend with: ./start_backend.sh';
    }

    statusDiv.addEventListener('click', async () => {
        statusDiv.textContent = '⏳ Checking...';
        const healthy = await checkBackendHealth();
        if (healthy) {
            statusDiv.style.backgroundColor = '#10b981';
            statusDiv.innerHTML = '🟢 Python Backend: Online';
        } else {
            statusDiv.style.backgroundColor = '#ef4444';
            statusDiv.innerHTML = '🔴 Python Backend: Offline';
        }
    });

    document.body.appendChild(statusDiv);

    // Update all run buttons to use real execution
    const runButtons = document.querySelectorAll('.run-button');
    runButtons.forEach(button => {
        // Remove old onclick if exists
        button.removeAttribute('onclick');
        button.addEventListener('click', () => runCodeReal(button));
    });
});

// Add CSS for enhanced output styles
const style = document.createElement('style');
style.textContent = `
    .code-output {
        background-color: #1a202c;
        color: #a0aec0;
        padding: 1rem;
        border-radius: 4px;
        margin-top: 1rem;
        font-family: 'Courier New', Courier, monospace;
        white-space: pre-wrap;
        max-height: 400px;
        overflow-y: auto;
        border: 2px solid #2d3748;
    }

    .code-output.loading {
        border-color: #3b82f6;
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .code-output.success {
        border-color: #10b981;
        color: #d1fae5;
    }

    .code-output.error {
        border-color: #ef4444;
        color: #fee2e2;
    }

    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
    }

    .run-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    #backend-status:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(style);
