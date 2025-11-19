// Combinatorics Module

function initCombinatoricsModule(container) {
    const content = `
    <div class="module-container">
        <div class="module-header">
            <h1 class="module-title"><i class="fas fa-layer-group"></i> Combinatorics</h1>
            <p class="module-description">
                Master counting principles, permutations, combinations, and advanced techniques with extensive
                applications to probability, algorithm analysis, and machine learning optimization.
            </p>
            <div class="module-tags">
                <span class="tag">Counting Principles</span>
                <span class="tag">Permutations & Combinations</span>
                <span class="tag">Pigeonhole Principle</span>
                <span class="tag">Generating Functions</span>
            </div>
        </div>

        <div class="module-tabs">
            <button class="tab-button active" onclick="switchTab('comb-theory', event)">Theory</button>
            <button class="tab-button" onclick="switchTab('comb-visualizations', event)">Visualizations</button>
            <button class="tab-button" onclick="switchTab('comb-code', event)">Python Code</button>
            <button class="tab-button" onclick="switchTab('comb-ml', event)">ML Applications</button>
            <button class="tab-button" onclick="switchTab('comb-exercises', event)">Exercises</button>
            <button class="tab-button" onclick="switchTab('comb-quiz', event)">Quiz</button>
        </div>

        <!-- Theory Tab -->
        <div id="comb-theory" class="tab-content active">
            <div class="theory-section">
                <h2><i class="fas fa-book-open"></i> Fundamental Counting Principles</h2>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> The Product Rule</div>
                    <p>If a task can be done in \\( n_1 \\) ways and a second task in \\( n_2 \\) ways, then both tasks can be done in \\( n_1 \\times n_2 \\) ways.</p>
                    <p><strong>Example:</strong> How many outcomes when rolling 2 dice?</p>
                    <p>\\( 6 \\times 6 = 36 \\) outcomes</p>
                    <p><strong>General Form:</strong> For \\( k \\) tasks with \\( n_1, n_2, ..., n_k \\) ways each:</p>
                    <p>\\[ n_1 \\times n_2 \\times ... \\times n_k \\text{ total ways} \\]</p>
                </div>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> The Sum Rule</div>
                    <p>If a task can be done in \\( n_1 \\) ways OR another task in \\( n_2 \\) ways (and they cannot be done simultaneously), then there are \\( n_1 + n_2 \\) ways.</p>
                    <p><strong>Example:</strong> Choose a dessert: 3 cakes OR 4 ice creams</p>
                    <p>\\( 3 + 4 = 7 \\) choices</p>
                </div>

                <h2><i class="fas fa-sort"></i> Permutations</h2>

                <div class="definition">
                    <div class="definition-title">Permutations Definition</div>
                    <p>A <strong>permutation</strong> is an ordered arrangement of objects.</p>
                    <p><strong>Number of permutations of \\( n \\) objects:</strong></p>
                    <p>\\[ P(n) = n! = n \\times (n-1) \\times (n-2) \\times ... \\times 2 \\times 1 \\]</p>
                    <p><strong>Example:</strong> Arrange 5 books on a shelf: \\( 5! = 120 \\) ways</p>
                </div>

                <div class="definition">
                    <div class="definition-title">r-Permutations</div>
                    <p>Number of ways to arrange \\( r \\) objects from \\( n \\) distinct objects:</p>
                    <p>\\[ P(n,r) = \\frac{n!}{(n-r)!} = n \\times (n-1) \\times ... \\times (n-r+1) \\]</p>
                    <p><strong>Example:</strong> Choose president, VP, secretary from 10 people:</p>
                    <p>\\( P(10,3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720 \\) ways</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title">Permutations with Repetition</div>
                    <p>Number of permutations of \\( n \\) objects where \\( n_1 \\) are of type 1, \\( n_2 \\) of type 2, ..., \\( n_k \\) of type k:</p>
                    <p>\\[ \\frac{n!}{n_1! \\cdot n_2! \\cdot ... \\cdot n_k!} \\]</p>
                    <p><strong>Example:</strong> Arrangements of "MISSISSIPPI" (11 letters: 1 M, 4 I, 4 S, 2 P):</p>
                    <p>\\[ \\frac{11!}{1! \\cdot 4! \\cdot 4! \\cdot 2!} = \\frac{39,916,800}{1,152} = 34,650 \\]</p>
                </div>

                <h2><i class="fas fa-object-group"></i> Combinations</h2>

                <div class="definition">
                    <div class="definition-title">Combinations Definition</div>
                    <p>A <strong>combination</strong> is a selection of objects where order doesn't matter.</p>
                    <p><strong>Number of ways to choose \\( r \\) objects from \\( n \\):</strong></p>
                    <p>\\[ C(n,r) = \\binom{n}{r} = \\frac{n!}{r!(n-r)!} \\]</p>
                    <p>Read as "n choose r"</p>
                    <p><strong>Example:</strong> Choose 3 toppings from 10 available:</p>
                    <p>\\( \\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = 120 \\)</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> Binomial Theorem</div>
                    <p>For any real numbers \\( x, y \\) and non-negative integer \\( n \\):</p>
                    <p>\\[ (x+y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k \\]</p>
                    <p><strong>Example:</strong> \\( (x+y)^3 = \\binom{3}{0}x^3 + \\binom{3}{1}x^2y + \\binom{3}{2}xy^2 + \\binom{3}{3}y^3 \\)</p>
                    <p>\\( = x^3 + 3x^2y + 3xy^2 + y^3 \\)</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title">Pascal's Identity</div>
                    <p>\\[ \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k} \\]</p>
                    <p>This forms Pascal's Triangle:</p>
                    <pre style="font-family: monospace; text-align: center; background: #f3f4f6; padding: 1rem; border-radius: 4px;">
        1
      1   1
    1   2   1
  1   3   3   1
1   4   6   4   1
                    </pre>
                </div>

                <h2><i class="fas fa-expand-arrows-alt"></i> Advanced Counting</h2>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-dove"></i> Pigeonhole Principle</div>
                    <p>If \\( n \\) items are placed into \\( m \\) containers with \\( n > m \\), then at least one container contains more than one item.</p>
                    <p><strong>Generalized:</strong> If \\( n \\) items are in \\( m \\) containers, at least one container has \\( \\lceil n/m \\rceil \\) items.</p>
                    <p><strong>Example:</strong> In any group of 13 people, at least 2 have birthdays in the same month.</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-robot"></i> Combinatorics in Machine Learning</h3>
                    <p><strong>Model Complexity:</strong></p>
                    <ul>
                        <li><strong>Neural Network Architectures:</strong> \\( \\binom{n}{k} \\) ways to choose \\( k \\) connections from \\( n \\) possible</li>
                        <li><strong>Feature Selection:</strong> \\( 2^n \\) possible feature subsets from \\( n \\) features</li>
                        <li><strong>Hyperparameter Tuning:</strong> Product rule for grid search complexity</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Visualizations Tab -->
        <div id="comb-visualizations" class="tab-content">
            <div class="visualization-container">
                <h3 class="viz-title">Pascal's Triangle Generator</h3>
                <p class="viz-description">Explore binomial coefficients and their patterns</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <label>Number of Rows:</label>
                        <input type="number" id="pascal-rows" value="10" min="1" max="20">
                    </div>
                    <div class="control-group">
                        <button onclick="generatePascalsTriangle()">Generate</button>
                    </div>
                </div>

                <div id="pascal-triangle" class="viz-canvas" style="min-height: 400px; overflow-x: auto;"></div>
            </div>

            <div class="visualization-container" style="margin-top: 2rem;">
                <h3 class="viz-title">Permutation & Combination Calculator</h3>
                <p class="viz-description">Calculate and visualize P(n,r) and C(n,r)</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <label>n (total objects):</label>
                        <input type="number" id="perm-n" value="10" min="1" max="20">
                    </div>
                    <div class="control-group">
                        <label>r (selected objects):</label>
                        <input type="number" id="perm-r" value="3" min="1" max="20">
                    </div>
                    <div class="control-group">
                        <button onclick="calculatePermComb()">Calculate</button>
                    </div>
                </div>

                <div id="perm-comb-result" style="margin-top: 1rem; padding: 1.5rem; background: #f3f4f6; border-radius: 8px;"></div>
            </div>
        </div>

        <!-- Python Code Tab -->
        <div id="comb-code" class="tab-content">
            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Permutations and Combinations</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">from math import factorial, comb, perm
from itertools import permutations, combinations

def P(n, r):
    """Calculate P(n,r) = n!/(n-r)!"""
    return factorial(n) // factorial(n - r)

def C(n, r):
    """Calculate C(n,r) = n!/(r!(n-r)!)"""
    return factorial(n) // (factorial(r) * factorial(n - r))

# Examples
n, r = 10, 3

print(f"Permutations P({n},{r}) = {P(n, r)}")
print(f"Using built-in: {perm(n, r)}")
print()

print(f"Combinations C({n},{r}) = {C(n, r)}")
print(f"Using built-in: {comb(n, r)}")
print()

# Generate all permutations
items = ['A', 'B', 'C']
print(f"All permutations of {items}:")
for p in permutations(items):
    print(p)

print()

# Generate all combinations
print(f"All 2-combinations of {items}:")
for c in combinations(items, 2):
    print(c)
</pre>
                <button class="run-button">▶ Run Code</button>
                <div class="code-output" style="display: none;"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Feature Selection (ML Application)</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">from itertools import combinations
from math import comb

def count_feature_subsets(n_features, min_features=1):
    """
    Count possible feature combinations for model training.
    Critical for understanding feature selection search space.
    """
    total = 0
    for k in range(min_features, n_features + 1):
        count = comb(n_features, k)
        print(f"Subsets of size {k}: {count:,}")
        total += count

    return total

# Example: Feature selection problem
n_features = 20
print(f"Feature selection from {n_features} features:\\n")

total = count_feature_subsets(n_features)
print(f"\\nTotal possible feature subsets: {total:,}")
print(f"This equals 2^{n_features} - 1 = {2**n_features - 1:,}")

# Practical example: Select top 5 features
k = 5
n = 20
ways = comb(n, k)
print(f"\\nWays to select {k} features from {n}: {ways:,}")
print("This is the search space for exhaustive feature selection!")

# Grid search hyperparameter combinations
learning_rates = [0.001, 0.01, 0.1]
batch_sizes = [16, 32, 64, 128]
epochs = [10, 50, 100]

total_configs = len(learning_rates) * len(batch_sizes) * len(epochs)
print(f"\\nHyperparameter grid search:")
print(f"Configurations to try: {total_configs}")
</pre>
                <button class="run-button">▶ Run Code</button>
                <div class="code-output" style="display: none;"></div>
            </div>
        </div>

        <!-- ML Applications Tab -->
        <div id="comb-ml" class="tab-content">
            <div class="theory-section">
                <h2><i class="fas fa-robot"></i> Combinatorics in Machine Learning & AI</h2>

                <div class="ml-application">
                    <h3><i class="fas fa-search"></i> 1. Feature Selection</h3>
                    <p><strong>Problem:</strong> Choose \\( k \\) features from \\( n \\) total features</p>
                    <p><strong>Search Space:</strong> \\( \\binom{n}{k} \\) possible subsets</p>
                    <p>For \\( n = 100, k = 10 \\): \\( \\binom{100}{10} \\approx 1.7 \\times 10^{13} \\) combinations!</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-network-wired"></i> 2. Neural Architecture Search</h3>
                    <p><strong>Problem:</strong> Find optimal network architecture</p>
                    <p>For 10 layers with multiple choices each: astronomical search space!</p>
                </div>
            </div>
        </div>

        <!-- Exercises Tab -->
        <div id="comb-exercises" class="tab-content">
            <div class="exercise-list">
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 1</h4>
                        <span class="exercise-difficulty difficulty-easy">Easy</span>
                    </div>
                    <p class="exercise-text">
                        How many 4-letter "words" can be formed from A, B, C, D, E if:
                        a) Letters can be repeated? b) Letters cannot be repeated?
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>a) With repetition: \\( 5^4 = 625 \\) words</p>
                        <p>b) Without repetition: \\( P(5,4) = 120 \\) words</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 2</h4>
                        <span class="exercise-difficulty difficulty-medium">Medium</span>
                    </div>
                    <p class="exercise-text">
                        A committee of 5 from 6 men and 4 women. How many have at least 3 women?
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>3 women, 2 men: \\( \\binom{4}{3} \\times \\binom{6}{2} = 60 \\)</p>
                        <p>4 women, 1 man: \\( \\binom{4}{4} \\times \\binom{6}{1} = 6 \\)</p>
                        <p>Total: 66 committees</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quiz Tab -->
        <div id="comb-quiz" class="tab-content">
            <div id="comb-quiz-container"></div>
        </div>
    </div>
    `;

    container.innerHTML = content;

    setTimeout(() => {
        if (typeof createQuiz === 'function') {
            createQuiz('combinatorics', 'comb-quiz-container');
        }
    }, 100);

    initCombinatoricsVisualizations();
}

