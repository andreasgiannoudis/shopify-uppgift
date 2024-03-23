//popup js code for the closing of the popup
//i set a cookie which expires after 1 day
document.addEventListener('DOMContentLoaded', function() {
    const popupContent = document.getElementById('popup-content');
    const closeButton = document.getElementById('close-button');

    let popupClosed = getCookie('popupClosed');
    if (!popupClosed || popupClosed !== 'true') {
        showPopup();
    }

    function showPopup() {
        popupContent.style.display = 'block';
    }

    function closePopup() {
        popupContent.style.display = 'none';
        setCookie('popupClosed', 'true', 1); //1 day duration, 1/1440 if i want to change to 1 minute
    }

    closeButton.addEventListener('click', closePopup);

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '') + expires + '; path=/';
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }
        return null;
    }
});