const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface CodeExecutionResponse {
  success: boolean;
  output: string;
  error?: string;
  execution_time?: number;
  variables?: Record<string, any>;
}

export interface CodeExecutionRequest {
  code: string;
  timeout?: number;
}

export async function executePythonCode(
  code: string,
  timeout: number = 5
): Promise<CodeExecutionResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, timeout }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      output: "",
      error: error instanceof Error ? error.message : "Failed to execute code",
    };
  }
}

export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: "GET",
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

export async function getExamples(module: string): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/examples/${module}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.examples || [];
  } catch (error) {
    console.error("Failed to fetch examples:", error);
    return [];
  }
}
