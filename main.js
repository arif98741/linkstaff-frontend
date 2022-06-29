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
    constructor(square, width) {
        this.square = square;
        this.width = window.screen.width;
        this.margin = 0;
        this.interval = 50; //interval value 1s

    }

    run() {

        let width = window.screen.width;
        let margin = 0;
        setInterval(function () {
            console.log(width);
            let height = window.screen.height;

            if (margin == width) {
                margin = 0 + "px";
            } else {
                let square = document.getElementById("square-div");

                if (margin >= height) {
                    square.style.marginLeft = 0 + "px";
                    square.style.marginTop = 0 + "px";
                    square.style.marginRight = margin + "px";
                    square.style.marginBottom = margin + "px";
                }else{
                    square.style.marginLeft = margin + "px";
                    square.style.marginTop = margin + "px";
                }


            }
            margin += 10;


            console.log('margin '+margin+' width '+width+' height '+height);

        }, this.interval);
    }
}


let square = document.getElementById("square-div");
let screenWidth = window.screen.width;

let movementObject = new Movement(square, screenWidth);
movementObject.run();
