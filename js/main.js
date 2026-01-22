/* ========================================
   Portal SETIC - JavaScript Principal
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Menu Mobile Toggle
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // ========================================
    // Validação do Formulário de Contacto
    // ========================================
    const form = document.getElementById('form-contacto');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            const entidade = document.getElementById('entidade').value.trim();
            const assunto = document.getElementById('assunto').value;
            const urgencia = document.getElementById('urgencia').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            const preferencia = document.querySelector('input[name="preferencia"]:checked');
            const consentimento = document.getElementById('consentimento');

            // Validações básicas
            if (!validarNome(nome)) {
                alert('Por favor, insira um nome válido.');
                return;
            }

            if (!validarEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            if (!validarTelefone(telefone)) {
                alert('Por favor, insira um telefone válido.');
                return;
            }

            if (entidade && entidade.length < 2) {
                alert('Por favor, insira um organismo/departamento válido.');
                return;
            }

            if (!assunto) {
                alert('Por favor, selecione um assunto.');
                return;
            }

            if (!urgencia) {
                alert('Por favor, selecione a prioridade.');
                return;
            }

            if (!preferencia) {
                alert('Por favor, selecione a preferência de contacto.');
                return;
            }

            if (mensagem.length < 20) {
                alert('A mensagem deve ter pelo menos 20 caracteres.');
                return;
            }

            if (!consentimento || !consentimento.checked) {
                alert('Por favor, aceite o tratamento dos dados para prosseguir.');
                return;
            }

            // Simular envio
            alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.');
            form.reset();
        });
    }

    // Função para validar nome
    function validarNome(nome) {
        return nome.length >= 3 && /[A-Za-zÀ-ÿ]/.test(nome);
    }

    // Função para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Função para validar telefone
    function validarTelefone(telefone) {
        const regex = /^\+?[0-9\s-]{9,15}$/;
        return regex.test(telefone);
    }

    // ========================================
    // Fechar menu ao clicar num link
    // ========================================
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (nav) {
                nav.classList.remove('active');
            }
        });
    });

    // ========================================
    // Header scroll effect
    // ========================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = '#122744';
            } else {
                header.style.backgroundColor = '#1a365d';
            }
        }
    });

      const menuBtn = document.getElementById("menuBtn");
  const nav2 = document.getElementById("nav");
  const overlay = document.getElementById("navOverlay");

  function toggleMenu() {
    menuBtn.classList.toggle("active");
    nav2.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  // Fecha o menu ao clicar num link
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", toggleMenu);
  });
    // ========================================
    // Scroll to top
    // ========================================
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

});

const navLink = document.querySelectorAll(".nav a");

  navLink.forEach(link => {
    link.addEventListener("click", () => {
      navLink.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  function smoothScrollTo(target, duration = 1500) { // aumente para 2000, 3000…
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start - 90; // ajuste do header
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // easing suave (easeInOut)
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) smoothScrollTo(target, 1200); //bem lento
    });
  });
