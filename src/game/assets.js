import Pikachu from './pikachu';
import Physics from './physics';

const background = require('../assets/images/background.png');

const pikachu = Pikachu.new(Physics(0, 0));

const assets = {
  background,
  pikachu,
};

export default assets;
