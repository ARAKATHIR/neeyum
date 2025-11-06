// Mobile Menu Toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
        navMenu.classList.add('mobile-nav');
    }
});

// Copy to Clipboard Functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-text');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = answer.classList.contains('active');
        
        // Close all answers
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.classList.remove('active');
        });
        
        // Toggle current answer
        if (!isActive) {
            answer.classList.add('active');
        }
    });
});

// Sample Donors Data
const donorsData = [
    { name: "Surendhar", district: "Palani", amount: "₹1,000" },
    { name: "Jegadeesh", district: "Tirupur", amount: "₹1,000" }
];

// Populate Donors Table
const donorsList = document.getElementById('donors-list');
donorsData.forEach(donor => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${donor.name}</td>
        <td>${donor.district}</td>
        <td>${donor.amount}</td>
    `;
    donorsList.appendChild(row);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.getElementById('nav-menu');
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }
        }
    });
});