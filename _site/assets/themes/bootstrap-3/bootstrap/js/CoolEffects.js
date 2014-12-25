var mouseOver = 0;
var mouseOut = 0;

function postsHover() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(159, 0, 255)"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
    console.log("PostHover");
}

function archiveHover() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(255, 0, 159)"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
    console.log("ArchiveHover");
}

function meHover() {
        $("#page-body").stop().animate({
        backgroundColor: "rgb(100, 150, 159)"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
    console.log("MeHover");
}

function navOut() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(236, 240, 241)"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '-20px'
    }, 150, 'easeInOutQuad');
    console.log("Out");
}

window.onload = function () {
    //TODO: Add some horizontal flat-color lines to breakup color transition between dropdown.
    $("#container-wrapper").css("border-top", "10px solid rgb(189, 195, 199)");
    document.getElementById("container-wrapper").style["position"] = "relative";
    document.getElementById("container-wrapper").style["top"] = "-20px";
    document.getElementById("archive").addEventListener('mouseenter', archiveHover, false);
    document.getElementById("posts").addEventListener('mouseenter', postsHover, false);
    document.getElementById("me").addEventListener('mouseenter', meHover, false);
    document.getElementById("outer").addEventListener('mouseleave', navOut, false);
}