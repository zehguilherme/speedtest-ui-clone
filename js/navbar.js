export function openHamburgerMenu () {
    const menuButton = document.querySelector('.header-navigation-mobile-controls');
    const logoHeading = document.querySelector('.header-logo-container')
    const headerContainer = document.querySelector('.header-container')
    const navMenu = document.querySelector('.header-navigation-menu')

    let menuOpen = false;

    navMenu.classList.add('header-navigation-menu-closed');

    menuButton.addEventListener('click', () => {
        if (!menuOpen) {
            menuButton.classList.add('open');
            menuOpen = true;

            logoHeading.classList.add('header-logo-container-disabled');
            headerContainer.classList.add('header-container-without-logo');
            navMenu.classList.remove('header-navigation-menu-closed');
        } else {
            menuButton.classList.remove('open');
            menuOpen = false;

            logoHeading.classList.remove('header-logo-container-disabled');
            headerContainer.classList.remove('header-container-without-logo');
            navMenu.classList.add('header-navigation-menu-closed');
        }
    });
}
