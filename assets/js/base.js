$(function(){
    $('.trigger__cart').hover(function(e){
        e.preventDefault()
        if($(window).width() > 640){
            $('.ctn__header__cart').toggleClass('open')
        }
    })

    function incrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        
        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }
    
    function decrementValue(e) {
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
        
        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }
    
    $('.input-group').on('click', '.button-plus', function(e) {
        incrementValue(e);
    });
    
    $('.input-group').on('click', '.button-minus', function(e) {
        decrementValue(e);
    });


    if($('.slide__stage__home').length > 0) {
        $('.slide__stage__home').bxSlider({
            controls: false
        });
    }
    if($('.slider-product').length > 0) {
        $('.slider-product').bxSlider({
            pager: false
        });
    }

    // open / clos menu
    $('.close__menu').click(function(e){    
        e.preventDefault()
        $('.header').toggleClass('open')
        $('.header nav').toggleClass('open')
    })

    if($('.select__rating').length > 0){
        $('.select__rating').barrating({
            theme: 'css-stars'
        });
    }
    if($('.popup-video').length > 0){
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            preloader: false,
            fixedContentPos: true
        });
    }

    $(".only__numbers").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $(this).addClass('error')
            return false;
        }
    });

    $('#method__card').change(function(){
        if($(this).is(':checked')){
            $('.wrap__payment__card').removeClass('d-none')
            $('.wrap__payment__card').addClass('d-flex')
        }
    })
    $('#method__paypal').change(function(){
        if($(this).is(':checked')){
            $('.wrap__payment__card').removeClass('d-flex')
            $('.wrap__payment__card').addClass('d-none')
        }
    })
    
})