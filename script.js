const maxPoints = 1000;
let currentPoints = 800;

function updateProgressBar() {
    const progressPercentage = (currentPoints / maxPoints) * 100;

    const progressBar = document.getElementById('progressBarFill');

    progressBar.style.width = progressPercentage + '%';
    
    if (progressPercentage >= 100) {
        progressBar.style.backgroundColor = '#4CAF50'; 
    }
}


document.addEventListener('DOMContentLoaded', updateProgressBar);
