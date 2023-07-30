const myList = document.querySelectorAll("header nav ul li");
console.log(myList);
myList.forEach((i) => {
  i.addEventListener("click", () => {
    myList.forEach((i) => {
      i.firstChild.classList.remove("active");
    });
    i.firstChild.classList.add("active");
  });
});

const myMenuIcon = document.querySelector("i.fa-bars");
myMenuIcon.addEventListener("click", () => {
  myMenuIcon.classList.toggle("clicked");
});

const circles = document.querySelectorAll(".bullets li");
circles.forEach((e) => {
  e.addEventListener("click", () => {
    circles.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});
