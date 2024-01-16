  // Toggle class active
  const navbarNav = document.querySelector('.navbar-nav');
//   ketika menu di klik
  document.querySelector('#hamburger-menu').onclick = () => {
      navbarNav.classList.toggle('active');
  };
  const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
   if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
   }
});  

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});