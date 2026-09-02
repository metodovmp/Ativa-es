const form = document.getElementById("leadForm");
const btn = document.getElementById("btnDiagnostico");

if (form && btn) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.email.value.trim();

    // Validação simples e segura do e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
      alert("Coloca um e-mail válido");
      form.email.focus();
      return;
    }

    // GATILHO DE ANÁLISE
    btn.innerText = "Analisando seu funil…";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerText = "Mapeando vazamentos…";
    }, 700);

    setTimeout(() => {
      btn.innerText = "Gerando diagnóstico…";
    }, 1400);

    fetch("https://formspree.io/f/xgozbjdn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(response => {
        if (response.ok) {
          localStorage.setItem("vsl_axis_email", email);

          btn.innerText = "✓ Diagnóstico liberado…";

          setTimeout(() => {
            window.location.href = "ativacao1.html";
          }, 500);
        } else {
          throw new Error("Falha no envio");
        }
      })
      .catch(() => {
        btn.disabled = false;
        btn.innerText = "LIBERAR MEU DIAGNÓSTICO GRÁTIS →";
        alert("Não conseguimos liberar seu diagnóstico agora. Tente novamente.");
      });
  });
    }
