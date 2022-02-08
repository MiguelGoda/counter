// iniciamos el contardor
let count = 0;

// obtenemos el valor de los botones
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// recorrer los valores de los botones
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const style = e.currentTarget.classList;
        //modificando el contardor
        if (style.contains("decrease")) {
            count--;
        }
        if (style.contains("reset")) {
            count = 0;
        }
        if (style.contains("increase")) {
            count++;
        }

        //asignando los colores
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }

        //asignando el valor
        value.textContent = count;
    });
});
