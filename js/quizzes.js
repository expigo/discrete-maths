// Quiz functionality for Discrete Math modules

class Quiz {
    constructor(questions, containerId) {
        this.questions = questions;
        this.containerId = containerId;
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.submitted = false;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        container.innerHTML = '';
        container.className = 'quiz-container';

        this.questions.forEach((question, index) => {
            const questionCard = this.createQuestionCard(question, index);
            container.appendChild(questionCard);
        });

        const submitButton = document.createElement('button');
        submitButton.className = 'submit-quiz';
        submitButton.textContent = 'Submit Quiz';
        submitButton.onclick = () => this.submitQuiz();
        container.appendChild(submitButton);
    }

    createQuestionCard(question, index) {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${index}`;

        const questionNumber = document.createElement('div');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Question ${index + 1} of ${this.questions.length}`;
        card.appendChild(questionNumber);

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.innerHTML = question.question;
        card.appendChild(questionText);

        const optionsList = document.createElement('ul');
        optionsList.className = 'options-list';

        question.options.forEach((option, optionIndex) => {
            const optionItem = document.createElement('li');
            optionItem.className = 'option-item';
            optionItem.innerHTML = option;
            optionItem.dataset.questionIndex = index;
            optionItem.dataset.optionIndex = optionIndex;

            optionItem.onclick = (e) => this.selectOption(e, index, optionIndex);
            optionsList.appendChild(optionItem);
        });

        card.appendChild(optionsList);

        if (question.explanation) {
            const explanation = document.createElement('div');
            explanation.className = 'question-explanation';
            explanation.style.display = 'none';
            explanation.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            card.appendChild(explanation);
        }

        return card;
    }

    selectOption(event, questionIndex, optionIndex) {
        if (this.submitted) return;

        // Remove selection from all options in this question
        const questionCard = document.getElementById(`question-${questionIndex}`);
        const options = questionCard.querySelectorAll('.option-item');
        options.forEach(opt => opt.classList.remove('selected'));

        // Add selection to clicked option
        event.target.classList.add('selected');

        // Store user's answer
        this.userAnswers[questionIndex] = optionIndex;
    }

    submitQuiz() {
        if (this.submitted) return;

        // Check if all questions are answered
        if (this.userAnswers.length < this.questions.length) {
            alert('Please answer all questions before submitting.');
            return;
        }

        this.submitted = true;
        this.score = 0;

        // Grade the quiz
        this.questions.forEach((question, index) => {
            const questionCard = document.getElementById(`question-${index}`);
            const options = questionCard.querySelectorAll('.option-item');
            const userAnswer = this.userAnswers[index];
            const correctAnswer = question.correct;

            options.forEach((option, optionIndex) => {
                if (optionIndex === correctAnswer) {
                    option.classList.add('correct');
                }
                if (optionIndex === userAnswer && userAnswer !== correctAnswer) {
                    option.classList.add('incorrect');
                }
            });

            if (userAnswer === correctAnswer) {
                this.score++;
            }

            // Show explanation
            const explanation = questionCard.querySelector('.question-explanation');
            if (explanation) {
                explanation.style.display = 'block';
            }
        });

        // Show results
        this.showResults();
    }

    showResults() {
        const container = document.getElementById(this.containerId);
        const percentage = Math.round((this.score / this.questions.length) * 100);

        let feedback = '';
        if (percentage === 100) {
            feedback = 'Perfect score! Excellent work! 🎉';
        } else if (percentage >= 80) {
            feedback = 'Great job! You have a strong understanding! 👏';
        } else if (percentage >= 60) {
            feedback = 'Good effort! Review the explanations to improve. 📚';
        } else {
            feedback = 'Keep studying! Review the material and try again. 💪';
        }

        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'quiz-results';
        resultsDiv.innerHTML = `
            <div class="quiz-score">${this.score} / ${this.questions.length}</div>
            <div class="quiz-feedback">${feedback}</div>
            <div class="quiz-percentage">${percentage}%</div>
        `;

        container.insertBefore(resultsDiv, container.firstChild);

        // Hide submit button
        const submitButton = container.querySelector('.submit-quiz');
        if (submitButton) {
            submitButton.style.display = 'none';
        }

        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    reset() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
        this.submitted = false;
        this.render();
    }
}

