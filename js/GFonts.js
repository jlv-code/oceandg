/*
    SCRIPT DE GOOGLE FONTS
    Este script se encarga de cargar las tipografías usadas por el template
*/

jQuery(document).ready(function($){

    WebFontConfig = {
        google: { families: [ 'Roboto:700,400,300,100:latin', 'Lato::latin' ] }
    };

    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

});