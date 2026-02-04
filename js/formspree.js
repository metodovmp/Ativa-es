const form = document.getElementById("leadForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch("https://formspree.io/f/xgozbjdn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: form.nome.value,
      email: form.email.value
    })
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "ativacao1.html";
    } else {
      alert("Erro. Tente novamente.");
    }
  })
  .catch(() => {
    alert("Erro de conexão.");
  });
});
