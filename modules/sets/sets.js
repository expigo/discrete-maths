// Set Theory Module

function initSetsModule(container) {
    const content = `
    <div class="module-container">
        <div class="module-header">
            <h1 class="module-title"><i class="fas fa-circle-notch"></i> Set Theory</h1>
            <p class="module-description">
                Master the foundations of modern mathematics through sets, operations, relations, functions,
                and cardinality with applications to probability, databases, and machine learning.
            </p>
            <div class="module-tags">
                <span class="tag">Sets & Operations</span>
                <span class="tag">Relations & Functions</span>
                <span class="tag">Cardinality</span>
                <span class="tag">Countability</span>
            </div>
        </div>

        <div class="module-tabs">
            <button class="tab-button active" onclick="switchTab('sets-theory', event)">Theory</button>
            <button class="tab-button" onclick="switchTab('sets-visualizations', event)">Visualizations</button>
            <button class="tab-button" onclick="switchTab('sets-code', event)">Python Code</button>
            <button class="tab-button" onclick="switchTab('sets-ml', event)">ML Applications</button>
            <button class="tab-button" onclick="switchTab('sets-exercises', event)">Exercises</button>
            <button class="tab-button" onclick="switchTab('sets-quiz', event)">Quiz</button>
        </div>

        <!-- Theory Tab -->
        <div id="sets-theory" class="tab-content active">
            <div class="theory-section">
                <h2><i class="fas fa-book-open"></i> Set Fundamentals</h2>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> Definition: Set</div>
                    <p>A <strong>set</strong> is an unordered collection of distinct objects, called <strong>elements</strong> or <strong>members</strong>.</p>
                    <p><strong>Notation:</strong></p>
                    <ul>
                        <li>\\( A = \\{1, 2, 3, 4, 5\\} \\) - Roster notation</li>
                        <li>\\( B = \\{x \\mid x \\text{ is even and } 0 < x \\leq 10\\} \\) - Set-builder notation</li>
                        <li>\\( x \\in A \\) means "x is an element of A"</li>
                        <li>\\( x \\notin A \\) means "x is not an element of A"</li>
                    </ul>
                </div>

                <div class="definition">
                    <div class="definition-title">Special Sets</div>
                    <ul>
                        <li><strong>Empty set:</strong> \\( \\emptyset = \\{\\} \\) contains no elements</li>
                        <li><strong>Natural numbers:</strong> \\( \\mathbb{N} = \\{0, 1, 2, 3, ...\\} \\)</li>
                        <li><strong>Integers:</strong> \\( \\mathbb{Z} = \\{..., -2, -1, 0, 1, 2, ...\\} \\)</li>
                        <li><strong>Rational numbers:</strong> \\( \\mathbb{Q} = \\{\\frac{p}{q} \\mid p, q \\in \\mathbb{Z}, q \\neq 0\\} \\)</li>
                        <li><strong>Real numbers:</strong> \\( \\mathbb{R} \\)</li>
                        <li><strong>Universal set:</strong> \\( U \\) contains all objects under consideration</li>
                    </ul>
                </div>

                <h3>Set Operations</h3>

                <div class="definition">
                    <div class="definition-title">Basic Operations</div>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                        <tr style="background: #e5e7eb;">
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Operation</th>
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Notation</th>
                            <th style="padding: 0.75rem; border: 1px solid #ccc;">Definition</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Union</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( A \\cup B \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\{x \\mid x \\in A \\text{ or } x \\in B\\} \\)</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Intersection</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( A \\cap B \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\{x \\mid x \\in A \\text{ and } x \\in B\\} \\)</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Difference</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( A - B \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\{x \\mid x \\in A \\text{ and } x \\notin B\\} \\)</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Complement</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\overline{A} \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\{x \\in U \\mid x \\notin A\\} \\)</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Symmetric Diff</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( A \\triangle B \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( (A - B) \\cup (B - A) \\)</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">Cartesian Product</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( A \\times B \\)</td>
                            <td style="padding: 0.75rem; border: 1px solid #ccc;">\\( \\{(a,b) \\mid a \\in A, b \\in B\\} \\)</td>
                        </tr>
                    </table>
                </div>

                <div class="definition">
                    <div class="definition-title">Subset and Equality</div>
                    <p><strong>Subset:</strong> \\( A \\subseteq B \\) if every element of \\( A \\) is also in \\( B \\)</p>
                    <p><strong>Proper subset:</strong> \\( A \\subset B \\) if \\( A \\subseteq B \\) and \\( A \\neq B \\)</p>
                    <p><strong>Equality:</strong> \\( A = B \\) if \\( A \\subseteq B \\) and \\( B \\subseteq A \\)</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> Set Identities</div>
                    <p><strong>Identity Laws:</strong></p>
                    <p>\\( A \\cup \\emptyset = A \\quad A \\cap U = A \\)</p>
                    <p><strong>Domination Laws:</strong></p>
                    <p>\\( A \\cup U = U \\quad A \\cap \\emptyset = \\emptyset \\)</p>
                    <p><strong>Idempotent Laws:</strong></p>
                    <p>\\( A \\cup A = A \\quad A \\cap A = A \\)</p>
                    <p><strong>Complementation Law:</strong></p>
                    <p>\\( \\overline{\\overline{A}} = A \\)</p>
                    <p><strong>De Morgan's Laws:</strong></p>
                    <p>\\( \\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\)</p>
                    <p>\\( \\overline{A \\cap B} = \\overline{A} \\cup \\overline{B} \\)</p>
                </div>

                <h2><i class="fas fa-link"></i> Relations and Functions</h2>

                <div class="definition">
                    <div class="definition-title">Relations</div>
                    <p>A <strong>relation</strong> \\( R \\) from set \\( A \\) to set \\( B \\) is a subset of \\( A \\times B \\).</p>
                    <p>We write \\( aRb \\) or \\( (a,b) \\in R \\) to indicate that \\( a \\) is related to \\( b \\).</p>
                    <p><strong>Properties of Relations on a Set:</strong></p>
                    <ul>
                        <li><strong>Reflexive:</strong> \\( \\forall a \\in A, aRa \\)</li>
                        <li><strong>Symmetric:</strong> \\( \\forall a,b \\in A, aRb \\Rightarrow bRa \\)</li>
                        <li><strong>Transitive:</strong> \\( \\forall a,b,c \\in A, aRb \\land bRc \\Rightarrow aRc \\)</li>
                        <li><strong>Equivalence Relation:</strong> Reflexive, symmetric, and transitive</li>
                    </ul>
                </div>

                <div class="definition">
                    <div class="definition-title">Functions</div>
                    <p>A <strong>function</strong> \\( f: A \\rightarrow B \\) is a relation where each element of \\( A \\) maps to exactly one element of \\( B \\).</p>
                    <p><strong>Types of Functions:</strong></p>
                    <ul>
                        <li><strong>Injective (One-to-one):</strong> \\( f(a_1) = f(a_2) \\Rightarrow a_1 = a_2 \\)</li>
                        <li><strong>Surjective (Onto):</strong> \\( \\forall b \\in B, \\exists a \\in A, f(a) = b \\)</li>
                        <li><strong>Bijective:</strong> Both injective and surjective</li>
                        <li><strong>Inverse Function:</strong> Exists if and only if \\( f \\) is bijective</li>
                    </ul>
                </div>

                <h2><i class="fas fa-infinity"></i> Cardinality</h2>

                <div class="definition">
                    <div class="definition-title">Cardinality</div>
                    <p>The <strong>cardinality</strong> of a set \\( A \\), denoted \\( |A| \\), is the number of elements in \\( A \\).</p>
                    <p><strong>Finite Sets:</strong> \\( |A| = n \\) for some \\( n \\in \\mathbb{N} \\)</p>
                    <p><strong>Infinite Sets:</strong> A set is infinite if it's not finite</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title">Countability</div>
                    <p>A set is <strong>countably infinite</strong> if it has the same cardinality as \\( \\mathbb{N} \\).</p>
                    <p><strong>Examples:</strong></p>
                    <ul>
                        <li>\\( \\mathbb{N} \\) is countably infinite (by definition)</li>
                        <li>\\( \\mathbb{Z} \\) is countably infinite</li>
                        <li>\\( \\mathbb{Q} \\) is countably infinite (Cantor's diagonal argument)</li>
                        <li>\\( \\mathbb{R} \\) is <strong>uncountably infinite</strong> (larger than \\( \\mathbb{N} \\))</li>
                    </ul>
                </div>

                <div class="theorem">
                    <div class="theorem-title">Power Set</div>
                    <p>The <strong>power set</strong> \\( \\mathcal{P}(A) \\) is the set of all subsets of \\( A \\).</p>
                    <p>If \\( |A| = n \\), then \\( |\\mathcal{P}(A)| = 2^n \\)</p>
                    <p><strong>Example:</strong> If \\( A = \\{1, 2, 3\\} \\), then:</p>
                    <p>\\( \\mathcal{P}(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{1,2\\}, \\{1,3\\}, \\{2,3\\}, \\{1,2,3\\}\\} \\)</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-robot"></i> Applications in ML & Data Science</h3>
                    <p><strong>Sets in Machine Learning:</strong></p>
                    <ul>
                        <li><strong>Training/Test Sets:</strong> Partition data using set operations</li>
                        <li><strong>Feature Sets:</strong> Each feature vector is an element of feature space</li>
                        <li><strong>Classification:</strong> Assigning data points to class sets</li>
                        <li><strong>Jaccard Similarity:</strong> \\( J(A,B) = \\frac{|A \\cap B|}{|A \\cup B|} \\) for comparing sets</li>
                    </ul>
                    <p><strong>Relations in ML:</strong></p>
                    <ul>
                        <li><strong>Similarity Relations:</strong> Defining similarity between data points</li>
                        <li><strong>Clustering:</strong> Partitioning based on equivalence relations</li>
                        <li><strong>Recommendation Systems:</strong> User-item relations</li>
                    </ul>
                    <p><strong>Functions in ML:</strong></p>
                    <ul>
                        <li><strong>Model as Function:</strong> \\( f: \\mathcal{X} \\rightarrow \\mathcal{Y} \\)</li>
                        <li><strong>Activation Functions:</strong> \\( \\sigma: \\mathbb{R} \\rightarrow [0,1] \\)</li>
                        <li><strong>Loss Functions:</strong> \\( L: \\mathcal{Y} \\times \\mathcal{Y} \\rightarrow \\mathbb{R}^+ \\)</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Visualizations Tab -->
        <div id="sets-visualizations" class="tab-content">
            <div class="visualization-container">
                <h3 class="viz-title">Interactive Venn Diagram</h3>
                <p class="viz-description">Visualize set operations with interactive Venn diagrams</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <label>Set A (comma-separated):</label>
                        <input type="text" id="set-a-input" value="1,2,3,4,5" placeholder="e.g., 1,2,3,4,5">
                    </div>
                    <div class="control-group">
                        <label>Set B (comma-separated):</label>
                        <input type="text" id="set-b-input" value="4,5,6,7,8" placeholder="e.g., 4,5,6,7,8">
                    </div>
                    <div class="control-group">
                        <label>Operation:</label>
                        <select id="set-operation">
                            <option value="union">A ∪ B (Union)</option>
                            <option value="intersection">A ∩ B (Intersection)</option>
                            <option value="difference">A - B (Difference)</option>
                            <option value="symmetric">A △ B (Symmetric Diff)</option>
                        </select>
                    </div>
                    <div class="control-group">
                        <button onclick="updateVennDiagram()">Update Diagram</button>
                    </div>
                </div>

                <div id="venn-diagram" class="viz-canvas" style="min-height: 400px;"></div>
                <div id="set-result" style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 8px;"></div>
            </div>
        </div>

        <!-- Python Code Tab -->
        <div id="sets-code" class="tab-content">
            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Set Operations</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block"># Set operations in Python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print("Set A:", A)
print("Set B:", B)
print()

# Basic operations
print("Union (A ∪ B):", A | B)
print("Intersection (A ∩ B):", A & B)
print("Difference (A - B):", A - B)
print("Symmetric Difference (A △ B):", A ^ B)
print()

# Subset testing
print("{1, 2} ⊆ A:", {1, 2} <= A)
print("A ⊆ B:", A <= B)
print()

# Cardinality
print("|A|:", len(A))
print("|B|:", len(B))
print("|A ∪ B|:", len(A | B))
print("|A ∩ B|:", len(A & B))

# Verify: |A ∪ B| = |A| + |B| - |A ∩ B|
print("\\nInclusion-Exclusion Principle:")
print(f"{len(A | B)} = {len(A)} + {len(B)} - {len(A & B)}")
print("Verified:", len(A | B) == len(A) + len(B) - len(A & B))
</pre>
                <button class="run-button">▶ Run Code</button>
                <div class="code-output" style="display: none;"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Power Set Generation</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">from itertools import combinations

def power_set(s):
    """Generate the power set of a set"""
    s = list(s)
    return [set(combinations(s, r)) for r in range(len(s) + 1)]

def power_set_flat(s):
    """Generate power set as list of sets"""
    s = list(s)
    result = []
    for r in range(len(s) + 1):
        for subset in combinations(s, r):
            result.append(set(subset))
    return result

# Example
A = {1, 2, 3}
P_A = power_set_flat(A)

print(f"Power set of {A}:")
for subset in P_A:
    print(f"  {subset if subset else '∅'}")

print(f"\\nCardinality: |𝒫(A)| = {len(P_A)}")
print(f"Expected: 2^{len(A)} = {2**len(A)}")
print(f"Verified: {len(P_A) == 2**len(A)}")
</pre>
                <button class="run-button">▶ Run Code</button>
                <div class="code-output" style="display: none;"></div>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Jaccard Similarity (ML Application)</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">def jaccard_similarity(set1, set2):
    """
    Calculate Jaccard similarity between two sets.
    Used in ML for comparing documents, user preferences, etc.

    J(A,B) = |A ∩ B| / |A ∪ B|
    """
    intersection = len(set1 & set2)
    union = len(set1 | set2)

    if union == 0:
        return 0.0

    return intersection / union

# Example: Document similarity
doc1_words = {"machine", "learning", "deep", "neural", "network"}
doc2_words = {"machine", "learning", "algorithm", "data"}
doc3_words = {"deep", "neural", "network", "CNN", "RNN"}

print("Document Similarity (Jaccard):")
print(f"Doc1 vs Doc2: {jaccard_similarity(doc1_words, doc2_words):.3f}")
print(f"Doc1 vs Doc3: {jaccard_similarity(doc1_words, doc3_words):.3f}")
print(f"Doc2 vs Doc3: {jaccard_similarity(doc2_words, doc3_words):.3f}")

# Example: User preference similarity
user1_movies = {"Inception", "Matrix", "Interstellar", "Tenet"}
user2_movies = {"Matrix", "Interstellar", "Avatar", "Dune"}

similarity = jaccard_similarity(user1_movies, user2_movies)
print(f"\\nUser similarity: {similarity:.3f}")
print(f"Common movies: {user1_movies & user2_movies}")
</pre>
                <button class="run-button">▶ Run Code</button>
                <div class="code-output" style="display: none;"></div>
            </div>
        </div>

        <!-- ML Applications Tab -->
        <div id="sets-ml" class="tab-content">
            <div class="theory-section">
                <h2><i class="fas fa-robot"></i> Set Theory in Machine Learning</h2>

                <div class="ml-application">
                    <h3><i class="fas fa-database"></i> 1. Data Partitioning</h3>
                    <p><strong>Train/Validation/Test Split:</strong></p>
                    <p>Let \\( D \\) be the complete dataset. We partition it into disjoint sets:</p>
                    <p>\\( D = D_{train} \\cup D_{val} \\cup D_{test} \\)</p>
                    <p>where \\( D_{train} \\cap D_{val} = \\emptyset \\), \\( D_{train} \\cap D_{test} = \\emptyset \\), \\( D_{val} \\cap D_{test} = \\emptyset \\)</p>
                    <p><strong>Typical ratios:</strong> 70% train, 15% validation, 15% test</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-project-diagram"></i> 2. Classification & Clustering</h3>
                    <p><strong>Classification:</strong> Partition data into class sets</p>
                    <p>\\( \\mathcal{X} = C_1 \\cup C_2 \\cup ... \\cup C_k \\) where \\( C_i \\cap C_j = \\emptyset \\) for \\( i \\neq j \\)</p>
                    <p><strong>Confusion Matrix:</strong> Compares predicted vs actual class sets</p>
                    <ul>
                        <li>True Positives: \\( |\\text{Predicted}_+ \\cap \\text{Actual}_+| \\)</li>
                        <li>False Positives: \\( |\\text{Predicted}_+ \\cap \\text{Actual}_-| \\)</li>
                    </ul>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-search"></i> 3. Information Retrieval</h3>
                    <p><strong>Precision and Recall using Sets:</strong></p>
                    <p>Let \\( R \\) = relevant documents, \\( A \\) = retrieved documents</p>
                    <p>\\[ \\text{Precision} = \\frac{|R \\cap A|}{|A|} \\]</p>
                    <p>\\[ \\text{Recall} = \\frac{|R \\cap A|}{|R|} \\]</p>
                    <p>\\[ F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} \\]</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-users"></i> 4. Recommendation Systems</h3>
                    <p><strong>Collaborative Filtering:</strong></p>
                    <p>For users \\( u_1, u_2 \\) with item sets \\( I_1, I_2 \\):</p>
                    <p>\\[ \\text{Similarity}(u_1, u_2) = \\frac{|I_1 \\cap I_2|}{|I_1 \\cup I_2|} \\]</p>
                    <p>Recommend items in \\( I_2 - I_1 \\) to user \\( u_1 \\)</p>
                </div>
            </div>
        </div>

        <!-- Exercises Tab -->
        <div id="sets-exercises" class="tab-content">
            <div class="exercise-list">
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 1</h4>
                        <span class="exercise-difficulty difficulty-easy">Easy</span>
                    </div>
                    <p class="exercise-text">
                        If \\( A = \\{1, 2, 3, 4\\} \\) and \\( B = \\{3, 4, 5, 6\\} \\), find:
                        a) \\( A \\cup B \\), b) \\( A \\cap B \\), c) \\( A - B \\), d) \\( A \\triangle B \\)
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>a) \\( A \\cup B = \\{1, 2, 3, 4, 5, 6\\} \\)</p>
                        <p>b) \\( A \\cap B = \\{3, 4\\} \\)</p>
                        <p>c) \\( A - B = \\{1, 2\\} \\)</p>
                        <p>d) \\( A \\triangle B = (A - B) \\cup (B - A) = \\{1, 2, 5, 6\\} \\)</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 2</h4>
                        <span class="exercise-difficulty difficulty-medium">Medium</span>
                    </div>
                    <p class="exercise-text">
                        Prove De Morgan's Law: \\( \\overline{A \\cup B} = \\overline{A} \\cap \\overline{B} \\)
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p><strong>Proof:</strong> We show both \\( \\overline{A \\cup B} \\subseteq \\overline{A} \\cap \\overline{B} \\) and \\( \\overline{A} \\cap \\overline{B} \\subseteq \\overline{A \\cup B} \\)</p>
                        <p>(⊆) Let \\( x \\in \\overline{A \\cup B} \\). Then \\( x \\notin A \\cup B \\), so \\( x \\notin A \\) and \\( x \\notin B \\). Thus \\( x \\in \\overline{A} \\) and \\( x \\in \\overline{B} \\), so \\( x \\in \\overline{A} \\cap \\overline{B} \\).</p>
                        <p>(⊇) Let \\( x \\in \\overline{A} \\cap \\overline{B} \\). Then \\( x \\in \\overline{A} \\) and \\( x \\in \\overline{B} \\), so \\( x \\notin A \\) and \\( x \\notin B \\). Thus \\( x \\notin A \\cup B \\), so \\( x \\in \\overline{A \\cup B} \\). ∎</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 3</h4>
                        <span class="exercise-difficulty difficulty-hard">Hard</span>
                    </div>
                    <p class="exercise-text">
                        Show that \\( \\mathbb{Z} \\) (integers) is countably infinite by constructing a bijection \\( f: \\mathbb{N} \\rightarrow \\mathbb{Z} \\).
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p><strong>Solution:</strong> Define \\( f: \\mathbb{N} \\rightarrow \\mathbb{Z} \\) by:</p>
                        <p>\\[ f(n) = \\begin{cases} n/2 & \\text{if } n \\text{ is even} \\\\ -(n+1)/2 & \\text{if } n \\text{ is odd} \\end{cases} \\]</p>
                        <p>This maps: 0→0, 1→-1, 2→1, 3→-2, 4→2, 5→-3, ...</p>
                        <p><strong>Injective:</strong> Different inputs give different outputs (verify by cases)</p>
                        <p><strong>Surjective:</strong> Every integer is hit (positive n → 2n, negative -n → 2n-1)</p>
                        <p>Therefore \\( f \\) is bijective, proving \\( |\\mathbb{N}| = |\\mathbb{Z}| \\). ∎</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quiz Tab -->
        <div id="sets-quiz" class="tab-content">
            <div id="sets-quiz-container"></div>
        </div>
    </div>
    `;

    container.innerHTML = content;

    // Initialize quiz
    setTimeout(() => {
        createQuiz('sets', 'sets-quiz-container');
    }, 100);

    // Initialize visualizations
    initSetsVisualizations();
}

