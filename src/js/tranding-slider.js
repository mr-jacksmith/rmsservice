const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item')

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item--1');
            el.classList.remove('gallery-item-0');
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
            el.classList.remove('gallery-item-6');
            el.classList.remove('gallery-item-7');
        });
        
        let num = -4
        for (let i=-1; i<8; i++) {
            console.log(this.carouselArray.length + num)
            if (i < 3) {
                this.carouselArray[this.carouselArray.length + num].classList.add(`gallery-item-${i}`);
                num++;
            } else {
                this.carouselArray[i-3].classList.add(`gallery-item-${i}`)
            }
        }
        // this.carouselArray.slice(0, 5).forEach((el, i) => {
        //     el.classList.add(`gallery-item-${i+1}`);
        // });
    }

    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            // document.querySelector(`.gallery-controls-${control}`).innerText = control;
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();