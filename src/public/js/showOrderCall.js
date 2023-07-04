const formSend = document.querySelector(".form-send-contacts");
const wrap4form = document.querySelector(".wrap-4-form");
let firstClick = false;

document.addEventListener("click", (e) => {
  if (!wrap4form.contains(e.target)) {
    if ((formSend.classList.contains("active")) && (!firstClick)) {
      formSend.classList.remove("active");
    }
    firstClick = false;
  }
});

const onOrderCall = () => {
  formSend.classList.add("active");
  firstClick = true;
};
