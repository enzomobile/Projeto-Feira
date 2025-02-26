// Obtém o botão e o body
const button = document.getElementById('toggle-theme');
const body = document.body;

// Verifica se o tema foi alterado anteriormente (usando localStorage)
if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  button.classList.add('dark-mode'); // Aplica o estilo ao botão também
}

// Função para alternar o tema
button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  button.classList.toggle('dark-mode'); // Alterna o estilo do botão

  // Salva a escolha do usuário no localStorage
  if(body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});