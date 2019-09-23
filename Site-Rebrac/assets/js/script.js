

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

$(window).on('scroll', _.debounce(function() {
    var $nav = $('nav'),
        navHeight = $nav.outerHeight(),
        windowTop = $(this).scrollTop();
    
    if (windowTop > navHeight) {
        $nav.addClass('.fixed-menu');
    } else {
        $nav.removeClass('.fixed-menu');
    }
}, 200));