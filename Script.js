
const STORED_HASH =
"23cddc88e47e9171b603f8dc11facce2f59bf7c6e45c0cc5a5625738be4769e4";

const SALT = "xA9!_§2026_secret";

async function hashPassword(password) {
let data = new TextEncoder().encode(password + SALT);

for (let i = 0; i < 100000; i++) {
data = await crypto.subtle.digest("SHA-256", data);
data = new Uint8Array(data);
}

return Array.from(data)
.map(b => b.toString(16).padStart(2, "0"))
.join("");
}

async function login() {
const input = document.getElementById("pw").value;
const hash = await hashPassword(input);

if (hash === STORED_HASH) {
window.location.href = "secret.html";
} else {
alert("Falsches Passwort");
}
}