// Sample quiz questions for different modules
const sampleQuizzes = {
    logic: [
        {
            question: 'Which of the following is a tautology?',
            options: [
                '\\( p \\land \\neg p \\)',
                '\\( p \\lor \\neg p \\)',
                '\\( p \\rightarrow \\neg p \\)',
                '\\( p \\land q \\)'
            ],
            correct: 1,
            explanation: 'A tautology is always true. \\( p \\lor \\neg p \\) is always true regardless of the truth value of \\( p \\).'
        },
        {
            question: 'What is the contrapositive of \\( p \\rightarrow q \\)?',
            options: [
                '\\( q \\rightarrow p \\)',
                '\\( \\neg p \\rightarrow \\neg q \\)',
                '\\( \\neg q \\rightarrow \\neg p \\)',
                '\\( p \\rightarrow \\neg q \\)'
            ],
            correct: 2,
            explanation: 'The contrapositive of \\( p \\rightarrow q \\) is \\( \\neg q \\rightarrow \\neg p \\), which is logically equivalent to the original statement.'
        },
        {
            question: 'Which proof technique assumes the negation of what you want to prove?',
            options: [
                'Direct proof',
                'Proof by contradiction',
                'Proof by induction',
                'Proof by construction'
            ],
            correct: 1,
            explanation: 'In proof by contradiction, we assume the negation of the statement we want to prove and show that this leads to a contradiction.'
        }
    ],

    sets: [
        {
            question: 'If \\( A = \\{1, 2, 3\\} \\) and \\( B = \\{2, 3, 4\\} \\), what is \\( A \\cap B \\)?',
            options: [
                '\\( \\{1, 2, 3, 4\\} \\)',
                '\\( \\{2, 3\\} \\)',
                '\\( \\{1\\} \\)',
                '\\( \\{4\\} \\)'
            ],
            correct: 1,
            explanation: 'The intersection \\( A \\cap B \\) contains elements that are in both sets: \\( \\{2, 3\\} \\).'
        },
        {
            question: 'What is the cardinality of the power set of \\( \\{a, b, c\\} \\)?',
            options: [
                '3',
                '6',
                '8',
                '9'
            ],
            correct: 2,
            explanation: 'The power set of a set with \\( n \\) elements has \\( 2^n \\) elements. For \\( n = 3 \\), we get \\( 2^3 = 8 \\).'
        }
    ],

    graphs: [
        {
            question: 'What is the maximum number of edges in a simple undirected graph with \\( n \\) vertices?',
            options: [
                '\\( n \\)',
                '\\( n^2 \\)',
                '\\( \\frac{n(n-1)}{2} \\)',
                '\\( n - 1 \\)'
            ],
            correct: 2,
            explanation: 'In a complete graph with \\( n \\) vertices, each vertex connects to \\( n-1 \\) other vertices. The total is \\( \\frac{n(n-1)}{2} \\) edges.'
        },
        {
            question: 'A tree with \\( n \\) vertices has how many edges?',
            options: [
                '\\( n \\)',
                '\\( n - 1 \\)',
                '\\( n + 1 \\)',
                '\\( 2n \\)'
            ],
            correct: 1,
            explanation: 'A tree with \\( n \\) vertices always has exactly \\( n - 1 \\) edges.'
        }
    ],

    probability: [
        {
            question: 'If two events \\( A \\) and \\( B \\) are independent, then \\( P(A \\cap B) = \\)?',
            options: [
                '\\( P(A) + P(B) \\)',
                '\\( P(A) \\cdot P(B) \\)',
                '\\( P(A) - P(B) \\)',
                '\\( \\frac{P(A)}{P(B)} \\)'
            ],
            correct: 1,
            explanation: 'For independent events, the probability of both occurring is the product: \\( P(A \\cap B) = P(A) \\cdot P(B) \\).'
        },
        {
            question: 'What is the expected value of a fair six-sided die?',
            options: [
                '3',
                '3.5',
                '4',
                '6'
            ],
            correct: 1,
            explanation: 'The expected value is \\( E[X] = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5 \\).'
        }
    ]
};

// Function to create a quiz for a specific module
function createQuiz(moduleName, containerId) {
    const questions = sampleQuizzes[moduleName];
    if (!questions) {
        console.error(`No quiz questions found for module: ${moduleName}`);
        return null;
    }

    const quiz = new Quiz(questions, containerId);
    quiz.render();

    // Re-render MathJax after quiz is rendered
    if (window.MathJax) {
        setTimeout(() => {
            MathJax.typesetPromise().catch((err) => console.log('MathJax error:', err));
        }, 100);
    }

    return quiz;
}
