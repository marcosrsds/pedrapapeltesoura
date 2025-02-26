function escolha() {
    let escolhaAi = parseInt(Math.random() * 3);
    if (escolhaAi == 0) {
        let escolhaPc = 0;
        console.log("PC escolheu PEDRA");
    } else if (escolhaAi == 1) {
        let escolhaPc = 1;
        console.log("PC escolheu PAPEL");
    } else {
        let escolhaPc = 2; 
        console.log("PC escolheu TESOURA");
    }     
}

function escolhaPedra(escolhaPc) {
    console.log("você escolheu PEDRA");
    escolha();
    if (escolhaPc == 2) {
        console.log("você ganhou");
    } else if (escolhaPc == 1) {
        console.log("você perdeu");
    } else {
        console.log("empate, jogue outra vez...");
    }
}

function escolhaPapel(escolhaAi) {
    console.log("você escolheu PAPEL");
    escolha();
    if (escolhaAi == 0) {
        console.log("você ganhou");
    } else if (escolhaAi == 2) {
        console.log("você perdeu");
    } else if (escolhaAi == 1) {
        console.log("empate, jogue outra vez...");
    }
}

function escolhaTesoura(escolhaAi) {
    console.log("você escolheu TESOURA");
    escolha();
    if (escolhaAi == 1) {
        console.log("você ganhou");
    } else if (escolhaAi == 2) {
        console.log("você perdeu");
    } else if (escolhaAi == 0) {
        console.log("empate, jogue outra vez...");
    }
}