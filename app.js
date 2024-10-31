document.getElementById("mensagem").innerText = "Avaliação de JavaScript";

function calcularDiasRestantes(dataAlvo) {
  const dataFutura = new Date(dataAlvo);
  const hoje = new Date();
  const diferencaTempo = dataFutura - hoje;
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
  return diferencaDias;
}

// Dias restantes para as férias (exemplo: 31 de dezembro de 2024)
const diasFerias = calcularDiasRestantes("2024-12-05");
document.getElementById("dias-ferias").innerText = `${diasFerias} dias`;

// Dias restantes para o aniversário (exemplo: 20 de julho de 2024)
const diasAniversario = calcularDiasRestantes("2025-09-05");
document.getElementById("dias-aniversario").innerText = `${diasAniversario} dias`;



function calcularMedia() {
  // Obtém as notas dos campos de entrada
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);

  // Verifica se as entradas são números válidos
  if (isNaN(nota1) || isNaN(nota2)) {
      document.getElementById("resultado").innerText = "Por favor, insira notas válidas.";
      return;
  }

  // Calcula a média das duas notas
  const media = (nota1 + nota2) / 2;

  let conceito;
  if (media >= 9.5) {
      conceito = "Excelente";
  } else if (media >= 8.5) {
      conceito = "Ótimo";
  } else if (media >= 7.5) {
      conceito = "Bom";
  }else if (media >= 6) {
    conceito = "Regular";
  }else {
      conceito = "Insuficiente";
  }

  // Exibe a média com duas casas decimais e o conceito
  document.getElementById("resultado").innerText = `Média: ${media.toFixed(2)} - Conceito: ${conceito}`;
}

