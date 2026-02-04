const form = document.getElementById("leadForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://formspree.io/f/SEU_ID_REAL_AQUI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value
    })
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "ativacao1.html";
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  })
  .catch(() => {
    alert("Erro de conexão.");
  });
});
