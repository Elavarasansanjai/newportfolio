/*
              // const callback = (e) => {
              //   const [entry] = e;
              //   if (entry.isIntersecting) {
              //     // console.log("enter");

              //     entry.target.classList.remove("entry");
              //   } else {
              //     entry.target.classList.add("entry");
              //   }
              // };
              // const observer = new IntersectionObserver(callback, {
              //   root: null,
              //   threshold: 1.0,
              // });
              // document.querySelectorAll(".pro").forEach((mov) => {
              //   observer.observe(mov);
              // });
              // document.querySelectorAll(".pro").forEach((mov) => {
              //   mov.classList.add("entry");
              // });*/

document.querySelector(".menus-icon").addEventListener("click", () => {
  document.querySelector(".one").classList.toggle("m1");
  document.querySelector(".two").classList.toggle("m2");
  document.querySelector(".three").classList.toggle("m3");
  document.querySelector(".visible").classList.toggle("ii");
  console.log(document.querySelector(".ii"));
});

// const bar = document.querySelectorAll(".barr");

// const callback = (e) => {
//   const [entry] = e;
//   if (entry.Isintersecting) {
//     e.target.classList.add(".for");
//   } else {
//     e.target.classList.add(".bac");
//   }
// };
// const observer = new IntersectionObserver(callback, {
//   root: null,
//   threshold: 1.5,
// });
// bar.forEach((mov) => {
//   observer.observe(mov);
// });
const prograscallback = (entries) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.add("k");
  } else {
    entry.target.classList.remove("k");
  }
};
const prograsobserver = new IntersectionObserver(prograscallback, {
  threshold: 0.9,
  root: null,
});
document.querySelectorAll(".barr").forEach((mov) => {
  prograsobserver.observe(mov);
});

const pro1 = document.querySelectorAll(".pro1");
const pro2 = document.querySelectorAll(".pro2");
const pro3 = document.querySelectorAll(".pro3");
const pro4 = document.querySelectorAll(".pro4");

const callbackd1 = (e) => {
  const [entry] = e;
  if (entry.isIntersecting) {
    console.log(entry);
    entry.target.classList.add("d");
  } else {
    console.log(entry);
    entry.target.classList.remove("d");
  }
};
const observerr1 = new IntersectionObserver(callbackd1, {
  threshold: 0.7,
  root: null,
});
pro1.forEach((mov) => {
  observerr1.observe(mov);
});
const callbackd2 = (e) => {
  const [entry] = e;
  if (entry.isIntersecting) {
    entry.target.classList.add("e");
  } else {
    entry.target.classList.remove("e");
  }
};
const observerr2 = new IntersectionObserver(callbackd2, {
  threshold: 0.7,
  root: null,
});
pro2.forEach((mov) => {
  observerr2.observe(mov);
});
const callbackd3 = (e) => {
  const [entry] = e;
  if (entry.isIntersecting) {
    entry.target.classList.add("f");
  } else {
    entry.target.classList.remove("f");
  }
};
const observerr3 = new IntersectionObserver(callbackd3, {
  threshold: 0.7,
  root: null,
});
pro3.forEach((mov) => {
  observerr3.observe(mov);
});
const callbackd4 = (e) => {
  const [entry] = e;
  if (entry.isIntersecting) {
    entry.target.classList.add("j");
  } else {
    entry.target.classList.remove("j");
  }
};
const observerr4 = new IntersectionObserver(callbackd4, {
  threshold: 0.7,
  root: null,
});
pro4.forEach((mov) => {
  observerr4.observe(mov);
});

////routing js

// document.querySelectorAll(".screenshots-link").forEach((mov) => {
//   mov.addEventListener("click", (e) => {
//     e.preventDefault();
//     urlroute();
//   });
// });

// const urlroutes = {
//   pro1: {
//     template: "./routing.html",
//     title: "",
//     description: "gh",
//   },
//   pro2: {
//     template: "./routing.html",
//     title: "",
//     description: "v",
//   },
//   pro3: {
//     template: "./routing.html",
//     title: "",
//     description: "a",
//   },
// };

// const urlroute = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   urlLocationHandler();
// };

// const urlLocationHandler = async () => {
//   const location = window.location.pathname;
//   const rout = urlroutes[location];
//   // const html = await fetch(rout.template).then((res) => res.text());
//   console.log(rout);
// };
