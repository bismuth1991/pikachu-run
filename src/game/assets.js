import Pikachu from './pikachu/pikachu';
import Bubble from './bubbles/bubble';

export const pikachu = new Pikachu();

const bubbles = [];

for (let i = 0; i < 20; i += 1) {
  bubbles.push(new Bubble());
}

export const initialAssets = {
  pikachu,
  bubbles,
};
