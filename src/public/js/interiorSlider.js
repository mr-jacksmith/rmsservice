const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");
let imgList;
let leftSideIndex;
let imgJson;
let correctIndex;

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    for (let i = 0; i < this.carouselArray.length; i++) {
      correctIndex = (leftSideIndex + i) % imgList.length;
      this.carouselArray[i]
        .querySelector("img")
        .setAttribute("src", "img/doors/interior/" + imgList[correctIndex]);
      this.carouselArray[i]
        .querySelector(".name-of-model")
        .querySelector("div").innerHTML = imgJson[imgList[correctIndex]].name;
      this.carouselArray[i]
        .querySelector(".wrapped")
        .querySelector(".price").innerHTML =
        imgJson[imgList[correctIndex]].price + " &#8381;";
    }
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item--1");
      el.classList.remove("gallery-item-0");
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
      el.classList.remove("gallery-item-6");
      el.classList.remove("gallery-item-7");
    });

    for (let i = -1; i < 8; i++) {
      correctIndex = (leftSideIndex + i + 1) % imgList.length;
      this.carouselArray[i + 1].classList.add(`gallery-item-${i}`);
      this.carouselArray[i + 1]
        .querySelector("img")
        .setAttribute("src", "img/doors/interior/" + imgList[correctIndex]);
      this.carouselArray[i + 1]
        .querySelector(".name-of-model")
        .querySelector("div").innerHTML = imgJson[imgList[correctIndex]].name;
      this.carouselArray[i + 1]
        .querySelector(".wrapped")
        .querySelector(".price").innerHTML =
        imgJson[imgList[correctIndex]].price + " &#8381;";
    }
  }

  setCurrentState(direction) {
    if (direction.className == "gallery-controls-previous") {
      this.carouselArray.unshift(this.carouselArray.pop());
      leftSideIndex = (leftSideIndex - 1) % imgList.length;
      if (leftSideIndex < 0) leftSideIndex = imgList.length - 1;
    } else {
      this.carouselArray.push(this.carouselArray.shift());
      leftSideIndex = (leftSideIndex + 1) % imgList.length;
    }

    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
      // document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

async function getImg() {
  await fetch("/interior-img")
    .then((response) => response.json())
    .then((images) => {
      imgList = images;
      leftSideIndex = imgList.length - 4;
    })
    .then(() =>
      fetch("/interior-json")
        .then((res) => res.json())
        .then((iJson) => {
          imgJson = iJson;
        })
    )
    .then(() => {
      const exampleCarousel = new Carousel(
        galleryContainer,
        galleryItems,
        galleryControls
      );

      exampleCarousel.setControls();
      exampleCarousel.useControls();
    })
    .catch((error) => {
      console.error(error);
    });
}

getImg();
