// dashboard.js

// Inicialização do Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

// Função para carregar escalas do localStorage
function carregarEscalas() {
  const escalas = JSON.parse(localStorage.getItem('escalas')) || [];
  return escalas;
}

// Função para preparar dados para o gráfico de horas por funcionário
function prepararDadosHoras(escalas) {
  const dados = {};

  escalas.forEach(escala => {
    const inicio = new Date(`${escala.data}T${escala.horaInicio}`);
    let fim = new Date(`${escala.data}T${escala.horaFim}`);

    // Ajusta o término para o próximo dia se necessário
    if (fim <= inicio) fim.setDate(fim.getDate() + 1);

    const horasTrabalhadas = (fim - inicio) / (1000 * 60 * 60); // em horas

    if (dados[escala.nome]) {
      dados[escala.nome] += horasTrabalhadas;
    } else {
      dados[escala.nome] = horasTrabalhadas;
    }
  });

  return dados;
}

// Função para preparar dados para o gráfico de eventos
function prepararDadosEventos(escalas) {
  const dados = {};

  escalas.forEach(escala => {
    if (dados[escala.nomeEvento]) {
      dados[escala.nomeEvento] += 1;
    } else {
      dados[escala.nomeEvento] = 1;
    }
  });

  return dados;
}

// Função para gerar gráfico de barras
function gerarGraficoBarras(ctx, labels, data) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Horas Totais',
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Horas'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Funcionários'
          }
        }
      }
    }
  });
}

// Função para gerar gráfico de pizza
function gerarGraficoPizza(ctx, labels, data) {
  const backgroundColors = [
    'rgba(255, 99, 132, 0.7)',
    'rgba(75, 192, 192, 0.7)',
    'rgba(255, 205, 86, 0.7)',
    'rgba(153, 102, 255, 0.7)',
    'rgba(255, 159, 64, 0.7)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(201, 203, 207, 0.7)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(255, 205, 86, 0.6)'
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 205, 86, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(201, 203, 207, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 205, 86, 1)'
  ];

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantidade de Escalas',
        data: data,
        backgroundColor: backgroundColors.slice(0, data.length),
        borderColor: borderColors.slice(0, data.length),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'right' },
        tooltip: { enabled: true }
      }
    }
  });
}

// Função para inicializar os gráficos
function inicializarGraficos() {
  const escalas = carregarEscalas();

  // Preparar dados
  const dadosHoras = prepararDadosHoras(escalas);
  const labelsHoras = Object.keys(dadosHoras);
  const dataHoras = Object.values(dadosHoras).map(horas => horas.toFixed(2));

  const dadosEventos = prepararDadosEventos(escalas);
  const labelsEventos = Object.keys(dadosEventos);
  const dataEventos = Object.values(dadosEventos);

  // Obter contextos dos canvas
  const ctxHoras = document.getElementById('graficoHorasPorFuncionario').getContext('2d');
  const ctxEventos = document.getElementById('graficoEventos').getContext('2d');

  // Gerar gráficos
  gerarGraficoBarras(ctxHoras, labelsHoras, dataHoras);
  gerarGraficoPizza(ctxEventos, labelsEventos, dataEventos);
}

// Inicializar após o DOM carregar
document.addEventListener('DOMContentLoaded', inicializarGraficos);