function initCombinatoricsVisualizations() {
    window.generatePascalsTriangle = function() {
        const n = parseInt(document.getElementById('pascal-rows').value) || 10;
        const container = document.getElementById('pascal-triangle');

        let html = '<div style="font-family: monospace; font-size: 0.9rem; line-height: 1.8;">';

        for (let i = 0; i < n; i++) {
            let row = '';
            const spaces = '&nbsp;&nbsp;'.repeat(n - i);
            row += spaces;

            for (let j = 0; j <= i; j++) {
                const value = binomialCoeff(i, j);
                row += \`<span style="display: inline-block; min-width: 4em; text-align: center; background: #dbeafe; margin: 0.1rem; padding: 0.25rem; border-radius: 4px;">\${value}</span>\`;
            }
            html += \`<div>\${row}</div>\`;
        }
        html += '</div>';

        container.innerHTML = html;
    };

    window.calculatePermComb = function() {
        const n = parseInt(document.getElementById('perm-n').value);
        const r = parseInt(document.getElementById('perm-r').value);

        if (r > n) {
            document.getElementById('perm-comb-result').innerHTML =
                '<strong style="color: red;">Error:</strong> r cannot be greater than n';
            return;
        }

        const permutations = factorial(n) / factorial(n - r);
        const combinations = factorial(n) / (factorial(r) * factorial(n - r));

        const html = \`
            <h4>Results for n=\${n}, r=\${r}</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem;">
                <div style="background: white; padding: 1rem; border-radius: 8px;">
                    <h5 style="color: #2563eb;">Permutations P(\${n},\${r})</h5>
                    <p style="font-size: 2rem; font-weight: bold; color: #2563eb;">\${permutations.toLocaleString()}</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">Order matters</p>
                </div>
                <div style="background: white; padding: 1rem; border-radius: 8px;">
                    <h5 style="color: #7c3aed;">Combinations C(\${n},\${r})</h5>
                    <p style="font-size: 2rem; font-weight: bold; color: #7c3aed;">\${combinations.toLocaleString()}</p>
                    <p style="font-size: 0.875rem; color: #6b7280;">Order doesn't matter</p>
                </div>
            </div>
        \`;

        document.getElementById('perm-comb-result').innerHTML = html;
    };

    function binomialCoeff(n, k) {
        if (k > n) return 0;
        if (k === 0 || k === n) return 1;
        return factorial(n) / (factorial(k) * factorial(n - k));
    }

    function factorial(n) {
        if (n <= 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    setTimeout(() => {
        if (typeof generatePascalsTriangle === 'function') {
            generatePascalsTriangle();
        }
        if (typeof calculatePermComb === 'function') {
            calculatePermComb();
        }
    }, 200);
}
