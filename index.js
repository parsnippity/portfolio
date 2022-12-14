let bits = [{main: "home", click: "homeClick", color:"#bfe4f2", textColor: "#386373"}, {main: "contact", click: "contactClick", color: "#a7c8d4", textColor: "#294954"}, {main: "skills", click: "skillsClick", color: "#8fabb5", textColor: "#1A2E36"}, {main: "works", click: "worksClick", color: "#778e97", textColor: "#6FC2E3"}, {main: "resume", click: "resumeClick", color: "#607279", textColor: "#60A8C4"}];
let shown = bits[0];
let current = bits[0];

function show(hi){
    for(let item of bits){
        if(hi == item.main){
            current = item;
        }
    }
    document.getElementById(hi).removeAttribute("hidden");
    if (hi != shown.main) document.getElementById(shown.main).setAttribute("hidden", "");
    if (hi != shown.main) document.getElementById(shown.click).style.borderBottom = `2px solid #376070`;
    document.getElementById(hi).setAttribute("class", "fade-in-text");
    document.getElementById(current.click).style.borderBottom = `2px solid ${current.color}`;
    document.body.style.backgroundColor = current.color;
    document.getElementById(shown.main).removeAttribute("class");
    shown = current;
}