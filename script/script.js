const showMenu = document.querySelector("#showMenu")
let container = document.querySelector(".container");
let bodyContent = document.querySelector(".content__contents");

// Declare and grab id's of li tags
let introduction = document.querySelector("#introduction");
let allFilms = document.querySelector("#allFilms");
let oneFilm = document.querySelector("#oneFilm");
let filmPoster = document.querySelector("#filmPoster");
let filmeGenre = document.querySelector("#filmGenre");
let filmSummary = document.querySelector("#filmSummary");

// Event Listener to show or hide menu when clicked on
showMenu.addEventListener("click", () => {
    if (container.classList.value === "container hide--content") {
        container.classList.remove("hide--content");
    } else {
        container.classList.add("hide--content");
    }
});

introduction.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    
})