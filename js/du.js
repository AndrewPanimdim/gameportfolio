const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;

const keycontainer = document.getElementById("keycontainer");
const akey = document.getElementById("a");
const dkey = document.getElementById("d");
const bio = document.getElementById("bio");
const minimepositions = [83, 150, 200, 250, 300];
let currentMinimeIndex = 0;
const scrollpositions = [ 100, 1000, 2000, 3000, 4000];
let currentScrollIndex = 0;

setInterval(()=>{
    akey.style.animation = "bouncing 1s ease-in-out infinite";
    dkey.style.animation = "bouncing 1.5s ease-in-out infinite";
},3500);




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
            minime.style.top = minimepositions[currentScrollIndex] + "%";
                window.scrollTo({
                top: scrollpositions[currentScrollIndex],
                left: 0,
                behavior: 'smooth'
                });
            currentScrollIndex++;
            if(currentScrollIndex >= scrollpositions.length){
                currentScrollIndex = 0;
            }if(currentMinimeIndex >= minimepositions.length){
                currentMinimeIndex = 0;
        }
    }

        if(pos > 50){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "black";
            }
        if(pos < 50){
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

        if(pos > 50){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "black";
        }
        if(pos < 50){
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

