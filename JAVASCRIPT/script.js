// Javascript for projects page (Dark mode & Light mode)
document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('theme') === 'dark-mode') {
        applyDarkMode();
    }
});

const colorChange = document.getElementById('colorChange');
const btn = document.getElementById('dark-mode-toggle');

btn.addEventListener('click', function() {
    if(document.body.classList.contains('dark-mode')) {
        removeDarkMode();
        localStorage.setItem('theme', 'light-mode');
    } else {
        applyDarkMode();
        localStorage.setItem('theme', 'dark-mode');
    }
});

function applyDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('bg-[#e2e2e2]');
    colorChange.classList.add('fa-circle-half-stroke');
}

function removeDarkMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('bg-[#e2e2e2]');
    colorChange.classList.add('fa-rotate-180');
}
// 
