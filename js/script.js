document.addEventListener("DOMContentLoaded", () => {

    console.log("STRNG sitio cargado correctamente");

    // ===== CONFIRMAR LINKS EXTERNOS =====
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const confirmExit = confirm("Vas a salir del sitio. ¿Deseas continuar?");
            if (!confirmExit) {
                e.preventDefault();
            }
        });
    });

    /* ===== MODO OSCURO ===== */

    const btnDark = document.getElementById("darkModeBtn");

    if(btnDark){
        if(localStorage.getItem("dark") === "true"){
            document.body.classList.add("dark");
        }

        btnDark.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            localStorage.setItem(
                "dark",
                document.body.classList.contains("dark")
            );
        });
    }

    /* ===== CALCULADORA IMC ===== */

    const formIMC = document.getElementById("imcForm");

    if(formIMC){
        formIMC.addEventListener("submit", (e)=>{
            e.preventDefault();

            const peso = parseFloat(document.getElementById("peso").value);
            const altura = parseFloat(document.getElementById("altura").value);
            const resultado = document.getElementById("resultado");

            if(!peso || !altura){
                resultado.textContent = "Completa todos los campos";
                return;
            }

            const imc = peso / (altura * altura);

            let estado = "";

            if(imc < 18.5) estado = "Bajo peso";
            else if(imc < 25) estado = "Normal";
            else if(imc < 30) estado = "Sobrepeso";
            else estado = "Obesidad";

            resultado.textContent =
                `Tu IMC es ${imc.toFixed(2)} (${estado})`;
        });
    }

});
