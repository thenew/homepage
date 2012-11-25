$(document.html).removeClass('no-js').addClass('js');

window.addEvent('domready',function(){

    random_shapes("square", $('bg'), 6, 10);
    $('primary').addClass('liffect-pageLeft');

});

window.addEvent('load',function(){

    $('primary').masonry({
        columnWidth: 110,
        itemSelector: '.box'
    });
    $('primary').addClass('play');

});