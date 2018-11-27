(function() {
  var projectSliderItems = document.querySelectorAll('.js-project-slider li');
  var projectSliderPhotos = document.querySelectorAll('.js-project-slider img');

  if (projectSliderItems && projectSliderPhotos) {
    if (window.matchMedia("(max-width: 640px)").matches) {
      projectSliderItems.forEach((item) => {
        item.classList.add('uk-cover-container');
      });
      projectSliderPhotos.forEach((item) => {
        item.setAttribute('data-uk-cover', '');
      });
    }
  }
})();
