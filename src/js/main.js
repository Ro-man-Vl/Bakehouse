$(function() {

  // Burger menu ------------------------------------------------------------

  $('.burger-menu__btn').on('click', () => {
            
    $('.burger-menu__list').toggleClass('burger-menu__list--active');
    $('.burger-menu__btn').toggleClass('burger-menu__btn--active');
    $('body').toggleClass('lock');

  });

  // Text popup

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