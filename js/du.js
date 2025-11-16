const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;
let moveright = false;
let moveleft = false;
let facingright = true;

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

const stacks = document.getElementById('stacks');
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
const entry = document.getElementById('entry'); 


    setInterval(()=>{
    entry.style.display = 'none';
    }, 5500);

const originalDisplays = {
    map: map ? (map.style.display || 'block') : 'block',
    hello: hello ? (hello.style.display || 'block') : 'block',
    HTML: HTML ? (HTML.style.display || 'block') : 'block',
    CSS: CSS ? (CSS.style.display || 'block') : 'block',
    JavaScript: JavaScript ? (JavaScript.style.display || 'block') : 'block',
    body: document.body.style.display || 'block',
    minime: minime ? (minime.style.display || 'block') : 'block',
    keycontainer: keycontainer ? (keycontainer.style.display || 'flex') : 'flex',
    akey: akey ? (akey.style.display || 'inline-flex') : 'inline-flex',
    dkey: dkey ? (dkey.style.display || 'inline-flex') : 'inline-flex',
    bio: bio ? (bio.style.display || 'flex') : 'flex',
    aboutme: aboutme ? (aboutme.style.display || 'none') : 'none',
    option: option ? (option.style.display || 'block') : 'block',
    gamemode: gamemode ? (gamemode.style.display || 'flex') : 'flex',
    webmode: webmode ? (webmode.style.display || 'flex') : 'flex',
    weight: weight ? (weight.style.display || 'none') : 'none',
    seemore: seemore ? (seemore.style.display || 'none') : 'none',
    info1: info1 ? (info1.style.display || 'none') : 'none',
    seeproj: seeproj ? (seeproj.style.display || 'none') : 'none',
    stacks: stacks ? (stacks.style.display || 'flex') : 'flex',
    certificates: certificates ? (certificates.style.display || 'flex') : 'flex',
    projects: projects ? (projects.style.display || 'flex') : 'flex',
    infocontainer: infocontainer ? (infocontainer.style.display || 'none') : 'none',
    boxcontainer: boxcontainer ? (boxcontainer.style.display || 'flex') : 'flex',
    message: message ? (message.style.display || 'none') : 'none',
    py: py ? (py.style.display || 'flex') : 'flex',
    js: js ? (js.style.display || 'flex') : 'flex',
    cs: cs ? (cs.style.display || 'flex') : 'flex',
    ht: ht ? (ht.style.display || 'flex') : 'flex',
    java: java ? (java.style.display || 'none') : 'none',
    stackcontainer: stackcontainer ? (stackcontainer.style.display || 'none') : 'none',
    stackinfo: stackinfo ? (stackinfo.style.display || 'none') : 'none',
    seemore2: seemore2 ? (seemore2.style.display || 'block') : 'block',
    seeprojects: seeprojects ? (seeprojects.style.display || 'block') : 'block',
    aboutmebutton: aboutmebutton ? (aboutmebutton.style.display || 'none') : 'none',
    contact: contact ? (contact.style.display || 'none') : 'none'
};

