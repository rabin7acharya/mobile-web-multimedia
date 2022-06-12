const assignment = [
    { //1
        title: "My Portfolio",
        live: "./Assignments/Assignment 2/404 Page not found/404page.html",
        code: "https://bit.ly/3x4ZypE",
    },
    { //2
        title: "Error 405",
        live: "Assignments\Assignment 2\404 Page not found\404page.html",
        code: "https://bit.ly/3x4ZypE"
    },
]

const title = document.querySelectorAll(".task-title");
const live = document.querySelectorAll(".live");
const code = document.querySelectorAll(".code");
console.log(code);

function setTitle() {
    title[0].innerHTML = assignment[0].title;
    title[1].innerHTML = assignment[1].title;
}

function setLive() {
    live[0].href = assignment[0].live;
}

function setCode() {
    code[0].href = assignment[0].code;
}

window.onload = (event) => {
    setTitle();
    setLive();
    setCode();
}
