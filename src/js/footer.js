(function() {
  var feedbackWrapper = document.querySelector('.js-feedback-wrapper');
  var feedback = document.querySelector('.js-feedback');
  var feedbackBtn = document.querySelector('.js-feedback-btn');

  if (window.matchMedia("(max-width: 960px)").matches) {
    feedbackWrapper.appendChild(feedback);
  }

  feedbackBtn.addEventListener('click', () => {
    feedback.classList.add('active');
    feedbackBtn.hidden = true;
  });

})();
