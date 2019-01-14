export const GRAVITY = 5;
export const BASE_Y = 348;

export const CANVAS_HEIGHT = 500;
export const CANVAS_WIDTH = 800;

export const IGNORE_GRAVITY = 0;

// Pikachu
export const PIKACHU_JUMP_HEIGHT = 55;
export const PIKACHU_RUN_SPEED = 20;
export const PIKACHU_MASS = 1;
export const ENERGY_LOSS = 0.85;

// Bubble
export const NUM_BUBBLES = 20;
export const MIN_RADIUS = 10;
export const MAX_RADIUS = 20;
export const MAX_ROTATION = 100;
export const BUBBLE_MIN_SPAWN_X = 0;
export const BUBBLE_MAX_SPAWN_X = CANVAS_WIDTH;
export const BUBBLE_SPAWN_Y = -50;

// Spearow
export const NUM_SPEAROWS = 3;
export const SPEAROW_MIN_SPAWN_Y = 200;
export const SPEAROW_MAX_SPAWN_Y = 290;
export const SPEAROW_MIN_SPAWN_X = 1000;
export const SPEAROW_MAX_SPAWN_X = 2000;
export const SPEAROW_SPEED = 15;

// Dragonite
export const NUM_DRAGONITE = 1;
export const DRAGONITE_MIN_SPAWN_Y = 20;
export const DRAGONITE_MAX_SPAWN_Y = 100;
export const DRAGONITE_MIN_SPAWN_X = 1000;
export const DRAGONITE_MAX_SPAWN_X = 1500;
export const DRAGONITE_MIN_SPEED = 5;
export const DRAGONITE_MAX_SPEED = 10;
export const DRAGONITE_METEORS_ACTIVATION_X = CANVAS_WIDTH - 200;
export const DRAGONITE_METEORS_DEACTIVATION_X = -200;

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
export const METEOR_COLORS = ['#112F41', '#068587', '#4FB99F', '#F2B134', '#ED553B'];

// Mini-meteor
export const NUM_MINI_METEORS = 10;
export const MINI_METEOR_MASS = 0.1;
export const MINI_METEOR_FRICTION = 0.99;
export const MINI_METEOR_MIN_RADIUS = 1;
export const MINI_METEOR_MAX_RADIUS = 5;
