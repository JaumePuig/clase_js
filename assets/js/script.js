const btn_darkM = document.getElementById("dark_mode");
const navBar = document.getElementById("navBar");

// darkMode.className="boton_oscuro"
btn_darkM.addEventListener("click", () => {
  if (btn_darkM.className == "boton_oscuro") {
    console.log("pepito");
    btn_darkM.className = "botoncito";
    btn_darkM.textContent = "Modo Oscuro";
    navBar.className = "navbar navbar-expand-lg navbar-light bg-light";
  } else {
    console.log("pepito");
    btn_darkM.className = "boton_oscuro";
    btn_darkM.textContent = "Modo Claro";
    navBar.className = "navbar navbar-expand-lg navbar-light bg-dark";
  }
});
