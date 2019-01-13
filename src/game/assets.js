import Pikachu from './pikachu/pikachu';
import Bubble from './bubbles/bubble';
import Spearow from './obstacles/spearow';

const pikachu = new Pikachu();

const obstacles = [
  ...Spearow.makeSpearows(),
];

const initialAssets = {
  pikachu,
  bubbles: Bubble.makeBubbles(),
  obstacles,
};

export default initialAssets;
