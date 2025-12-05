// Progress bar functionality
const maxPoints = 1000;
let currentPoints = 800;

function updateProgressBar() {
    const progressPercentage = (currentPoints / maxPoints) * 100;
    const progressBar = document.getElementById('progressBarFill');
    
    if (!progressBar) return; // ako nema progress bara, preskoči
    
    progressBar.style.width = progressPercentage + '%';
    
    if (progressPercentage >= 100) {
        progressBar.style.backgroundColor = '#4CAF50'; 
    }
}

// Označi aktivni link
function markActiveLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.btn, .top-nav a, nav a');
    
    links.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Poredi linkove case-insensitive
        if (href.toLowerCase() === current.toLowerCase()) {
            link.classList.add('active');
        }
    });
}

// Inicijalizuj sve kada se stranica učita
document.addEventListener('DOMContentLoaded', () => {
    updateProgressBar();
    markActiveLink();
});