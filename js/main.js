const video = document.querySelector('.workstyle__media-video');

const videoWrapper = document.querySelector('.workstyle__media'),
    videoTempWrapper = document.querySelector('.workstyle__media-after');


const hideTempWrapper = () => {
    video.load();
    videoTempWrapper.style.display = 'none';
    video.controls = true;
    video.play();
    videoWrapper.removeEventListener('click', hideTempWrapper);
}

videoWrapper.addEventListener('click', hideTempWrapper);

