export const getCanvasBackground = () => document.getElementsByClassName('canvas-container')[0];

export const addFilterInvert = (element) => {
  element.classList.add('filter-invert');
};

export const removeFilterInvert = (element) => {
  element.classList.remove('filter-invert');
};

export const removeCanvasFilterInvert = () => {
  const canvasBackground = getCanvasBackground();
  removeFilterInvert(canvasBackground);
};

const getVolumeButton = () => document.getElementById('volume-button');

const isMute = () => {
  const volumeButton = getVolumeButton();
  // debugger;
  return volumeButton.classList.contains('fa-volume-mute');
};

const unMute = () => {
  const volumeButton = getVolumeButton();
  volumeButton.classList.remove('fa-volume-mute');
  volumeButton.classList.add('fa-volume-up');
};

const mute = () => {
  const volumeButton = getVolumeButton();
  volumeButton.classList.remove('fa-volume-up');
  volumeButton.classList.add('fa-volume-mute');
};

const getAudio = () => document.querySelector('audio');

export const playAudio = () => {
  const audio = getAudio();

  unMute();
  audio.play();
};

export const pauseAudio = () => {
  const audio = getAudio();

  mute();
  audio.pause();
};

export const setupVolumeButtonEventListener = () => {
  const volumeButton = getVolumeButton();
  volumeButton.addEventListener('click', () => {
    if (isMute()) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
};
