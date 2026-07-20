const STORED_PASSWORD = "passwort";

async function login() {
const input = document.getElementById("pw").value;

if (input === STORED_PASSWORD) {
window.location.href = "secret.html";
} else {
alert("Falsches Passwort");
}
}
