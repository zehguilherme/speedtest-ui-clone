import { openHamburgerMenu } from './navbar.js'
import { changeConnectionType } from './networkTest.js'

(() => {
    window.onload = () => {


        openHamburgerMenu();
        changeConnectionType();
    }
})()
