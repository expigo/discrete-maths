"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Code, Lightbulb, ArrowLeft } from "lucide-react";
import { Tabs, Tab } from "@/components/ui/Tabs";
import { Card } from "@/components/ui/Card";
import { CodeEditor } from "@/components/ui/CodeEditor";
import { MathFormula } from "@/components/ui/MathFormula";
import { executePythonCode } from "@/lib/api";
import { motion } from "framer-motion";

export default function LogicModule() {
  const tabs: Tab[] = [
    {
      id: "theory",
      label: "Theory",
      icon: <BookOpen className="w-4 h-4" />,
      content: <TheoryTab />,
    },
    {
      id: "code",
      label: "Python Code",
      icon: <Code className="w-4 h-4" />,
      content: <CodeTab />,
    },
    {
      id: "applications",
      label: "ML Applications",
      icon: <Lightbulb className="w-4 h-4" />,
      content: <ApplicationsTab />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-white">Logic & Proofs</h1>
                <p className="text-sm text-gray-400">Module 1: Foundations of Mathematical Reasoning</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Tabs tabs={tabs} defaultTab="theory" />
        </motion.div>
      </div>
    </div>
  );
}

function TheoryTab() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">Introduction to Logic</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Logic is the foundation of all mathematical reasoning and computer science. It provides us with
          tools to construct valid arguments, prove theorems, and verify the correctness of algorithms.
        </p>
      </section>

      <Card variant="definition" title="Definition: Proposition">
        <p className="text-gray-300 mb-2">
          A <strong>proposition</strong> is a declarative statement that is either true or false (but not both).
        </p>
        <div className="mt-3 space-y-2 text-gray-400">
          <p><strong>Examples:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>2 + 2 = 4 (True)</li>
            <li>Python is a functional programming language (False)</li>
            <li>All neural networks use backpropagation (False)</li>
          </ul>
        </div>
      </Card>

      <section>
        <h3 className="text-2xl font-bold text-white mb-4">Logical Connectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card variant="default">
            <h4 className="text-lg font-semibold text-white mb-2">Conjunction (AND)</h4>
            <MathFormula formula="p \\land q" display />
            <p className="text-gray-400 text-sm">True only if both p and q are true</p>
          </Card>

          <Card variant="default">
            <h4 className="text-lg font-semibold text-white mb-2">Disjunction (OR)</h4>
            <MathFormula formula="p \\lor q" display />
            <p className="text-gray-400 text-sm">True if at least one of p or q is true</p>
          </Card>

          <Card variant="default">
            <h4 className="text-lg font-semibold text-white mb-2">Negation (NOT)</h4>
            <MathFormula formula="\\neg p" display />
            <p className="text-gray-400 text-sm">True if p is false, false if p is true</p>
          </Card>

          <Card variant="default">
            <h4 className="text-lg font-semibold text-white mb-2">Implication</h4>
            <MathFormula formula="p \\rightarrow q" display />
            <p className="text-gray-400 text-sm">False only if p is true and q is false</p>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-4">Proof Techniques</h3>

        <Card variant="theorem" title="Direct Proof" className="mb-4">
          <p className="text-gray-300 mb-2">
            To prove <MathFormula formula="p \\rightarrow q" />, assume p is true and show that q must be true.
          </p>
          <div className="mt-3 bg-gray-900/50 p-3 rounded">
            <p className="text-sm text-gray-400"><strong>Example:</strong> Prove that if n is even, then n^2 is even.</p>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Proof:</strong> Assume n is even. Then n = 2k for some integer k. Therefore, n^2 = (2k)^2 = 4k^2 = 2(2k^2).
              Since 2k^2 is an integer, n^2 is even.
            </p>
          </div>
        </Card>

        <Card variant="theorem" title="Proof by Contradiction" className="mb-4">
          <p className="text-gray-300 mb-2">
            To prove p, assume <MathFormula formula="\\neg p" /> and derive a contradiction.
          </p>
          <div className="mt-3 bg-gray-900/50 p-3 rounded">
            <p className="text-sm text-gray-400"><strong>Example:</strong> Prove that sqrt(2) is irrational.</p>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Proof:</strong> Assume sqrt(2) is rational, i.e., sqrt(2) = a/b where a and b are integers with no common factors.
              Then 2 = a^2/b^2, so 2b^2 = a^2. This means a^2 is even, so a is even. Let a = 2k. Then 2b^2 = 4k^2, so b^2 = 2k^2,
              meaning b is also even. But this contradicts our assumption that a and b have no common factors.
            </p>
          </div>
        </Card>

        <Card variant="theorem" title="Mathematical Induction">
          <p className="text-gray-300 mb-2">
            To prove a statement P(n) for all positive integers n:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
            <li><strong>Base case:</strong> Prove P(1) is true</li>
            <li><strong>Inductive step:</strong> Assume P(k) is true, prove P(k+1) is true</li>
          </ol>
          <div className="mt-3 bg-gray-900/50 p-3 rounded">
            <p className="text-sm text-gray-400"><strong>Example:</strong> Prove that 1 + 2 + ... + n = n(n+1)/2</p>
            <p className="text-sm text-gray-300 mt-2">
              <strong>Base case:</strong> P(1): 1 = 1(1+1)/2 = 1 [Check]
            </p>
            <p className="text-sm text-gray-300 mt-1">
              <strong>Inductive step:</strong> Assume P(k) is true. Then:<br />
              1 + 2 + ... + k + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 = P(k+1) [Check]
            </p>
          </div>
        </Card>
      </section>

      <Card variant="theorem" title="Theorem: De Morgan's Laws">
        <div className="space-y-3">
          <div>
            <MathFormula formula="\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q" display />
          </div>
          <div>
            <MathFormula formula="\\neg(p \\lor q) \\equiv \\neg p \\land \\neg q" display />
          </div>
          <p className="text-gray-400 text-sm mt-3">
            These laws are fundamental in simplifying logical expressions and are heavily used in
            boolean algebra and digital circuit design.
          </p>
        </div>
      </Card>
    </div>
  );
}

