function fn() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}

// const Btn = document.getElementById("theme");

//    Btn.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");

//   if (document.body.classList.contains("dark-mode")) {
//     Btn.textContent = " Light Mode";
//   } else {
//     Btn.textContent = " Dark Mode";
//   }
// });