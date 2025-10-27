const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;

const keycontainer = document.getElementById("keycontainer");
const akey = document.getElementById("a");
const dkey = document.getElementById("d");
const bio = document.getElementById("bio");
setInterval(()=>{
    akey.style.animation = "bouncing 1.5s ease-in-out infinite";
    dkey.style.animation = "bouncing 2s ease-in-out infinite";
},4000);




document.addEventListener("keydown",(event)=>{
    if(event.key == "A" || event.key == "a" || event.key == "D" || event.key == "d"){
        keycontainer.style.animation = "fadeout 1s ease-in-out forwards";
    }
});


document.addEventListener("keydown", (event)=>{
    if(event.key === "A" || event.key === "a"){
        pos -= 2;
        minime.style.left = pos + "%";
        minime.src = "character/runningleft.gif";
        stationary_status = false;
        if(pos <= -2){
            pos = -2;
            minime.style.top = 150 + "%";
                window.scrollTo({
                top: 1000,
                left: 0,
                behavior: 'smooth'
                });
        }

        if(pos > 70){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "black";
            }
        if(pos < 70){
                document.body.classList.remove("lightmode");
                document.body.style.transition = "all 0.5s ease-in-out";
                document.body.style.backgroundColor = "rgb(9, 9, 9)";
                bio.style.color = "rgb(153, 151, 151)";
            }
        
    }
    else if(event.key === "D" || event.key === "d"){
        pos += 2;
        minime.style.left = pos + "%";
        minime.src = "character/runningright.gif";
        stationary_status = false;
        if(pos >= 94){
            pos = 94;
            window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";
        }

        if(pos > 70){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "black";
        }
        if(pos < 70){
            document.body.classList.remove("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "rgb(9, 9, 9)";
            bio.style.color = "rgb(153, 151, 151)";        
        }

    }

});


document.addEventListener("keyup", (event)=>{
    if(['a','d','A','D'].includes(event.key)){
        stationary_status = true;
        minime.src = "character/standing.gif";
    }
});

