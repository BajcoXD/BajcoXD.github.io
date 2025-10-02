// open dropdown when clicking the hamburger
function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.add("open");
}

// close dropdown when clicking the X
function cancel() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.remove("open");
}

// optional: close dropdown when clicking a link (good UX)
document.querySelectorAll(".dropdown .links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".dropdown").classList.remove("open");
  });
});
