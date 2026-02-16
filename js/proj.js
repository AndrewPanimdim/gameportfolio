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



/*

    webmode.addEventListener("click", () => {
        gamemode.style.color = 'grey';
        webmode.style.color = 'white';
        keycontainer.style.animation = "fadeout 1s ease-in-out forwards";
        weight.style.display = "block";
        minime.style.position = "fixed";
        seemore.style.display = "block";
        seemore.style.animation = "fadein 1s ease-in-out forwards";
        seemore2.style.opacity = 0;
        seemore2.style.display = 'none';
        message.style.display = 'none';
        mylocation.style.display = 'block';
        projects.style.display = 'none';
        certificates.style.display = 'none';
        stacks.style.display = 'none';
        
        
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
    if (pos < 90) {
        pos += 2; 
        minime.style.left = pos + "%";
        moveright = true;
        moveleft = false;
        stationary_status = false;
        updateMinimeAnimation();
    } else {
        pos = 90;
        minime.style.left = pos + "%";
        moveright = false;
        stationary_status = true;
        updateMinimeAnimation();
        clearInterval(moveInterval);
    }
}, 100);

      projects.addEventListener('click', ()=>{
              window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";   
      });

      window.addEventListener('scroll', ()=>{
            let scrolly = window.scrollY;
            if(scrolly > 710){
                infocontainer.style.display = 'block';
                message.style.display = 'none'
            }
        });

        
    window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;

    // Show message below 650px
    if (scrolly <= 650) {
        message.style.display = 'block';
        
        setTimeout(() => {
            message.style.animation = 'bouncing 3s infinite';
        }, 4000);
    }

    // Show info container at > 720px
    if (scrolly > 720) {
        infocontainer.style.display = 'block';
        projectshow.style.display = 'block';
        certificates.style.display = 'block';
        message.style.display = 'none';
    }

    
});
        
// Move the stacks listener OUTSIDE the gamemode listener (after the gamemode block closes)
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

// Also add listeners for other elements that should work independently
certificates.addEventListener('click', () => {
    window.scrollTo({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });
    stackinfo.style.display = 'block';
});

projects.addEventListener('click', () => {
    window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";
});

    }); */
