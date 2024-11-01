

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



function ordenarNomes() {
  // Obtém o valor do campo de entrada
  const nomesTexto = document.getElementById("nomesInput").value;
  const nomesArray = nomesTexto.split(",").map(nome => nome.trim().toUpperCase());

  // Ordena os nomes em ordem ascendente
  nomesArray.sort();

  // Obtém o elemento da lista onde os nomes serão exibidos
  const listaNomes = document.getElementById("listaNomes");
  listaNomes.innerHTML = "";

  // Adiciona cada nome como um item da lista
  nomesArray.forEach(nome => {
      const item = document.createElement("li");
      item.textContent = nome;
      listaNomes.appendChild(item);
  });
}

function obterSaudacao(hora) {
  if (hora >= 6 && hora < 12) {
      return "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
      return "Boa tarde!";
  } else {
      return "Boa noite!";
  }
}

function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

function obterDiaSemana(dia) {
  const dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  return dias[dia];
}

function obterMes(mes) {
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return meses[mes];
}

function mostrarDataAtual() {
  const dataAtual = new Date();

  const saudacao = obterSaudacao(dataAtual.getHours());
  const diaSemana = obterDiaSemana(dataAtual.getDay());
  const dia = formatarNumero(dataAtual.getDate());
  const mes = obterMes(dataAtual.getMonth());
  const ano = dataAtual.getFullYear();
  const horas = formatarNumero(dataAtual.getHours());
  const minutos = formatarNumero(dataAtual.getMinutes());

  const mensagem = `${saudacao} Hoje é ${diaSemana}, ${dia} de ${mes} de ${ano} – ${horas}:${minutos}hs.`;
  document.getElementById("mensagem").innerText = mensagem;
}

mostrarDataAtual();


function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero;
}
function atualizarRelogio() {
  const agora = new Date();

  const horas = formatarNumero(agora.getHours());
  const minutos = formatarNumero(agora.getMinutes());
  const segundos = formatarNumero(agora.getSeconds());

  const horaAtual = `${horas}:${minutos}:${segundos}`;
  document.getElementById("relogio").innerText = horaAtual;
}
// atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio();


const imagem = document.getElementById("imagem");

let aumentando = true;

// Função para animar a pulsação
function pulsar() {
    if (aumentando) {
        imagem.style.transform = "scale(1.2)"; // Aumenta 20%
    } else {
        imagem.style.transform = "scale(1)"; // Volta ao tamanho original
    }
    aumentando = !aumentando; // Alterna o estado para a próxima vez
}

setInterval(pulsar, 500);
