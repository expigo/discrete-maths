# Discrete Mathematics for Machine Learning

A comprehensive, interactive learning platform for mastering discrete mathematics with a focus on applications in Machine Learning, Deep Learning, and Data Science.

## 🎯 Overview

This website provides a rigorous and interactive approach to learning discrete mathematics, specifically designed for aspiring researchers and practitioners in ML/DL/Data Science. Each module combines theoretical depth with practical applications, interactive visualizations, Python code examples, and hands-on exercises.

## ✨ Features

- **📚 Rigorous Theory**: Complete mathematical definitions, theorems, and proofs
- **📊 Interactive Visualizations**: Dynamic graphics using D3.js and Plotly to build intuition
- **🐍 Python Code Examples**: Practical implementations you can study and modify
- **🤖 ML/DL Applications**: Real-world connections to machine learning and deep learning
- **✅ Exercises & Quizzes**: Practice problems with immediate feedback
- **🔗 External Resources**: Curated links to books, courses, and tools

## 📖 Course Modules

### 1. Logic & Proofs ✅
- Propositional and predicate logic
- Logical connectives and equivalences
- Proof techniques (direct, contrapositive, contradiction, induction)
- Applications to algorithm correctness and formal verification
- **Status**: ✅ Complete with full content, visualizations, and quizzes

### 2. Set Theory
- Sets, operations, and relations
- Functions and mappings
- Cardinality and countability
- Applications to probability spaces and data structures
- **Status**: 🚧 Coming soon

### 3. Combinatorics
- Counting principles
- Permutations and combinations
- Pigeonhole principle
- Generating functions
- Applications to probability and algorithm analysis
- **Status**: 🚧 Coming soon

### 4. Graph Theory ✅
- Graph fundamentals and representations
- Trees and their properties
- Graph algorithms (BFS, DFS, Dijkstra, MST)
- Graph Neural Networks (GNNs)
- Applications to neural network architectures and social networks
- **Status**: ✅ Complete with extensive ML/DL applications

### 5. Number Theory
- Divisibility and primes
- Modular arithmetic
- Cryptography applications
- Applications to hashing and random number generation
- **Status**: 🚧 Coming soon

### 6. Probability Theory
- Probability spaces and axioms
- Random variables and distributions
- Expectation and variance
- Central limit theorem
- Applications throughout machine learning
- **Status**: 🚧 Coming soon

### 7. Information Theory
- Entropy and mutual information
- KL divergence and cross-entropy
- Shannon's theorems
- Applications to loss functions and model compression
- **Status**: 🚧 Coming soon

### 8. Boolean Algebra
- Boolean functions and operations
- Logic gates and circuits
- Karnaugh maps
- Circuit optimization
- Applications to neural network binarization
- **Status**: 🚧 Coming soon

### 9. Algorithms & Complexity
- Algorithm analysis and Big-O notation
- P vs NP and complexity classes
- Optimization techniques
- Applications to ML algorithm efficiency
- **Status**: 🚧 Coming soon

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of algebra and programming
- Python knowledge helpful but not required

### Running Locally

1. Clone the repository:
```bash
git clone <repository-url>
cd discrete-maths
```

2. Open the website:
```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

3. Start learning by clicking on any module!

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization Libraries**:
  - [D3.js](https://d3js.org/) - Data-driven visualizations
  - [Plotly.js](https://plotly.com/javascript/) - Interactive charts
- **Math Rendering**: [MathJax](https://www.mathjax.org/) - Beautiful LaTeX rendering
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Styling**: Custom CSS with CSS Grid and Flexbox

## 📁 Project Structure

```
discrete-maths/
├── index.html                 # Main entry point
├── styles/
│   ├── main.css              # Global styles
│   └── modules.css           # Module-specific styles
├── js/
│   ├── main.js               # Core functionality
│   ├── quizzes.js            # Quiz system
│   └── visualizations.js     # Visualization utilities
├── modules/
│   ├── logic/                # Logic & Proofs module
│   │   ├── logic.js
│   │   ├── python/
│   │   └── visualizations/
│   ├── graphs/               # Graph Theory module
│   │   ├── graphs.js
│   │   ├── python/
│   │   └── visualizations/
│   ├── sets/                 # Set Theory module
│   ├── combinatorics/        # Combinatorics module
│   ├── number-theory/        # Number Theory module
│   ├── probability/          # Probability module
│   ├── information/          # Information Theory module
│   ├── boolean/              # Boolean Algebra module
│   └── algorithms/           # Algorithms & Complexity module
└── README.md
```

## 🎓 Learning Path

### For ML/DL Beginners
1. Start with **Logic & Proofs** to build reasoning skills
2. Move to **Set Theory** for foundational concepts
3. Study **Probability Theory** for ML foundations
4. Explore **Graph Theory** for neural networks
5. Learn **Information Theory** for understanding loss functions

### For Researchers
1. **Graph Theory** → Graph Neural Networks and network analysis
2. **Information Theory** → Model compression and optimization
3. **Algorithms & Complexity** → Understanding computational limits
4. **Combinatorics** → Advanced counting in ML problems

## 📊 Interactive Features

### Visualizations
- Truth table generators with interactive inputs
- Graph builders with drag-and-drop functionality
- Tree traversal animations
- Probability distribution plotters
- Network architecture visualizers

### Code Examples
- Syntax-highlighted Python code
- Copy-to-clipboard functionality
- Runnable code snippets (with backend integration)
- Real-world ML applications

### Quizzes
- Multiple-choice questions with immediate feedback
- Detailed explanations for each answer
- Progress tracking
- Difficulty levels: Easy, Medium, Hard

## 🤝 Contributing

Contributions are welcome! This is an educational project aimed at helping the ML/DL community.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-module`)
3. Add your content (follow existing module structure)
4. Test thoroughly
5. Submit a pull request

### Content Guidelines
- Maintain rigorous mathematical accuracy
- Include ML/DL applications where relevant
- Provide interactive examples
- Add Python code with proper documentation
- Include visualizations for complex concepts

## 📚 Additional Resources

### Books
- *Mathematics for Computer Science* (MIT OpenCourseWare)
- *Introduction to Graph Theory* by Douglas West
- *Information Theory, Inference, and Learning Algorithms* by David MacKay
- *Deep Learning* by Goodfellow, Bengio, and Courville
- *Mathematics for Machine Learning* by Deisenroth, Faisal, and Ong

### Online Courses
- MIT 6.042J: Mathematics for Computer Science
- Coursera: Discrete Mathematics Specialization
- Khan Academy: Algorithms and Graph Theory

### Tools
- [WolframAlpha](https://www.wolframalpha.com/) - Computational engine
- [Graph Editor](https://csacademy.com/app/graph_editor/) - Visual graph tool
- [Google Colab](https://colab.research.google.com/) - Python environment
- [NetworkX](https://networkx.org/) - Python graph library

## 📝 License

This project is created for educational purposes. Feel free to use, modify, and distribute for learning.

## 🙏 Acknowledgments

- Inspired by the need for practical discrete math education in ML/DL
- Built with modern web technologies for accessibility
- Designed for self-paced learning and research

## 📞 Contact & Feedback

If you find this resource helpful or have suggestions for improvement:
- Open an issue on GitHub
- Submit a pull request
- Share with fellow learners

---

**Happy Learning! 🚀**

*Master the mathematical foundations of Machine Learning and Deep Learning through rigorous theory and hands-on practice.*
