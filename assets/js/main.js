(function ($) {
  $(document).ready(function () {
    $('.header-menu__button').on('click', function () {
      $(this).toggleClass('open');
      $('.header-menu__list').stop(true, true).slideToggle(300);
    });
  });
})(jQuery);
