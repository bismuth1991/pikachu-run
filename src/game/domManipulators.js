export const getCanvasBackground = () => document.getElementsByClassName('canvas-container')[0];

export const addFilterInvert = (element) => {
  element.classList.add('filter-invert');
};

export const removeFilterInvert = (element) => {
  element.classList.remove('filter-invert');
};
