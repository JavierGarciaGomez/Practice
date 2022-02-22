// add hovered class in selected list item
let list = document.querySelectorAll(".navigation li");

const activeLink = (e) => {
  list.forEach((item) => item.classList.remove("hovered"));
  console.log(e.currentTarget);
  e.currentTarget.classList.add("hovered");
};

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
