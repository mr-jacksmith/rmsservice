// Получаем элементы бургера и навигации
const burger = document.querySelector("#burger");
const navigation = document.querySelector(".navbar");

// Добавляем обработчик событий на бургер
burger.addEventListener("click", () => {
  // Меняем состояние бургера
  burger.classList.toggle("active");
  
  if (burger.classList.contains("active")) {
    // Если бургер активен, отображаем навигацию плавно
    navigation.style.display = "flex";
    navigation.style.overflow = "visible"
  
    // setTimeout(() => {
      navigation.style.height = "auto";
    // }, 10);
  } else {
    // Если бургер неактивен, скрываем навигацию плавно
    navigation.style.height = "0px";
    navigation.style.overflow = "hidden"
    navActiveItems.forEach(el => el.classList.remove('active'))
    
    // setTimeout(() => {
      navigation.style.display = "none";
    // }, 10);
  }
});

window.addEventListener('resize', startBurger);

function startBurger () {
  let windowInnerWidthWindow = window.innerWidth;

  if (windowInnerWidthWindow > 1199) {
    navigation.style.display = "flex"
    navigation.style.height = "auto"
  }
  else {
    if (burger.classList.contains("active")) {
      navigation.style.display = "flex"
      navigation.style.height = "auto"
  }
    else {
      navigation.style.display = "none"
      navigation.style.height = "0px"
    }
  }
}