function initSetsVisualizations() {
    window.updateVennDiagram = function() {
        // Parse input sets
        const aInput = document.getElementById('set-a-input').value;
        const bInput = document.getElementById('set-b-input').value;
        const operation = document.getElementById('set-operation').value;

        const setA = new Set(aInput.split(',').map(x => x.trim()).filter(x => x));
        const setB = new Set(bInput.split(',').map(x => x.trim()).filter(x => x));

        let result;
        let resultName;

        switch(operation) {
            case 'union':
                result = new Set([...setA, ...setB]);
                resultName = 'A ∪ B';
                break;
            case 'intersection':
                result = new Set([...setA].filter(x => setB.has(x)));
                resultName = 'A ∩ B';
                break;
            case 'difference':
                result = new Set([...setA].filter(x => !setB.has(x)));
                resultName = 'A - B';
                break;
            case 'symmetric':
                const diff1 = new Set([...setA].filter(x => !setB.has(x)));
                const diff2 = new Set([...setB].filter(x => !setA.has(x)));
                result = new Set([...diff1, ...diff2]);
                resultName = 'A △ B';
                break;
        }

        // Display result
        const resultDiv = document.getElementById('set-result');
        resultDiv.innerHTML = `
            <strong>Set A:</strong> {${Array.from(setA).join(', ')}}<br>
            <strong>Set B:</strong> {${Array.from(setB).join(', ')}}<br>
            <strong>${resultName}:</strong> {${Array.from(result).join(', ')}}<br>
            <strong>Cardinality:</strong> |${resultName}| = ${result.size}
        `;

        // Simple visualization using D3
        const container = document.getElementById('venn-diagram');
        container.innerHTML = '';

        const viz = new SetVisualization('venn-diagram', 600, 400);
        viz.setSets([
            {label: 'A', elements: setA, color: '#3b82f6'},
            {label: 'B', elements: setB, color: '#ef4444'}
        ]).render();
    };

    // Initial render
    setTimeout(() => {
        if (typeof updateVennDiagram === 'function') {
            updateVennDiagram();
        }
    }, 200);
}
