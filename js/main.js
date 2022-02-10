jQuery(document).ready(function($){

    //FIXED HEADER
    window.onscroll = function() {
        if(window.pageYOffset > 20){
           $('#header').addClass("active");
        } else {
           $('#header').removeClass("active");
        }
    }
})