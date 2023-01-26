let inivalue = 0
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#numcount')
const counter = document.querySelector('.counter')

console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains("btn-inc")) {
            inivalue++
        }
        else if (styles.contains("btn-dec")) {
            inivalue--
        }
        else {
            inivalue = 0
        }
        if (inivalue > 0) {
            value.style.color = 'green'
            counter.textContent = 'Counter Increasing'
        }
        else if (inivalue < 0) {
            value.style.color = 'red'
            counter.textContent = 'Counter Decreasing'
        }
        else {
            value.style.color = 'black'
            counter.textContent = 'Counter'

        }

        value.textContent = inivalue
    })
}) 