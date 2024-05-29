export const runOberver = (timerDiv, ship, score, wave) => {
  function onTextChange(mutationsList) {
    score.stopedShipTimer(ship);
    score.run();
    wave.changeWave();
  }
  const observer = new MutationObserver(onTextChange);
  const config = { childList: true, subtree: true };
  observer.observe(timerDiv, config);
};
