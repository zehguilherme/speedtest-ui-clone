(() => {
    window.onload = () => {
        function openHamburgerMenu () {
            const menuButton = document.querySelector('.nav-mobile-controls');
            const logoHeading = document.querySelector('.logo-heading')
            const headerContainer = document.querySelector('.header-container')
            const navMenu = document.querySelector('.nav-menu')

            let menuOpen = false;

            navMenu.classList.add('nav-menu-closed');

            menuButton.addEventListener('click', () => {
                if (!menuOpen) {
                    menuButton.classList.add('open');
                    menuOpen = true;

                    logoHeading.classList.add('logo-heading-disabled');
                    headerContainer.classList.add('header-container-without-logo');
                    navMenu.classList.remove('nav-menu-closed');
                } else {
                    menuButton.classList.remove('open');
                    menuOpen = false;

                    logoHeading.classList.remove('logo-heading-disabled');
                    headerContainer.classList.remove('header-container-without-logo');
                    navMenu.classList.add('nav-menu-closed');
                }
            });
        }

        openHamburgerMenu();
    }
})()
