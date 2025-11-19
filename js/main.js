// Main JavaScript for Discrete Math Website

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Scroll to top button (optional)
    const scrollBtn = createScrollToTopButton();
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavOnScroll);

    // Initialize MathJax
    if (window.MathJax) {
        MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
    }
});

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    `;

    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });

    return button;
}

function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Module Modal Functions
function openModule(moduleId) {
    const modal = document.getElementById('module-modal');
    const container = document.getElementById('module-content-container');

    // Show loading state
    container.innerHTML = '<div class="loading">Loading module content...</div>';
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Load module content
    loadModuleContent(moduleId, container);
}

function closeModule() {
    const modal = document.getElementById('module-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('module-modal');
    if (event.target === modal) {
        closeModule();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModule();
    }
});

// Load module content dynamically
async function loadModuleContent(moduleId, container) {
    try {
        // Call the module-specific initialization function
        const moduleInitFunctions = {
            'logic': initLogicModule,
            'sets': initSetsModule,
            'combinatorics': initCombinatoricsModule,
            'graphs': initGraphsModule,
            'number-theory': initNumberTheoryModule,
            'probability': initProbabilityModule,
            'information': initInformationModule,
            'boolean': initBooleanModule,
            'algorithms': initAlgorithmsModule
        };

        if (moduleInitFunctions[moduleId]) {
            moduleInitFunctions[moduleId](container);
        } else {
            container.innerHTML = '<div class="module-container"><p>Module content coming soon!</p></div>';
        }

        // Re-render MathJax for the new content
        if (window.MathJax) {
            MathJax.typesetPromise([container]).catch((err) => console.log('MathJax error:', err));
        }
    } catch (error) {
        console.error('Error loading module:', error);
        container.innerHTML = '<div class="module-container"><p>Error loading module content.</p></div>';
    }
}

// Tab switching functionality
function switchTab(tabName, event) {
    // Hide all tab contents
    const tabContents = event.target.closest('.module-container').querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = event.target.closest('.module-tabs').querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab and mark button as active
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    event.target.classList.add('active');

    // Re-render MathJax for the new content
    if (window.MathJax && selectedTab) {
        MathJax.typesetPromise([selectedTab]).catch((err) => console.log('MathJax error:', err));
    }
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.closest('.code-container').querySelector('.code-block');
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = 'var(--success-color)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = 'var(--primary-color)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
    });
}

// Toggle solution visibility
function toggleSolution(button) {
    const solutionContainer = button.nextElementSibling;
    if (solutionContainer && solutionContainer.classList.contains('solution-container')) {
        solutionContainer.classList.toggle('visible');
        button.textContent = solutionContainer.classList.contains('visible') ? 'Hide Solution' : 'Show Solution';
    }
}

// Run Python code (simulated - in production, you'd use a backend API)
function runCode(button, codeId) {
    const outputDiv = button.nextElementSibling;
    const codeBlock = button.closest('.code-container').querySelector('.code-block');
    const code = codeBlock.textContent;

    // Show loading state
    outputDiv.textContent = 'Running code...';
    outputDiv.style.display = 'block';

    // Simulate code execution (in real implementation, send to backend)
    setTimeout(() => {
        outputDiv.textContent = `Code execution simulated.\nTo run actual Python code, integrate with a backend service like:\n- Jupyter kernels\n- PyScript\n- Custom Python API\n\nCode to execute:\n${code}`;
    }, 1000);
}

// Utility function to create HTML elements
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

// Format mathematical expressions
function formatMath(text) {
    // Convert LaTeX delimiters for inline and display math
    return text
        .replace(/\$\$(.*?)\$\$/g, '\\[$1\\]')  // Display math
        .replace(/\$(.*?)\$/g, '\\($1\\)');      // Inline math
}

// Module initialization placeholders (will be implemented in module-specific files)
function initLogicModule(container) { container.innerHTML = '<div class="module-container"><p>Logic module loading...</p></div>'; }
function initSetsModule(container) { container.innerHTML = '<div class="module-container"><p>Sets module loading...</p></div>'; }
function initCombinatoricsModule(container) { container.innerHTML = '<div class="module-container"><p>Combinatorics module loading...</p></div>'; }
function initGraphsModule(container) { container.innerHTML = '<div class="module-container"><p>Graphs module loading...</p></div>'; }
function initNumberTheoryModule(container) { container.innerHTML = '<div class="module-container"><p>Number Theory module loading...</p></div>'; }
function initProbabilityModule(container) { container.innerHTML = '<div class="module-container"><p>Probability module loading...</p></div>'; }
function initInformationModule(container) { container.innerHTML = '<div class="module-container"><p>Information Theory module loading...</p></div>'; }
function initBooleanModule(container) { container.innerHTML = '<div class="module-container"><p>Boolean Algebra module loading...</p></div>'; }
function initAlgorithmsModule(container) { container.innerHTML = '<div class="module-container"><p>Algorithms module loading...</p></div>'; }
