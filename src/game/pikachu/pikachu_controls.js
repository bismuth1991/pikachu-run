const setupControlListeners = (game) => {
  window.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    const { pikachu } = game.assets;

    if (pikachu.isKeyLock) return;

    if (key === 'w') {
      pikachu.jump();
    }
    if (key === 'a') {
      pikachu.runLeft();
    }
    if (key === 'd') {
      pikachu.runRight();
    }
  });

  window.addEventListener('keyup', ({ key }) => {
    const { pikachu } = game.assets;
    pikachu.stop(key);
  });
};

export default setupControlListeners;
