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
