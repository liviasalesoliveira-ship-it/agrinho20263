let contador = 0;

function plantarArvore() {
    contador++;
    document.getElementById("numero").textContent = contador;

    if (contador === 10) {
        alert("Parabéns! Você ajudou a plantar 10 árvores virtuais 🌳");
    }
}
