function randomGradient(el) {
    if(!el) return;
    var prefixes = ['-webkit-', '-moz-', '-o-'];
    var colors = ['rgba(255,255,255,0.05)', 'rgba(0,0,0,0.05)'];
    prefixes.each(function(prefix,i){
        var grad = "";
        var i = 0
        for (i; i < Number.random(2, 60); i++) {
            var deg = Number.random(0, 360);
            var to = Number.random(0, 100);
            var color = colors[Number.random(0, 1)];
            // -130deg pour webkit qui utilise l'ancien angle polaire (0deg = est)
            if(prefix === '-webkit-') deg = (deg.toInt()-130).toString();
            grad += prefix+'linear-gradient('+deg+'deg,'+color+' '+to+'%, transparent '+to+'%),';
        };
        grad += fon_color_rand();
        el.setStyles({
            'background': grad
        });
    });
}


function fon_color_rand(){
    return "#" + Math.random().toString(16).slice(2, 8);
}

function random_shapes(shape, el, min, max) {
    if(!shape || ("triangle" != shape && "round" != shape)) shape = 'square';
    if(!el) el = document.body;
    if(!min) min = 42;
    if(!max) max = 100;
    var w = el.getWidth();
    var h = el.getHeight();
    var nb = Number.random(min, max);

    // Defaults and shapes styles
    var shape_style_default = {};
    if("triangle" == shape) {
        var shape_style_default = {
            'height': 0,
            'border': '20px solid transparent',
            'border-right-color': '#fff'
        };
    } else if("round" == shape) {
        var shape_style_default = {
            '-webkit-border-radius': '50%',
            '-moz-border-radius': '50%',
            'border-radius': '50%'
        };
    }

    // generated divs
    while(nb > 0) {
        var width = 150*(Number.random(10, 100)/10);
        var height = 200*(Number.random(10, 100)/10);
        var left = w*(Number.random(0, 100)/100)-width;
        var bottom = h*(Number.random(0, 100)/100);
        var color = fon_color_rand();

        var shape_style = {
            'bottom': bottom,
            'left': left,
            '-webkit-transform': 'rotate('+Number.random(0, 179)+'deg)',
            '-moz-transform': 'rotate('+Number.random(0, 179)+'deg)',
            '-ms-transform': 'rotate('+Number.random(0, 179)+'deg)',
            '-o-transform': 'rotate('+Number.random(0, 179)+'deg)',
            'transform': 'rotate('+Number.random(0, 179)+'deg)',
            'opacity': Number.random(2, 8)/10
        }

        if("triangle" == shape) {
            var special_shape_style = {
                'border-width': width,
                'border-right-color': color,
            };
        } else {
            var special_shape_style = {
            'width': width,
            'height': height,
            'background': color,
            };
        }
        shape_style = Object.merge(shape_style, special_shape_style);

        var div = new Element('div')
                     .addClass('e404-shape '+shape)
                     .setStyles(shape_style_default)
                     .setStyles(shape_style);
        div.inject(el);
        nb--;
    }
}

function random_style_text(el){
    var l = el.getElements('span');
    var fStyle = ['normal', 'italic'];
    var fWeight = ['normal', 'bold'];
    var fFamily = ['Comic Sans MS', 'Copperplate Gothic Bold', 'Arial', 'Consolas', 'Corbel', 'Georgia', 'Times New Roman'];
    var tTransform = ['uppercase', 'lowercase', 'none'];
    l.each(function(el,i){
        el.setStyles({
            'font-size': Number.random(19, 45),
            'font-style': fStyle[Number.random(0, fStyle.length)],
            'font-weight': fWeight[Number.random(0, fWeight.length)],
            'font-family': fFamily[Number.random(0, fFamily.length)],
            'text-transform': tTransform[Number.random(0, tTransform.length)]
            // 'color': fon_color_rand()
        });
    });
}