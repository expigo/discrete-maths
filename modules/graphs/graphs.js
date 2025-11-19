// Graph Theory Module

function initGraphsModule(container) {
    const content = `
    <div class="module-container">
        <div class="module-header">
            <h1 class="module-title"><i class="fas fa-project-diagram"></i> Graph Theory</h1>
            <p class="module-description">
                Explore graphs, networks, trees, and algorithms with extensive applications to neural networks,
                social networks, knowledge graphs, and network analysis in machine learning.
            </p>
            <div class="module-tags">
                <span class="tag">Graph Basics</span>
                <span class="tag">Trees</span>
                <span class="tag">Graph Algorithms</span>
                <span class="tag">Neural Networks</span>
                <span class="tag">Network Analysis</span>
            </div>
        </div>

        <div class="module-tabs">
            <button class="tab-button active" onclick="switchTab('graphs-theory', event)">Theory</button>
            <button class="tab-button" onclick="switchTab('graphs-visualizations', event)">Visualizations</button>
            <button class="tab-button" onclick="switchTab('graphs-algorithms', event)">Algorithms</button>
            <button class="tab-button" onclick="switchTab('graphs-code', event)">Python Code</button>
            <button class="tab-button" onclick="switchTab('graphs-ml', event)">ML Applications</button>
            <button class="tab-button" onclick="switchTab('graphs-exercises', event)">Exercises</button>
            <button class="tab-button" onclick="switchTab('graphs-quiz', event)">Quiz</button>
        </div>

        <!-- Theory Tab -->
        <div id="graphs-theory" class="tab-content active">
            <div class="theory-section">
                <h2><i class="fas fa-book-open"></i> Graph Fundamentals</h2>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> Definition: Graph</div>
                    <p>A <strong>graph</strong> \\( G = (V, E) \\) consists of:</p>
                    <ul>
                        <li>\\( V \\): A finite set of <strong>vertices</strong> (or nodes)</li>
                        <li>\\( E \\): A set of <strong>edges</strong> (connections between vertices)</li>
                    </ul>
                    <p><strong>Types of Graphs:</strong></p>
                    <ul>
                        <li><strong>Undirected Graph:</strong> Edges have no direction: \\( (u, v) = (v, u) \\)</li>
                        <li><strong>Directed Graph (Digraph):</strong> Edges have direction: \\( (u, v) \\neq (v, u) \\)</li>
                        <li><strong>Weighted Graph:</strong> Each edge has an associated weight/cost</li>
                        <li><strong>Simple Graph:</strong> No self-loops or multiple edges between same vertices</li>
                    </ul>
                </div>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-ruler"></i> Graph Metrics</div>
                    <p><strong>Degree:</strong> Number of edges connected to a vertex</p>
                    <ul>
                        <li>For vertex \\( v \\), degree is \\( deg(v) \\)</li>
                        <li>In directed graphs: <strong>in-degree</strong> (incoming) and <strong>out-degree</strong> (outgoing)</li>
                    </ul>
                    <p><strong>Path:</strong> Sequence of vertices where each consecutive pair is connected by an edge</p>
                    <p><strong>Cycle:</strong> Path that starts and ends at the same vertex</p>
                    <p><strong>Connected Graph:</strong> There exists a path between every pair of vertices</p>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-equals"></i> Handshaking Lemma</div>
                    <p>For any undirected graph \\( G = (V, E) \\):</p>
                    <p>\\[ \\sum_{v \\in V} deg(v) = 2|E| \\]</p>
                    <p><strong>Intuition:</strong> Each edge contributes 2 to the total degree sum (one for each endpoint).</p>
                    <p><strong>Corollary:</strong> The number of vertices with odd degree is always even.</p>
                </div>

                <h3>Special Types of Graphs</h3>

                <div class="definition">
                    <div class="definition-title">Complete Graph \\( K_n \\)</div>
                    <p>A graph where every pair of distinct vertices is connected by an edge.</p>
                    <p>Number of edges: \\( |E| = \\frac{n(n-1)}{2} \\)</p>
                </div>

                <div class="definition">
                    <div class="definition-title">Bipartite Graph</div>
                    <p>A graph whose vertices can be divided into two disjoint sets \\( U \\) and \\( V \\) such that every edge connects a vertex in \\( U \\) to one in \\( V \\).</p>
                    <p><strong>Application:</strong> Recommendation systems, matching problems</p>
                </div>

                <h2><i class="fas fa-tree"></i> Trees</h2>

                <div class="definition">
                    <div class="definition-title"><i class="fas fa-info-circle"></i> Definition: Tree</div>
                    <p>A <strong>tree</strong> is a connected acyclic graph.</p>
                    <p><strong>Equivalent definitions:</strong></p>
                    <ul>
                        <li>A connected graph with \\( n \\) vertices and \\( n-1 \\) edges</li>
                        <li>A graph where there is exactly one path between any two vertices</li>
                        <li>A connected graph where removing any edge disconnects it</li>
                        <li>An acyclic graph where adding any edge creates a cycle</li>
                    </ul>
                </div>

                <div class="theorem">
                    <div class="theorem-title"><i class="fas fa-calculator"></i> Tree Properties</div>
                    <p>For a tree \\( T \\) with \\( n \\) vertices:</p>
                    <ul>
                        <li>\\( T \\) has exactly \\( n - 1 \\) edges</li>
                        <li>There is a unique path between any two vertices</li>
                        <li>\\( T \\) is connected but removing any edge disconnects it</li>
                        <li>Adding any edge to \\( T \\) creates exactly one cycle</li>
                    </ul>
                </div>

                <div class="definition">
                    <div class="definition-title">Rooted Tree</div>
                    <p>A tree with one designated vertex as the <strong>root</strong>.</p>
                    <ul>
                        <li><strong>Parent:</strong> The vertex directly above in the hierarchy</li>
                        <li><strong>Child:</strong> The vertices directly below</li>
                        <li><strong>Leaf:</strong> A vertex with no children</li>
                        <li><strong>Height:</strong> Length of longest path from root to a leaf</li>
                        <li><strong>Depth:</strong> Distance from root to a vertex</li>
                    </ul>
                </div>

                <div class="definition">
                    <div class="definition-title">Binary Tree</div>
                    <p>A rooted tree where each vertex has at most 2 children (left and right).</p>
                    <p><strong>Full Binary Tree:</strong> Every vertex has 0 or 2 children</p>
                    <p><strong>Complete Binary Tree:</strong> All levels filled except possibly the last, filled left to right</p>
                    <p><strong>Perfect Binary Tree:</strong> All internal vertices have 2 children, all leaves at same depth</p>
                    <p>A perfect binary tree of height \\( h \\) has \\( 2^{h+1} - 1 \\) vertices.</p>
                </div>

                <h2><i class="fas fa-project-diagram"></i> Graph Representations</h2>

                <div class="definition">
                    <div class="definition-title">1. Adjacency Matrix</div>
                    <p>An \\( n \\times n \\) matrix \\( A \\) where \\( A[i][j] = 1 \\) if there's an edge from vertex \\( i \\) to \\( j \\).</p>
                    <p><strong>Pros:</strong> \\( O(1) \\) edge lookup, good for dense graphs</p>
                    <p><strong>Cons:</strong> \\( O(n^2) \\) space, inefficient for sparse graphs</p>
                </div>

                <div class="definition">
                    <div class="definition-title">2. Adjacency List</div>
                    <p>For each vertex, maintain a list of its neighbors.</p>
                    <p><strong>Pros:</strong> \\( O(|V| + |E|) \\) space, efficient for sparse graphs</p>
                    <p><strong>Cons:</strong> \\( O(deg(v)) \\) to check if edge exists</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-robot"></i> Neural Networks as Graphs</h3>
                    <p><strong>Deep Learning Architectures:</strong></p>
                    <ul>
                        <li><strong>Feedforward Networks:</strong> Directed Acyclic Graphs (DAGs)</li>
                        <li><strong>Recurrent Networks:</strong> Graphs with cycles (temporal connections)</li>
                        <li><strong>Residual Networks:</strong> Skip connections create shortcuts in the graph</li>
                        <li><strong>Graph Neural Networks:</strong> Operate directly on graph-structured data</li>
                    </ul>
                    <p><strong>Computational Graphs:</strong></p>
                    <ul>
                        <li>Nodes represent operations or variables</li>
                        <li>Edges represent data flow</li>
                        <li>Backpropagation = reverse traversal of the computation graph</li>
                        <li>Automatic differentiation frameworks (PyTorch, TensorFlow) build computation graphs</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Visualizations Tab -->
        <div id="graphs-visualizations" class="tab-content">
            <div class="visualization-container">
                <h3 class="viz-title">Interactive Graph Builder</h3>
                <p class="viz-description">Click to add nodes, drag to create edges, and explore graph properties</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <button onclick="createSampleGraph('complete')">Complete Graph (K₅)</button>
                    </div>
                    <div class="control-group">
                        <button onclick="createSampleGraph('tree')">Binary Tree</button>
                    </div>
                    <div class="control-group">
                        <button onclick="createSampleGraph('cycle')">Cycle Graph (C₆)</button>
                    </div>
                    <div class="control-group">
                        <button onclick="createSampleGraph('bipartite')">Bipartite Graph</button>
                    </div>
                    <div class="control-group">
                        <button onclick="createSampleGraph('neural')">Neural Network</button>
                    </div>
                    <div class="control-group">
                        <button onclick="clearGraph()">Clear</button>
                    </div>
                </div>

                <div id="graph-viz-canvas" class="viz-canvas" style="min-height: 500px;"></div>

                <div id="graph-stats" style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                    <strong>Graph Statistics:</strong>
                    <div id="graph-stats-content">Select a sample graph to see statistics</div>
                </div>
            </div>

            <div class="visualization-container" style="margin-top: 2rem;">
                <h3 class="viz-title">Tree Traversal Visualization</h3>
                <p class="viz-description">See how different tree traversal algorithms work</p>

                <div class="viz-controls">
                    <div class="control-group">
                        <button onclick="animateTraversal('bfs')">Breadth-First Search (BFS)</button>
                    </div>
                    <div class="control-group">
                        <button onclick="animateTraversal('dfs')">Depth-First Search (DFS)</button>
                    </div>
                    <div class="control-group">
                        <button onclick="animateTraversal('inorder')">In-Order Traversal</button>
                    </div>
                    <div class="control-group">
                        <button onclick="animateTraversal('preorder')">Pre-Order Traversal</button>
                    </div>
                    <div class="control-group">
                        <button onclick="animateTraversal('postorder')">Post-Order Traversal</button>
                    </div>
                </div>

                <div id="tree-traversal-viz" class="viz-canvas" style="min-height: 400px;"></div>
                <div id="traversal-sequence" style="margin-top: 1rem; padding: 1rem; background: #f3f4f6; border-radius: 8px;"></div>
            </div>
        </div>

        <!-- Algorithms Tab -->
        <div id="graphs-algorithms" class="tab-content">
            <div class="theory-section">
                <h2><i class="fas fa-cogs"></i> Graph Algorithms</h2>

                <h3>1. Breadth-First Search (BFS)</h3>

                <div class="definition">
                    <div class="definition-title">BFS Algorithm</div>
                    <p>Explores graph level by level, visiting all neighbors before moving to next level.</p>
                    <p><strong>Time Complexity:</strong> \\( O(|V| + |E|) \\)</p>
                    <p><strong>Space Complexity:</strong> \\( O(|V|) \\)</p>
                    <p><strong>Uses:</strong> Shortest path in unweighted graphs, level-order traversal</p>
                </div>

                <h3>2. Depth-First Search (DFS)</h3>

                <div class="definition">
                    <div class="definition-title">DFS Algorithm</div>
                    <p>Explores as far as possible along each branch before backtracking.</p>
                    <p><strong>Time Complexity:</strong> \\( O(|V| + |E|) \\)</p>
                    <p><strong>Space Complexity:</strong> \\( O(|V|) \\) (for recursion stack)</p>
                    <p><strong>Uses:</strong> Cycle detection, topological sorting, connected components</p>
                </div>

                <h3>3. Dijkstra's Algorithm</h3>

                <div class="definition">
                    <div class="definition-title">Dijkstra's Shortest Path</div>
                    <p>Finds shortest path from source to all vertices in weighted graph (non-negative weights).</p>
                    <p><strong>Time Complexity:</strong> \\( O((|V| + |E|) \\log |V|) \\) with binary heap</p>
                    <p><strong>Greedy approach:</strong> Always select vertex with minimum distance</p>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-pen"></i> Example: Dijkstra's Algorithm</div>
                    <p>Consider finding shortest path from vertex A:</p>
                    <pre style="background: #f3f4f6; padding: 1rem; border-radius: 4px;">
Graph:  A ---2--- B
        |         |
        1         3
        |         |
        C ---1--- D

Step 1: dist[A] = 0, all others = ∞
Step 2: Visit A, update: dist[B] = 2, dist[C] = 1
Step 3: Visit C (min dist), update: dist[D] = 2
Step 4: Visit B (min dist), update: dist[D] = min(2, 2+3) = 2
Step 5: Visit D

Shortest paths from A:
  A → B: 2
  A → C: 1
  A → D: 2
                    </pre>
                </div>

                <h3>4. Minimum Spanning Tree (MST)</h3>

                <div class="definition">
                    <div class="definition-title">Kruskal's Algorithm</div>
                    <p>Finds MST by greedily adding minimum weight edges that don't create cycles.</p>
                    <p><strong>Time Complexity:</strong> \\( O(|E| \\log |E|) \\)</p>
                    <p><strong>Uses Union-Find data structure for cycle detection</strong></p>
                </div>

                <div class="definition">
                    <div class="definition-title">Prim's Algorithm</div>
                    <p>Grows MST from starting vertex, always adding minimum weight edge to tree.</p>
                    <p><strong>Time Complexity:</strong> \\( O(|E| \\log |V|) \\) with binary heap</p>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-robot"></i> Graph Algorithms in ML</h3>
                    <ul>
                        <li><strong>PageRank:</strong> Uses graph structure to rank web pages (power iteration on graph)</li>
                        <li><strong>Community Detection:</strong> Finding clusters in social networks (spectral clustering)</li>
                        <li><strong>Knowledge Graph Embeddings:</strong> Learning representations (TransE, DistMult)</li>
                        <li><strong>Graph Neural Networks:</strong> Message passing = graph traversal + aggregation</li>
                        <li><strong>Neural Architecture Search:</strong> Searching graph of possible architectures</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Python Code Tab -->
        <div id="graphs-code" class="tab-content">
            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Graph Implementation</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">from collections import defaultdict, deque
from typing import List, Dict, Set
import heapq

class Graph:
    """Graph implementation using adjacency list"""

    def __init__(self, directed=False):
        self.graph = defaultdict(list)
        self.directed = directed
        self.weights = {}  # For weighted graphs

    def add_edge(self, u, v, weight=1):
        """Add edge from u to v with optional weight"""
        self.graph[u].append(v)
        self.weights[(u, v)] = weight

        if not self.directed:
            self.graph[v].append(u)
            self.weights[(v, u)] = weight

    def bfs(self, start):
        """Breadth-First Search from start vertex"""
        visited = set()
        queue = deque([start])
        visited.add(start)
        order = []

        while queue:
            vertex = queue.popleft()
            order.append(vertex)

            for neighbor in self.graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        return order

    def dfs(self, start, visited=None, order=None):
        """Depth-First Search from start vertex"""
        if visited is None:
            visited = set()
            order = []

        visited.add(start)
        order.append(start)

        for neighbor in self.graph[start]:
            if neighbor not in visited:
                self.dfs(neighbor, visited, order)

        return order

    def shortest_path_bfs(self, start, end):
        """Find shortest path using BFS (unweighted)"""
        if start == end:
            return [start]

        visited = {start}
        queue = deque([(start, [start])])

        while queue:
            vertex, path = queue.popleft()

            for neighbor in self.graph[vertex]:
                if neighbor == end:
                    return path + [neighbor]

                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, path + [neighbor]))

        return None  # No path found

    def dijkstra(self, start):
        """Dijkstra's algorithm for shortest paths"""
        distances = {vertex: float('infinity')
                    for vertex in self.graph}
        distances[start] = 0

        pq = [(0, start)]
        visited = set()

        while pq:
            current_dist, current = heapq.heappop(pq)

            if current in visited:
                continue

            visited.add(current)

            for neighbor in self.graph[current]:
                weight = self.weights.get((current, neighbor), 1)
                distance = current_dist + weight

                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    heapq.heappush(pq, (distance, neighbor))

        return distances

# Example usage
g = Graph()
g.add_edge('A', 'B', 2)
g.add_edge('A', 'C', 1)
g.add_edge('B', 'D', 3)
g.add_edge('C', 'D', 1)

print("BFS from A:", g.bfs('A'))
print("DFS from A:", g.dfs('A'))
print("Shortest path A → D:", g.shortest_path_bfs('A', 'D'))
print("Dijkstra from A:", g.dijkstra('A'))
</pre>
            </div>

            <div class="code-container">
                <div class="code-header">
                    <span class="code-title"><i class="fab fa-python"></i> Python: Graph Neural Network (Simplified)</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre class="code-block">import numpy as np

class SimpleGNN:
    """
    Simplified Graph Neural Network demonstrating message passing.
    This is a basic implementation for educational purposes.
    """

    def __init__(self, feature_dim, hidden_dim):
        self.feature_dim = feature_dim
        self.hidden_dim = hidden_dim

        # Initialize weights
        self.W_message = np.random.randn(feature_dim, hidden_dim) * 0.01
        self.W_update = np.random.randn(hidden_dim, hidden_dim) * 0.01

    def message_passing(self, node_features, adjacency_matrix):
        """
        One layer of graph convolution via message passing.

        Args:
            node_features: (n_nodes, feature_dim) node feature matrix
            adjacency_matrix: (n_nodes, n_nodes) adjacency matrix

        Returns:
            Updated node features
        """
        # Step 1: Transform node features
        messages = np.dot(node_features, self.W_message)

        # Step 2: Aggregate messages from neighbors
        # Multiply by adjacency matrix to sum neighbor features
        aggregated = np.dot(adjacency_matrix, messages)

        # Step 3: Update node representations
        updated_features = np.tanh(np.dot(aggregated, self.W_update))

        return updated_features

# Example: Graph with 4 nodes
n_nodes = 4
feature_dim = 3

# Node features (e.g., node embeddings)
node_features = np.random.randn(n_nodes, feature_dim)

# Adjacency matrix for graph:
# 0 -- 1
# |    |
# 2 -- 3
adjacency = np.array([
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 1, 0]
])

# Create GNN and apply one layer
gnn = SimpleGNN(feature_dim, hidden_dim=8)
updated_features = gnn.message_passing(node_features, adjacency)

print("Original features shape:", node_features.shape)
print("Updated features shape:", updated_features.shape)
print("\\nEach node's representation now incorporates its neighbors!")
</pre>
            </div>
        </div>

        <!-- ML Applications Tab -->
        <div id="graphs-ml" class="tab-content">
            <div class="theory-section">
                <h2><i class="fas fa-robot"></i> Graph Theory in Machine Learning & Deep Learning</h2>

                <div class="ml-application">
                    <h3><i class="fas fa-brain"></i> 1. Graph Neural Networks (GNNs)</h3>
                    <p><strong>Core Idea:</strong> Extend neural networks to graph-structured data</p>
                    <ul>
                        <li><strong>Message Passing:</strong> Nodes aggregate information from neighbors</li>
                        <li><strong>Graph Convolution:</strong> Generalization of convolution to graphs</li>
                        <li><strong>Applications:</strong> Social networks, molecules, knowledge graphs, recommendation</li>
                    </ul>
                    <p><strong>Popular GNN Architectures:</strong></p>
                    <ul>
                        <li><strong>GCN (Graph Convolutional Networks):</strong> Spectral approach to graph convolution</li>
                        <li><strong>GraphSAGE:</strong> Sampling and aggregating neighbor features</li>
                        <li><strong>GAT (Graph Attention Networks):</strong> Attention mechanism for neighbor weights</li>
                        <li><strong>GIN (Graph Isomorphism Networks):</strong> As powerful as WL test</li>
                    </ul>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-network-wired"></i> 2. Neural Network Architectures</h3>
                    <p><strong>Viewing Neural Nets as Graphs:</strong></p>
                    <ul>
                        <li><strong>Nodes:</strong> Neurons (computation units)</li>
                        <li><strong>Edges:</strong> Weights (connections between neurons)</li>
                        <li><strong>Directed:</strong> Information flows forward (or backward in backprop)</li>
                    </ul>
                    <p><strong>Architecture Examples:</strong></p>
                    <ul>
                        <li><strong>Feedforward (MLP):</strong> Layered DAG with dense connections</li>
                        <li><strong>CNN:</strong> Locally connected graph with weight sharing</li>
                        <li><strong>ResNet:</strong> Skip connections = graph shortcuts</li>
                        <li><strong>Transformer:</strong> Fully connected attention graph</li>
                    </ul>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-project-diagram"></i> 3. Knowledge Graphs</h3>
                    <p><strong>Structure:</strong> Multi-relational directed graphs</p>
                    <ul>
                        <li><strong>Nodes:</strong> Entities (people, places, concepts)</li>
                        <li><strong>Edges:</strong> Relationships (is_a, located_in, works_at)</li>
                        <li><strong>Applications:</strong> Question answering, semantic search, reasoning</li>
                    </ul>
                    <p><strong>Embedding Methods:</strong></p>
                    <ul>
                        <li><strong>TransE:</strong> Relations as translations in embedding space</li>
                        <li><strong>DistMult:</strong> Bilinear diagonal models for relations</li>
                        <li><strong>ComplEx:</strong> Complex embeddings for asymmetric relations</li>
                    </ul>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-users"></i> 4. Social Network Analysis</h3>
                    <p><strong>Graph Metrics for Networks:</strong></p>
                    <ul>
                        <li><strong>Centrality:</strong> Identifying influential nodes (PageRank, betweenness)</li>
                        <li><strong>Community Detection:</strong> Finding clusters (Louvain, spectral clustering)</li>
                        <li><strong>Link Prediction:</strong> Predicting future connections (GNNs, similarity measures)</li>
                    </ul>
                </div>

                <div class="ml-application">
                    <h3><i class="fas fa-flask"></i> 5. Molecular Property Prediction</h3>
                    <p><strong>Molecules as Graphs:</strong></p>
                    <ul>
                        <li><strong>Nodes:</strong> Atoms (with features: element, charge, etc.)</li>
                        <li><strong>Edges:</strong> Chemical bonds (single, double, triple)</li>
                        <li><strong>Task:</strong> Predict molecular properties (toxicity, solubility, binding affinity)</li>
                        <li><strong>Methods:</strong> GNNs significantly outperform traditional descriptors</li>
                    </ul>
                </div>

                <div class="example">
                    <div class="example-title"><i class="fas fa-lightbulb"></i> Real-World Application: Node Classification</div>
                    <p><strong>Problem:</strong> Given a social network where some users are labeled (bot vs. human), classify unlabeled users.</p>
                    <p><strong>Approach with GNN:</strong></p>
                    <ol>
                        <li>Represent each user as a node with features (post frequency, followers, etc.)</li>
                        <li>Edges represent friendships/follows</li>
                        <li>Apply GNN to propagate information from labeled to unlabeled nodes</li>
                        <li>Classification based on aggregated neighborhood information</li>
                    </ol>
                    <p><strong>Intuition:</strong> "You are the average of your friends" - nodes with similar neighbors likely have similar labels.</p>
                </div>
            </div>
        </div>

        <!-- Exercises Tab -->
        <div id="graphs-exercises" class="tab-content">
            <div class="exercise-list">
                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 1</h4>
                        <span class="exercise-difficulty difficulty-easy">Easy</span>
                    </div>
                    <p class="exercise-text">
                        A complete graph \\( K_n \\) has 45 edges. How many vertices does it have?
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>For a complete graph: \\( |E| = \\frac{n(n-1)}{2} \\)</p>
                        <p>\\[ 45 = \\frac{n(n-1)}{2} \\]</p>
                        <p>\\[ 90 = n(n-1) \\]</p>
                        <p>\\[ n^2 - n - 90 = 0 \\]</p>
                        <p>\\[ (n-10)(n+9) = 0 \\]</p>
                        <p>Since \\( n > 0 \\), we have \\( n = 10 \\) vertices.</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 2</h4>
                        <span class="exercise-difficulty difficulty-medium">Medium</span>
                    </div>
                    <p class="exercise-text">
                        Prove that in any graph, the number of vertices with odd degree is even.
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>By the Handshaking Lemma: \\( \\sum_{v \\in V} deg(v) = 2|E| \\)</p>
                        <p>The right side is even, so the left side must be even.</p>
                        <p>Let \\( O \\) be the set of vertices with odd degree and \\( E \\) be the set with even degree.</p>
                        <p>\\[ \\sum_{v \\in O} deg(v) + \\sum_{v \\in E} deg(v) = 2|E| \\]</p>
                        <p>The second sum is even (sum of even numbers), so the first sum must be even.</p>
                        <p>Since the sum of odd numbers is even only if there's an even count of them, \\( |O| \\) must be even.</p>
                    </div>
                </div>

                <div class="exercise-card">
                    <div class="exercise-header">
                        <h4>Exercise 3</h4>
                        <span class="exercise-difficulty difficulty-hard">Hard</span>
                    </div>
                    <p class="exercise-text">
                        Show that a simple graph with \\( n \\) vertices and more than \\( \\frac{(n-1)(n-2)}{2} \\) edges must be connected.
                    </p>
                    <button class="show-solution" onclick="toggleSolution(this)">Show Solution</button>
                    <div class="solution-container">
                        <p>Proof by contradiction: Assume the graph is disconnected.</p>
                        <p>Then it has at least 2 connected components. Let one component have \\( k \\) vertices where \\( 1 \\leq k \\leq n-1 \\).</p>
                        <p>The maximum edges with components of size \\( k \\) and \\( n-k \\) is:</p>
                        <p>\\[ \\frac{k(k-1)}{2} + \\frac{(n-k)(n-k-1)}{2} \\]</p>
                        <p>This is maximized when \\( k = 1 \\) or \\( k = n-1 \\):</p>
                        <p>\\[ \\frac{0 + (n-1)(n-2)}{2} = \\frac{(n-1)(n-2)}{2} \\]</p>
                        <p>But we have more than \\( \\frac{(n-1)(n-2)}{2} \\) edges, contradiction! Therefore, the graph must be connected.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Quiz Tab -->
        <div id="graphs-quiz" class="tab-content">
            <div id="graphs-quiz-container"></div>
        </div>
    </div>
    `;

    container.innerHTML = content;

    // Initialize quiz
    setTimeout(() => {
        createQuiz('graphs', 'graphs-quiz-container');
    }, 100);

    // Initialize visualizations
    initGraphVisualizations();
}

