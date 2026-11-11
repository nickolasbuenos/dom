document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as caixas e os botões
    const caixas = document.querySelectorAll(".caixa");
    const btnPrincipal = document.getElementById("btn-principal");
    const btnSecundario = document.getElementById("btn-secundario");

    // 1. Cada caixa, ao ser clicada, fica com a borda verde
    caixas.forEach(caixa => {
        caixa.addEventListener("click", () => {
            caixa.style.border = "2px solid green";
        });
    });

    // 2. Ao clicar no botão secundário, todas as caixas perdem a borda
    btnSecundario.addEventListener("click", () => {
        caixas.forEach(caixa => {
            caixa.style.border = "none";
        });
    });

    // 3. Ao clicar no botão principal, todas as caixas ficam com a borda azul
    btnPrincipal.addEventListener("click", () => {
        caixas.forEach(caixa => {
            caixa.style.border = "2px solid blue";
        });
    });
});