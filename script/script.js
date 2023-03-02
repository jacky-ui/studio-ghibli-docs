const showMenu = document.querySelector("#showMenu")
let container = document.querySelector(".container");
console.log(container.classList.value);

showMenu.addEventListener("click", () => {
    
    if (container.classList.value === "container hide--content") {
        container.classList.remove("hide--content");
    } else {
        container.classList.add("hide--content");
    }
});