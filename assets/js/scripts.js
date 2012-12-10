$(document.html).removeClass('no-js').addClass('js');

window.addEvent('domready',function(){

    // $('bg').setStyles({'background-color': fon_color_rand()})
    // random_shapes("square", $('bg'), 6, 16);
    randomGradient($('bg'), {
        blackAndWhite: true,
        nbMin: 2,
        nbMax: 10
    });
    random_style_text($$('.box.piouf')[0]);
    $('primary').addClass('liffect-pageLeft');

});

window.addEvent('load',function(){

    $('primary').masonry({
        columnWidth: 110,
        itemSelector: '.box'
    });
    $('primary').addClass('play');

});