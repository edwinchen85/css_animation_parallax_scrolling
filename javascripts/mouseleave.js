$(function() {

  $(window).mouseleave(function(e) {
    // if mouse has actually left the window
    if (e.toElement == null) {
      // document.documentElement references html tag
      document.documentElement.classList.add('mouse-out');
    }
  });

});
