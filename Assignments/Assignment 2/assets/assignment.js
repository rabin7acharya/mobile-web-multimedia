const assignment = [
  {
    //1
    title: "My Portfolio",
    live: "./Assignments/Assignment 2/404 Page not found/404page.html",
    code: "https://bit.ly/3x4ZypE",
  },
  {
    //2
    title: "Error 404",
    live: "./Assignments/Assignment 2/404 Page not found/404page.html",
    code: "https://bit.ly/3x4ZypE",
  },
  {
    //3
    title: "CTA Section",
    live: "./Assignments/Assignment 2/CTA section/cta.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%202/CTA%20section",
  },
  {
    //4
    title: "Landing Page",
    live: "./Assignments/Assignment 2/Landing Page/landing.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%202/Landing%20Page",
  },
  {
    //5
    title: "Navigation Bar",
    live: "./Assignments/Assignment 2/nav-bar/index.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%202/nav-bar",
  },
];

const title = document.querySelectorAll(".task-title");
const live = document.querySelectorAll(".live");
const code = document.querySelectorAll(".code");
console.log(code);

function setTitle() {
  title[0].innerHTML = assignment[0].title;
  title[1].innerHTML = assignment[1].title;
  title[2].innerHTML = assignment[2].title;
  title[3].innerHTML = assignment[3].title;
  title[4].innerHTML = assignment[4].title;
}

function setLive() {
  live[0].href = assignment[0].live;
  live[1].href = assignment[1].live;
  live[2].href = assignment[2].live;
  live[3].href = assignment[3].live;
  live[4].href = assignment[4].live;
}

function setCode() {
  code[0].href = assignment[0].code;
  code[1].href = assignment[1].code;
  code[2].href = assignment[2].code;
  code[3].href = assignment[3].code;
  code[4].href = assignment[4].code;
}

window.onload = (event) => {
  setTitle();
  setLive();
  setCode();
};
