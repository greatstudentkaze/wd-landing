const video = document.querySelector('.workstyle__media-video'),
    videoWrapper = document.querySelector('.workstyle__media'),
    videoTempWrapper = document.querySelector('.workstyle__media-after'),
    menuBtn = document.querySelector('.header__menu-btn'),
    headerTopWrapper = document.querySelector('.header__top-wrapper'),
    headerLogo = document.querySelector('.header__logo-img');

const hideTempWrapper = () => {
    videoTempWrapper.style.display = 'none';
    video.controls = true;
    video.play();
    videoWrapper.removeEventListener('click', hideTempWrapper);
};

videoWrapper.addEventListener('click', hideTempWrapper);

menuBtn.addEventListener('click', () => {
    headerTopWrapper.classList.toggle('header__top-wrapper--active');
    menuBtn.classList.toggle('header__menu-btn--active');
    if (menuBtn.classList.contains('header__menu-btn--active')) {
        headerLogo.src = 'img/logo_white.svg';
    } else {
        headerLogo.src = 'img/logo.svg';
    }
});
