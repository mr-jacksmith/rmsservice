const formSend = document.querySelector(".form-send-contacts");
const wrap4form = document.querySelector(".wrap-4-form");
const body = document.querySelector("body");

let firstClick = false;

document.addEventListener("click", (e) => {
  if (!wrap4form.contains(e.target)) {
    if ((formSend.classList.contains("active")) && (!firstClick)) {
      formSend.classList.remove("active");
      body.style.overflowY = 'scroll';
    }
    firstClick = false;
  }
});

const onOrderCall = () => {
  formSend.classList.add("active");
  body.style.overflowY = 'hidden';
  firstClick = true;
};
