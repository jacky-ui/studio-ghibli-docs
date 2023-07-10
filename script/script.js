const URL = "https://long-tan-monkey-tutu.cyclic.app/"

const showMenu = document.querySelector("#showMenu")
let container = document.querySelector(".container");
let bodyContent = document.querySelector(".content__contents");
let liTag = document.querySelectorAll("li");

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

// Function to create button along with id, text and etc
function createButton(tag, text, idName, idDescription, className) {
    let button = document.createElement(tag);
    button.setAttribute(idName, idDescription);
    button.classList.add(className)
    button.innerText = text;
    bodyContent.appendChild(button);
};

// Function to create image
function createImage(tag, attributeName, attributeUrl, className) {
    let image = document.createElement(tag);
    image.setAttribute(attributeName, attributeUrl);
    image.classList.add(className)
    bodyContent.appendChild(image);
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
    // GET All Films Axios call
    allFilmsCall.addEventListener("click", () => {
        axios
            .get(`${URL}films`)
            .then((response) => {
                let data = JSON.stringify(response.data);
                createTag("p", data, "content__contents--text")
            });
    });
});

// Event Listener for oneFilm li tag
oneFilm.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "GET Specific Studio Ghibli Films", "content__contents--title");
    createTag("h4", "GET  /films/{film_id}", "content__contents--subtitle");
    createTag("p", "This endpoint provides data on a specific Studio Ghibli film", "content__contents--text");
    createButton("button", "Try it out!", "id", "oneFilmCall", "content__contents--button");

    const oneFilmCall = document.querySelector("#oneFilmCall");
    // GET Specific Film Axios call
    oneFilmCall.addEventListener("click", () => {
        axios
            .get(`${URL}films/a8e84fd7-92d4-4cf3-9786-e24c0bb1902c`)
            .then((response) => {
                let data = JSON.stringify(response.data);
                createTag("p", data, "content__contents--text")
            });
    });
});

// Event Listener for filmPoster li tag
filmPoster.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "GET Specific Studio Ghibli Film Poster", "content__contents--title");
    createTag("h4", "GET  /films/{film_id}/poster", "content__contents--subtitle");
    createTag("p", "This endpoint provides data on a specific Studio Ghibli film", "content__contents--text");
    createButton("button", "Try it out!", "id", "filmPosterCall", "content__contents--button");

    const filmPosterCall = document.querySelector("#filmPosterCall");
    // GET Specific Film Axios call
    filmPosterCall.addEventListener("click", () => {
        axios
            .get(`${URL}films/9392a1ac-c076-44ab-9ade-307cbc508829/poster`)
            .then((response) => {
                console.log(response.config.url);
                createImage("img", "src", response.config.url, "content__contents--image")
            });
    });
});

// Event Listener for filmGenre li tag
filmeGenre.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "GET Specific Studio Ghibli Film Genre", "content__contents--title");
    createTag("h4", "GET  /films/{film_id}/genre", "content__contents--subtitle");
    createTag("p", "This endpoint provides data on a specific Studio Ghibli genre", "content__contents--text");
    createButton("button", "Try it out!", "id", "filmeGenreCall", "content__contents--button");

    const filmeGenreCall = document.querySelector("#filmeGenreCall");
    // GET Specific Film Axios call
    filmeGenreCall.addEventListener("click", () => {
        axios
            .get(`${URL}films/a8e84fd7-92d4-4cf3-9786-e24c0bb1902c/genre`)
            .then((response) => {
                let data = JSON.stringify(response.data);
                createTag("p", data, "content__contents--text")
            });
    });
});

// Event Listener for filmSummary li tag
filmSummary.addEventListener("click", () => {
    bodyContent.innerHTML = " ";
    createTag("h3", "GET Specific Studio Ghibli Film Synopsis", "content__contents--title");
    createTag("h4", "GET  /films/{film_id}/synopsis", "content__contents--subtitle");
    createTag("p", "This endpoint provides data on a specific Studio Ghibli synopsis", "content__contents--text");
    createButton("button", "Try it out!", "id", "filmSummaryCall", "content__contents--button");

    const filmSummaryCall = document.querySelector("#filmSummaryCall");
    // GET Specific Film Axios call
    filmSummaryCall.addEventListener("click", () => {
        axios
            .get(`${URL}films/a8e84fd7-92d4-4cf3-9786-e24c0bb1902c/synopsis`)
            .then((response) => {
                let data = JSON.stringify(response.data);
                createTag("p", data, "content__contents--text")
            });
    });
});

// Section of code is for generating random class name from array and adding to li tag being clicked
const liClasses = ["howl", "laputa", "noface", "porco", "princess", "totoro", "cat", "ponyo", "nausicaa"];

const generateRandomClass = () => {
    const random = Math.floor(Math.random() * liClasses.length)
    return liClasses[random];
};

// Adding eventListener to each li tag, will remove all class names before assiging to one clicked on
liTag.forEach((li) => {
    li.addEventListener("click", () => {
        liTag.forEach((li) => {
            li.className = " ";
        });
        li.classList.add(generateRandomClass());
    });
});