const table__bell = document.querySelectorAll(".table__bell")
const btn__date = document.querySelectorAll(".analitycs__dateButton")
const analitycs__input = document.querySelectorAll(".analitycs__input")


table__bell.forEach((elem) => {
    elem.addEventListener("click", (el) => {
        const clickedElement = el.target.classList
        if (clickedElement.contains("bell__active")) {
            clickedElement.remove("bell__active")
            clickedElement.add("bell__passive")
        } else if (clickedElement.contains("bell__passive")) {
            clickedElement.remove("bell__passive")
            clickedElement.add("bell__mute")
        } else if (clickedElement.contains("bell__mute")) {
            clickedElement.remove("bell__mute")
            clickedElement.add("bell__active")
        }
    })
})

btn__date.forEach((elem) => {
    elem.addEventListener("click", () => {
        btn__date.forEach((el) => {
            el.classList.remove("analitycs__dateButton_active")
        })
        elem.classList.add("analitycs__dateButton_active")
    })
})

if (analitycs__input.length) {
    analitycs__input[0].addEventListener("change", () => {
        analitycs__input[1].setAttribute("min", analitycs__input[0].value)
    })
    
    analitycs__input[1].addEventListener("change", () => {
        analitycs__input[2].setAttribute("max", analitycs__input[1].value)
    })
}
