const setupControlListeners = (game) => {
  window.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    const pikachu = game.assets[0];
    pikachu.handleMovementKeyDown(key);
  });

  window.addEventListener('keyup', ({ key }) => {
    const pikachu = game.assets[0];
    pikachu.handleMovementKeyUp(key);
  });
};

export default setupControlListeners;
