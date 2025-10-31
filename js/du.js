const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;

const keycontainer = document.getElementById("keycontainer");
const akey = document.getElementById("a");
const dkey = document.getElementById("d");
const bio = document.getElementById("bio");
let currentMinimeIndex = 0;
const scrollpositions = [ 20, 1000, 2000, 3000, 4000];
let currentScrollIndex = 0;
const aboutme = document.getElementById("aboutme");
const optionbutton = document.getElementById("optionbutton");
const option = document.getElementById("option");
const gamemode = document.getElementById("game-mode");
const webmode = document.getElementById("web-mode");
const weight = document.getElementById("weight");
const seemore = document.getElementById("seemore");
const info1 = document.getElementById('info1');
const seeproj = document.getElementById('seeproj');

gamemode.style.display = "block";
webmode.style.display = "block";
gamemode.style.color = "rgba(76, 74, 74, 1)";

const stacks = document.getElementById('stacks');
const certificates = document.getElementById('certificates');
const projects =document.getElementById('projects');
const infocontainer = document.getElementById('infocontainer');

const minimepositionscontainer = [82, 190,250]
const minimepositions = [82,190,250, 460];

let allowProjectAnimation = true; // true = works in gamemode, false = stop in webmode

let moveInterval; 

const message = document.getElementById('message')

setTimeout(() => {
    gamemode.click();
}, 100); 



window.addEventListener('scroll', ()=>{
    let scrolly = window.scrolly;
    if(scrolly >100){
        message.style.display= 'none';
    }
});




webmode.addEventListener("click", () => {
    keycontainer.style.animation = "fadeout 1s ease-in-out forwards";
    webmode.style.color = "rgba(76, 74, 74, 1)";
    document.body.classList.remove("lightmode");
    document.body.style.transition = "all 0.5s ease-in-out";
    document.body.style.backgroundColor = "rgb(9, 9, 9)";
    bio.style.color = "rgba(76, 74, 74, 1)";
    weight.style.display = "block";
    minime.style.position = "fixed";
    gamemode.style.color = "white";
    seemore.style.display = "block";
    seemore.style.animation = "fadein 1s ease-in-out forwards";
    info1.style.display = 'block'
    allowProjectAnimation = false;

    setInterval(()=>{
        seemore.style.animation = "bouncing 1s infinite";
    },1500);

    window.addEventListener('scroll', ()=>{
    let scrolly = window.scrollY
    if(scrolly > 40){
        seemore.style.animation = "fadeout 1s ease-in-out forwards";
        setInterval(()=>{
            seemore.style.display = "none";
        },950);
    }
    });
    clearInterval(moveInterval);

    moveInterval = setInterval(() => {
    if (pos > -3) {
      pos -= 3; 
      minime.style.left = pos + "%";
      minime.src = "character/runningleft.gif";
    } else {
      pos = -3;
      minime.style.left = pos + "%";
        minime.src = "character/standing.gif";
      clearInterval(moveInterval);
    }
  }, 100); 
});


gamemode.addEventListener("click", () => {
    keycontainer.style.animation = "fadein 8s ease-in-out forwards";
    weight.style.display = "none";
    gamemode.style.color = "rgba(76, 74, 74, 1)";
    webmode.style.color = "white"
    aboutme.style.display = 'none';
    minime.style.position = "absolute";
    minime.style.top = '82%';
    seemore.style.display = 'none';
    info1.style.display = 'none';
    message.style.display = 'none'
    infocontainer.style.display = 'none';
    allowProjectAnimation = true;

    moveIntervalcenter = setInterval(() => {
    if (pos < 40) {
      pos += 2; 
      minime.style.left = pos + "%";
      minime.src = "character/runningright.gif";
    } else if(pos > 40){
        pos -=2;
        minime.style.left = pos + "%";
        minime.src = "character/runningleft.gif";
    } else {
      pos = 40;
      minime.style.left = pos + "%";
        minime.src = "character/standing.gif";
      clearInterval(moveIntervalcenter);
    }
  }, 100);  

  window.addEventListener('scroll', ()=>{
    let scrolly = window.scrollY;
    if(scrolly <= 650){
        message.style.display = 'block'
        setInterval(() => {
            message.style.animation = 'bouncing 3s infinite';
        }, 5000);
    }else if (scrolly>740){
        message.style.animation = 'fadeout 1.5s ease-in-out';
        setInterval(() => {
            message.style.display = 'none'
        }, 1400);
    }
});

    window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scrolly > 710){
            infocontainer.style.display = 'block';
        }else{
            
            infocontainer.style.display = 'none';
        }
    });

    projects.addEventListener('click',()=>{
        if (!allowProjectAnimation) return; // stop if in webmode

            const interval = setInterval(() => {
            pos += 5;
            minime.style.left = pos + '%';
            minime.src = "character/runningright.gif";

            if (pos >= 90) {
            clearInterval(interval);
            window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";
            }
        }, 200);

    });

// dito



});




document.addEventListener("click", (event) => {
    if(event.target === document.body || event.target === document){
        gamemode.style.display = "none";
        webmode.style.display = "none";
        optionbutton.style.display = "block";
    }
});



setInterval(()=>{
    akey.style.animation = "bouncing 1s ease-in-out infinite";
    dkey.style.animation = "bouncing 1.5s ease-in-out infinite";
},3500);


window.addEventListener("scroll", ()=>{
    let scrollY = window.scrollY;

    if(scrollY > 50){
        aboutme.style.animation = "fadein 1.3s ease-in-out forwards";
        aboutme.style.display = "block";
    }else if(scrollY < 50){
        aboutme.style.display = "none";
    }
});


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
            weight.style.display = 'block';
            minime.style.position = 'fixed'
            info1.style.display = 'block'
                window.scrollTo({
                top: 700,
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

        if(pos > 60){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "rgba(76, 74, 74, 1)";
            seeproj.style.animation = 'fadein 0.5s ease-in-out';
            setTimeout(() => {
                seeproj.style.display = 'block';
            }, 400);
            }
        if(pos < 60){
                document.body.classList.remove("lightmode");
                document.body.style.transition = "all 0.5s ease-in-out";
                document.body.style.backgroundColor = "rgb(9, 9, 9)";
                bio.style.color = "rgba(76, 74, 74, 1)";
                seeproj.style.animation = 'fadeout 0.5s ease-in-out';
                setTimeout(() => {
                seeproj.style.display = 'none';
                }, 400);
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

        if(pos > 60){
            document.body.classList.add("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "white";
            bio.style.color = "rgba(76, 74, 74, 1)";
            seeproj.style.animation = 'fadein 0.5s ease-in-out';
            setTimeout(() => {
                seeproj.style.display = 'block';
            }, 400);
        }
        if(pos < 60){
            document.body.classList.remove("lightmode");
            document.body.style.transition = "all 0.5s ease-in-out";
            document.body.style.backgroundColor = "rgb(9, 9, 9)";
            bio.style.color = "rgba(76, 74, 74, 1)";
            seeproj.style.animation = 'fadeout 0.5s ease-in-out';
                setTimeout(() => {
                seeproj.style.display = 'none';
            }, 400);
        }

    }




});


document.addEventListener("keyup", (event)=>{
    if(['a','d','A','D'].includes(event.key)){
        stationary_status = true;
        minime.src = "character/standing.gif";
    }
});

