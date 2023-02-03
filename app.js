const toggleButton = document.querySelector(".toggle-button");
const navigation = document.querySelector(".navigation");
const links = document.querySelectorAll(".navigation-link");

toggleButton.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});
links.forEach((e) => {
  e.addEventListener("click", () => {
    navigation.classList.remove("hidden");
  });
});
