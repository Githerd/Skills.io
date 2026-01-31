document.addEventListener('DOMContentLoaded', function() {
    // Test Questions Data
    const questions = [
        {
            id: 1,
            question: "When you see a recurring minor issue at work (like a 'mug in the sink'), what's your first instinct?",
            options: [
                { value: 0, label: "Ignore it", description: "Not my job/too small to matter" },
                { value: 1, label: "Complain about it", description: "Mention it to colleagues but don't act" },
                { value: 2, label: "Fix it this once", description: "Solve the immediate problem" },
                { value: 3, label: "Fix it & find the root cause", description: "Prevent it from happening again" }
            ]
        },
        {
            id: 2,
            question: "During a team meeting when a problem arises, you typically:",
            options: [
                { value: 0, label: "Stay quiet", description: "Wait for someone else to address it" },
                { value: 1, label: "Identify who's responsible", description: "Point out whose problem it is" },
                { value: 2, label: "Suggest a quick fix", description: "Offer an immediate solution" },
                { value: 3, label: "Facilitate a solution process", description: "Guide the team to find a systemic fix" }
            ]
        },
        {
            id: 3,
            question: "When you complete a task ahead of schedule, you usually:",
            options: [
                { value: 0, label: "Take a break", description: "Rest until the next assignment" },
                { value: 1, label: "Ask for more work", description: "Request additional tasks" },
                { value: 2, label: "Help teammates", description: "Assist others with their workload" },
                { value: 3, label: "Improve processes", description: "Look for ways to make things more efficient" }
            ]
        },
        {
            id: 4,
            question: "Regarding documentation and knowledge sharing:",
            options: [
                { value: 0, label: "I do the minimum required", description: "Only document when explicitly asked" },
                { value: 1, label: "I document my own work", description: "Keep notes for my own reference" },
                { value: 2, label: "I share with my immediate team", description: "Document for colleagues who ask" },
                { value: 3, label: "I systematize knowledge", description: "Create resources for current & future teams" }
            ]
        },
        {
            id: 5,
            question: "When faced with a failure or setback, you:",
            options: [
                { value: 0, label: "Avoid discussing it", description: "Move on quickly and don't look back" },
                { value: 1, label: "Analyze what went wrong", description: "Understand the immediate causes" },
                { value: 2, label: "Learn and adjust", description: "Apply lessons to avoid repeating" },
                { value: 3, label: "Share lessons learned", description: "Document and communicate insights to help others" }
            ]
        },
        {
            id: 6,
            question: "Your approach to new team members is:",
            options: [
                { value: 0, label: "Let them figure it out", description: "They should learn on their own" },
                { value: 1, label: "Answer when asked", description: "Help if they come to me" },
                { value: 2, label: "Offer basic guidance", description: "Share essential information" },
                { value: 3, label: "Create onboarding systems", description: "Build structures to help them succeed" }
            ]
        },
        {
            id: 7,
            question: "When you spot inefficiency in a process:",
            options: [
                { value: 0, label: "Work around it", description: "Find my own way to get things done" },
                { value: 1, label: "Mention it to my manager", description: "Point it out to someone in charge" },
                { value: 2, label: "Propose improvements", description: "Suggest specific changes" },
                { value: 3, label: "Prototype a solution", description: "Test a better approach and share results" }
            ]
        },
        {
            id: 8,
            question: "Regarding credit for team successes:",
            options: [
                { value: 0, label: "Focus on my contribution", description: "Ensure my work is recognized" },
                { value: 1, label: "Credit the team generally", description: "Acknowledge collective effort" },
                { value: 2, label: "Highlight key contributors", description: "Specifically name those who helped" },
                { value: 3, label: "Document everyone's role", description: "Create systems to track and recognize all contributions" }
            ]
        },
        {
            id: 9,
            question: "Your response to workplace conflict is:",
            options: [
                { value: 0, label: "Avoid it", description: "Stay out of disagreements" },
                { value: 1, label: "Take sides", description: "Support the position I agree with" },
                { value: 2, label: "Mediate", description: "Help find common ground" },
                { value: 3, label: "Address systemic causes", description: "Fix the processes that create conflict" }
            ]
        },
        {
            id: 10,
            question: "When planning your work, you prioritize:",
            options: [
                { value: 0, label: "My immediate tasks", description: "What's directly in front of me" },
                { value: 1, label: "Team deadlines", description: "Group priorities and timelines" },
                { value: 2, label: "Long-term goals", description: "Strategic objectives" },
                { value: 3, label: "System sustainability", description: "Building capacity for future success" }
            ]
        },
        {
            id: 11,
            question: "Regarding feedback:",
            options: [
                { value: 0, label: "I rarely give or seek it", description: "Prefer to work independently" },
                { value: 1, label: "I give feedback when asked", description: "Respond to requests" },
                { value: 2, label: "I proactively share feedback", description: "Offer constructive input regularly" },
                { value: 3, label: "I create feedback systems", description: "Build processes for continuous improvement" }
            ]
        },
        {
            id: 12,
            question: "Your attitude toward unassigned tasks:",
            options: [
                { value: 0, label: "Not my responsibility", description: "Wait for assignment" },
                { value: 1, label: "Do it if asked", description: "Complete if specifically requested" },
                { value: 2, label: "Take initiative", description: "Step up when I see a need" },
                { value: 3, label: "Assign systematically", description: "Create clear ownership systems" }
            ]
        },
        {
            id: 13,
            question: "When you encounter a knowledge gap:",
            options: [
                { value: 0, label: "Work around it", description: "Find alternative approaches" },
                { value: 1, label: "Ask for help", description: "Reach out to colleagues" },
                { value: 2, label: "Research thoroughly", description: "Learn what's needed" },
                { value: 3, label: "Document the gap", description: "Create resources for others" }
            ]
        },
        {
            id: 14,
            question: "Your approach to team meetings:",
            options: [
                { value: 0, label: "Listen passively", description: "Absorb information" },
                { value: 1, label: "Share updates", description: "Report on my work" },
                { value: 2, label: "Contribute ideas", description: "Add to discussions" },
                { value: 3, label: "Facilitate outcomes", description: "Ensure meetings produce action items" }
            ]
        },
        {
            id: 15,
            question: "When considering career growth:",
            options: [
                { value: 0, label: "Focus on my skills", description: "Improve individual capabilities" },
                { value: 1, label: "Seek promotions", description: "Aim for advancement" },
                { value: 2, label: "Build relationships", description: "Develop networks and mentors" },
                { value: 3, label: "Create opportunities", description: "Build systems that help everyone grow" }
            ]
        }
    ];

    // Test State
    let currentQuestion = 0;
    let answers = new Array(questions.length).fill(null);
    const totalQuestions = questions.length;

    // DOM Elements
    const testContainer = document.getElementById('test-container');
    const resultsContainer = document.getElementById('results-container');
    const questionsContainer = document.getElementById('questions-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('mug-test-form');

    // Initialize Test
    function initTest() {
        renderQuestion();
        updateProgress();
        updateButtons();
        setFocusOnQuestion();
    }

    // Set focus on current question for accessibility
    function setFocusOnQuestion() {
        setTimeout(() => {
            const questionCard = document.querySelector('.question-card');
            if (questionCard) {
                questionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                questionCard.focus();
                questionCard.id = `question-${currentQuestion}`;
            }
        }, 100);
    }

    // Render Current Question
    function renderQuestion() {
        const question = questions[currentQuestion];
        
        let optionsHTML = '';
        question.options.forEach((option, index) => {
            const isSelected = answers[currentQuestion] === option.value;
            const optionId = `q${question.id}_${index}`;
            optionsHTML += `
                <div class="option ${isSelected ? 'selected' : ''}" data-value="${option.value}">
                    <input type="radio" name="q${question.id}" value="${option.value}" 
                           id="${optionId}" ${isSelected ? 'checked' : ''}
                           aria-labelledby="${optionId}-label">
                    <label class="option-label" id="${optionId}-label" for="${optionId}">
                        <strong>${option.label}</strong>
                        <small>${option.description}</small>
                    </label>
                </div>
            `;
        });

        const questionHTML = `
            <div class="question-card" tabindex="-1" id="current-question">
                <h3>${currentQuestion + 1}. ${question.question}</h3>
                <div class="options-container" role="radiogroup" aria-labelledby="question-${currentQuestion}">
                    ${optionsHTML}
                </div>
            </div>
        `;

        questionsContainer.innerHTML = questionHTML;
        
        // Add click handlers for options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                const value = parseInt(this.getAttribute('data-value'));
                answers[currentQuestion] = value;
                renderQuestion();
                // Auto-advance to next question after selection
                if (currentQuestion < totalQuestions - 1) {
                    setTimeout(() => {
                        nextBtn.focus();
                    }, 100);
                }
            });
            
            // Add keyboard navigation for options
            option.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const value = parseInt(this.getAttribute('data-value'));
                    answers[currentQuestion] = value;
                    renderQuestion();
                }
            });
        });
    }

    // Update Progress
    function updateProgress() {
        const progress = ((currentQuestion + 1) / totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;
        progressText.setAttribute('aria-label', `Progress: Question ${currentQuestion + 1} of ${totalQuestions}`);
    }

    // Update Button States
    function updateButtons() {
        prevBtn.style.display = currentQuestion === 0 ? 'none' : 'block';
        nextBtn.style.display = currentQuestion === totalQuestions - 1 ? 'none' : 'block';
        submitBtn.style.display = currentQuestion === totalQuestions - 1 ? 'block' : 'none';
        
        // Update ARIA labels
        if (prevBtn.style.display !== 'none') {
            prevBtn.setAttribute('aria-label', 'Go to previous question');
        }
        if (nextBtn.style.display !== 'none') {
            nextBtn.setAttribute('aria-label', 'Go to next question');
        }
        if (submitBtn.style.display !== 'none') {
            submitBtn.setAttribute('aria-label', 'Submit test and view results');
        }
    }

// In your JavaScript file, update the navigation functions:

// Remove or comment out the setFocusOnQuestion() call from initTest()
function initTest() {
    renderQuestion();
    updateProgress();
    updateButtons();
    // REMOVE THIS LINE: setFocusOnQuestion();
}

// Update the next button event handler to scroll to the next question
nextBtn.addEventListener('click', () => {
    if (answers[currentQuestion] !== null && currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        renderQuestion();
        updateProgress();
        updateButtons();
        
        // Scroll to the top of the new question
        setTimeout(() => {
            const questionCard = document.querySelector('.question-card');
            if (questionCard) {
                // Get the navbar height for offset
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                // Calculate the scroll position
                const cardRect = questionCard.getBoundingClientRect();
                const scrollPosition = window.pageYOffset + cardRect.top - navbarHeight - 20;
                
                // Smooth scroll to position
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
                
                // Set ID for accessibility
                questionCard.id = `question-${currentQuestion}`;
            }
        }, 50); // Small delay to ensure DOM is updated
    } else if (answers[currentQuestion] === null) {
        // Accessibility-friendly alert (keep your existing code)
        const alertDiv = document.createElement('div');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.setAttribute('aria-live', 'assertive');
        alertDiv.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #f44336; color: white; padding: 1rem; border-radius: 4px; z-index: 1000;';
        alertDiv.textContent = 'Please select an answer before continuing.';
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 3000);
    }
});

