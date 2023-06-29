const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  element.style.backgroundImage = 'linear-gradient(-45deg, #dd0034 50%, #0e1f87 100%)';
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  element.style.backgroundImage = 'linear-gradient(-45deg, #dd0034 50%, #0e1f87 100%)';
});
