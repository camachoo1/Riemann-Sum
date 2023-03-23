// Elements
const socials = document.querySelector('.socials-info');
const btnSocialsClose = document.querySelector('.close-socials');
const btnSocialsOpen = document.querySelector('.show-about');

// Event Handlers
const openSocials = () => {
  socials.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeSocials = () => {
  socials.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Listeners
btnSocialsOpen.addEventListener('click', openSocials);
btnSocialsClose.addEventListener('click', closeSocials);
overlay.addEventListener('click', closeSocials);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !socials.classList.contains('hidden')) {
    closeSocials();
  }
});
