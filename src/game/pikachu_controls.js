const setupControlListeners = (game) => {
  window.addEventListener('keydown', ({ key, repeat }) => {
    if (repeat) return;
    console.log('im here');

    const { physics, sprite } = game.assets[0];
    if (key === 'w') {
      // sprite.isMove = true;
      physics.dUp = 50;
    }
    if (key === 'd') {
      // sprite.isMove = true;
      physics.dRight = 10;
    }
  });

  window.addEventListener('keyup', ({ key, repeat }) => {
    const { physics, sprite } = game.assets[0];

    // if (key === 'w') {
    // sprite.isMove = true;
    // physics.dUp = 0;
    // }
    if (key === 'd') {
      // sprite.isMove = true;
      physics.dRight = 0;
    }
  });
};

export default setupControlListeners;
