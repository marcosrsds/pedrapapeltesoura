function escolhaPedra() {
    console.log("botão PEDRA funcionando");
    escolha();
}

function escolhaPapel() {
    console.log("botão PAPEL funcionando");
    escolha();
}

function escolhaTesoura() {
    console.log("botão TESOURA funcionando");
    escolha();
}

function escolha() {
    let escolhaAi = parseInt(Math.random() * 3);
    if (escolhaAi == 0) {
    console.log("computador escolheu PEDRA");
    } else if (escolhaAi == 1) {
        console.log("computador escolheu PAPEL");
    } else {
        console.log("computador escolheu TESOURA");
    }     
}