
const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
    const isDark = document.documentElement.classList.contains('dark');
    themeBtn.textContent = isDark ? '☀︎' : '☾';
    themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const dark = document.documentElement.classList.contains('dark');
        themeBtn.textContent = dark ? '☀︎' : '☾';
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
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
            setTimeout(() => { popup.remove(); overlay.remove(); }, 500);
            localStorage.setItem('dismissed', '1');
        });
    }
}
