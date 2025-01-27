//////////
// CICKS
//////////
(function($, APP) {
  APP.Plugins.Clicks = {
    init: function() {
      $(document)
        .on('click', '[href="#"]', function(e) {
          e.preventDefault();
        })
        .on('click', '[js-link]', function(e) {
          var dataHref = $(this).data('href');
          if (dataHref && dataHref !== '#') {
            e.preventDefault();
            e.stopPropagation();
            Barba.Pjax.goTo(dataHref);
          }
        })
        // prevent going the same link (if barba is connected)
        .on('click', 'a, [js-link]', function(e) {
          var href = $(this).data('href') || $(this).attr('href');
          var path = window.location.pathname;

          if (href === path.slice(1, path.length)) {
            e.preventDefault();
            e.stopPropagation();
          }
        })
        // scroll to section
        .on('click', 'a[href^="#section"]', function() {
          // section scroll
          var el = $(this).attr('href');
          var topTarget = $(el).offset().top;

          // $('body, html').animate({scrollTop: topTarget}, 1000);
          TweenLite.to(window, 1, {
            scrollTo: { y: topTarget, autoKill: false },
            ease: easingSwing,
          });

          return false;
        })
        // grid toggler
        .on('click', '[js-show-grid]', function() {
          $(this).toggleClass('is-active');
          $('.demo-grid').fadeToggle();
        })
        //tabs
        .on('click', '.js-tabs-trigger a', function() {
          var $link = $(this);
          var $allLinks = $('.js-tabs-trigger a');
          var $container = $link.closest('.js-tabs');
          var dataTab = $link.data('tab');
          var $allTabs = $container.find('.tab');
          var $targetTab = $container.find('.tab[data-tab="' + dataTab + '"]');

          $allLinks.removeClass('is-active');
          $link.addClass('is-active');

          $allTabs.hide();
          $targetTab.fadeIn();
        });
    },
    destroy: function() {
      // ... code ...
    },
  };
})(jQuery, window.APP);
