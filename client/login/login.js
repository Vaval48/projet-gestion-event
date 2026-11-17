// Afficher / masquer le mot de passe
const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("show-password");

showPassword.addEventListener("change", () => {
  passwordInput.type = showPassword.checked ? "text" : "password";
});

// TODO backend : afficher un message d'erreur renvoyé par le serveur.
// Exemple : si l'URL contient ?error=1, on montre le message.
const params = new URLSearchParams(window.location.search);
if (params.has("error")) {
  const error = document.getElementById("error");
  error.textContent = "Identifiant ou mot de passe incorrect.";
  error.hidden = false;
}
