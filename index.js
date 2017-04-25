(function ($) {
  'use strict';

  $('.carousel').carousel({
    indicators: true,
    shift: 100
  });

  [
    'lion',
    'bear',
    'monkey'
  ].forEach(function (avatar) {
    var node = document.getElementsByClassName(avatar)[0];
    var timeout;
    if (!node ) return;
    node.addEventListener('click', function () {
      animateCheckmark();
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        window.location.href = 'introduction.html';
      }, 1500);
      console.log('hello');
    });
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

})(jQuery);