document.body.style.backgroundColor = "black";
if (map) map.style.display = 'none';
if (hello) hello.style.display = 'none';
if (HTML) HTML.style.display = 'none';
if (CSS) CSS.style.display = 'none';
if (JavaScript) JavaScript.style.display = 'none';
if (minime) minime.style.display = 'none';
if (keycontainer) keycontainer.style.display = 'none';
if (akey) akey.style.display = 'none';
if (dkey) dkey.style.display = 'none';
if (bio) bio.style.display = 'none';
if (aboutme) aboutme.style.display = 'none';
if (option) option.style.display = 'none';
if (gamemode) gamemode.style.display = 'none';
if (webmode) webmode.style.display = 'none';
if (weight) weight.style.display = 'none';
if (seemore) seemore.style.display = 'none';
if (info1) info1.style.display = 'none';
if (seeproj) seeproj.style.display = 'none';
if (stacks) stacks.style.display = 'none';
if (certificates) certificates.style.display = 'none';
if (projects) projects.style.display = 'none';
if (infocontainer) infocontainer.style.display = 'none';
if (boxcontainer) boxcontainer.style.display = 'none';
if (message) message.style.display = 'none';
if (py) py.style.display = 'none';
if (js) js.style.display = 'none';
if (cs) cs.style.display = 'none';
if (ht) ht.style.display = 'none';
if (stackcontainer) stackcontainer.style.display = 'none';
if (stackinfo) stackinfo.style.display = 'none';
if (seemore2) seemore2.style.display = 'none';
if (seeprojects) seeprojects.style.display = 'none';
if (aboutmebutton) aboutmebutton.style.display = 'none';
if (contact) contact.style.display = 'none';

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
setTimeout(() => {
    document.body.style.display = originalDisplays.body;
    if (map) map.style.display = originalDisplays.map;
    if (hello) hello.style.display = originalDisplays.hello;
    if (HTML) HTML.style.display = originalDisplays.HTML;
    if (CSS) CSS.style.display = originalDisplays.CSS;
    if (JavaScript) JavaScript.style.display = originalDisplays.JavaScript;
    if (minime) minime.style.display = originalDisplays.minime;
    if (keycontainer) keycontainer.style.display = originalDisplays.keycontainer;
    if (akey) akey.style.display = originalDisplays.akey;
    if (dkey) dkey.style.display = originalDisplays.dkey;
    if (bio) bio.style.display = originalDisplays.bio;
    if (aboutme) aboutme.style.display = originalDisplays.aboutme;
    if (option) option.style.display = originalDisplays.option;
    if (gamemode) gamemode.style.display = originalDisplays.gamemode;
    if (webmode) webmode.style.display = originalDisplays.webmode;
    if (weight) weight.style.display = originalDisplays.weight;
    if (seemore) seemore.style.display = originalDisplays.seemore;
    if (info1) info1.style.display = originalDisplays.info1;
    if (seeproj) seeproj.style.display = originalDisplays.seeproj;
    if (stacks) stacks.style.display = originalDisplays.stacks;
    if (certificates) certificates.style.display = originalDisplays.certificates;
    if (projects) projects.style.display = originalDisplays.projects;
    if (infocontainer) infocontainer.style.display = originalDisplays.infocontainer;
    if (boxcontainer) boxcontainer.style.display = originalDisplays.boxcontainer;
    if (message) message.style.display = originalDisplays.message;
    if (py) py.style.display = originalDisplays.py;
    if (js) js.style.display = originalDisplays.js;
    if (cs) cs.style.display = originalDisplays.cs;
    if (ht) ht.style.display = originalDisplays.ht;
    if (stackcontainer) stackcontainer.style.display = originalDisplays.stackcontainer;
    if (stackinfo) stackinfo.style.display = originalDisplays.stackinfo;
    if (seemore2) seemore2.style.display = originalDisplays.seemore2;
    if (seeprojects) seeprojects.style.display = originalDisplays.seeprojects;
    if (aboutmebutton) aboutmebutton.style.display = originalDisplays.aboutmebutton;
    if (contact) contact.style.display = originalDisplays.contact;

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

        infocontainer.style.display = 'block';

        contact.addEventListener('click', ()=>{
            window.scrollTo({
                    top: 3200,
                    left: 0,
                    behavior: 'smooth'
                    });
        });

        setTimeout(() => {
            stacks.style.display = 'flex';
            projects.style.display = 'flex';

            stacks.style.opacity = 1;
            projects.style.opacity = 1;
        }, 1000);


       
        aboutmebutton.addEventListener('click',()=>{
            window.scrollTo({
                    top: 700,
                    left: 0,
                    behavior: 'smooth'
                    });
            stackinfo.style.display = 'block';
            aboutme.style.display = 'block';
            info1.style.display = 'block'    
        });




        stacks.addEventListener('click', ()=>{
            window.scrollTo({
                    top: 1200,
                    left: 0,
                    behavior: 'smooth'
                    });
        
            stackinfo.style.display = 'block';

            setTimeout(() => {
                cs.style.display = 'flex';
                ht.style.display = 'flex';
                js.style.display = 'flex';
                py.style.display = 'flex';
                java.style.display = 'flex';
            },  1000);
        });




        projects.addEventListener('click',()=>{
            window.scrollTo({
                    top: 10,
                    left: 0,
                    behavior: 'smooth'
                    });
                    window.location.href = "https://andrewpanimdim.github.io/gameportfolio/projects.html";   

        });
        

        


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

    setInterval(()=>{
    entry.style.display = 'none';
    }, 5600);

    gamemode.style.display = "block";
    webmode.style.display = "block";
    gamemode.style.color = "rgba(76, 74, 74, 1)";
    map.style.display = 'none';

    setTimeout(() => {
        gamemode.click();
    }, 100); 


    setTimeout(() => {
        seemore2.style.animation = 'slideleftright 2s infinite';
    }, 7900);


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
          moveleft = true;
          moveright = false;
          stationary_status = false;
          updateMinimeAnimation();
        } else {
          pos = -2;
          minime.style.left = pos + "%";
          moveleft = false;
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
            }else{
                stackcontainer.style.display = 'none';
                infocontainer.style.display = 'none';
            }
        });

        window.addEventListener('scroll', ()=>{
        let scrolly = window.scrollY;
        if(scrolly <= 650){
            message.style.display = 'block'
            setTimeout(() => {
                message.style.animation = 'bouncing 3s infinite';
            }, 4000);
        }});

        

    });





    gamemode.addEventListener("click", () => {
        option.style.display = 'block';
        keycontainer.style.animation = "fadein 8s ease-in-out forwards";
        weight.style.display = "none";
        gamemode.style.color = "white";
        webmode.style.color = "grey"
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

        setTimeout(() => {
        seemore2.style.display = 'block';
        }, 6000);



        window.addEventListener('scroll', ()=>{
            let scrolly = window.scrollY;
            if(scrolly > 100){
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
            if (!allowProjectAnimation) return; 

                const interval = setInterval(() => {
                pos += 4;
                minime.style.left = pos + '%';
                moveright = true;
                moveleft = false;
                stationary_status = false;
                updateMinimeAnimation();

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
            moveright = true;
            moveleft = false;
            stationary_status = false;
            updateMinimeAnimation();
            
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
                
                seeproj.style.animation = 'slideleftright 1s infinite';
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
            moveright = false;
            moveleft = false;
            updateMinimeAnimation();
        }
    });

}

}, 6000); 