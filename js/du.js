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
const boxcontainer = document.getElementById('boxcontainer');
const minimepositionscontainer = [82, 190,250]
const minimepositions = [82,190,250, 460];

let allowProjectAnimation = true; // true = works in gamemode, false = stop in webmode

let moveInterval; 

const message = document.getElementById('message');
const py = document.getElementById('py');
const js = document.getElementById('js');
const cs= document.getElementById('cs');
const ht = document.getElementById('ht');
const stackcontainer = document.getElementById('stackscontainer');
const stackinfo = document.getElementById('stackinfo');
const seemore2 = document.getElementById('seemore2');

const seeprojects = document.getElementById('seeprojects');

setTimeout(() => {
    gamemode.click();
}, 100); 

setTimeout(() => {
    seemore2.style.display = 'block';
}, 6000);

setTimeout(() => {
    seemore2.style.animation = 'slideleftright 2s infinite';
}, 7900);

setTimeout(() => {
    seeprojects.style.animation = 'slideleftright 3s infinite';
}, 8900);

window.addEventListener('scroll', ()=>{
    let scrolly = window.scrollY;
    if(scrolly >100){
        message.style.display= 'block';
        seemore2.style.display = 'none';
        seeprojects.style.display = 'block';
        seemore2.style.opacity = 0;
        seeprojects.style.opacity = 0;
    }else{
        seemore2.style.opacity = 1;
        seeprojects.style.opacity = 1;
    }
});

webmode.addEventListener("click", () => {
    seemore2.style.opacity = 0;
    seeprojects.style.opacity = 0;
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
    if (pos > -2) {
      pos -= 2; 
      minime.style.left = pos + "%";
      minime.src = "character/runningleft.gif";
    } else {
      pos = -2;
      minime.style.left = pos + "%";
        minime.src = "character/standing.gif";
      clearInterval(moveInterval);
    }
  }, 100); 

  projects.addEventListener('click', ()=>{
          window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";   
  });


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
    stackinfo.style.display = 'none';
    stackcontainer.style.display = 'none';

    window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scroll > 100){
             seemore2.style.display = 'none';
             seeprojects.style.display = 'none';
        }else{
             seemore2.style.display = 'block';  
             seeprojects.style.display = 'block';
        }   
    });

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
        setTimeout(() => {
            message.style.animation = 'bouncing 3s infinite';
        }, 4000);
}});

    window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scrolly > 710){
            infocontainer.style.display = 'block';
            message.style.display = 'none'
        }else{
            stackcontainer.style.display = 'none';
            infocontainer.style.display = 'none';
        }
    });

    projects.addEventListener('click',()=>{
        if (!allowProjectAnimation) return; // stop if in webmode

            const interval = setInterval(() => {
            pos += 4;
            minime.style.left = pos + '%';
            minime.src = "character/runningright.gif";

            if (pos >= 96) {
            clearInterval(interval);
            window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";
            }
        }, 100);

    });

    stacks.addEventListener('click', () => {
        window.scrollTo({
                top: 1800,
                left: 0,
                behavior: 'smooth'
                });
                
        stackcontainer.style.display = 'block';
        stackinfo.style.display = 'block';
        infocontainer.style.display = 'block';
});

window.addEventListener('scroll', ()=>{
    let scrolly = window.scrollY;
    if(scrolly >= 1400){
        setTimeout(() => {
            stackcontainer.style.display = 'block';
            stackinfo.style.display = 'block';
            }, 500);
    }
})


    



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

