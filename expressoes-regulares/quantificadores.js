// * -> Opcional - quantifica 0 ou n vezes
// + -> Obrigatório - quantifica 1 ou n vezes
// ? -> Opcional - quantifica 0 ou 1 vez
// \ -> É caracter de escape
// {n, n} -> Exemplo de quantificador onde o "n" à esquerda é o mínimo e o "n" à direita é o máximo

const regExp1 = /Jo+ão+/gi; // Exemplo com quantificador +

const regExp2 = /\.jpe*g/g; // Indica que a letra "e" pode ser encontrada uma ou mais vezes; o uso deste quantificador
                            // minimiza o uso de grupos () deixando o código mais clean.

const found = regExp1.exec(texto);