"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "./Button";
import { Play, Copy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CodeEditorProps {
  defaultCode: string;
  onRun?: (code: string) => Promise<{ success: boolean; output: string; error?: string }>;
  readOnly?: boolean;
  language?: string;
  height?: string;
}

export function CodeEditor({
  defaultCode,
  onRun,
  readOnly = false,
  language = "python",
  height = "300px",
}: CodeEditorProps) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = async () => {
    if (!onRun) return;

    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      const result = await onRun(code);
      if (result.success) {
        setOutput(result.output);
      } else {
        setError(result.error || "An error occurred");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsRunning(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Editor */}
      <div className="rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
        <Editor
          height={height}
          defaultLanguage={language}
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
          options={{
            readOnly,
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-3">
        {onRun && (
          <Button
            onClick={handleRun}
            disabled={isRunning}
            variant="success"
            size="sm"
          >
            <Play className="w-4 h-4" />
            {isRunning ? "Running..." : "Run Code"}
          </Button>
        )}
        <Button onClick={handleCopy} variant="secondary" size="sm">
          {copied ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Output */}
      <AnimatePresence>
        {(output || error) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <div
              className={`rounded-lg p-4 ${
                error
                  ? "bg-red-900/20 border border-red-500/50"
                  : "bg-green-900/20 border border-green-500/50"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold">
                  {error ? "Error:" : "Output:"}
                </span>
              </div>
              <pre className="mt-2 text-sm font-mono whitespace-pre-wrap">
                {error || output}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
