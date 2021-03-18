$(document).ready(function(){
    if(window.location.hash) {
        skipOpening();
    }

    $(".nav").scrollspy({ offset: 80, animate: true });

    function smoothScrollTo(targetEle){
        var $targetEle = $(targetEle);
        if(targetEle == '#contact') {
            sectionMargin = -80;
        }else{
            sectionMargin = 40;
        }

        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top - sectionMargin
        }, 800, 'swing', function () {
            window.location.hash = targetEle;
        });
    }
    // Scroll To
    $('.js_scrollTo').on('click', function (e) {
        // var headerHeight = 80;
        var sectionMargin = 160;
        e.preventDefault();

        smoothScrollTo($(this).attr("data-scrollTarget"));
    });

    // Opening
    setTimeout(function(){
        $('.opening-stroke').fadeOut(1000);
        $('.kvbg').removeClass('close');
    },2500);
    setTimeout(function(){
        $('.header').removeClass('out');
        $('.sns').removeClass('out');
    },3000);
    setTimeout(function(){
        $('.opening').addClass('show-tagline');
    },4000);


    // DEBUG: Skip Opening
    function skipOpening(){
        $('.opening-stroke').remove();
        $('.kvbg').removeClass('close');
        $('.header').removeClass('out');
        $('.sns').removeClass('out');
        $('.opening').addClass('show-tagline');
    }
    // skipOpening();


    // Particle
    particlesJS('pjs',

      {
        "particles": {
          "number": {
            "value": 120,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/star.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 8,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 4,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );

    // Parallex
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var titleOffset = scroll/10;
        var contactOffset = scroll/15;
        var companyBGOffset = scroll/3;

        if( window.innerWidth < 1024 ) {
            var titleOffset = scroll/25;
            var contactOffset = scroll/35;
            var companyBGOffset = scroll/8;
        }

        $('.title-service').css({
            '-webkit-transform' : 'translateX(' + titleOffset + 'px)',
            '-ms-transform'     : 'translateX(' + titleOffset + 'px)',
            'transform'         : 'translateX(' + titleOffset + 'px)'
        });


        $('.title-contact').css({
            '-webkit-transform' : 'translateY(' + contactOffset + 'px)',
            '-ms-transform'     : 'translateY(' + contactOffset + 'px)',
            'transform'         : 'translateY(' + contactOffset + 'px)'
        })


        $('.section-company').css({
            'background-position' : 'center ' + companyBGOffset + 'px'
        });

        // SP Scroll Events
        if( scroll > 350 ){
            $('.sp_logo').addClass('show');
        } else {
            $('.sp_logo').removeClass('show');
        }
    });

    function openMenu(){
        $('.sp_menu').addClass('open');
        $('.sp_header').addClass('open');
        $('html, body').css({ 'overflow-y': 'hidden'});
        $('.sp_nav').addClass('open');
    }
    function closeMenu(){
        $('.sp_menu').removeClass('open');
        $('.sp_header').removeClass('open');
        $('html, body').css({ 'overflow-y': 'scroll'});
        $('.sp_nav').removeClass('open');
    }
    // SP Triggers
    $('.sp_menu').click(function(){
        if($(this).hasClass('open')){
          closeMenu();
        }else{
          openMenu();
        }
    });

    $('.sp_nav a').click(function(){
        href = $(this).attr('hret');
        $('.nav a[href="'+href+'"]').trigger('click');
        closeMenu();
    });

    $('.work-img__gymmaster').click(function(){
        window.open('https://youtu.be/xVuwSPxQiFI', '_blank');
    });
    $('.team-joinus').click(function(){
        window.open('https://www.wantedly.com/companies/1planet', '_blank');
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
          $('#agreed').addClass('empty');
          return false;
        }else{
          $('#agreed').removeClass('empty');
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
    $('#company_name').on('input', function(){
        checkFilled('#company_name');
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
        var isCompanyFilled = checkFilled('#company_name');
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
