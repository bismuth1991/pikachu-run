const setupControlListeners = (game) => {
  window.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;

    const pikachu = game.assets[0];
    const { physics } = pikachu;
    if (key === 'w') {
      physics.isJump = true;
      physics.dUp = 50;
    }
    if (key === 'd') {
      if (physics.iskeyPress) return;
      physics.iskeyPress = true;
      physics.isRun = true;

      physics.isRunLeft = false;
      physics.dRight = 10;
    }
    if (key === 'a') {
      if (physics.iskeyPress) return;
      physics.iskeyPress = true;

      physics.isRun = true;
      physics.isRunLeft = true;
      physics.dLeft = 10;
    }
  });

  window.addEventListener('keyup', ({ key }) => {
    const { physics } = game.assets[0];

    if (key === 'd') {
      physics.iskeyPress = false;

      physics.isRun = false;
      physics.dRight = 0;
    }
    if (key === 'a') {
      physics.iskeyPress = false;

      physics.isRun = false;
      physics.dLeft = 0;
    }
  });
};

export default setupControlListeners;
