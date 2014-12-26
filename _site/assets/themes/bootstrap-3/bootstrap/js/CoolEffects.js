function postsHover() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(230, 126, 34)"
    }, 300, 'easeInOutQuad');

    $("#ReggaeTron").stop().animate({
        marginTop: "0px"
    }, 300, 'easeInOutQuad');

    $("#BoardRouter").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#Ames").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
}

function archiveHover() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(46, 204, 113)"
    }, 300, 'easeInOutQuad');

    $("#ReggaeTron").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#BoardRouter").stop().animate({
        marginTop: "0px"
    }, 300, 'easeInOutQuad');

    $("#Ames").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
}

function meHover() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(155, 89, 182)"
    }, 300, 'easeInOutQuad');

    $("#ReggaeTron").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#BoardRouter").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#Ames").stop().animate({
        marginTop: "0px"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '100px'
    }, 150, 'easeInOutQuad');
}

function navOut() {
    $("#page-body").stop().animate({
        backgroundColor: "rgb(236, 240, 241)"
    }, 300, 'easeInOutQuad');

    $("#ReggaeTron").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#BoardRouter").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#Ames").stop().animate({
        marginTop: "175px"
    }, 300, 'easeInOutQuad');

    $("#container-wrapper").animate({
        top: '-20px'
    }, 150, 'easeInOutQuad');
}

function windowResized() {
    $("#mepavlo-banner").width(window.innerWidth * .8);
    $("#mepavlo-banner").height(window.innerHeight * .1);

    if ($("#mepavlo-banner").width() <= 512) {
        $("#mepavlo-banner").css("font-size", "8px");
    } else if ($("#mepavlo-banner").width() <= 830) {
        $("#mepavlo-banner").css("font-size", "10px");
    } else {
        $("#mepavlo-banner").css("font-size", "14px");
    }
}

window.onload = function () {
    //TODO: Add some horizontal flat-color lines to breakup color transition between dropdown.
    $("#container-wrapper").css("border-top", "20px solid rgb(189, 195, 199)");
    document.getElementById("container-wrapper").style["position"] = "relative";
    document.getElementById("container-wrapper").style["top"] = "-20px";
    document.getElementById("archive").addEventListener('mouseenter', archiveHover, false);
    document.getElementById("posts").addEventListener('mouseenter', postsHover, false);
    document.getElementById("me").addEventListener('mouseenter', meHover, false);
    document.getElementById("outer").addEventListener('mouseleave', navOut, false);
    window.addEventListener('resize', windowResized, false);

    windowResized();

    $("#mepavlo-banner").animate({
        top: '0px'
    }, 2000, 'easeOutBounce');
}