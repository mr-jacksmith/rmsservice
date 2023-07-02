let wrappeds = [, , ,]
wrappeds[0] = Array.from(document.querySelectorAll(".wrapped-loop-1"))
wrappeds[1] = Array.from(document.querySelectorAll(".wrapped-loop-2"))
wrappeds[2] = Array.from(document.querySelectorAll(".wrapped-loop-3"))
wrappeds[3] = Array.from(document.querySelectorAll(".wrapped-loop-4"))
let wraps = document.querySelectorAll(".wrap");
let body = document.querySelector("body");
let flags = [false, false, false, false];
wrappeds = Array.from(wrappeds);

body.onmousemove = (e) => {
    for (let i=0; i<wraps.length; i++) {
        if (wraps[i].contains(e.target)) {
            flags[i] = true;
        } else {
            flags[i] = false;
        }
    }
};

setInterval(() => {
    wrappeds.forEach((ar, ind) => {
        ar.forEach((el) => {
            if (! flags[ind]) {
                el.classList.remove("wrapped-1");
                el.classList.remove("wrapped-2");
                el.classList.remove("wrapped-3");
                el.classList.remove("wrapped-4");
            }
        })
    });

    for (let i=0; i<wrappeds.length; i++) {
        if (! flags[i]) {
            wrappeds[i].push(wrappeds[i].shift());
        }
    }

    for (let i = 0; i < wrappeds.length; i++) {
        for (let j = 0; j<wrappeds[i].length; j++) {
            if (! flags[i]) {
                wrappeds[i][j].classList.add(`wrapped-${j + 1}`);
            }
        }
  }
}, 5000);
