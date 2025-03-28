let areProjectsShown = false;
let show = false;
document.addEventListener('click', function(event){
    if(areProjectsShown){
        if (!aside.contains(event.target) && !myProjectsButton.contains(event.target)) {
            document.getElementById("aside").style.right = "-300px";
            areProjectsShown = !areProjectsShown;
        }
    }
});
document.addEventListener('scroll', function(){
    if(areProjectsShown){
        document.getElementById("aside").style.right = "-300px";
            areProjectsShown = !areProjectsShown;
    }else if(show){
        if(window.scrollY == 0){
            document.getElementById("aside").style.right = (areProjectsShown)? "-300px" : "0";
            areProjectsShown = !areProjectsShown;
            show=false;
        }
    }
})
document.getElementById("myProjectsButton").addEventListener('click' , function() {
    if(window.scrollY != 0){
       show = true;
        window.scrollTo({top:0, behavior:"smooth"});
    } else{
    }
    document.getElementById("aside").style.right = (areProjectsShown)? "-300px" : "0";
    areProjectsShown = !areProjectsShown;
    
    
});
document.getElementById('githubButton').addEventListener('click', function() {
    window.open("https://github.com/Vantyndur", '_blank');
});
document.getElementById('szosLink').addEventListener('click', function() {
    window.open("projects/SZOS/index.html", '_blank');
});
document.getElementById("theClutchesButton").addEventListener('click', function() {
    window.open("https://www.youtube.com/watch?v=NrjDd_NCnI0", '_blank');
});
