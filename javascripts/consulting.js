$(document).ready(function(){
    function opening(isSkip){
        if(isSkip == false){
            $('.navlist').removeClass('out');
            setTimeout(function(){
                $('.content').removeClass('out');
            }, 1000);
            setTimeout(function(){
                $('.bar').removeClass('out');
            }, 800);

        } else {
            $('.navlist').removeClass('out');
            $('.content').removeClass('out');
            $('.bar').removeClass('out');
        }

    }
    setTimeout(function(){
        opening(false);
    },600);



    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        // SP Scroll Events
        if( scroll > 500 ){
            $('.header-sp').removeClass('out');
        } else {
            $('.header-sp').addClass('out');
        }
    });

    $(".nav").scrollspy({ offset: 80, animate: true });

    function smoothScrollTo(targetEle){
        var $targetEle = $(targetEle);
        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top
        }, 800, 'swing', function () {
            // window.location.hash = targetEle;
        });
    }
    // Scroll To
    $('.js_scrollTo').on('click', function (e) {
        console.log(111)
        // var headerHeight = 80;
        var sectionMargin = 160;
        e.preventDefault();

        smoothScrollTo($(this).attr("data-scrollTarget"));
    });



    function checkFilled(elementID) {
        var val = $(elementID).val();
        if(val == ''){
          $(elementID).addClass('empty');
          return false;
        }else{
          $(elementID).removeClass('empty');
          return true;
        }
    }
    function checkAgreed() {
        if($('#agreed').hasClass('checked')) {
          $('#agreed').removeClass('empty');
          return true;
        }else{
          $('#agreed').addClass('empty');
          return false;
        }
    }
    function checkRecapture() {
        if(grecaptcha.getResponse().length == 0) {
          $('#recapture').addClass('empty');
          return false;
        }else{
          $('#recapture').removeClass('empty');
          return true;
        }
    }
    function checkIsEmail(emailElement) {
      emailText = $(emailElement).val()
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(regex.test(emailText)){
          $(emailElement).removeClass('empty');
          return true;
      }else{
          $(emailElement).addClass('empty');
          return false;
      }
    }
    $('#last_name').on('input',function(){
        checkFilled('#last_name');
    });
    $('#company').on('input', function(){
        checkFilled('#company');
    });
    $('#email').on('input', function(){
        checkFilled('#email');
        checkIsEmail('#email');
    });
    $('#description').on('input', function(){
        checkFilled('#description');
    });
    $('#agreed').click(function(){
        $(this).toggleClass('checked');
        checkAgreed();
    });

    $('#op_form').on('submit', function(e){
        var isNameFilled = checkFilled('#last_name');
        var isCompanyFilled = checkFilled('#company');
        var isEmailFilled = checkFilled('#email');
        var isEmail = checkIsEmail('#email');
        var isDescriptionFilled = checkFilled('#description');
        var isAgreed = checkAgreed();
        var isCheckedRecapture = checkRecapture();

        console.log(isCheckedRecapture);

        var allFilled = isNameFilled &&
                        isCompanyFilled &&
                        isEmailFilled &&
                        isEmail &&
                        isDescriptionFilled &&
                        isAgreed &&
                        isCheckedRecapture;

        if( !allFilled ){
            smoothScrollTo('#op_form');
            e.preventDefault();
        }

    });


    // Copyright year
    var d = new Date();
    var n = d.getFullYear();
    $('.js_year').text(n);
});
