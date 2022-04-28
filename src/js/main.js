$(function() {

  // Burger menu ------------------------------------------------------------

  $('.burger-menu__btn').on('click', () => {
            
    $('.burger-menu__list').toggleClass('burger-menu__list--active');
    $('.burger-menu__btn').toggleClass('burger-menu__btn--active');
    $('body').toggleClass('lock');

  });

  // --------------- Collapse menu after click ------------------------------
  $('.burger-menu__item').on('click', function() {
    
    let isActive = $(this).parent().hasClass('burger-menu__list--active');

    if(isActive) {
      $(this).parent().removeClass('burger-menu__list--active');
      $(this).parent().siblings().removeClass('burger-menu__btn--active');
      $('body').removeClass('lock');
    }

  });

  // Text popup -------------------------------------------------------------

  const mediaQueryList = window.matchMedia('(max-width: 425px)');

  if (mediaQueryList.matches) {
    $('.hero__text').on('click', () => {
                
      $('.hero__text-par--toggle').slideToggle();
      $('.hero__text').toggleClass('text--rolled').toggleClass('text--unrolled');

    });

    $('.about__text').on('click', () => {
                
      $('.about__text-par--toggle').slideToggle();
      $('.about__text').toggleClass('text--rolled').toggleClass('text--unrolled');

    });
  };


});