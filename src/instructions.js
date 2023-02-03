// Elements

const instructions = document.querySelector('.instructions');
const overlay = document.querySelector('.overlay');
const btnCloseInstructPane = document.querySelector(
  '.close-instruction-pane'
);
const btnOpenInstructPane = document.querySelector(
  '.show-instructions'
);

// Event Handlers
const openInstructions = () => {
  instructions.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeInstructions = () => {
  instructions.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Listeners
btnOpenInstructPane.addEventListener('click', openInstructions);

btnCloseInstructPane.addEventListener('click', closeInstructions);

overlay.addEventListener('click', closeInstructions);

document.addEventListener('keydown', (e) => {
  if (
    e.key === 'Escape' &&
    !instructions.classList.contains('hidden')
  ) {
    closeInstructions();
  }
});
