

var easingTypes = ['swing', 'linear']

var AnimationsList = [
    { TextScroll: [['width'], ['100'], ['%'], [100], 0] },
    { fade_in: [['opacity'], ['1'], [' '], [1000], 0] },
    { btn_sucess: [['border-radius'], ['80'], ['%'], [500], 0] },
    { box_height: [['height'], ['200'], ['px'], [500], 0] },
    { box_height_reverse: [['height'], ['100'], ['px'], [500], 0] },

]

function SetAnimation(elementID, AnimName) {
    AnimName.forEach
    var Animations = this.AnimationsList.filter((v) => v[AnimName] != undefined)[0]

    const keys = Object.keys(Animations)

    AnimateElement(elementID, Animations[keys[0]]);
}

function topFunction() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
     
    });
}

function AnimateElement(elementID, Animations) {

    Animations[0].forEach((element, index) => {
        $(elementID[(index < elementID.length ? index : 0)]).animate(
            {
                [element]: Animations[1][(index < Animations[1].length ? index : 0)] + Animations[2][(index < Animations[2].length ? index : 0)],
            }, {
            duration: (Animations[3][(index < Animations[3].length ? index : 0)]),
            easing: (this.easingTypes[Animations[4][(index < Animations[4].length ? index : 0)]]),

            }
        );
    });
}

$("#telefone, #celular").mask("(00) 00000-0000");
$("#cpf").mask("000.000.000-00");

function validateFormService() {
    debugger
    
    const form = $('#form-service')[0];
    $("form").on('submit', function (e) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            $('#sucessModal').modal('show')
        }
    })
}
$("form").on('submit', function (e) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }else{
        $('#sucessModal').modal('show')
    }
})

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
const windoUpdate = function(){
    if ($(window).width() <= 770) {
console.log("tamanho da janela"+$(window).width());
        $('#v-pills-tab').removeClass('flex-column');
        $('#v-pills-tab').addClass('justify-center');
    }
    else {
        $('#v-pills-tab').addClass('flex-column ');
        $('#v-pills-tab').removeClass('justify-center');
      
    }
};
$(window).resize(windoUpdate);
$(window).on('load',windoUpdate);

$(window).on('scroll',function() {
    var $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        windowTop = $(this).scrollTop();
    
    if (windowTop > navHeight) {
        $nav.addClass('.fixed-menu');
    } else {
        $nav.removeClass('.fixed-menu');
    }
});

$('nav a').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top,
			menuHeight = $('nav').innerHeight();

	console.log(menuHeight);

	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
