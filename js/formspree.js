const form = document.getElementById("leadForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.email.value.trim();

  if (!email || !email.includes('@')) {
    alert("Coloca um e-mail válido");
    return;
  }

  fetch("https://formspree.io/f/xgozbjdn", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  })
  .then(response => {
    if (response.ok) {
      localStorage.setItem('vsl_axis_email', email);
      window.location.href = "ativacao1.html";
    } else {
      alert("Erro. Tente novamente.");
    }
  })
  .catch(() => {
    alert("Erro de conexão.");
  });
});
