import Pikachu from './pikachu/pikachu';
import Bubble from './bubbles/bubble';
import Spearow from './obstacles/spearow';

const pikachu = new Pikachu();

const bubbles = [];
for (let i = 0; i < 20; i += 1) {
  bubbles.push(new Bubble());
}

const obstacles = [];
for (let i = 0; i < 3; i += 1) {
  obstacles.push(new Spearow());
}


const initialAssets = {
  pikachu,
  bubbles,
  obstacles,
};

export default initialAssets;
