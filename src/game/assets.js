import Pikachu from './pikachu/pikachu';
import Bubble from './bubbles/bubble';
import Spearow from './obstacles/spearow';
import Dragonite from './dragonite/dragonite';

const pikachu = new Pikachu();

const obstacles = [
  ...Spearow.makeSpearows(),
];

const initialAssets = {
  pikachu,
  dragonites: Dragonite.makeDragonites(),
  bubbles: Bubble.makeBubbles(),
  obstacles,
};

export default initialAssets;
