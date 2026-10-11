// جلوگیری از پخش هم‌زمان چند ویدیو
const videos = document.querySelectorAll("video");

videos.forEach((video) => {
    video.addEventListener("play", () => {
        videos.forEach((otherVideo) => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});

// نمایش پیام هنگام کلیک روی دکمه پخش نمایشی صفحه اصلی
const playIcon = document.querySelector(".play-icon");

if (playIcon) {
    playIcon.style.cursor = "pointer";

    playIcon.addEventListener("click", () => {
        window.location.href = "portfolio.html";
    });
}