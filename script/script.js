const URL = "https://long-tan-monkey-tutu.cyclic.app/"

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

// Function to create html tag with text and class
function createTag(tag, text, className) {
    let element = document.createElement(tag);
    element.classList.add(className)
    element.innerText = text;
    bodyContent.appendChild(element);
};

function createButton(tag, text, idName, idDescription, className) {
    let button = document.createElement(tag);
    button.setAttribute(idName, idDescription);
    button.classList.add(className)
    button.innerText = text;
    bodyContent.appendChild(button);
}

// Event Listener for Introduction li tag
introduction.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "Welcome to my Studio Ghibli API!", "content__contents--title");
    createTag("p", "Please use this URL when making a call 'https://long-tan-monkey-tutu.cyclic.app/'. Refer to side navigation for more endpoints. This API does not require any API key. However, there is a limit to how many GET requests you can do. 10 GET requests/15mins. Currently deployed with Cyclic. More to come!!", "content__contents--text")
});

// Event Listener for getFilms li tag
allFilms.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "GET All Studio Ghibli Films", "content__contents--title");
    createTag("h4", "GET  /films", "content__contents--subtitle");
    createTag("p", "This endpoint provides data on all Studio Ghibli films", "content__contents--text");
    createButton("button", "Try it out!", "id", "allFilmsCall", "content__contents--button");

    const allFilmsCall = document.querySelector("#allFilmsCall");

    allFilmsCall.addEventListener("click", () => {
        axios
            .get(`${URL}films`)
            .then((response) => {
                console.log(response);
            });
    });
});

// GET All Films Axios call
