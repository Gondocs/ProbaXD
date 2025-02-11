function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    setCookie("popupClosed", "true", 60); // Hide popup for 1 hour
}

function checkPopup() {
    if (!getCookie("popupClosed")) {
        document.getElementById("popup").style.display = "block";
    }
}

window.onload = checkPopup;
