// ==============================================================================
// INCREDIBLE TECH PROJECTS - ECOMMERCE WEBSITE
// Dynamic Product System - Add new products in the PRODUCTS DATABASE below
// ==============================================================================

// ==========================
// PRODUCTS DATABASE
// ==========================
// TO ADD NEW PRODUCTS: Copy the template at the bottom and fill in the values
// The website will automatically generate cards, filters, and search

const products = [
    {
        id: 1,
        title: "Smart Disaster Alert System",
        category: "IoT",
        priceLKR: "2,500",
        priceUSD: "$8",
        image: "📡",
        shortDescription: "Real-time disaster alert system using IoT sensors and cloud integration",
        fullDescription: "A comprehensive IoT-based disaster alert system that monitors environmental conditions and sends real-time alerts. Perfect for flood, earthquake, or weather monitoring systems.",
        difficulty: "Medium",
        projectType: "IoT",
        rating: "4.8",
        payhipLink: "https://payhip.com/b/example1",
        tags: ["IoT", "Sensors", "Cloud", "Alert System"],
        includedFiles: [
            "Complete Arduino/ESP32 Code",
            "Circuit Diagrams (PDF)",
            "Wiring Guide with Images",
            "Sensor Integration Code",
            "Cloud Dashboard Code (HTML/JS)",
            "Mobile App Guide",
            "Setup Documentation",
            "Project Report (20 pages)",
            "PowerPoint Presentation",
            "Lifetime Email Support"
        ]
    },
    {
        id: 2,
        title: "ESP32 GPS Rescue Robot",
        category: "Robotics",
        priceLKR: "4,500",
        priceUSD: "$15",
        image: "🤖",
        shortDescription: "Autonomous GPS-guided robot for rescue operations and surveillance",
        fullDescription: "Build an advanced ESP32-based robot with GPS navigation, obstacle avoidance, and real-time location tracking. Includes complete motor control, sensor integration, and Android app.",
        difficulty: "Hard",
        projectType: "Robotics",
        rating: "4.9",
        payhipLink: "https://payhip.com/b/example2",
        tags: ["Robotics", "GPS", "ESP32", "Motors", "AI"],
        includedFiles: [
            "Complete ESP32 Robot Code",
            "Motor Control Library",
            "GPS Integration Code",
            "Obstacle Detection System",
            "3D Model Files for 3D Printing",
            "Circuit Schematics",
            "Android App Source Code",
            "Setup & Assembly Guide (50 pages)",
            "Advanced Features Documentation",
            "Lifetime Support & Updates"
        ]
    },
    {
        id: 3,
        title: "Smart Parking System",
        category: "Arduino",
        priceLKR: "3,500",
        priceUSD: "$12",
        image: "🅿️",
        shortDescription: "IoT parking system with real-time availability detection and mobile app",
        fullDescription: "Complete smart parking solution using Arduino and sensors to track parking spot availability. Includes web dashboard, mobile app, and SMS notifications.",
        difficulty: "Medium",
        projectType: "IoT",
        rating: "4.7",
        payhipLink: "https://payhip.com/b/example3",
        tags: ["Arduino", "IoT", "Sensors", "Web Dashboard", "Mobile App"],
        includedFiles: [
            "Arduino Sensor Code",
            "IR/Ultrasonic Sensor Libraries",
            "Web Dashboard (HTML/CSS/JS)",
            "Mobile App Code",
            "Database Structure",
            "SMS Integration Code",
            "Circuit Diagrams",
            "Complete Documentation",
            "Installation Guide",
            "Technical Support"
        ]
    },
    {
        id: 4,
        title: "Arduino Basketball Score Counter",
        category: "Arduino",
        priceLKR: "2,000",
        priceUSD: "$7",
        image: "🏀",
        shortDescription: "Automatic basketball court score counter with infrared sensors",
        fullDescription: "An Arduino-based project that automatically counts basketball scores using IR sensors. Perfect for beginners with clear step-by-step documentation.",
        difficulty: "Easy",
        projectType: "Arduino",
        rating: "4.6",
        payhipLink: "https://payhip.com/b/example4",
        tags: ["Arduino", "Sensors", "Sports", "Beginner"],
        includedFiles: [
            "Arduino Source Code (Well Commented)",
            "IR Sensor Configuration",
            "Circuit Diagram",
            "Step-by-Step Wiring Guide",
            "LCD Display Integration",
            "Calibration Guide",
            "Beginner Friendly Documentation",
            "Video Tutorial Links",
            "Troubleshooting Guide",
            "Email Support"
        ]
    },
    {
        id: 5,
        title: "ESP32-CAM Surveillance Robot",
        category: "Robotics",
        priceLKR: "4,000",
        priceUSD: "$14",
        image: "📹",
        shortDescription: "Mobile surveillance robot with live video streaming and app control",
        fullDescription: "Advanced ESP32-CAM based robot for surveillance and exploration. Stream live video, control movement remotely, and capture photos all from your mobile device.",
        difficulty: "Hard",
        projectType: "Robotics",
        rating: "4.8",
        payhipLink: "https://payhip.com/b/example5",
        tags: ["Robotics", "ESP32", "Camera", "IoT", "Surveillance"],
        includedFiles: [
            "ESP32-CAM Complete Code",
            "Video Streaming Library",
            "Motor Control Code",
            "WiFi Configuration Guide",
            "Mobile App Code (iOS/Android)",
            "Server Code for Cloud Storage",
            "Circuit Schematics",
            "3D Printed Parts Design",
            "Advanced Features (Night Vision, etc)",
            "Lifetime Updates"
        ]
    },
    {
        id: 6,
        title: "NodeMCU Home Automation",
        category: "IoT",
        priceLKR: "3,000",
        priceUSD: "$10",
        image: "🏠",
        shortDescription: "Complete home automation system using NodeMCU and IoT sensors",
        fullDescription: "Control lights, fans, doors, and appliances from anywhere. Full home automation suite with web dashboard, mobile app, and voice control support.",
        difficulty: "Medium",
        projectType: "IoT",
        rating: "4.7",
        payhipLink: "https://payhip.com/b/example6",
        tags: ["IoT", "Home Automation", "Smart Home", "NodeMCU"],
        includedFiles: [
            "Complete NodeMCU Code",
            "Relay Control Library",
            "Web Dashboard Code",
            "Mobile App Source Code",
            "MQTT Integration Guide",
            "Voice Control Setup (Alexa/Google)",
            "Circuit Diagrams & Wiring",
            "Installation & Setup Guide (40 pages)",
            "Troubleshooting Documentation",
            "Priority Email Support"
        ]
    }
];

