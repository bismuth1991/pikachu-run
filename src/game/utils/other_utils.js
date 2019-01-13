export const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];
