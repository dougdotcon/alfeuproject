// script.js

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

// Função para salvar escalas no localStorage
function salvarEscalas(escalas) {
  localStorage.setItem('escalas', JSON.stringify(escalas));
}

// Função para verificar conflitos
function verificarConflito(novaEscala, escalas) {
  return escalas.some(escala => {
    if (escala.matricula === novaEscala.matricula) {
      const novoInicio = new Date(`${novaEscala.data}T${novaEscala.horaInicio}`);
      let novoFim = new Date(`${novaEscala.data}T${novaEscala.horaFim}`);
      
      // Ajusta o término para o próximo dia se necessário
      if (novoFim <= novoInicio) novoFim.setDate(novoFim.getDate() + 1);

      const escalaInicio = new Date(`${escala.data}T${escala.horaInicio}`);
      let escalaFim = new Date(`${escala.data}T${escala.horaFim}`);
      
      if (escalaFim <= escalaInicio) escalaFim.setDate(escalaFim.getDate() + 1);

      return (novoInicio < escalaFim && novoFim > escalaInicio);
    }
    return false;
  });
}

// Função para adicionar escala na tabela
function adicionarNaTabela(escala, index) {
  const tabelaEscalas = document.getElementById('tabelaEscalas').querySelector('tbody');
  const row = tabelaEscalas.insertRow();
  
  row.innerHTML = `
    <td>${escala.nomeEvento}</td>
    <td>${escala.data}</td>
    <td>${escala.horaInicio}</td>
    <td>${escala.horaFim}</td>
    <td>${escala.matricula}</td>
    <td>${escala.nome}</td>
    <td>${escala.telefone}</td>
    <td><button class="btn-delete" data-index="${index}">Deletar</button></td>
  `;
}

// Função para exibir todas as escalas na tabela
function exibirEscalas() {
  const escalas = carregarEscalas();
  const tabelaEscalas = document.getElementById('tabelaEscalas').querySelector('tbody');
  tabelaEscalas.innerHTML = ''; // Limpa a tabela

  escalas.forEach((escala, index) => {
    adicionarNaTabela(escala, index);
  });
}

// Inicializa a exibição das escalas
document.addEventListener('DOMContentLoaded', exibirEscalas);

// Manipulação do Formulário
const form = document.getElementById('escalaForm');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const novaEscala = {
    nomeEvento: document.getElementById('nomeEvento').value.trim(),
    data: document.getElementById('data').value,
    horaInicio: document.getElementById('horaInicio').value,
    horaFim: document.getElementById('horaFim').value,
    matricula: document.getElementById('matricula').value.trim(),
    nome: document.getElementById('nome').value.trim(),
    telefone: document.getElementById('telefone').value.trim(),
  };

  const escalas = carregarEscalas();

  if (verificarConflito(novaEscala, escalas)) {
    alerta.classList.remove('hidden');
    setTimeout(() => alerta.classList.add('hidden'), 5000);
    return;
  }

  escalas.push(novaEscala);
  salvarEscalas(escalas);
  adicionarNaTabela(novaEscala, escalas.length - 1);
  form.reset();
});

// Evento de Deleção
document.getElementById('tabelaEscalas').addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('btn-delete')) {
    const index = e.target.getAttribute('data-index');
    let escalas = carregarEscalas();
    escalas.splice(index, 1);
    salvarEscalas(escalas);
    exibirEscalas();
    // Reload dashboard if open
    if (window.location.pathname.includes('dashboard.html')) {
      location.reload();
    }
  }
});
