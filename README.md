# Pikachu RUN

A clone of Google Chrome dinosaur game but with different sprites and more interactivity

## MVPs
+ Main page looks asthetically pleasing
+ Good background music during play
+ User can interact with sprites by movement keys
+ Smooth sprite movement
+ Collision detection
+ Difficulty increases as game progress
+ Scoreboard
+ Production README
+ BONUS:
  + implement AI using machine learning and neural network

## External APIs usage and justifications
+ Redux (no React)
  + everyone is using OOP/Class + Canvas to write game. I would like to make myself standout by implementing Redux + Canvas instead
  + Easier to manage and test
+ [Redux-saga](https://redux-saga.js.org/)
  + To handle game setup phase and side-effects
  + chance to practice using [ES6 generator functions](https://davidwalsh.name/es6-generators) which I think are very cool

## Workflow
+ Day 0
  + Work on draft proposal
+ Day 1
  + HTML & CSS
  + Decide on a background for the game
  + Style the main page
  + Integrate pokemon audio tracks (with mute button)
+ Day 2
  + Render Pikachu sprite with animation
  + Basic movements
  + Random obstacles generator
+ Day 3
  + Collision detection
  + Game ending logic
+ Day 4
  + Pikachu skills
  + Logic on how they interacts with collision
+ Day 5
  + Difficulty levels
  + Highscore & Miscellanous
+ Day 6
  + Refactor
  + Make sure game works in production
  + Production README

