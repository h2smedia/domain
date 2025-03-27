// Calculator Data
const calculators = [
    {
        id: 1,
        title: "Zerodha Margin Calculator",
        description: "Calculate margin requirements for your trades on Zerodha platform.",
        icon: "fa-chart-line",
        category: "finance",
        url: "zerodha-margin"
    },
    {
        id: 2,
        title: "8th Pay Commission Calculator",
        description: "Estimate your salary as per the 8th Pay Commission guidelines.",
        icon: "fa-money-bill-wave",
        category: "finance",
        url: "8th-pay"
    },
    {
        id: 3,
        title: "API Response Time Calculator",
        description: "Calculate average response times and latency for your APIs.",
        icon: "fa-clock",
        category: "development",
        url: "api-response"
    },
    {
        id: 4,
        title: "Code Complexity Analyzer",
        description: "Estimate time complexity of your algorithms (Big O notation).",
        icon: "fa-code",
        category: "development",
        url: "code-complexity"
    },
    {
        id: 5,
        title: "Mark Percentage Calculator",
        description: "Convert between raw scores and percentages for exams.",
        icon: "fa-percentage",
        category: "productivity",
        url: "mark-percentage"
    },
    {
        id: 6,
        title: "FLAMES Relationship Calculator",
        description: "Fun tool to calculate relationship status with FLAMES game.",
        icon: "fa-heart",
        category: "productivity",
        url: "flames"
    }
];

// DOM Elements
const calculatorGrid = document.getElementById('calculatorGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.querySelector('.search-box input');

// Display Calculators
function displayCalculators(calculatorsToDisplay) {
    calculatorGrid.innerHTML = '';
    
    calculatorsToDisplay.forEach(calculator => {
        const calculatorCard = document.createElement('div');
        calculatorCard.className = 'calculator-card';
        calculatorCard.innerHTML = `
            <div class="calculator-icon">
                <i class="fas ${calculator.icon}"></i>
            </div>
            <div class="calculator-content">
                <h3>${calculator.title}</h3>
                <p>${calculator.description}</p>
                <a href="${calculator.url}" class="calculator-btn">Open Calculator</a>
            </div>
        `;
        calculatorGrid.appendChild(calculatorCard);
    });
}

// Filter Calculators by Category
function filterCalculators(category) {
    if (category === 'all') {
        displayCalculators(calculators);
        return;
    }
    
    const filteredCalculators = calculators.filter(
        calculator => calculator.category === category
    );
    displayCalculators(filteredCalculators);
}

// Search Calculators
function searchCalculators() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const searchedCalculators = calculators.filter(calculator => 
        calculator.title.toLowerCase().includes(searchTerm) || 
        calculator.description.toLowerCase().includes(searchTerm)
    );
    
    displayCalculators(searchedCalculators);
}

// Event Listeners
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterCalculators(button.dataset.category);
    });
});

searchInput.addEventListener('input', searchCalculators);

// Initialize
displayCalculators(calculators);