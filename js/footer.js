export function getCurrentYear () {
    const currentYear = new Date().getFullYear()
    const yearElement = document.querySelector('.current-year')

    yearElement.textContent = currentYear
}
