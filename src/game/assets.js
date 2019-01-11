import Pikachu from './pikachu/pikachu';
import Physics from './physics';

export const pikachu = new Pikachu(new Physics(0, 348));

export const assetsArray = [
  pikachu,
];
