const assignments = [
  {
    //1
    title: "My Portfolio",
    live: "https://rabinacharya7.com.np",
    code: "https://github.com/rabin7acharya/myPortfolio",
  },
  {
    //2
    title: "Error 404",
    live: "/Assignments/Assignment 2/404 Page not found/404page.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%202/404%20Page%20not%20found",
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
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Labs/jQuery%20Projects/Todo",
  },
  {
    //5
    title: "Ajax Demo using API",
    live: "./Labs/jQuery Projects/ajax demo/product.html",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Labs/jQuery%20Projects/ajax%20demo",
  },
  {
    //5
    title: "OnScape: Movie Ticketing Project Wireframes",
    live: "https://www.figma.com/file/xZh9hPDq1jT3USD562qNwj/Movie-Ticketing-App-Wireframe?node-id=0%3A1",
    code: "https://github.com/rabin7acharya/mobile-web-multimedia/tree/main/Assignments/Assignment%203/Movie%20Ticketing%20App%20Wireframes",
  },
  {
    //5
    title: "OnScape: Movie Ticketing Project Demo",
    live: "https://rabin7acharya.github.io/OnScape-Movie-Ticketing-App/",
    code: "https://github.com/rabin7acharya/OnScape-Movie-Ticketing-App",
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
