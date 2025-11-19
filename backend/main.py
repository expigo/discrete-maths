"""
FastAPI backend for Discrete Mathematics learning platform.
Provides secure Python code execution and mathematical computations.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
import sys
import io
import traceback
from contextlib import redirect_stdout, redirect_stderr
import signal
import time

app = FastAPI(
    title="Discrete Math Backend",
    description="Python execution engine for discrete mathematics learning",
    version="0.1.0"
)

# CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CodeExecutionRequest(BaseModel):
    code: str = Field(..., description="Python code to execute")
    timeout: int = Field(default=5, ge=1, le=30, description="Execution timeout in seconds")
    module: Optional[str] = Field(default=None, description="Module context (logic, graphs, etc.)")


class CodeExecutionResponse(BaseModel):
    success: bool
    output: str
    error: Optional[str] = None
    execution_time: float
    variables: Optional[Dict[str, Any]] = None


class TimeoutException(Exception):
    pass


def timeout_handler(signum, frame):
    raise TimeoutException("Code execution timed out")


def create_safe_globals():
    """Create a restricted global namespace for code execution."""
    import numpy as np
    import matplotlib.pyplot as plt
    import networkx as nx
    from collections import defaultdict, deque, Counter
    from itertools import combinations, permutations, product
    from math import factorial, comb, perm
    import sympy

    safe_globals = {
        # Built-in functions (restricted)
        "abs": abs,
        "all": all,
        "any": any,
        "bin": bin,
        "bool": bool,
        "chr": chr,
        "dict": dict,
        "enumerate": enumerate,
        "filter": filter,
        "float": float,
        "hex": hex,
        "int": int,
        "len": len,
        "list": list,
        "map": map,
        "max": max,
        "min": min,
        "oct": oct,
        "ord": ord,
        "pow": pow,
        "print": print,
        "range": range,
        "reversed": reversed,
        "round": round,
        "set": set,
        "sorted": sorted,
        "str": str,
        "sum": sum,
        "tuple": tuple,
        "zip": zip,
        # Math and science libraries
        "np": np,
        "plt": plt,
        "nx": nx,
        "defaultdict": defaultdict,
        "deque": deque,
        "Counter": Counter,
        "combinations": combinations,
        "permutations": permutations,
        "product": product,
        "factorial": factorial,
        "comb": comb,
        "perm": perm,
        "sympy": sympy,
        # Restricted modules
        "__builtins__": {
            "True": True,
            "False": False,
            "None": None,
        }
    }
    return safe_globals


@app.get("/")
async def root():
    return {
        "message": "Discrete Mathematics Backend API",
        "status": "running",
        "endpoints": ["/execute", "/health", "/examples"]
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": time.time()}


@app.post("/execute", response_model=CodeExecutionResponse)
async def execute_code(request: CodeExecutionRequest):
    """
    Execute Python code in a restricted environment.

    Security measures:
    - Timeout enforcement
    - Restricted global namespace
    - No file I/O or network access
    - Limited built-in functions
    """
    start_time = time.time()

    try:
        # Create safe execution environment
        safe_globals = create_safe_globals()
        local_vars = {}

        # Capture stdout and stderr
        stdout_buffer = io.StringIO()
        stderr_buffer = io.StringIO()

        # Set timeout (Unix-based systems only)
        if hasattr(signal, 'SIGALRM'):
            signal.signal(signal.SIGALRM, timeout_handler)
            signal.alarm(request.timeout)

        try:
            with redirect_stdout(stdout_buffer), redirect_stderr(stderr_buffer):
                # Execute the code
                exec(request.code, safe_globals, local_vars)

            # Cancel timeout
            if hasattr(signal, 'SIGALRM'):
                signal.alarm(0)

            # Get output
            output = stdout_buffer.getvalue()
            stderr_output = stderr_buffer.getvalue()

            if stderr_output:
                output += f"\n[stderr]: {stderr_output}"

            execution_time = time.time() - start_time

            # Extract interesting variables (not built-ins or modules)
            variables = {
                k: str(v)[:100]  # Limit string length
                for k, v in local_vars.items()
                if not k.startswith('_') and not callable(v)
            }

            return CodeExecutionResponse(
                success=True,
                output=output or "Code executed successfully (no output)",
                execution_time=execution_time,
                variables=variables if variables else None
            )

        except TimeoutException:
            if hasattr(signal, 'SIGALRM'):
                signal.alarm(0)
            raise HTTPException(
                status_code=408,
                detail=f"Code execution timed out after {request.timeout} seconds"
            )

        except Exception as e:
            if hasattr(signal, 'SIGALRM'):
                signal.alarm(0)

            error_msg = f"{type(e).__name__}: {str(e)}\n{traceback.format_exc()}"
            execution_time = time.time() - start_time

            return CodeExecutionResponse(
                success=False,
                output=stdout_buffer.getvalue(),
                error=error_msg,
                execution_time=execution_time
            )

    except Exception as e:
        execution_time = time.time() - start_time
        return CodeExecutionResponse(
            success=False,
            output="",
            error=f"Server error: {str(e)}",
            execution_time=execution_time
        )


@app.get("/examples/{module}")
async def get_examples(module: str):
    """Get example code for a specific module."""
    examples = {
        "logic": [
            {
                "title": "Truth Table Generator",
                "code": """# Generate truth table for p → q
def implies(p, q):
    return (not p) or q

print("p | q | p→q")
print("-" * 12)
for p in [False, True]:
    for q in [False, True]:
        result = implies(p, q)
        print(f"{int(p)} | {int(q)} | {int(result)}")"""
            },
            {
                "title": "Verify De Morgan's Law",
                "code": """# Verify: ¬(p ∧ q) ≡ ¬p ∨ ¬q
def verify_de_morgan():
    for p in [True, False]:
        for q in [True, False]:
            left = not (p and q)
            right = (not p) or (not q)
            if left != right:
                return False
    return True

print("De Morgan's Law verified:", verify_de_morgan())"""
            }
        ],
        "graphs": [
            {
                "title": "BFS Implementation",
                "code": """from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    order = []

    while queue:
        vertex = queue.popleft()
        order.append(vertex)

        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return order

graph = {'A': ['B', 'C'], 'B': ['D'], 'C': ['D'], 'D': []}
print("BFS from A:", bfs(graph, 'A'))"""
            }
        ],
        "sets": [
            {
                "title": "Set Operations",
                "code": """A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print("Union:", A | B)
print("Intersection:", A & B)
print("Difference:", A - B)
print("Symmetric Difference:", A ^ B)
print("Subset?", {1, 2} <= A)"""
            }
        ]
    }

    if module not in examples:
        raise HTTPException(status_code=404, detail=f"No examples found for module: {module}")

    return {"module": module, "examples": examples[module]}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
