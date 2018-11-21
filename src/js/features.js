(function() {
  var featuresWrapper = document.querySelector('.js-features-wrapper');
  var featuresItems = document.querySelector('.js-features-items');

  if (window.matchMedia("(max-width: 960px)").matches) {
    featuresWrapper.setAttribute('data-uk-slideshow', 'min-height: 580');
    featuresItems.classList.add('uk-slideshow-items');
  }
  if (window.matchMedia("(max-width: 640px)").matches) {
    featuresWrapper.setAttribute('data-uk-slideshow', 'min-height: 380');
  }
})();
// min-height: 480

// min-height: 380
