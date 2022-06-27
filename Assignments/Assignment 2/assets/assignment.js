const assignments = [
  {
    //1
    title: "My Portfolio",
    live: "/Assignments/Assignment 2/404 Page not found/404page.html",
    code: "https://bit.ly/3x4ZypE",
  },
  {
    //2
    title: "Error 404",
    live: "/Assignments/Assignment 2/404 Page not found/404page.html",
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
  {
    //5
    title: "Rabin's Todo App",
    live: "./Labs/jQuery Projects/Todo/todo.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%202/nav-bar",
  },
];

function loader() {
  assignments.map((assignment) => {
    $(".tasks").append(
      "<div class='task'><h3 class='task-title'>" +
        assignment.title +
        "</h3><div class='buttons'><a href='" +
        assignment.live +
        "' target='_blank' class='live btn'>Live<span><img src='./Assignments/Assignment 2/assets/live.svg' alt='Live Preview' /></span></a><a href=" +
        assignment.code +
        " target='_blank' class='code btn'>Code<span><img src='./Assignments/Assignment 2/assets/code.svg' /></span></a></div></div>"
    );
  });
}

window.onload = () => {
  loader();
};