function CodeTab() {
  const [truthTableOperator, setTruthTableOperator] = useState("and");

  const codeExamples = {
    truthTable: `# Truth Table Generator
def truth_table(operator):
    values = [(False, False), (False, True), (True, False), (True, True)]
    print(f"p\\tq\\t{operator}(p, q)")
    print("-" * 30)

    for p, q in values:
        if operator == 'and':
            result = p and q
        elif operator == 'or':
            result = p or q
        elif operator == 'implies':
            result = (not p) or q
        elif operator == 'xor':
            result = p != q

        print(f"{p}\\t{q}\\t{result}")

truth_table('${truthTableOperator}')`,

    logicEval: `# Logical Expression Evaluator
def evaluate_expression(p, q, r):
    """Evaluate: (p -> q) AND (q -> r) -> (p -> r)"""
    implies = lambda x, y: (not x) or y

    premise1 = implies(p, q)
    premise2 = implies(q, r)
    conclusion = implies(p, r)

    result = implies(premise1 and premise2, conclusion)

    print(f"p={p}, q={q}, r={r}")
    print(f"(p -> q) = {premise1}")
    print(f"(q -> r) = {premise2}")
    print(f"(p -> r) = {conclusion}")
    print(f"Final result: {result}")

    return result

# Test all combinations
print("Testing transitivity of implication:")
print("=" * 40)
for p in [False, True]:
    for q in [False, True]:
        for r in [False, True]:
            result = evaluate_expression(p, q, r)
            print()`,

    satSolver: `# Simple SAT Solver
def solve_sat(clauses, n_vars):
    """Simple brute-force SAT solver"""
    from itertools import product

    print(f"Solving SAT with {n_vars} variables")
    print(f"Clauses: {clauses}")
    print()

    # Try all possible assignments
    for assignment in product([False, True], repeat=n_vars):
        satisfied = True
        for clause in clauses:
            clause_sat = False
            for lit in clause:
                var_idx = abs(lit) - 1
                var_value = assignment[var_idx]
                if lit < 0:
                    var_value = not var_value
                if var_value:
                    clause_sat = True
                    break
            if not clause_sat:
                satisfied = False
                break

        if satisfied:
            print(f"SAT: {assignment}")
            return assignment

    print("UNSAT: No solution found")
    return None

# Example: (x1 OR x2) AND (NOT x1 OR x3) AND (NOT x2 OR NOT x3)
clauses = [[1, 2], [-1, 3], [-2, -3]]
solve_sat(clauses, 3)`,
  };

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">Python Code Examples</h2>
        <p className="text-gray-300 mb-6">
          Explore practical implementations of logical operations and proof techniques.
        </p>
      </section>

      <Card variant="example" title="Example 1: Truth Table Generator">
        <p className="text-gray-300 mb-4">
          Generate truth tables for different logical operators. Try changing the operator!
        </p>
        <div className="mb-4">
          <label className="text-gray-400 text-sm mb-2 block">Operator:</label>
          <select
            value={truthTableOperator}
            onChange={(e) => setTruthTableOperator(e.target.value)}
            className="bg-gray-800 text-white px-4 py-2 rounded border border-gray-700"
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
            <option value="implies">IMPLIES</option>
            <option value="xor">XOR</option>
          </select>
        </div>
        <CodeEditor
          defaultCode={codeExamples.truthTable}
          onRun={(code) => executePythonCode(code)}
          height="250px"
        />
      </Card>

      <Card variant="example" title="Example 2: Logical Expression Evaluator">
        <p className="text-gray-300 mb-4">
          Verify the transitivity of implication
        </p>
        <CodeEditor
          defaultCode={codeExamples.logicEval}
          onRun={(code) => executePythonCode(code)}
          height="350px"
        />
      </Card>

      <Card variant="example" title="Example 3: Simple SAT Solver">
        <p className="text-gray-300 mb-4">
          A brute-force SAT (Boolean Satisfiability) solver - the foundation of formal verification in ML systems.
        </p>
        <CodeEditor
          defaultCode={codeExamples.satSolver}
          onRun={(code) => executePythonCode(code)}
          height="400px"
        />
      </Card>
    </div>
  );
}

