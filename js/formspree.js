<form id="leadForm">
  <input type="text" name="nome" placeholder="Seu nome (opcional)">
  <input type="email" name="email" placeholder="Seu melhor e-mail" required>
  <button type="submit">INICIAR A EXPERIÊNCIA</button>
  <div style="color:#bfa84a; font-size:12px; margin-top:6px;">
    Comece a sentir a presença.
  </div>
</form>

<script>
const form = document.getElementById("leadForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://formspree.io/f/xgozbjdn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: form.nome.value,
      email: form.email.value
    })
  })
  .then(response => {
    if (response.ok) {
      // Redireciona para a Ativação 1 refinada
      window.location.href = "ativacao1.html";
    } else {
      alert("Erro. Tente novamente.");
    }
  })
  .catch(() => {
    alert("Erro de conexão.");
  });
});
</script>
