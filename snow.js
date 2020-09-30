//canvas
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 700;
ctx.fillStyle = "white"

//global var
let Snowflakes = [ ]
let n =0
for (n ; n < 20 ; n++){
    Snowflakes.push({
        x: randomDec(0, cnv.width),
        y: 0,
        r: randomDec(0, 15),
        s: randomDec(0, 4)
    })
}

//event listener
document.getElementById("addSnow").addEventListener("click" , addSnow)
document.getElementById("minusSnow").addEventListener("click" , lessSnow)

//functions
function addSnow() {
    Snowflakes.push({
        x: randomDec(0, cnv.width),
        y: 0,
        r: randomDec(0, 15),
        s: randomDec(0, 4) 
    })

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc( Snowflakes[n].x, Snowflakes[n].y, Snowflakes[n].r , 0, 2 * Math.PI)
    ctx.fill()
}

 setInterval(loop, 10)

function loop( ) {
        ctx.fillStyle = "black"
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    let i = 0 
    for (i = 0 ; i < Snowflakes.length; i++){
    //move snowflake

        Snowflakes[i].y += Snowflakes[i].s

    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc( Snowflakes[i].x, Snowflakes[i].y, Snowflakes[i].r , 0, 2 * Math.PI)
    ctx.fill()

    Snowflakes[i].y = constrain(Snowflakes[i].y , 0, 700)}
}

function lessSnow () {
    Snowflakes.pop()
}

function constrain(y, low, high){

    if (low > y) { 
        return (low)
    } else if (y > high){
        return (low)
    } else {
        return (y)
    }
}

function randomDec(lowNum, highNum) {
    return (Math.random()* (lowNum + highNum) - lowNum)
}