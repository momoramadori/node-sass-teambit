const $ = require('jquery');

$(document).scroll( function() {
    //valore dello scroll
    var top = $(this).scrollTop();
    // se superioire ad un tot cambia l'header
    if ( top > 200 ) {
        $('header').addClass('scrolled');
        $('nav').addClass('scrolled');
        $('button').addClass('scrolled');
    }
    else {
        $('nav').removeClass('scrolled')
        $('header').removeClass('scrolled');
        $('button').removeClass('scrolled');
    }
});