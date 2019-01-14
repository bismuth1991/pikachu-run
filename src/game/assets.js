import Pikachu from './pikachu/pikachu';
import Bubble from './bubbles/bubble';
import Spearow from './obstacles/spearow';
import Meteor from './draco_meteors/meteor';

const pikachu = new Pikachu();

const obstacles = [
  ...Spearow.makeSpearows(),
];

const initialAssets = {
  pikachu,
  bubbles: Bubble.makeBubbles(),
  meteors: Meteor.makeMeteor(),
  obstacles,
};

export default initialAssets;
