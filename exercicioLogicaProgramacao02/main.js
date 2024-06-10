function ePaisagem(L, A) {
    // if (L > A) {
    //     console.log('Paisagem');
    //     return;
    // }
    // else if (L = A) {
    //     console.log('Quadrado');
    //     return;
    // }
    // else {
    //     console.log('Retrato');
    //     return;
    // }
    return L > A ? `Paisagem` : `Retrato`;
}

const ePaisagem2 = (L, A) => {
    return L > A ? `Paisagem` : `Retrato`;
}

ePaisagem(11.20,10.1); // se estivesse usando if seria apenas esta linha
console.log(ePaisagem(11.20, 10.10)); // usando expressão ternária é obrigatório essa linha
console.log(ePaisagem2(11.20, 10.10)); // usando expressão ternária é obrigatório essa linha