let bits = ["home", "contact", "skills", "works", "resume"];

function show(hi){
    bits.map(test => {
        switch(test){
            case hi:
                document.getElementById(test).removeAttribute("hidden");
                break;
            default:
                document.getElementById(test).setAttribute("hidden", "");
                break;
        }
    });
}