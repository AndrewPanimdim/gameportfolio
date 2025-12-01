const minime = document.getElementById("minime");
let pos = 40;
let posx = 0
let stationary_status = true;
let moveright = false;
let moveleft = false;
let facingright = true;

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
const projectshow = document.getElementById('projectshow');
const loadingBar = document.getElementById('loading');
const percent = document.getElementById('percent');
let percentage = 0;

setTimeout(() => {
        gamemode.click();
    }, 100); 

gamemode.addEventListener('click', ()=>{
        entry.style.display = 'none';
        loadingBar.style.display = 'none';
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

        setTimeout(() => {
        seemore2.style.display = 'block';
        }, 2000);


        setInterval(()=>{
        akey.style.animation = "bouncing 1s ease-in-out infinite";
        dkey.style.animation = "bouncing 1.5s ease-in-out infinite";
        },3500);


        document.addEventListener("keydown", (event)=>{
        if(event.key === "A" || event.key === "a"){
            pos -= 2;
            minime.style.left = pos + "%";
            moveleft = true;
            moveright = false;
            stationary_status = false;
        }
    });
        
});



