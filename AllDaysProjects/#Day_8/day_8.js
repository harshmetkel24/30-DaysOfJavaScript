const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.globalCompositeOperation = 'multiply';
ctx.lineJoin = 'beve1';
ctx.lineCap = 'round';

let hue = 0;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;

function draw(e) {
    if (!isDrawing) return; //this will stop the event if we are moving mouse without drawing anything
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    //   startFrom
    ctx.moveTo(lastX, lastY);
    //   goTo
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // update lastX and lastY
    [lastX, lastY] = [e.offsetX, e.offsetY]; //this is ES6 template known as structuring of array
    hue++;
    if (hue >= 360) hue = 0;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
    // just flip the direction
    if (direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
// canvas.addEventListener('mouseout', () => (isDrawing = false)); //if we click on scrreen and leave the window this will make the isDrawing = false, bcoz there will be no mouseup event in this case mouseout event is required
