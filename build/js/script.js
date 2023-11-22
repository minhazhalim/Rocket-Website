const initApplication = () => {
     const hamburgerButton = document.getElementById('hamburger-button');
     const mobileMenu = document.getElementById('mobile-menu');
     const toggleMenu = () => {
          mobileMenu.classList.toggle('hidden');
          mobileMenu.classList.toggle('flex');
          hamburgerButton.classList.toggle('toggle-button');
     };
     hamburgerButton.addEventListener('click',toggleMenu);
     mobileMenu.addEventListener('click',toggleMenu);
};
document.addEventListener('DOMContentLoaded',initApplication);