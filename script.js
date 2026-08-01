const popup = document.getElementById('popup');
if (popup && !sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', '1');
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 600);
    }, 2000);
} else if (popup) {
    popup.remove();
}