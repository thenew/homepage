$(document.html).removeClass('no-js').addClass('js');

window.addEvent('domready',function(){

});

window.addEvent('load',function(){

    document.id('primary').masonry({
        columnWidth: 145, 
        itemSelector: '.box'
    });

});