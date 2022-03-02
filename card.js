const stars = [];
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function init() {
    const banner = document.getElementById("banner");
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random(),
            y: Math.random(),
            size: Math.random(),
            change: 0.15,
        });
    }
}

function update() {
    for (const star of stars) {
        star.x += 0.01;
        if (star.x > 1) {
            star.x = 0;
        }
        if (star.size < 0.1) {
            star.change = 0.1;
        } else if (star.size > 0.9) {
            star.change = -0.1;
        }
        star.size += star.change;
    }
}

function render() {
    const { width, height } = canvas;
    context.clearRect(0, 0, width, height);
    for (const star of stars) {
        context.beginPath();
        context.arc(star.x * width, star.y * height, star.size * 3, 0, 2 *
            Math.PI,
            false);
        context.fillStyle = "white";
        context.fill();
    }
}

function twinkle() {
    update();
    render();
}
setInterval(twinkle, 100);
init();

render();