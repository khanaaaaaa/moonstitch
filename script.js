if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
    document.body.classList.add('dark');
}

const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

if (popup && overlay) {
    if (localStorage.getItem('dismissed')) {
        popup.remove();
        overlay.remove();
    } else {
        document.getElementById('popup-ok').addEventListener('click', () => {
            popup.style.opacity = '0';
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity .5s ease';
            setTimeout(() => { popup.remove(); overlay.remove(); }, 500);
            localStorage.setItem('dismissed', '1');
        });
    }
}

const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeBtn.textContent = '☀️';
    }
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        themeBtn.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}