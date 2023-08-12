const galleryContainer = document.querySelector(".gallery-container");
// const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["prev", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");
let imgList;
let leftSideIndex;

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
    for (let i = 0; i < this.carouselArray.length; i++) {
      this.carouselArray[i].setAttribute(
        "src",
        "img/photogallery/" + imgList[(leftSideIndex + i) % imgList.length]
      );
    }
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
    });

    for (let i = 1; i < 4; i++) {
      this.carouselArray[i - 1].classList.add(`gallery-item-${i}`);
      this.carouselArray[i - 1].setAttribute(
        "src",
        "img/photogallery/" + imgList[(leftSideIndex + i - 1) % imgList.length]
      );
    }
  }

  setCurrentState(direction) {
    if (direction.className == "prev") {
      this.carouselArray.unshift(this.carouselArray.pop());
      leftSideIndex = (leftSideIndex - 1) % imgList.length;
    } else {
      this.carouselArray.push(this.carouselArray.shift());
      leftSideIndex = (leftSideIndex + 1) % imgList.length;
    }

    this.updateGallery();
  }

  // setControls() {
  //   this.carouselControls.forEach((control) => {
  //     // console.log()
  //     document.querySelector("."+control).className = `gallery-controls-${control}`;
  //   });
  // }

  useControls() {
    const triggers = [document.querySelector('.prev'), document.querySelector('.next')];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

async function getImg() {
  await fetch("/gallery-img")
    .then((response) => response.json())
    .then((images) => {
      imgList = images;
      leftSideIndex = imgList.length - 1;
    })
    .then(() => {
      const exampleCarousel = new Carousel(
        galleryContainer,
        galleryItems,
        galleryControls
      );

      // exampleCarousel.setControls();
      exampleCarousel.useControls();
    })
    .catch((error) => {
      console.error(error);
    });
}

getImg();