document.addEventListener("DOMContentLoaded", function () {
    const inputName = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const drawButton = document.querySelector(".button-draw");
    const resetButton = document.querySelector(".button-reset"); // Referencia al nuevo botón
    const nameList = document.getElementById("listaAmigos");
    const resultDisplay = document.getElementById("resultado");
    let names = [];

    // Asegurar que el color de la fuente en el campo de entrada sea visible
    inputName.style.color = "black";

    addButton.addEventListener("click", function () {
        const name = inputName.value.trim();
        if (name === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        if (names.includes(name)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        names.push(name);
        updateNameList(); // Llamamos a la función para actualizar la lista de amigos
        inputName.value = "";
    });

    drawButton.addEventListener("click", function () {
        if (names.length === 0) {
            alert("No hay nombres en la lista para sortear.");
            return;
        }
        // Generamos un índice aleatorio
        const randomIndex = Math.floor(Math.random() * names.length);
        // Seleccionamos un nombre aleatorio de la lista
        const winner = names[randomIndex];
        resultDisplay.innerHTML = `<li>🎉 El amigo secreto es: <strong>${winner}</strong> 🎉</li>`;
    });

    // Función que recorre el arreglo de nombres y los agrega como <li> en la lista HTML
    function updateNameList() {
        nameList.innerHTML = ""; // Limpiamos la lista antes de agregar los nuevos elementos
        names.forEach(name => {
            const listItem = document.createElement("li");
            listItem.textContent = name; // Establecemos el nombre como el texto del <li>
            nameList.appendChild(listItem); // Agregamos el <li> a la lista
        });
    }

    // Función para reiniciar todo
    function reiniciar() {
        names = []; // Limpiar el arreglo de nombres
        nameList.innerHTML = ""; // Limpiar la lista visual
        resultDisplay.innerHTML = ""; // Limpiar el resultado del sorteo
        inputName.value = ""; // Limpiar el campo de entrada
    }

    // Asignar la función de reiniciar al botón de reset
    resetButton.addEventListener("click", reiniciar);
});

