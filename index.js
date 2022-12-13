let bits = [{shown: "home", click: "homeClick", color:"#bfe4f2"}, {shown: "contact", click: "contactClick", color: "#a7c8d4"}, {shown: "skills", click: "contactClick", color: "#8fabb5"}, {shown: "works", click: "worksClick", color: "#778e97"}, {shown: "resume", click: "resumeClick", color: "#607279"}];

function show(hi, ho){
    document.getElementById(hi).removeAttribute("hidden");
    if (hi != shown) document.getElementById(shown).setAttribute("hidden", "");
    document.getElementById(hi).setAttribute("class", "fade-in-text");
    document.getElementById(ho).style.backgroundColor = "#BFE4F2";
    document.getElementById(shown).removeAttribute("class");
    document.getElementById(shownClick).style.backgroundColor = "white";
    shown = hi;
    shownClick = ho;
}