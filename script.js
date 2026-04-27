const list = document.querySelectorAll(".Fisix li")

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    list.forEach((item) => item.classList.remove("list1"));
    e.currentTarget.classList.add("list1");
  });
});