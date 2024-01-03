$(document).ready(function () {
    // Mobile Menu Icon and Outside click none 

    const menuContainer = $(".header_nav");
    const menuToggle = $("#nav-icon");
    const menu = $(".header_nav nav");
    const menuIcon = $("#nav-icon");
    if (menuToggle.length) {
        menuToggle.on("click", function (event) {
            event.stopPropagation();
            menu.toggleClass("active_nav");
            menuToggle.toggleClass("active_nav");
            menuIcon.toggleClass("open");
        });
    }
    $(document).on("click", function (event) {
        const target = $(event.target);
        if (menuContainer.length && !menuContainer.is(target) && !menuContainer.has(target).length) {
            menu.removeClass("active_nav");
            menuIcon.removeClass("open");
            if (menuToggle.length) {
                menuToggle.removeClass("active_nav");
                menuIcon.removeClass("open");
            }
        }
    });



});



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}





// Reputation tab 

// function openCity(evt, cityName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
