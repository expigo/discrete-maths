// Logic and Proofs Module

function initLogicModule(container) {
    const content = `
    <div class="module-container">
        <div class="module-header">
            <h1 class="module-title"><i class="fas fa-lightbulb"></i> Logic & Proofs</h1>
            <p class="module-description">
                Master the foundations of mathematical reasoning, propositional logic, predicate logic,
                and various proof techniques essential for rigorous mathematical thinking in ML/AI.
            </p>
            <div class="module-tags">
                <span class="tag">Propositional Logic</span>
                <span class="tag">Predicate Logic</span>
                <span class="tag">Proof Techniques</span>
                <span class="tag">Boolean Functions</span>
            </div>
        </div>

        <div class="module-tabs">
            <button class="tab-button active" onclick="switchTab('logic-theory', event)">Theory</button>
            <button class="tab-button" onclick="switchTab('logic-examples', event)">Examples</button>
            <button class="tab-button" onclick="switchTab('logic-visualizations', event)">Visualizations</button>
            <button class="tab-button" onclick="switchTab('logic-code', event)">Python Code</button>
            <button class="tab-button" onclick="switchTab('logic-exercises', event)">Exercises</button>
            <button class="tab-button" onclick="switchTab('logic-quiz', event)">Quiz</button>
        </div>

        <!-- Theory Tab -->
        <div id="logic-theory" class="tab-content active">
            <div class="theory-section">
                <h2><i class="fas fa-book-open"></i> Propositional Logic</h2>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> Definition: Proposition</div>
                    <p>A <strong>proposition</strong> is a declarative statement that is either true or false, but not both.</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>"2 + 2 = 4" (True proposition)</li>
                        <li>"The moon is made of cheese" (False proposition)</li>
                        <li>"What time is it?" (Not a proposition - it's a question)</li>
                    </ul>
                </div>

                <h3>Logical Connectives</h3>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-link"></i> Basic Connectives</div>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                        <tr style="background: #e5e7eb;">
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Name</th>
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Symbol</th>
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Read As</th>
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Example</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Negation</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\neg p \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">not p</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\neg \\)("It is raining") = "It is not raining"</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Conjunction</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( p \\land q \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">p and q</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">True only if both p and q are true</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Disjunction</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( p \\lor q \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">p or q</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">True if at least one is true</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Implication</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( p \\rightarrow q \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">if p then q</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">False only if p is true and q is false</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Biconditional</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( p \\leftrightarrow q \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">p if and only if q</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">True if p and q have same truth value</td>
                        </tr>
                    </table>
                </div>

                <h3>Important Logical Equivalences</h3>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> De Morgan's Laws</div>
                    <p>\\[ \\neg (p \\land q) \\equiv \\neg p \\lor \\neg q \\]</p>
                    <p>\\[ \\neg (p \\lor q) \\equiv \\neg p \\land \\neg q \\]</p>
                    <p><strong>Intuition:</strong> The negation of "both" is "at least one not"; the negation of "at least one" is "both not".</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> Distributive Laws</div>
                    <p>\\[ p \\land (q \\lor r) \\equiv (p \\land q) \\lor (p \\land r) \\]</p>
                    <p>\\[ p \\lor (q \\land r) \\equiv (p \\lor q) \\land (p \\lor r) \\]</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> Implication Equivalences</div>
                    <p>\\[ p \\rightarrow q \\equiv \\neg p \\lor q \\]</p>
                    <p>\\[ p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p \\] (Contrapositive)</p>
                    <p><strong>Note:</strong> The contrapositive is always logically equivalent to the original implication.</p>
                </div>

                <h2><i class="fas fa-certificate"></i> Proof Techniques</h2>

                <div class="definition">
                    <div class="definition-title">1. Direct Proof</div>
                    <p>To prove \\( p \\rightarrow q \\), assume p is true and show that q must be true.</p>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-pen"></i> Example: Direct Proof</div>
                    <p><strong>Theorem:</strong> If \\( n \\) is an odd integer, then \\( n^2 \\) is odd.</p>
                    <div class="proof">
                        <div class="proof-title"><i class="fas fa-check"></i> Proof</div>
                        <p>Assume \\( n \\) is odd. Then \\( n = 2k + 1 \\) for some integer \\( k \\).</p>
                        <p>\\[ n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1 \\]</p>
                        <p>Let \\( m = 2k^2 + 2k \\). Then \\( n^2 = 2m + 1 \\), which is odd. ∎</p>
                    </div>
                </div>

                <div class="definition">
                    <div class="definition-title">2. Proof by Contrapositive</div>
                    <p>To prove \\( p \\rightarrow q \\), instead prove \\( \\neg q \\rightarrow \\neg p \\).</p>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-pen"></i> Example: Proof by Contrapositive</div>
                    <p><strong>Theorem:</strong> If \\( n^2 \\) is even, then \\( n \\) is even.</p>
                    <div class="proof">
                        <div class="proof-title"><i class="fas fa-check"></i> Proof</div>
                        <p>We prove the contrapositive: If \\( n \\) is odd, then \\( n^2 \\) is odd.</p>
                        <p>This was proven in the previous example. ∎</p>
                    </div>
                </div>

                <div class="definition">
                    <div class="definition-title">3. Proof by Contradiction</div>
                    <p>To prove \\( p \\), assume \\( \\neg p \\) and derive a contradiction.</p>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-pen"></i> Example: Proof by Contradiction</div>
                    <p><strong>Theorem:</strong> \\( \\sqrt{2} \\) is irrational.</p>
                    <div class="proof">
                        <div class="proof-title"><i class="fas fa-check"></i> Proof</div>
                        <p>Assume \\( \\sqrt{2} \\) is rational. Then \\( \\sqrt{2} = \\frac{a}{b} \\) where \\( a, b \\) are integers with no common factors.</p>
                        <p>Squaring both sides: \\( 2 = \\frac{a^2}{b^2} \\), so \\( 2b^2 = a^2 \\).</p>
                        <p>This means \\( a^2 \\) is even, so \\( a \\) is even. Let \\( a = 2k \\).</p>
                        <p>Then \\( 2b^2 = (2k)^2 = 4k^2 \\), so \\( b^2 = 2k^2 \\).</p>
                        <p>This means \\( b^2 \\) is even, so \\( b \\) is even.</p>
                        <p>But this contradicts our assumption that \\( a \\) and \\( b \\) have no common factors. ∎</p>
                    </div>
                </div>

                <div class="definition">
                    <div class="definition-title">4. Mathematical Induction</div>
                    <p>To prove \\( P(n) \\) for all \\( n \\geq n_0 \\):</p>
                    <ol>
                        <li><strong>Base case:</strong> Prove \\( P(n_0) \\)</li>
                        <li><strong>Inductive step:</strong> Assume \\( P(k) \\) (induction hypothesis) and prove \\( P(k+1) \\)</li>
                    </ol>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-pen"></i> Example: Induction</div>
                    <p><strong>Theorem:</strong> \\( \\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} \\) for all \\( n \\geq 1 \\).</p>
                    <div class="proof">
                        <div class="proof-title"><i class="fas fa-check"></i> Proof</div>
                        <p><strong>Base case (n=1):</strong> \\( \\sum_{i=1}^{1} i = 1 = \\frac{1(2)}{2} \\). ✓</p>
                        <p><strong>Inductive step:</strong> Assume \\( \\sum_{i=1}^{k} i = \\frac{k(k+1)}{2} \\).</p>
                        <p>We need to show \\( \\sum_{i=1}^{k+1} i = \\frac{(k+1)(k+2)}{2} \\).</p>
                        <p>\\[ \\sum_{i=1}^{k+1} i = \\sum_{i=1}^{k} i + (k+1) = \\frac{k(k+1)}{2} + (k+1) \\]</p>
                        <p>\\[ = \\frac{k(k+1) + 2(k+1)}{2} = \\frac{(k+1)(k+2)}{2} \\] ∎</p>
                    </div>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-robot"></i> Applications in Machine Learning</h3>
                    <p><strong>Logic in ML:</strong></p>
                    <ul>
                        <li><strong>Decision Trees:</strong> Use logical rules (if-then statements) for classification</li>
                        <li><strong>Constraint Satisfaction:</strong> Neural architecture search uses logical constraints</li>
                        <li><strong>Formal Verification:</strong> Proving properties of neural networks using logic</li>
                        <li><strong>Knowledge Representation:</strong> Expert systems use first-order logic</li>
                        <li><strong>Probabilistic Logic:</strong> Combining probability with logic (Markov Logic Networks)</li>
                    </ul>
                    <p><strong>Proof Techniques:</strong></p>
                    <ul>
                        <li><strong>Convergence Proofs:</strong> Proving gradient descent converges (often by contradiction)</li>
                        <li><strong>Generalization Bounds:</strong> Using mathematical induction to prove PAC learning bounds</li>
                        <li><strong>Algorithm Correctness:</strong> Proving backpropagation computes gradients correctly</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Examples Tab -->
        <div id="logic-examples" class="tab-content">
            <div class="theory-section">
                <h2>Worked Examples</h2>

                <div class="example">
                    <div class="example-title"><i class="fas fa-calculator"></i> Example 1: Logical Equivalence</div>
                    <p><strong>Problem:</strong> Show that \\( (p \\rightarrow q) \\land (p \\rightarrow r) \\equiv p \\rightarrow (q \\land r) \\)</p>
                    <p><strong>Solution:</strong></p>
                    <p>We'll use a truth table to verify this equivalence.</p>
                    <div id="truth-table-example-1"></div>
                    <p>Since the columns for both expressions are identical, they are logically equivalent.</p>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-calculator"></i> Example 2: Simplifying Expressions</div>
                    <p><strong>Problem:</strong> Simplify \\( \\neg(\\neg p \\lor q) \\land (p \\lor q) \\)</p>
                    <p><strong>Solution:</strong></p>
                    <p>\\[ \\neg(\\neg p \\lor q) \\land (p \\lor q) \\]</p>
                    <p>\\[ \\equiv (\\neg\\neg p \\land \\neg q) \\land (p \\lor q) \\] (De Morgan's Law)</p>
                    <p>\\[ \\equiv (p \\land \\neg q) \\land (p \\lor q) \\] (Double Negation)</p>
                    <p>\\[ \\equiv p \\land \\neg q \\land (p \\lor q) \\] (Associativity)</p>
                    <p>\\[ \\equiv p \\land \\neg q \\land p) \\lor (p \\land \\neg q \\land q) \\] (Distributivity)</p>
                    <p>\\[ \\equiv p \\land \\neg q \\] (since \\( p \\land p \\equiv p \\) and \\( \\neg q \\land q \\equiv F \\))</p>
                </div>
            </div>
        </div>

        <!-- Visualizations Tab -->
        <div id="logic-visualizations" class="tab-content">
            <div class="visualization-container">
                <h3 class="viz-title">Interactive Truth Table Generator</h3>
                <p class="viz-description">Select logical operators and see the truth table in real-time</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <label>First Variable:</label>
                        <select id="var1-logic">
                            <option value="p">p</option>
                            <option value="q">q</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label>Operator:</label>
                        <select id="operator-logic">
                            <option value="and">AND (∧)</option>
                            <option value="or">OR (∨)</option>
                            <option value="implies">IMPLIES (→)</option>
                            <option value="iff">IFF (↔)</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <label>Second Variable:</label>
                        <select id="var2-logic">
                            <option value="p">p</option>
                            <option value="q" selected>q</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <button onclick="generateTruthTable()">Generate Table</button>
                    </div>
                </div>

                <div id="truth-table-viz" class="viz-canvas"></div>
            </div>

            <div class="visualization-container" style="margin-top: 2rem;">
                <h3 class="viz-title">Logical Circuit Visualizer</h3>
                <p class="viz-description">See how logical operations can be represented as circuits</p>
                <div id="circuit-viz" class="viz-canvas"></div>
            </div>
        </div>

        <!-- Python Code Tab -->
        <div id="logic-code" class="tab-content">
            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Truth Table Generator</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">import itertools
from typing import List, Callable

def truth_table(variables: List[str], expression: Callable) -> None:
    """
    Generate and print truth table for a logical expression.

    Args:
        variables: List of variable names (e.g., ['p', 'q'])
        expression: Function that takes truth values and returns result
    """
    n = len(variables)
    print(" | ".join(variables) + " | Result")
    print("-" * (4 * n + 10))

    # Generate all combinations of truth values
    for values in itertools.product([False, True], repeat=n):
        result = expression(*values)
        row = " | ".join(str(int(v)) for v in values)
        print(f"{row} | {int(result)}")

# Example: p → q (implication)
def implies(p, q):
    return (not p) or q

# Example: p ⊕ q (XOR)
def xor(p, q):
    return (p or q) and not (p and q)

# Generate truth tables
print("Truth Table for p → q:")
truth_table(['p', 'q'], implies)

print("\\nTruth Table for p ⊕ q:")
truth_table(['p', 'q'], xor)
</pre>
                <button class="run-button" onclick="runCode(this, 'truth-table-code')">Run Code (Simulated)</button>
                <div class="code-output" style="display: none;"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Logical Expression Evaluator</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">class LogicalExpression:
    """Class for evaluating logical expressions"""

    @staticmethod
    def AND(p, q):
        return p and q

    @staticmethod
    def OR(p, q):
        return p or q

    @staticmethod
    def NOT(p):
        return not p

    @staticmethod
    def IMPLIES(p, q):
        return (not p) or q

    @staticmethod
    def IFF(p, q):
        return p == q

    @staticmethod
    def XOR(p, q):
        return p != q

# Verify De Morgan's Law: ¬(p ∧ q) ≡ ¬p ∨ ¬q
def verify_de_morgan():
    print("Verifying De Morgan's Law: ¬(p ∧ q) ≡ ¬p ∨ ¬q")
    for p in [True, False]:
        for q in [True, False]:
            left = LogicalExpression.NOT(LogicalExpression.AND(p, q))
            right = LogicalExpression.OR(
                LogicalExpression.NOT(p),
                LogicalExpression.NOT(q)
            )
            assert left == right, f"Failed for p={p}, q={q}"
    print("✓ De Morgan's Law verified!")

verify_de_morgan()

# Application: SAT Solver (simplified)
def is_satisfiable(formula, n_vars):
    """
    Check if a logical formula is satisfiable.
    Formula is a function taking n_vars boolean arguments.
    """
    for values in itertools.product([False, True], repeat=n_vars):
        if formula(*values):
            return True, values
    return False, None

# Example: Find satisfying assignment for (p ∨ q) ∧ (¬p ∨ r) ∧ (¬q ∨ ¬r)
def example_formula(p, q, r):
    return (p or q) and ((not p) or r) and ((not q) or (not r))

satisfiable, assignment = is_satisfiable(example_formula, 3)
print(f"\\nFormula satisfiable: {satisfiable}")
if satisfiable:
    print(f"Satisfying assignment: p={assignment[0]}, q={assignment[1]}, r={assignment[2]}")
</pre>
            </div>
        </div>

        <!-- Exercises Tab -->
        <div id="logic-exercises" class="tab-content">
            <div class="exercise-list">
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 1</h4>
                        <span class="exercise-difficulty difficulty-easy">Easy</span>
                    </div>
                    <p class="exercise-text">
                        Show that \\( p \\rightarrow q \\equiv \\neg q \\rightarrow \\neg p \\) using a truth table.
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>Create a truth table with columns for \\( p, q, p \\rightarrow q, \\neg q, \\neg p, \\neg q \\rightarrow \\neg p \\):</p>
                        <p>You'll find that the columns for \\( p \\rightarrow q \\) and \\( \\neg q \\rightarrow \\neg p \\) are identical, proving the equivalence.</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 2</h4>
                        <span class="exercise-difficulty difficulty-medium">Medium</span>
                    </div>
                    <p class="exercise-text">
                        Prove that if \\( n^3 \\) is odd, then \\( n \\) is odd using proof by contrapositive.
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p><strong>Contrapositive:</strong> If \\( n \\) is even, then \\( n^3 \\) is even.</p>
                        <p>Assume \\( n \\) is even, so \\( n = 2k \\) for some integer \\( k \\).</p>
                        <p>Then \\( n^3 = (2k)^3 = 8k^3 = 2(4k^3) \\), which is even. ∎</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 3</h4>
                        <span class="exercise-difficulty difficulty-hard">Hard</span>
                    </div>
                    <p class="exercise-text">
                        Prove using mathematical induction that \\( 1^2 + 2^2 + ... + n^2 = \\frac{n(n+1)(2n+1)}{6} \\) for all \\( n \\geq 1 \\).
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p><strong>Base case (n=1):</strong> \\( 1^2 = 1 = \\frac{1 \\cdot 2 \\cdot 3}{6} \\). ✓</p>
                        <p><strong>Inductive step:</strong> Assume true for \\( n = k \\).</p>
                        <p>\\[ \\sum_{i=1}^{k+1} i^2 = \\sum_{i=1}^{k} i^2 + (k+1)^2 = \\frac{k(k+1)(2k+1)}{6} + (k+1)^2 \\]</p>
                        <p>\\[ = \\frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \\frac{(k+1)[k(2k+1) + 6(k+1)]}{6} \\]</p>
                        <p>\\[ = \\frac{(k+1)(2k^2 + 7k + 6)}{6} = \\frac{(k+1)(k+2)(2k+3)}{6} \\] ∎</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quiz Tab -->
        <div id="logic-quiz" class="tab-content">
            <div id="logic-quiz-container"></div>
        </div>
    </div>
    `;

    container.innerHTML = content;

    // Initialize quiz when tab is loaded
    setTimeout(() => {
        createQuiz('logic', 'logic-quiz-container');
    }, 100);

    // Initialize truth table visualization
    initLogicVisualizations();
}

function initLogicVisualizations() {
    // This will be called after the module content is loaded
    window.generateTruthTable = function() {
        const container = document.getElementById('truth-table-viz');
        if (!container) return;

        const var1 = document.getElementById('var1-logic').value;
        const operator = document.getElementById('operator-logic').value;
        const var2 = document.getElementById('var2-logic').value;

        let html = '<table class="truth-table"><thead><tr>';
        html += `<th>${var1}</th><th>${var2}</th><th>Result</th></tr></thead><tbody>`;

        const values = [[false, false], [false, true], [true, false], [true, true]];

        values.forEach(([v1, v2]) => {
            let result;
            switch(operator) {
                case 'and': result = v1 && v2; break;
                case 'or': result = v1 || v2; break;
                case 'implies': result = !v1 || v2; break;
                case 'iff': result = v1 === v2; break;
            }

            html += '<tr>';
            html += `<td>${v1 ? 1 : 0}</td>`;
            html += `<td>${v2 ? 1 : 0}</td>`;
            html += `<td><strong>${result ? 1 : 0}</strong></td>`;
            html += '</tr>';
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    };

    // Generate initial truth table
    setTimeout(() => {
        if (typeof generateTruthTable === 'function') {
            generateTruthTable();
        }
    }, 200);
}
