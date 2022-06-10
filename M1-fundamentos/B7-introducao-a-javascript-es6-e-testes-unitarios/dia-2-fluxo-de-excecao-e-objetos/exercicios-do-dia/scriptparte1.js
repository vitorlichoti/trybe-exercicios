const testNumber = (value1, value2) => {
  if (!value1 || !value2) {
    throw new Error('Entrada inválida: campos em branco');
  }
  if (isNaN(value1) || isNaN(value2)) {
    throw new Error('Entrada inválida: deve ter somente valores Numéricos');
  }
}

function sum() {  
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    testNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById('result').innerHTML = `${e.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }    
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