// Update the prev button similarly
prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateProgress();
        updateButtons();
        
        // Scroll to the top of the previous question
        setTimeout(() => {
            const questionCard = document.querySelector('.question-card');
            if (questionCard) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                
                const cardRect = questionCard.getBoundingClientRect();
                const scrollPosition = window.pageYOffset + cardRect.top - navbarHeight - 20;
                
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
                
                questionCard.id = `question-${currentQuestion}`;
            }
        }, 50);
    }
});

    // Calculate Score
    function calculateScore() {
        const totalPossible = totalQuestions * 3;
        const userScore = answers.reduce((sum, answer) => sum + (answer || 0), 0);
        const percentage = Math.round((userScore / totalPossible) * 100);
        return { score: userScore, percentage, totalPossible };
    }

    // Get Archetype Based on Score
    function getArchetype(percentage) {
        if (percentage >= 80) return {
            title: "Systemic Mug Washer",
            description: "You're a natural system-builder who prevents problems before they occur. You think beyond immediate tasks to create sustainable solutions.",
            icon: "🔄",
            color: "#4CAF50"
        };
        if (percentage >= 60) return {
            title: "Proactive Contributor",
            description: "You regularly step up, take initiative, and look for ways to improve things. You're on the path to becoming a full Mug Washer.",
            icon: "🚀",
            color: "#2196F3"
        };
        if (percentage >= 40) return {
            title: "Reliable Team Member",
            description: "You consistently do your assigned work well but may wait for direction. You have strong Mug Washer potential.",
            icon: "✓",
            color: "#FF9800"
        };
        if (percentage >= 20) return {
            title: "Task-Focused Participant",
            description: "You complete your responsibilities but may miss systemic opportunities. Awareness is your first step toward growth.",
            icon: "📋",
            color: "#FF5722"
        };
        return {
            title: "Developing Contributor",
            description: "You're focused on individual tasks. The good news: recognizing this is the first step toward becoming a Mug Washer.",
            icon: "🌱",
            color: "#F44336"
        };
    }

    // Get Animal Archetype
    function getAnimalArchetype(answers) {
        // Analyze answer patterns to determine animal type
        const patterns = {
            leadership: answers[1] + answers[7] + answers[14], // Lion tendencies
            reliability: answers[2] + answers[4] + answers[9], // Turtle tendencies
            communication: answers[5] + answers[10] + answers[13], // Parrot tendencies
            strategy: answers[6] + answers[11] + answers[12] // Sloth tendencies
        };

        const max = Math.max(...Object.values(patterns));
        const dominant = Object.keys(patterns).find(key => patterns[key] === max);

        const animals = {
            leadership: {
                name: "The Lion",
                description: "You're a natural leader who drives action and brings energy to the team. Your challenge is to ensure you're building systems, not just momentum.",
                icon: "🦁",
                tips: ["Practice active listening", "Delegate intentionally", "Celebrate others' work"]
            },
            reliability: {
                name: "The Turtle",
                description: "You're the steady foundation others depend on. Your consistency is invaluable, but remember to speak up about systemic issues.",
                icon: "🐢",
                tips: ["Document your processes", "Advocate for your needs", "Share your methods"]
            },
            communication: {
                name: "The Parrot",
                description: "You're the team's connector and communicator. Your ability to translate between groups is crucial for collaboration.",
                icon: "🦜",
                tips: ["Create communication systems", "Document key decisions", "Bridge understanding gaps"]
            },
            strategy: {
                name: "The Sloth",
                description: "You're the strategic thinker who asks 'why?' before acting. Your thoughtful approach prevents costly mistakes.",
                icon: "🦥",
                tips: ["Share your insights proactively", "Document your reasoning", "Choose your moments wisely"]
            }
        };

        return animals[dominant] || animals.leadership;
    }

    // Get Growth Recommendations
    function getGrowthRecommendations(percentage, archetype, animal) {
        const recommendations = [];
        
        if (percentage < 60) {
            recommendations.push({
                title: "Start with Small Ownership",
                description: "Choose one recurring minor issue and take full responsibility for solving it completely this week.",
                action: "Identify one 'mug in your sink' and wash it"
            });
        }

        if (percentage < 80) {
            recommendations.push({
                title: "Build Documentation Habits",
                description: "Create a simple system for documenting processes and decisions that others can follow.",
                action: "Document one process this week"
            });
        }

        // Archetype-specific recommendations
        if (archetype.title.includes("Systemic")) {
            recommendations.push({
                title: "Mentor Other Washers",
                description: "Share your Mug Washer mindset by coaching one colleague on systemic thinking.",
                action: "Have one coaching conversation this month"
            });
        } else {
            recommendations.push({
                title: "Practice Systemic Thinking",
                description: "For your next task, ask: 'How can I make this easier for the next person?'",
                action: "Apply this question to your next project"
            });
        }

        // Animal-specific recommendations
        if (animal.name === "The Lion") {
            recommendations.push({
                title: "Listen Before Leading",
                description: "Before taking charge, ask three team members for their perspective.",
                action: "Practice asking first this week"
            });
        } else if (animal.name === "The Turtle") {
            recommendations.push({
                title: "Speak Up About Systems",
                description: "Once a week, point out one systemic issue you notice.",
                action: "Document and share one process improvement"
            });
        } else if (animal.name === "The Parrot") {
            recommendations.push({
                title: "Structure Your Communication",
                description: "Create templates for recurring communications to make them more effective.",
                action: "Create one communication template this week"
            });
        } else if (animal.name === "The Sloth") {
            recommendations.push({
                title: "Time Your Insights",
                description: "Choose strategic moments to share your thoughtful questions for maximum impact.",
                action: "Plan when to share your next big question"
            });
        }

        return recommendations;
    }

    // Display Results
    function displayResults() {
        const score = calculateScore();
        const archetype = getArchetype(score.percentage);
        const animal = getAnimalArchetype(answers);
        const recommendations = getGrowthRecommendations(score.percentage, archetype, animal);

        // Update score display
        document.getElementById('score-percent').textContent = `${score.percentage}%`;
        document.getElementById('score-percent').setAttribute('aria-label', `${score.percentage} percent Mug Washer score`);
        document.getElementById('meter-fill').style.width = `${score.percentage}%`;
        document.getElementById('meter-indicator').style.left = `${score.percentage}%`;

        // Update archetype result
        const archetypeHTML = `
            <h3>${archetype.icon} ${archetype.title}</h3>
            <p>${archetype.description}</p>
            <div class="score-breakdown">
                <p><strong>Your Score:</strong> ${score.percentage}% Mug Washer</p>
                <p><strong>Your Journey:</strong> ${score.percentage >= 60 ? 'You\'re well on your way!' : 'Every Mug Washer starts somewhere!'}</p>
            </div>
        `;
        document.getElementById('archetype-result').innerHTML = archetypeHTML;

        // Update growth recommendations
        let growthHTML = '';
        recommendations.forEach((rec, index) => {
            growthHTML += `
                <div class="growth-card">
                    <h4>${rec.title}</h4>
                    <p>${rec.description}</p>
                    <div class="action-item">
                        <strong>Your Action:</strong> ${rec.action}
                    </div>
                </div>
            `;
        });
        document.getElementById('growth-cards').innerHTML = growthHTML;

        // Update animal archetype with improved visuals
        const animalHTML = `
            <h3>${animal.icon} ${animal.name}</h3>
            <p>${animal.description}</p>
            <div class="animal-tips">
                <h4>Tips for Your Type:</h4>
                <ul>
                    ${animal.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
        document.getElementById('animal-result').innerHTML = animalHTML;

        // Show results, hide test
        testContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Scroll to results with accessibility
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        resultsContainer.setAttribute('tabindex', '-1');
        resultsContainer.focus();
        
        // Announce results to screen readers
        const resultsAnnouncement = document.createElement('div');
        resultsAnnouncement.setAttribute('role', 'status');
        resultsAnnouncement.setAttribute('aria-live', 'polite');
        resultsAnnouncement.setAttribute('aria-atomic', 'true');
        resultsAnnouncement.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;';
        resultsAnnouncement.textContent = `Test completed. You scored ${score.percentage}% and are classified as ${archetype.title}.`;
        resultsContainer.appendChild(resultsAnnouncement);
        
        setTimeout(() => {
            resultsContainer.removeChild(resultsAnnouncement);
        }, 3000);
    }

    // Form Submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if all questions are answered
        const unanswered = answers.findIndex(answer => answer === null);
        if (unanswered !== -1) {
            // Accessibility-friendly error message
            const errorMsg = document.createElement('div');
            errorMsg.setAttribute('role', 'alert');
            errorMsg.setAttribute('aria-live', 'assertive');
            errorMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #ff9800; color: white; padding: 1rem; border-radius: 4px; z-index: 1000;';
            errorMsg.textContent = `Please answer question ${unanswered + 1} before submitting.`;
            document.body.appendChild(errorMsg);
            
            setTimeout(() => {
                document.body.removeChild(errorMsg);
            }, 3000);
            
            currentQuestion = unanswered;
            renderQuestion();
            updateProgress();
            updateButtons();
            setFocusOnQuestion();
            return;
        }
        
        displayResults();
    });

    // Retake Test
    document.getElementById('retake-btn').addEventListener('click', function() {
        currentQuestion = 0;
        answers = new Array(questions.length).fill(null);
        testContainer.style.display = 'block';
        resultsContainer.style.display = 'none';
        initTest();
        testContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Announce retake to screen readers
        const retakeAnnouncement = document.createElement('div');
        retakeAnnouncement.setAttribute('role', 'status');
        retakeAnnouncement.setAttribute('aria-live', 'polite');
        retakeAnnouncement.setAttribute('aria-atomic', 'true');
        retakeAnnouncement.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;';
        retakeAnnouncement.textContent = 'Test reset. Starting from question 1.';
        testContainer.appendChild(retakeAnnouncement);
        
        setTimeout(() => {
            testContainer.removeChild(retakeAnnouncement);
        }, 3000);
    });

    // Download Profile
    document.getElementById('download-btn').addEventListener('click', function() {
        const score = calculateScore();
        const archetype = getArchetype(score.percentage);
        const animal = getAnimalArchetype(answers);
        
        const content = `
Mug Philosophy Test Results
============================
Date: ${new Date().toLocaleDateString()}
Score: ${score.percentage}% Mug Washer
Archetype: ${archetype.title}
Animal Type: ${animal.name}

${archetype.description}

${animal.description}

Key Growth Areas:
${getGrowthRecommendations(score.percentage, archetype, animal)
    .map((rec, i) => `${i+1}. ${rec.title}: ${rec.action}`)
    .join('\n')}

Thank you for taking the Mug Philosophy Test!
Continue your journey at mugphilosophy.com
        `;
        
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mug-philosophy-profile-${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Additional Features
    document.getElementById('practice-btn').addEventListener('click', function() {
        const challenges = [
            "Today, document one process you know well but others might not.",
            "Identify and fix one 'mug in the sink' in your workspace.",
            "Have a conversation with a colleague about a systemic improvement.",
            "Create one resource that will help future team members.",
            "Practice asking 'why?' before starting a routine task."
        ];
        const challenge = challenges[Math.floor(Math.random() * challenges.length)];
        alert(`Your Mug Washer Challenge:\n\n"${challenge}"`);
    });

    document.getElementById('share-btn').addEventListener('click', function() {
        const discussionPoints = [
            "1. What's one 'mug in our sink' we've been ignoring?",
            "2. How can we better recognize Mug Washer behaviors?",
            "3. What systems could prevent recurring issues?",
            "4. How can we make it safer to point out problems?",
            "5. What one change would make the biggest difference?"
        ].join('\n\n');
        
        const guide = `Mug Philosophy Discussion Guide:\n\n${discussionPoints}\n\nUse these questions in your next team meeting to start the conversation!`;
        
        // Create a shareable text area
        const textarea = document.createElement('textarea');
        textarea.value = guide;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        
        alert('Discussion guide copied to clipboard! Paste it into your team chat or meeting notes.');
    });

    // Add skip link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#current-question';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to current question';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Initialize the test
    initTest();
});
