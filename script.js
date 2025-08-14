document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const erroMensagem = document.getElementById("erro-mensagem");

  // Defina suas credenciais aqui
  const USERNAME_CORRETO = "123"; // Substitua por sua senha
  const PASSWORD_CORRETA = "123"; // Substitua por seu usuario

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === USERNAME_CORRETO && password === PASSWORD_CORRETA) {
      // Credenciais corretas, redireciona para a página do feed
      window.location.href = "feed.html";
    } else {
      // Credenciais incorretas, exibe a mensagem de erro
      erroMensagem.style.display = "block";
    }
  });
});