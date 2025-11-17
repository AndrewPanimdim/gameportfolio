const minime = document.getElementById("minime");
let pos = 20;
let stationary_status = true;
let moveleft = false;
let moveright = false;
let facingright = true;




function isMobile() {
    return window.innerWidth <= 568;
}

if (isMobile()) {

}





setInterval(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = '4s';
    document.body.style.color = 'white';
},100);


function updateMinimeAnimation() {
    if (stationary_status) {
        minime.src = facingright 
            ? "character/standing.gif" 
            : "character/standingleft.gif";
    } 
    else if (moveleft) {
        minime.src = "character/runningleft.gif";
        facingright = false;
    } 
    else if (moveright) {
        minime.src = "character/runningright.gif";
        facingright = true;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "A" || event.key === "a") {
        pos -= 2;
        moveleft = true;
        moveright = false;
        stationary_status = false;
        updateMinimeAnimation();

        if (pos <= -8) {
            pos = -8;
            window.location.href = "https://andrewpanimdim.github.io/gameportfolio/";
        }
    } 
    else if (event.key === "D" || event.key === "d") {
        pos += 2;
        moveright = true;
        moveleft = false;
        stationary_status = false;
        updateMinimeAnimation();

        if (pos >= 85) {
            pos = 85; // right wall
        }
    }

    minime.style.left = pos + "%";
});

document.addEventListener("keyup", (event) => {
    if (['a','A','d','D'].includes(event.key)) {
        stationary_status = true;
        moveleft = false;
        moveright = false;
        updateMinimeAnimation();
    }
});
