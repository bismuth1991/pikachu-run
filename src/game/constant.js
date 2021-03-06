export const GRAVITY = 5;
export const BASE_Y = 389;

export const CANVAS_HEIGHT = 500;
export const CANVAS_WIDTH = 800;

export const IGNORE_GRAVITY = 0;
export const ENERGY_LOSS = 0.90;

// Pikachu
export const PIKACHU_HEIGHT = 43;
export const PIKACHU_WIDTH = 60;
export const PIKACHU_JUMP_HEIGHT = 65;
export const PIKACHU_RUN_SPEED = 20;
export const PIKACHU_MASS = 0.8;
export const SPAWN_X = CANVAS_WIDTH / 2 - PIKACHU_WIDTH / 2;
export const SPAWN_Y = CANVAS_HEIGHT / 2 - PIKACHU_HEIGHT / 2 - 30;

// Bubble
export const NUM_BUBBLES = 30;
export const MIN_RADIUS = 10;
export const MAX_RADIUS = 20;
export const MAX_ROTATION = 100;
export const BUBBLE_MIN_SPAWN_X = 0;
export const BUBBLE_MAX_SPAWN_X = CANVAS_WIDTH;
export const BUBBLE_SPAWN_Y = -50;
export const NUM_POPPING_LINES = 6;
export const BUBBLE_POINTS = 50;

// Spearow
export const NUM_SPEAROWS = 5;
export const SPEAROW_MIN_SPAWN_Y = 150;
export const SPEAROW_MAX_SPAWN_Y = 270;
export const SPEAROW_MIN_SPAWN_X = 1000;
export const SPEAROW_MAX_SPAWN_X = 4000;
export const SPEAROW_SPEED = 15;
export const SPEAROW_POINTS = -100;

// Primeape
export const NUM_PRIMEAPES = 1;
export const PRIMEAPE_MIN_SPAWN_X = 1000;
export const PRIMEAPE_MAX_SPAWN_X = 1500;
export const PRIMEAPE_SPEED = 10;
export const PRIMEAPE_HEIGHT = 66;
export const PRIMEAPE_POINTS = -300;
export const PRIMEAPE_FRAMES_TILL_NEXT_ACTION = 20;


// Dragonite
export const NUM_DRAGONITE = 1;
export const DRAGONITE_MIN_SPAWN_Y = 10;
export const DRAGONITE_MAX_SPAWN_Y = 50;
export const DRAGONITE_MIN_SPAWN_X = 2000;
export const DRAGONITE_MAX_SPAWN_X = 4000;
export const DRAGONITE_MIN_SPEED = 5;
export const DRAGONITE_MAX_SPEED = 10;
export const DRAGONITE_METEORS_ACTIVATION_X = CANVAS_WIDTH - 200;
export const DRAGONITE_METEORS_DEACTIVATION_X = -200;
export const DRAGONITE_POINTS = -1000;

// Meteor
export const NUM_METEORS = 10;
export const METEOR_MASS = 0.1;
export const METEOR_FRICTION = 0.95;
export const METEOR_MIN_RADIUS = 20;
export const METEOR_MAX_RADIUS = 30;
export const METEOR_MIN_SPAWN_X = 0;
export const METEOR_MAX_SPAWN_X = CANVAS_WIDTH;
export const METEOR_MIN_SPAWN_Y = -100;
export const METEOR_MAX_SPAWN_Y = -300;
export const METEOR_POINTS = -500;
export const METEOR_COLORS = ['#112F41', '#068587', '#4FB99F', '#F2B134', '#ED553B'];

// Mini-meteor
export const NUM_MINI_METEORS = 10;
export const MINI_METEOR_MASS = 0.1;
export const MINI_METEOR_FRICTION = 0.99;
export const MINI_METEOR_MIN_RADIUS = 2;
export const MINI_METEOR_MAX_RADIUS = 3;
export const MINI_METEOR_POINTS = 50;
