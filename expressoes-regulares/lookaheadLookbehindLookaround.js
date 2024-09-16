// Positive lookagead -> Checa na frente
console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookahead
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Positive lookbehind -> Checa atrás -> FRASES QUE COMEÇAM COM ONLINE
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//Negative lookbehind -> FRASES QUE TERMINAM COM ONLINE
console.log(lookahead.match(/^.+(?<!^ONLINE.+)$/gim));