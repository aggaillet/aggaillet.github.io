
/* Script for navbar animation */

$(document).ready(function(){
    /* Update current on click */
    $(".nav-link").click(updateCurrentNav(this));

    /* Update current on scroll */
    $(window).scroll(function() {
        let height = $(document).height() - $(window).scrollTop();
        const projects_height = $("#projects-section").outerHeight(true);
        const about_height = projects_height + $("#about-section").outerHeight(true);
        // const home_height = about_height + $("#home-section").outerHeight(true);

        const buffer = 300;
        if(height  < projects_height + buffer) {
            let current_nav = document.getElementById("projects-link");
            updateCurrentNav(current_nav);
        }else if(height < about_height + buffer){
            let current_nav = document.getElementById("about-link");
            updateCurrentNav(current_nav);
        }else{
            let current_nav = document.getElementById("home-link");
            updateCurrentNav(current_nav);
        }

    });
});

function updateCurrentNav(current_nav) {
    $(current_nav).addClass("current");
    $(current_nav).removeClass("external");
    $(current_nav).siblings().each(function() {
        $(this).addClass("external");
        if ($(this).hasClass("current")) {
                $(this).removeClass("current");
            }
    });
}