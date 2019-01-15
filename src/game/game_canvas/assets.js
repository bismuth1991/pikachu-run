import Pikachu from '../pikachu/pikachu';
import Bubble from '../bubbles/bubble';
import Spearow from '../spearow/spearow';
import Dragonite from '../dragonite/dragonite';
import Primeape from '../primeape/primeape';

const initialAssets = () => ({
  pikachu: new Pikachu(),
  dragonites: Dragonite.makeDragonites(),
  primeapes: Primeape.makePrimeapes(),
  spearows: Spearow.makeSpearows(),
  bubbles: Bubble.makeBubbles(),
});

export default initialAssets;
