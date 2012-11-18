$(document.html).removeClass('no-js').addClass('js');

window.addEvent('domready',function(){

   random_shapes("square", $('bg'), 6, 10);

});

window.addEvent('load',function(){

    document.id('primary').masonry({
        columnWidth: 110, 
        itemSelector: '.box'
    });

});