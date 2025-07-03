// Referências globais
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const banner = document.querySelector('.banner');

// Menu Hamburger: toggle menu ativo
menuToggle.addEventListener('click', function () {
  menu.classList.toggle('active');
});

// Função para voltar ao topo da página
function voltarTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Validação do formulário de contato
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('mensagem-status');

  if (!nome || !email || !mensagem) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return false;
  }

  if (!email.includes('@') || !email.includes('.')) {
    status.textContent = "Por favor, insira um e-mail válido.";
    status.style.color = "red";
    return false;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "green";
  return false; // Evita envio real (ajuste se for usar backend)
}

// Scroll: fixa o menuToggle ao passar do banner
window.addEventListener("scroll", function () {
  const bannerAltura = banner ? banner.offsetHeight : 200;

  if (window.scrollY > bannerAltura) {
    menuToggle.classList.add("fixar");
  } else {
    menuToggle.classList.remove("fixar");
  }
});
