let isMultiConnection = true

export function changeConnectionType () {
    const connectionIconContainer = document.querySelector('.connection-icon-container')
    const connectionIcons = document.querySelectorAll('.connection-icon')
    const connectionNames = document.querySelectorAll('.connection-type-link')
    const multiConnection = document.querySelector('#multi-connection')
    const singleConnection = document.querySelector('#single-connection')

    changeConnectionTestButtonColor()

    function changeConnectionIconType () {
        connectionIcons.forEach((icon) => {
            icon.classList.toggle('active')
        })
    }

    connectionIconContainer.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            connectionIconContainer.click()
        }
    })

    connectionIconContainer.addEventListener('click', () => {
        changeConnectionIconType()

        connectionNames.forEach((connectionName) => {
            if (connectionName.classList.contains('text-white')) {
                connectionName.classList.remove('text-white')
                connectionName.classList.add('text-gray')
            } else {
                connectionName.classList.remove('text-gray')
                connectionName.classList.add('text-white')
            }
        })

        if (multiConnection.classList.contains('text-white')) {
            isMultiConnection = true
        } else {
            isMultiConnection = false
        }

        changeConnectionTestButtonColor()
    })

    multiConnection.addEventListener('click', () => {
        if (!multiConnection.classList.contains('text-white')) {
            multiConnection.classList.add('text-white')
            multiConnection.classList.remove('text-gray')

            singleConnection.classList.remove('text-white')
            singleConnection.classList.add('text-gray')

            changeConnectionIconType()

            isMultiConnection = true

            changeConnectionTestButtonColor()
        }
    })

    singleConnection.addEventListener('click', () => {
        if (!singleConnection.classList.contains('text-white')) {
            singleConnection.classList.add('text-white')
            singleConnection.classList.remove('text-gray')

            multiConnection.classList.remove('text-white')
            multiConnection.classList.add('text-gray')

            changeConnectionIconType()

            isMultiConnection = false

            changeConnectionTestButtonColor()
        }
    })
}

export function executeConnectionTest () {
    const connectionTestButton = document.querySelector('.main-connection-test-button-container')
    const resultsSettingsContainer = document.querySelector('.main-results-settings-container')
    const connectionParametersContainer = document.querySelector('.connection-parameters')
    const connectionTypeContainer = document.querySelector('.main-connection-type')
    const downloadUploadGraphic = document.querySelector('#download-upload-line-graphic')
    const networkSpeedometer = document.querySelector('.network-speedometer')

    connectionTestButton.addEventListener('click', () => {
        resultsSettingsContainer.classList.add('disabled')

        connectionTypeContainer.classList.add('disabled')

        connectionTestButton.classList.add('disabled')

        connectionParametersContainer.classList.remove('disabled')

        downloadUploadGraphic.classList.remove('disabled')

        networkSpeedometer.classList.remove('disabled')
    })
}

function changeConnectionTestButtonColor () {
    const connectionTestButton = document.querySelector('.main-connection-test-button-container')

    if (isMultiConnection) {
        connectionTestButton.classList.add('multi-connection')
        connectionTestButton.classList.remove('single-connection')
    } else {
        connectionTestButton.classList.add('single-connection')
        connectionTestButton.classList.remove('multi-connection')
    }
}
