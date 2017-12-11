$(function() {

  $(window).mouseleave(function(e) {
    var modalSeen = sessionStorage.getItem('modalSeen');
    // if mouse has actually left the window
    if (e.toElement == null && !modalSeen) {
      // document.documentElement references html tag
      document.documentElement.classList.add('mouse-out');
    }
  });

  $('#close-modal').click(function(e) {
    e.preventDefault();
    document.documentElement.classList.remove('mouse-out');
    sessionStorage.setItem('modalSeen', true);
  });

});
