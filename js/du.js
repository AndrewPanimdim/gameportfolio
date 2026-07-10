const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;
let moveright = false;
let moveleft = false;
let facingright = true;

const sleep = ms => new Promise(r => setTimeout(r, ms));


const projectheader2 = document.getElementById('projectsheader2');
const projectvideodiv2 = document.getElementById('prjctdiv2');
const projectinfo2 = document.getElementById('projectinfo2');  
const buttoncontainer = document.getElementById('buttoncontainer');
const projectinfo = document.getElementById('projectinfo');
const projectvideodiv = document.getElementById('prjctdiv');
const projectheader = document.getElementById('projectsheader');
const mylocation = document.getElementById("mylocation");
const hello = document.getElementById("Hello");
const HTML = document.getElementById("HTML");
const CSS = document.getElementById("CSS");
const JavaScript = document.getElementById("JS");
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
const map = document.getElementById('map-container');
const projectscontainer = document.getElementById('projectscontainer');


const stacksbutton = document.getElementById('stackbutton');
const projectsbutton = document.getElementById('projectsbutton');
const contactsbutton = document.getElementById('contactsbutton');



const certificates = document.getElementById('certificates');
const projects =document.getElementById('projects');
const infocontainer = document.getElementById('infocontainer');
const boxcontainer = document.getElementById('boxcontainer');
const minimepositionscontainer = [82, 190,250]
const minimepositions = [82,190,250, 460];

let allowProjectAnimation = true;
let moveInterval; 

const message = document.getElementById('message');
const py = document.getElementById('py');
const js = document.getElementById('js');
const cs= document.getElementById('cs');
const ht = document.getElementById('ht');
const java = document.getElementById('java');
const stackcontainer = document.getElementById('stackscontainer');
const stackinfo = document.getElementById('stackinfo');
const seemore2 = document.getElementById('seemore2');
const seeprojects = document.getElementById('seeprojects');

const aboutmebutton = document.getElementById('abmebutton');
const contact = document.getElementById('contact');
const projectshow = document.getElementById('projectshow');

// Debounced reload on window resize: reload once after resizing finishes
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        location.reload();
    }, 200);
});


document.body.style.backgroundColor = "black";
function updateMinimeAnimation() {
    if (stationary_status) {
        if (facingright) {
            minime.src = "character/standing.gif";
        } else {
            minime.src = "character/standingleft.gif";
        }
    } else if (moveleft) {
        minime.src = "character/runningleft.gif";
        facingright = false;
    } else if (moveright) {
        minime.src = "character/runningright.gif";
        facingright = true;
    }
}

function isMobile() {
    return window.innerWidth <= 568;
}

