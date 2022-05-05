import { getCurrentYear } from './footer.js'
import { openHamburgerMenu } from './navbar.js'
import { changeConnectionType, executeConnectionTest } from './networkTest.js'

(() => {
    window.onload = () => {
        openHamburgerMenu()
        changeConnectionType()
        executeConnectionTest()
        getCurrentYear()
    }
})()
