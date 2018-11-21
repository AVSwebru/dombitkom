(function() {
  var menuOpenBtn = document.querySelector('.js-menu-open-btn');
  var menuCloseBtn = document.querySelector('.js-menu-close-btn');
  var menu = document.querySelector('.js-mobile-menu');

  menuOpenBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });
  menuCloseBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
})();