if (isMobile()) {
    if (weight) weight.style.display = "block";
    if (minime) minime.style.display = "none";
    if (keycontainer) keycontainer.style.display = "none";
    if (option) option.style.display = "none";
    if (seemore2) seemore2.style.display = "none";
    if (message) message.style.display = "none";
    if (map) map.style.display = "none";
    if (aboutme) {
        cs.style.display = 'none';
        ht.style.display = 'none';
        js.style.display = 'none';
        py.style.display = 'none';
        stacks.style.display = 'none';
        projects.style.display = 'none';
        aboutme.style.display = 'none';
        stackinfo.style.display = 'none';
        stacks.style.position = 'fixed';
        projects.style.position = 'fixed';
        stacks.innerText = 'Stacks';
        info1.style.top = '130%'
        aboutme.style.top = '115%';
        aboutme.style.left =  '33%';
        contact.style.display = 'flex'
        stackinfo.style.display = 'none';
        entry.style.display = 'none';

        boxcontainer.style.top = '360%';
        
        aboutmebutton.style.display = 'flex';

        if (infocontainer) infocontainer.style.display = originalDisplays.infocontainer || 'block';



        
        window.addEventListener('scroll',()=>{
            let scrolly = window.scrollY;
            if(scrolly >= 120){
                aboutme.style.animation = 'fadein 2s ease-in-out';
                aboutme.style.display = 'block';
                setTimeout(() => {
                    info1.style.display = 'block';
                    map.style.display = 'block';
            },  1500);
                
            }if(scrolly >= 800){
            stackinfo.style.display = 'block';
            setTimeout(() => {
                cs.style.display = 'flex';
                ht.style.display = 'flex';
                js.style.display = 'flex';
                py.style.display = 'flex';
                java.style.display = 'flex';
            },  1000);
            }
        });


        
        
    }

    













    
} else {



    





    




    
    console.log('Andrew Panimdim created this little software;)');

    setTimeout(() => {
        seemore2.style.animation = 'slideleftright 2s infinite';
    }, 2900);


    window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scrolly >100){
            //message.style.display= 'block';
            seemore2.style.display = 'none';
            seeprojects.style.display = 'block';
            seemore2.style.opacity = 0;
            seeprojects.style.opacity = 0;
        }else{
            seemore2.style.opacity = 1;
            seeprojects.style.opacity = 1;
        }
    });


    gamemode.addEventListener("click", () => {
        option.style.display = 'block';
        keycontainer.style.animation = "fadein 7s ease-in-out forwards";
        weight.style.display = "none";
        gamemode.style.color = "white";
        webmode.style.color = "grey"
        aboutme.style.display = 'none';
        minime.style.position = "absolute";
        minime.style.top = '82%';
        seemore.style.display = 'none';
        info1.style.display = 'none';
        message.style.display = 'none'
        allowProjectAnimation = true;
        stackinfo.style.display = 'none';
        stackcontainer.style.display = 'none';
        map.style.display = 'none';
        mylocation.style.display = 'none';
        projectshow.style.display = 'none';
        stacks.style.display = 'none';
        projects.style.display = 'none';
        certificates.style.display = 'none';
        stackinfo.style.display = 'none';
        stackcontainer.style.display = 'none';
        infocontainer.style.display = 'none';
        certificates.style.display = 'none';
        projectshow.style.display = 'none';
        stacks.style.display = 'none';
        aboutme.style.display = 'none';
        infocontainer.style.display = 'none';
        projectscontainer.style.display = 'none';


        clearInterval(moveInterval);
    
        
        



        setTimeout(() => {
        seemore2.style.display = 'block';
        }, 2000);



        window.addEventListener('scroll', ()=>{
            let scrolly = window.scrollY;
            if(scrolly > 120){
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
          moveright = true;
          moveleft = false;
          stationary_status = false;
          updateMinimeAnimation();
        } else if(pos > 40){
            pos -=2;
            minime.style.left = pos + "%";
            moveleft = true;
            moveright = false;
            stationary_status = false;
            updateMinimeAnimation();
        } else {
          pos = 40;
          minime.style.left = pos + "%";
          moveright = false;
          moveleft = false;
          stationary_status = true;
          updateMinimeAnimation();
          clearInterval(moveIntervalcenter);
        }
      }, 100);  

      window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scrolly <= 650){
            //message.style.display = 'block'
            setTimeout(() => {
                message.style.animation = 'bouncing 3s infinite';
            }, 4000);
    }});

        
    });


const projectlinks = [
    'https://andrewpanimdim.github.io/portfolio2/Main/index.html',
    'https://github.com/AndrewPanimdim/mini-ASL-reader-ML-',
    'https://andrewpanimdim.github.io/Andrew-s-Little-Something/',
    'https://andrewpanimdim.github.io/gameportfolio'

];

const infos = [
    "Portfolio 02",
    'ASL Mediapipe Reader ',
    "Drew's lil something",
    "Drew's lil game"
];  


const projectvideo = [
    "videos/prt2.gif",
    "photos/asl.gif",
    "videos/lilsom.gif",
    "photos/lilgame.gif"
];



const projectabout = [
    "I built this small hardcoded project back in Grade 12 to focus on improving my CSS skills, especially animations and hover effects. The HTML and CSS were written manually since that was my main priority. I used AI for the JavaScript, but overall it was a great learning experience that strengthened my front-end foundation.",

    "I created this vibe-coded ASL reader out of curiosity after seeing a sign language reader that relied on static images instead of hand landmarks. I wanted to try building one that used hand landmarks instead. It turned out better than I expected—it can recognize the entire alphabet except for J.",

    "This small JavaScript project was me experimenting and learning the language on my own, without AI. It eventually became the template for the website you're currently viewing.",

    "This hardcoded portfolio was built to practice my fundamentals. The idea of showcasing projects through GIFs was inspired by a senior in engineering, and it slowly evolved into this design. I still wish I could improve the GIF quality, but overall, I’m proud of how it turned out."    

];


const infos2 = [
    "Portfolio practice 03",
    "Transparent Notes",
    "My First Website"
];

const projectvideo2 = [
    "videos/prt3.gif",
    "photos/transparentnotes.gif",
    "videos/first.gif"
];

