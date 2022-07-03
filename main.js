/**
 * class that defines and carries all properties
 */
class Movement {
    constructor(interval = 1000, distance = 10) {
        this.interval = interval; //interval value 1s
        this.distance = distance; //distance value of placement on every 1s in pixel
    }

    /**
     * Method for handing movement
     */
    run() {
        let height = window.screen.height;
        let margin = 0;
        let distance = this.distance;
        let direction = 'left-to-bottom';
        setInterval(function () {

            let square = document.getElementById("square-div");

            if (direction == 'left-to-bottom') {

                square.style.marginLeft = margin + "px";
                square.style.marginTop = margin + "px";
                margin += distance;
                if (margin == height) {
                    let availHeight = window.screen.availHeight;
                    square.style.marginTop = availHeight - 100;
                    direction = 'bottom-to-top';
                }
            } else {
                square.style.marginLeft = margin + "px";
                square.style.marginTop = margin + "px";
                margin -= distance;
                if (margin == 0) {
                    direction = 'left-to-bottom';
                }
            }
        }, this.interval);
    }
}

const movementObject = new Movement(1000);
movementObject.run();
