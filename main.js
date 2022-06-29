/*
let ball = document.getElementById("square-div");

const myVar = setInterval(spostaDiv, 90);
let margin = 0;

let l = window.screen.width;
let w = 1300;

function spostaDiv() {
    console.log(w);
    if (margin == w) {
        margin = 0 + "px";
    } else {
        ball.style.marginLeft = margin + "px";
    }
    margin += 10;
}*/

class Movement {
    constructor(square) {
        this.square = square;
        this.margin = 0;
        this.interval = 500; //interval value 1s

    }

    run() {

        let width = window.screen.width;
        let margin = 0;
        let direction = 'left-to-bottom';
        setInterval(function () {

            let height = window.screen.height;

            if (margin == width) {
                margin = 0 + "px";
            } else {
                let square = document.getElementById("square-div");

                if (margin >= height) {

                    direction = 'right-to-top';
                    // square.style.marginLeft = 1366 + "px";
                    //square.style.marginTop = 768 + "px";
                    square.style.marginLeft = 1920 + "px";
                    square.style.marginTop = 718 + "px";
                    square.style.marginRight = margin + "px";
                    square.style.marginBottom = margin + "px";
                    console.log('hello');
                    direction = 'right-to-top';

                } else {
                    square.style.marginLeft = margin + "px";
                    square.style.marginTop = margin + "px";
                    console.log('hello 2');

                    direction = 'left-to-bottom';
                }
            }

            if (direction == 'left-to-bottom')
                margin += 10;
            else
                margin -= 10;

            console.log('margin ' + margin + ' width ' + width + ' height ' + height + ' direction ' + direction);

        }, this.interval);
    }
}


let square = document.getElementById("square-div");
const movementObject = new Movement(square);
movementObject.run();
