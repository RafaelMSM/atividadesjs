// Função para executar o script selecionado
function executarScript() {
    const scriptSelector = document.getElementById('scriptSelector');
    const selectedScript = scriptSelector.value;
    const outputDiv = document.getElementById('output');
  
    // Limpa o conteúdo anterior
    outputDiv.innerHTML = '';
  
    switch (selectedScript) {
      case '1':
        verificarTipoDado();
        break;
      case '2':
        verificarPrimo();
        break;
      case '3':
        parOuImpar();
        break;
      case '4':
        calcularFatorial();
        break;
      default:
        outputDiv.innerHTML = 'Selecione um script válido.';
    }
  }
  
  // Script 1: Verificar Tipo de Dado
  function verificarTipoDado() {
    const inputData = prompt('Digite um dado:');
    const tipoDado = typeof inputData;
  
    if (confirm(`Deseja verificar o tipo do dado "${inputData}"?`)) {
      alert(`O tipo do dado é: ${tipoDado}`);
    } else {
      alert('Obrigado por visitar esta página.');
    }
  }
  
  // Script 2: Verificar Primo
  function verificarPrimo() {
    const numero = parseInt(prompt('Digite um número inteiro positivo:'));
    
    if (numero > 1 && Number.isInteger(numero)) {
      let primo = true;
  
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          primo = false;
          break;
        }
      }
  
      alert(`${numero} ${primo ? 'é' : 'não é'} um número primo.`);
    } else {
      alert('Por favor, digite um número inteiro positivo válido.');
    }
  }
  
  // Script 3: Par ou Ímpar
  function parOuImpar() {
    const numero = parseInt(prompt('Digite um número inteiro positivo:'));
    
    if (numero >= 0 && Number.isInteger(numero)) {
      alert(`${numero} é um número ${numero % 2 === 0 ? 'par' : 'ímpar'}.`);
    } else {
      alert('Por favor, digite um número inteiro positivo válido.');
    }
  }
  
  // Script 4: Calcular Fatorial
  function calcularFatorial() {
    const numero = parseInt(prompt('Digite um número inteiro positivo:'));
    
    if (numero >= 0 && Number.isInteger(numero)) {
      let fatorial = 1;
  
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
  
      alert(`O fatorial de ${numero} é: ${fatorial}`);
    } else {
      alert('Por favor, digite um número inteiro positivo válido.');
    }
  }
  