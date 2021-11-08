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

function changeConnectionTestButtonColor () {
    const connectionTestButton = document.querySelector('.connection-test-button-container')

    if (isMultiConnection) {
        connectionTestButton.classList.add('multi-connection')
        connectionTestButton.classList.remove('single-connection')
    } else {
        connectionTestButton.classList.add('single-connection')
        connectionTestButton.classList.remove('multi-connection')
    }
}
