document.addEventListener("DOMContentLoaded", function() {
    // 1. Cada caixa, ao ser clicada, fica com a borda verde
    const caixas = document.querySelectorAll(".caixa");

    caixas.forEach(function(caixa) {
        caixa.addEventListener("click", function() {
            caixa.style.border = "2px solid green";
        });
    });

    // 2. Ao clicar no botão secundário, todas as caixas perdem a borda
    meuBotaoSecundario = document.getElementById("btn-secundario");
    meuBotaoSecundario.addEventListener("click", function() {
        caixas.forEach(function(caixa) {
            caixa.style.border = "none";
        });
    });

    // 3. Ao clicar no botão principal, todas as caixas ficam com a borda azul
    meuBotaoPrincipal = document.getElementById("btn-principal");
    meuBotaoPrincipal.addEventListener("click", function() {
        caixas.forEach(function(caixa) {
            caixa.style.border = "2px solid blue";
        });
    });
});