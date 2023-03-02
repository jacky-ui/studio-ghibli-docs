const showMenu = document.querySelector("#showMenu")
let container = document.querySelector(".container");

// Event Listener to show or hide menu when clicked on
showMenu.addEventListener("click", () => {
    if (container.classList.value === "container hide--content") {
        container.classList.remove("hide--content");
    } else {
        container.classList.add("hide--content");
    }
});