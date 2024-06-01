const numb = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numb;

//texto.innerHTML = ''; para eliminar a palavra Texto que apareceria no site, no meu caso não apareceu por isso estã comentado!!

texto.innerHTML = `<p>Raíz quadrada: <strong> ${numb ** 0.5}</strong>.<br /></p>`;
texto.innerHTML += `<p>${numb} é inteiro? <strong>${Number.isInteger(numb)}</strong>.<br /></p>`;
texto.innerHTML += `<p>${numb} é NaN? <strong>${Number.isNaN(numb)}</strong>.<br /></p>`;
texto.innerHTML += `<p>Arredondando ${numb} para baixo: <strong>${Math.floor(numb)}</strong>.<br /></p>`;
texto.innerHTML += `<p>Arredondando ${numb} para cima: <strong>${Math.ceil(numb)}</strong>.<br /></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numb.toFixed(2)}</strong>.<br /></p>`;
