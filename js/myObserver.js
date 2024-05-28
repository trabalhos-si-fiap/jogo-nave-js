
export const runOberver = (timerDiv, ship, score, wave) => {
    // Função que será executada quando o texto da div mudar
    function onTextChange(mutationsList) {
        score.stopedShipTimer(ship);
        score.run();
        wave.changeWave();
    }
    // Cria uma instância do MutationObserver
    const observer = new MutationObserver(onTextChange);
    // Configura o MutationObserver para observar mudanças no nó de texto da div
    const config = { childList: true, subtree: true };
    // Inicia a observação
    observer.observe(timerDiv, config);
    
}


