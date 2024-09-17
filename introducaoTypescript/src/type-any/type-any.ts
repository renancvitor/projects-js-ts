// Utilizar any apenas em último caso

function showMessage(msg: any) { // Pode ser qualquer coisa: string, number, boolean, etc
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

