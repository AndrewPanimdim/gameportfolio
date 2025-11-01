const minime = document.getElementById("minime");
let pos = 10;
let stationary_status = true;

setInterval(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = '1s';
    document.body.style.color = 'white';
}, 2500);

document.addEventListener("keydown", (event)=>{
    if(event.key === "A" || event.key === "a"){
        pos -= 2;
        minime.style.left = pos + "%";
        minime.src = "character/runningleft.gif";
        stationary_status = false;
        if(pos <= -8){
            pos = -8;
            window.location.href = "https://andrewpanimdim.github.io/gameportfolio/";
        }
    }
    else if(event.key === "D" || event.key === "d"){
        pos += 2;
        minime.style.left = pos + "%";
        minime.src = "character/runningright.gif";
        stationary_status = false;
        if(pos >= 85){
            pos = 85;
        }
    }
});

document.addEventListener("keyup", (event)=>{
    if(['a','d','A','D'].includes(event.key)){
        stationary_status = true;
        minime.src = "character/standing.gif";
    }
});