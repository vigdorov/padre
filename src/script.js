let lastScrollPosition = 0,
    bottomPanel = document.getElementsByClassName('bottom-panel')[0],
    addButton = document.getElementsByClassName('body-content__add-button')[0];


window.addEventListener('scroll', e => {
  if (Math.abs(window.scrollY - lastScrollPosition) > 100) {
    if (window.scrollY > lastScrollPosition) {
      console.log('вниз');
      bottomPanel.style.visibility = 'hidden';
      addButton.style.visibility = 'hidden';
    } else {
      console.log('вверх');
      bottomPanel.style.visibility = 'visible';
      addButton.style.visibility = 'visible';
    }
    lastScrollPosition = window.scrollY;
  }

});