function initGraphVisualizations() {
    let currentGraphViz = null;

    window.createSampleGraph = function(type) {
        const container = document.getElementById('graph-viz-canvas');
        if (!container) return;

        let nodes = [];
        let edges = [];
        let stats = '';

        switch(type) {
            case 'complete':
                // K5 - complete graph with 5 nodes
                nodes = Array.from({length: 5}, (_, i) => ({
                    id: i,
                    label: String.fromCharCode(65 + i)
                }));
                for (let i = 0; i < 5; i++) {
                    for (let j = i + 1; j < 5; j++) {
                        edges.push({source: i, target: j});
                    }
                }
                stats = 'Complete Graph K₅: 5 vertices, 10 edges, All vertices have degree 4';
                break;

            case 'tree':
                // Binary tree
                nodes = Array.from({length: 7}, (_, i) => ({
                    id: i,
                    label: String(i + 1)
                }));
                edges = [
                    {source: 0, target: 1}, {source: 0, target: 2},
                    {source: 1, target: 3}, {source: 1, target: 4},
                    {source: 2, target: 5}, {source: 2, target: 6}
                ];
                stats = 'Binary Tree: 7 vertices, 6 edges, Height = 2';
                break;

            case 'cycle':
                // C6 - cycle with 6 nodes
                nodes = Array.from({length: 6}, (_, i) => ({
                    id: i,
                    label: String.fromCharCode(65 + i)
                }));
                for (let i = 0; i < 6; i++) {
                    edges.push({source: i, target: (i + 1) % 6});
                }
                stats = 'Cycle Graph C₆: 6 vertices, 6 edges, All vertices have degree 2';
                break;

            case 'bipartite':
                // Bipartite graph K(3,3)
                nodes = Array.from({length: 6}, (_, i) => ({
                    id: i,
                    label: String.fromCharCode(65 + i),
                    color: i < 3 ? '#2563eb' : '#7c3aed'
                }));
                for (let i = 0; i < 3; i++) {
                    for (let j = 3; j < 6; j++) {
                        edges.push({source: i, target: j});
                    }
                }
                stats = 'Bipartite Graph K₃,₃: 6 vertices (2 sets of 3), 9 edges';
                break;

            case 'neural':
                // Simple neural network
                nodes = [
                    {id: 0, label: 'I₁', color: '#10b981'},
                    {id: 1, label: 'I₂', color: '#10b981'},
                    {id: 2, label: 'H₁', color: '#2563eb'},
                    {id: 3, label: 'H₂', color: '#2563eb'},
                    {id: 4, label: 'H₃', color: '#2563eb'},
                    {id: 5, label: 'O', color: '#ef4444'}
                ];
                edges = [
                    {source: 0, target: 2}, {source: 0, target: 3}, {source: 0, target: 4},
                    {source: 1, target: 2}, {source: 1, target: 3}, {source: 1, target: 4},
                    {source: 2, target: 5}, {source: 3, target: 5}, {source: 4, target: 5}
                ];
                stats = 'Neural Network: 2 inputs (green), 3 hidden (blue), 1 output (red)';
                break;
        }

        // Create visualization
        currentGraphViz = new GraphVisualization('graph-viz-canvas', 800, 500);
        currentGraphViz.setGraph(nodes, edges).render();

        // Update stats
        document.getElementById('graph-stats-content').textContent = stats;
    };

    window.clearGraph = function() {
        const container = document.getElementById('graph-viz-canvas');
        if (container) {
            container.innerHTML = '';
            document.getElementById('graph-stats-content').textContent = 'Select a sample graph to see statistics';
        }
    };

    window.animateTraversal = function(type) {
        // Placeholder for traversal animation
        const container = document.getElementById('traversal-sequence');
        if (container) {
            container.innerHTML = `<strong>${type.toUpperCase()} Traversal:</strong> Animation would show the order of visiting nodes. Implementation requires step-by-step visualization.`;
        }
    };

    // Create initial graph
    setTimeout(() => {
        if (typeof createSampleGraph === 'function') {
            createSampleGraph('complete');
        }
    }, 200);
}