const projectabout2 = [
    "I built this small hard-coded website as a way to practice my front-end skills and stay productive during summer break. It’s a simple project, but I focused on making the hover effects feel interactive and engaging to improve the overall user experience.",

    "The idea for this project came from a classmate who struggled with unscripted presentations. That inspired me to create a note-taking tool that only the presenter can see during a presentation—something subtle that could help people feel more confident without relying on obvious scripts. I explored the concept using AI-assisted coding to experiment with how it could work.",

    "Overall, this project was about experimenting, learning, and enjoying the process of working with HTML, CSS, and JavaScript. More importantly, I challenged myself to improve my JavaScript skills independently, without relying on AI, so I could better understand how everything works behind the scenes."

];

const projectlinks2 = [
    'https://andrewpanimdim.github.io/Portfolio3/',
    'https://github.com/AndrewPanimdim/TransparentNotes',
    'https://andrewpanimdim.github.io/DrewsFirstWebsite/'

];


projectvideodiv.addEventListener('click', () => {
    const link = projectvideodiv.getAttribute('data-link');
    if (link) window.open(link, '_blank');
});

projectvideodiv2.addEventListener('click', () => {
    const link = projectvideodiv2.getAttribute('data-link');
    if (link) window.open(link, '_blank');
});

let isRunning = false;

async function startInfoLoop() {
    if (isRunning) return;
    isRunning = true;

    let index = 0;

    while (true) {
        if (projectscontainer.style.display !== 'block') {
            isRunning = false;
            return;
        }

        projectheader.textContent = infos[index];
        projectvideodiv.src = projectvideo[index];
        projectinfo.textContent = projectabout[index]
        projectvideodiv.setAttribute('data-link', projectlinks[index]);

        
        index++;
        if (index >= infos.length) index = 0;
        await sleep(15000);
        
    }
}


let isRunning2 = false;

async function startInfoLoop2() {
    if (isRunning2) return;
    isRunning2 = true;

    let index2 = 0;

    while (true) {
        if (projectscontainer.style.display !== 'block') {
            isRunning2 = false;
            return;
        }

        projectheader2.textContent = infos2[index2];
        projectvideodiv2.src = projectvideo2[index2];
        projectinfo2.textContent = projectabout2[index2]
        projectvideodiv2.setAttribute('data-link', projectlinks2[index2]);

        
        index2++;
        if (index2 >= infos2.length) index2 = 0;
        await sleep(20000);
        
    }
}




projectvideodiv.addEventListener('mouseenter', () => {
    projectinfo.style.display = 'block';
    projectheader.style.transform = 'translateY(-130%)';
    projectheader.style.animation = 'slideup 0.5s ease-in-out';
});

projectvideodiv.addEventListener('mouseleave', () => {
    projectinfo.style.display = 'none';
    projectheader.style.transform = 'translateY(0)';
});

projectvideodiv2.addEventListener('mouseenter', () => {
    projectinfo2.style.display = 'block';
    projectheader2.style.transform = 'translateY(-130%)';
    projectheader2.style.animation = 'slideup 0.5s ease-in-out';
});

projectvideodiv2.addEventListener('mouseleave', () => {
    projectinfo2.style.display = 'none';
    projectheader2.style.transform = 'translateY(0)';
});

stacksbutton.addEventListener('click', () => {
    window.scrollTo({
        top: 1420,
        left: 0,
        behavior: 'smooth'
    });
});

projectsbutton.addEventListener('click', () => {
    window.scrollTo({
        top: 2450,
        left: 0,
        behavior: 'smooth'
    });
});

contactsbutton.addEventListener('click', () => {
    window.scrollTo({
        top: 5420,
        left: 0,
        behavior: 'smooth'
    });

});
window.addEventListener('scroll', () => {
    let scrolly = window.scrollY;
    
    if(scrolly >= 740){
        buttoncontainer.style.display = 'flex';
    }
    
    if(scrolly >= 3530){
        buttoncontainer.style.bottom = '20%';
    } else {
        buttoncontainer.style.bottom = '3%';
    }
});



