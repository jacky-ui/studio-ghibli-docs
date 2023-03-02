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

function createTag(tag, text, className) {
    let element = document.createElement(tag);
    element.classList.add(className)
    element.innerText = text;
    bodyContent.appendChild(element);
};

// Event Listener for Introduction li tag
introduction.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "Welcome to my Studio Ghibli API!", "content__contents--title");
    createTag("p", "This API does not require any API key. However, there is a limit to how many GET requests you can do. 10 GET requests/15mins.", "content__contents--text")
});