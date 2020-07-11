const video = document.querySelector('.workstyle__media-video');

const videoWrapper = document.querySelector('.workstyle__media'),
    videoTempWrapper = document.querySelector('.workstyle__media-after');

const hideTempWrapper = () => {
    videoTempWrapper.style.display = 'none';
    video.controls = true;
    videoWrapper.removeEventListener('click', hideTempWrapper);
};

videoWrapper.addEventListener('click', hideTempWrapper);