window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;

    if (scrolly >= 1700) {
        projectscontainer.style.display = 'block';
        startInfoLoop();
        startInfoLoop2();
    } else {
        projectscontainer.style.display = 'none';
        isRunning = false;
        isRunning2 = false;
    }
});







    
    window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;

    if (scrolly <= 650) {
        ///message.style.display = 'block';
        
        setTimeout(() => {
            //message.style.animation = 'bouncing 3s infinite';
        }, 2000);
    }

    if (scrolly > 740) {
        infocontainer.style.display = 'block';
        //message.style.display = 'none';
    }else if (scrolly <= 740) {
        infocontainer.style.display = 'none';
        
    }

    if (scrolly <= 850) {
        stackinfo.style.display = 'block';
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
            setTimeout(() => {
                info1.style.display = 'block';
                map.style.display = 'block';
            }, 500);
            
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
            moveleft = true;
            moveright = false;
            stationary_status = false;
            updateMinimeAnimation();
            
            if(pos <= -6){
                pos = 96;
                window.scrollTo({
                top: 2450,
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
 
        if (pos < 10) {
            if (weight.style.display === 'block') {
                document.body.classList.add("lightmode");
                document.body.style.transition = "all 0.5s ease-in-out";
                document.body.style.backgroundColor = "white";
                bio.style.color = "rgba(76, 74, 74, 1)";
                seeproj.style.animation = 'fadein 0.5s ease-in-out';
                boxcontainer.style.color = 'black';
                setTimeout(() => {
                    seeproj.style.display = 'block';
                }, 400);
                seeproj.style.animation = 'slideleftright 1s infinite';
            }
        }

        if (pos > 10) {
            if (weight.style.display === 'block') {
                document.body.classList.remove("lightmode");
                document.body.style.transition = "all 0.5s ease-in-out";
                document.body.style.backgroundColor = "rgb(9, 9, 9)";
                bio.style.color = "rgba(76, 74, 74, 1)";
                seeproj.style.animation = 'fadeout 0.5s ease-in-out';
                boxcontainer.style.color = 'rgba(186, 186, 186, 0.712)';
                setTimeout(() => {
                    seeproj.style.display = 'none';
                }, 400);
            }
        }

        }


        else if(event.key === "D" || event.key === "d"){
            pos += 2;
            minime.style.left = pos + "%";
            moveright = true;
            moveleft = false;
            stationary_status = false;
            updateMinimeAnimation();
            
            if(pos >= 90){
                pos = 90;
                boxcontainer.style.display = 'flex';
                weight.style.display = 'block';
                minime.style.position = 'fixed';
                info1.style.display = 'block';
                buttoncontainer.style.display = 'block';
                buttoncontainer.style.display = 'flex';
                    window.scrollTo({
                    top: 720,
                    left: 0,
                    behavior: 'smooth'
                    });
                }

            if (pos < 10) {
                if (weight.style.display === 'block') {
                    document.body.classList.add("lightmode");
                    document.body.style.transition = "all 0.5s ease-in-out";
                    document.body.style.backgroundColor = "white";
                    bio.style.color = "rgba(76, 74, 74, 1)";
                    seeproj.style.animation = 'fadein 0.5s ease-in-out';
                    boxcontainer.style.color = 'black';
                    setTimeout(() => {
                        seeproj.style.display = 'block';
                    }, 400);
                }
            }

            if (pos > 10) {
                if (weight.style.display === 'block') {
                    document.body.classList.remove("lightmode");
                    document.body.style.transition = "all 0.5s ease-in-out";
                    document.body.style.backgroundColor = "rgb(9, 9, 9)";
                    bio.style.color = "rgba(76, 74, 74, 1)";
                    seeproj.style.animation = 'fadeout 0.5s ease-in-out';
                    boxcontainer.style.color = 'rgba(186, 186, 186, 0.712)';
                    setTimeout(() => {
                        seeproj.style.display = 'none';
                    }, 400);
                }
            }

        }




    });


    document.addEventListener("keyup", (event)=>{
        if(['a','d','A','D'].includes(event.key)){
            stationary_status = true;
            moveright = false;
            moveleft = false;
            updateMinimeAnimation();
        }
    });

}



window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;
    const STACK_THRESHOLD = 1000; 

    if (scrolly >= STACK_THRESHOLD) {
        
        if (stackcontainer) {
            stackcontainer.style.display = 'block';
            stackcontainer.style.animation = 'fadein 0.8s ease-in-out forwards';
        }
        if (stackinfo) {
            stackinfo.style.display = 'block';
            stackinfo.style.animation = 'fadein 0.8s ease-in-out forwards';
        }
    } else {
        
        if (stackcontainer) {
            stackcontainer.style.animation = 'fadeout 0.5s ease-in-out forwards';
            setTimeout(() => { stackcontainer.style.display = 'none'; }, 100);
        }
        if (stackinfo) {
            stackinfo.style.animation = 'fadeout 0.5s ease-in-out forwards';
            setTimeout(() => { stackinfo.style.display = 'none'; }, 100);
        }
    }
});