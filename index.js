let bits = [{main: "home", click: "homeClick", color:"#bfe4f2", textColor: "#f1dff8"}, {main: "works", click: "worksClick", color: "#c7e7f4", textColor: "#eed7f7"}, {main: "resumeSkills", click: "resumeClick", color: "#d7eef7", textColor: "#e7c7f4"}, {main: "contact", click: "contactClick", color: "#dff1f8", textColor: "#e4bff2"}];
let shown = bits[0];
let current = bits[0];
//B7E1F0
if(window.matchMedia("(max-width: 550px)").matches) document.getElementById("homeClick").style.borderBottom = `2px solid #284854`;

function show(hi){
    for(let item of bits){
        if(hi == item.main){
            current = item;
        }
    }
    document.getElementById(hi).removeAttribute("hidden");
    if (hi != shown.main) document.getElementById(shown.main).setAttribute("hidden", "");
    document.getElementById(hi).setAttribute("class", "fade-in-text");
    if(current.main == "resumeSkills"){
        document.getElementById("resumeSkills").style.display = "grid"
    } else {
        document.getElementById("resumeSkills").style.display = "none"
    }
    if(current.main == "works"){
        document.getElementById("works").style.display = "flex"
    } else {
        document.getElementById("works").style.display = "none"
    }
    if(current.main == "home"){
        document.getElementById("homeTop").style.display = "flex"
    } else {
        document.getElementById("homeTop").style.display = "none"
    }
    document.getElementById(shown.main).removeAttribute("class");
    if(window.matchMedia("(max-width: 550px)").matches == false) {
        if (hi != shown.main) document.getElementById(shown.click).style.borderBottom = `2px solid #376070`;
        document.getElementById(current.click).style.borderBottom = `2px solid ${current.color}`;
        document.body.style.backgroundColor = current.color;
    }
    shown = current;
}