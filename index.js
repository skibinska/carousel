(function ($) {
  'use strict';

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  updateAvatar('introduction', 'sleeping-lion');

  $('.choose-avatar').on('click', function () {
    var timeout;
    var activeAvatar = $('.carousel').find('.carousel-item.active');
    var avatarClasses = activeAvatar.attr('class');
    var avatar = avatarClasses.replace(/(bear|monkey|lion)|[^]/g, '$1');

    animateCheckmark();
    sessionStorage.setItem('avatar', avatar);

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      window.location.href = 'introduction.html';
    }, 1500);
  });


  function animateCheckmark () {
    anime({
      targets: '#checkmark path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      opacity: {
        value: 1,
        duration: 100
      }
    });
  }

  function updateAvatar (selector, avatarSelector) {
    var page = document.getElementsByClassName(selector)[0];
    if (!page) { return; }
    var avatarImg = page.getElementsByClassName(avatarSelector)[0];
    var avatar = sessionStorage.getItem('avatar');
    avatarImg.src = 'assets/' + avatar + '.svg';
  }

})(jQuery);
