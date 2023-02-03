// Elements
const backgroundInfo = document.querySelector('.background-info');
const btnCloseBkgPane = document.querySelector(
  '.close-background-pane'
);
const btnOpenBkgPane = document.querySelector('.show-background');

// Event Handlers
const openBackground = () => {
  backgroundInfo.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeBackground = () => {
  backgroundInfo.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Listeners
btnOpenBkgPane.addEventListener('click', openBackground);
btnCloseBkgPane.addEventListener('click', closeBackground);
overlay.addEventListener('click', closeBackground);
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'Escape' &&
    !backgroundInfo.classList.contains('hidden')
  ) {
    closeBackground();
  }
});