// ==========================
// ADD NEW PRODUCTS BELOW HERE
// ==========================
// COPY THIS TEMPLATE AND FILL IN YOUR DETAILS:
/*
{
    id: 7,
    title: "Your Project Title",
    category: "Arduino/ESP32/IoT/Robotics/FinalYear",
    priceLKR: "X,XXX",
    priceUSD: "$XX",
    image: "emoji",
    shortDescription: "Brief 1-line description",
    fullDescription: "Detailed description of the project, what it does, and who it's for",
    difficulty: "Easy/Medium/Hard",
    projectType: "Category",
    rating: "4.5-5.0",
    payhipLink: "https://payhip.com/b/yourlink",
    tags: ["tag1", "tag2", "tag3"],
    includedFiles: [
        "Source Code",
        "Documentation",
        etc...
    ]
},
*/

// ==============================================================================
// END OF PRODUCTS DATABASE - Do not edit below unless you know what you're doing
// ==============================================================================

let cart = [];
let allProducts = [...products];
let filteredProducts = [...products];
let currentTheme = localStorage.getItem('theme') || 'dark';

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const projectsContainer = document.getElementById('projectsContainer');
const featuredContainer = document.getElementById('featuredContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('themeToggle');
const cartBtn = document.getElementById('cartBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const backToTop = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');

// Initialize theme
function initTheme() {
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    } else {
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', currentTheme);
    themeToggle.innerHTML = `<span class="theme-icon">${currentTheme === 'dark' ? '🌙' : '☀️'}</span>`;
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when link clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Loading screen timeout
setTimeout(() => {
    loadingScreen.style.display = 'none';
}, 2500);

// Create particle effect
function createParticles() {
    const container = document.getElementById('particleContainer');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// Render products
function renderProducts(productsToRender) {
    projectsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        projectsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 60px 20px;">No projects found. Try a different search or filter.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.shortDescription}</p>
                
                <span class="product-difficulty ${product.difficulty.toLowerCase()}">
                    ${product.difficulty}
                </span>
                
                <div class="product-rating">
                    ${'⭐'.repeat(Math.floor(parseFloat(product.rating)))}
                </div>

                <div class="product-tags">
                    ${product.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <div class="product-price">
                    <span class="price-lkr">LKR ${product.priceLKR}</span>
                    <span class="price-divider"></span>
                    <span class="price-usd">${product.priceUSD}</span>
                </div>

                <div class="product-buttons">
                    <button class="btn-small" onclick="openProductModal(${product.id})">View Details</button>
                    <a href="${product.payhipLink}" target="_blank" class="btn-small primary">Buy Now</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(productCard);
    });
}

// Render featured products (first 3)
function renderFeatured() {
    featuredContainer.innerHTML = '';
    const featured = products.slice(0, 3);
    
    featured.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-content">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.shortDescription}</p>
                <div class="product-price" style="margin-top: auto;">
                    <span class="price-lkr">LKR ${product.priceLKR}</span>
                    <span class="price-divider"></span>
                    <span class="price-usd">${product.priceUSD}</span>
                </div>
                <div class="product-buttons" style="margin-top: 15px;">
                    <a href="${product.payhipLink}" target="_blank" class="btn-small primary">Buy Now</a>
                </div>
            </div>
        `;
        featuredContainer.appendChild(card);
    });
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <button class="modal-close" onclick="closeProductModal()">&times;</button>
        
        <div class="modal-header">
            <div class="modal-image">${product.image}</div>
            <div class="modal-info">
                <span class="product-category">${product.category}</span>
                <h2>${product.title}</h2>
                <p>${product.fullDescription}</p>
                
                <div class="modal-price">LKR ${product.priceLKR} / ${product.priceUSD}</div>
                
                <div>
                    <strong style="color: var(--text-primary);">Difficulty:</strong>
                    <span class="product-difficulty ${product.difficulty.toLowerCase()}" style="display: block; margin-top: 8px;">
                        ${product.difficulty}
                    </span>
                </div>
            </div>
        </div>

        <div class="modal-features">
            <h3>Project Features</h3>
            <ul class="feature-list">
                ${product.includedFiles.map(file => `<li>${file}</li>`).join('')}
            </ul>
        </div>

        <div class="modal-features">
            <h3>Components & Tags</h3>
            <div class="product-tags">
                ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>

        <div class="modal-cta">
            <a href="${product.payhipLink}" target="_blank" class="btn btn-primary btn-lg" style="flex: 1;">Buy Now on Payhip</a>
            <button class="btn btn-secondary btn-lg" onclick="closeProductModal()">Close</button>
        </div>
    `;

    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

// Filter products
function filterProducts(category) {
    if (category === 'all') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(p => p.category === category);
    }
    
    // If there's a search term, apply it
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.shortDescription.toLowerCase().includes(searchTerm) ||
            p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    renderProducts(filteredProducts);
}

// Filter button click handlers
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const category = e.target.dataset.filter;
        filterProducts(category);
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    filteredProducts = allProducts.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.shortDescription.toLowerCase().includes(searchTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
});

// Filter by category from category cards
function filterByCategory(category) {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(filterButtons).find(btn => btn.dataset.filter === category);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    filterProducts(category);
    
    // Scroll to projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';

    // Show/hide back to top button
    if (scrollTop > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Back to top button
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Close modal with escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// Animate counter numbers
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Observe counter elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Contact form
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Cart button (visual only)
cartBtn.addEventListener('click', () => {
    alert('Cart feature coming soon! Use "Buy Now" to purchase projects directly.');
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    createParticles();
    renderProducts(allProducts);
    renderFeatured();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Log current products count (for verification)
console.log(`Incredible Tech Projects loaded with ${products.length} products`);