function ApplicationsTab() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">Machine Learning Applications</h2>
        <p className="text-gray-300 mb-6">
          Logical reasoning and proof techniques are fundamental to many aspects of machine learning and AI.
        </p>
      </section>

      <Card variant="default" title="1. Decision Trees & Logical Rules" className="mb-6">
        <p className="text-gray-300 mb-3">
          Decision trees are essentially logical expressions. Each path from root to leaf represents a
          conjunction of conditions (AND), and the entire tree represents a disjunction (OR) of these paths.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm text-gray-400 mb-2"><strong>Example:</strong> Email spam classifier</p>
          <p className="text-sm text-gray-300">
            spam = (contains('free') AND length &gt; 100) OR (from_unknown AND has_attachments)
          </p>
        </div>
      </Card>

      <Card variant="default" title="2. Formal Verification of Neural Networks" className="mb-6">
        <p className="text-gray-300 mb-3">
          Logical reasoning is used to formally verify properties of neural networks, ensuring they behave
          correctly for all inputs in a given region.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
          <li>Proving robustness to adversarial examples</li>
          <li>Verifying safety-critical systems (autonomous driving, medical diagnosis)</li>
          <li>Using SAT/SMT solvers to check network properties</li>
        </ul>
      </Card>

      <Card variant="default" title="3. Convergence Proofs for Optimization Algorithms" className="mb-6">
        <p className="text-gray-300 mb-3">
          Mathematical induction and other proof techniques are essential for proving that gradient descent
          and other optimization algorithms converge.
        </p>
        <div className="bg-gray-900/50 p-4 rounded">
          <p className="text-sm font-semibold text-white mb-2">Gradient Descent Convergence:</p>
          <p className="text-sm text-gray-400">
            Using induction, we can prove that for a convex function with L-Lipschitz continuous gradient,
            gradient descent with step size alpha &lt;= 1/L converges to the optimal solution.
          </p>
        </div>
      </Card>

      <Card variant="default" title="4. Automated Theorem Proving & AI">
        <p className="text-gray-300 mb-3">
          Modern AI systems like AlphaProof use logical reasoning and proof search to solve mathematical
          problems and prove theorems automatically.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
          <li>Resolution-based theorem proving</li>
          <li>Neural-guided proof search</li>
          <li>Combining symbolic reasoning with deep learning</li>
        </ul>
      </Card>
    </div>
  );
}
