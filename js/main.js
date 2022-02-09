import { openHamburgerMenu } from './navbar.js'
import { changeConnectionType, executeConnectionTest } from './networkTest.js'

(() => {
    window.onload = () => {
        openHamburgerMenu()
        changeConnectionType()
        executeConnectionTest()
    }
})()
