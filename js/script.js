$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['charter0', 'charter1', 'charter2', 'charter3', 'charter4'],
    menu: '#menu',
    scrollOverflow: true,
    paddingTop: '60px',
    hybrid:true,
    fitToSection: false,
    scrollingSpeed: 2000
  });
});