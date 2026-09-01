const form = document.getElementById("leadForm");
const btn = document.getElementById("btnDiagnostico");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email || !email.includes('@')) {
    alert("Coloca um e-mail válido");
    return;
  }

  // GATILHO
  btn.innerText = "Analisando seu funil…";
  btn.disabled = true;
  setTimeout(() => { btn.innerText = "Preparando diagnóstico…"; }, 600);
  setTimeout(() => { btn.innerText = "Ajustando leitura…"; }, 1200);

  fetch("https://formspree.io/f/xgozbjdn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email })
  })
  .then(response => {
    if (response.ok) {
      localStorage.setItem('vsl_axis_email', email);
      btn.innerText = "✓ Diagnóstico liberado…";
      setTimeout(() => { window.location.href = "ativacao1.html"; }, 500);
    } else {
      btn.disabled = false;
      btn.innerText = "LIBERAR MEU DIAGNÓSTICO GRÁTIS →";
      alert("Erro. Tente novamente.");
    }
  })
  .catch(() => {
    btn.disabled = false;
    btn.innerText = "LIBERAR MEU DIAGNÓSTICO GRÁTIS →";
    alert("Erro de conexão.");
  });
});
