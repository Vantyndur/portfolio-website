let areProjectsShown = false;
let show = false;
document.addEventListener('click', function (event) {
    if (areProjectsShown) {
        if (!aside.contains(event.target) && !myProjectsButton.contains(event.target)) {
            document.getElementById("aside").style.translate = "300px";
            areProjectsShown = !areProjectsShown;
        }
    }
});
document.body.addEventListener('scroll', function () {
    if (areProjectsShown) {
        document.getElementById("aside").style.translate = "300px";
        areProjectsShown = !areProjectsShown;
    } else if (show) {
        if (document.body.scrollTop == 0) {
            document.getElementById("aside").style.translate = "0px";
            areProjectsShown = true;
            show = false;
        }
    }
})
document.getElementById("myProjectsButton").addEventListener('click', function () {
    if (document.body.scrollTop != 0) {
        show = true;
        body.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        document.getElementById("aside").style.translate = (areProjectsShown) ? "300px" : "0px";
        areProjectsShown = !areProjectsShown;
    }



});
document.getElementById('githubButton').addEventListener('click', function () {
    window.open("https://github.com/Vantyndur", '_blank');
});
document.getElementById('szosLink').addEventListener('click', function () {
    window.open("projects/SZOS/index.html", '_blank');
});
document.getElementById("theClutchesButton").addEventListener('click', function () {
    window.open("https://www.youtube.com/watch?v=NrjDd_NCnI0", '_blank');
});
