function call(name) {
    return document.querySelector(name)
}

let ham = call('.hamburger')
let overlay = call('.overlay')
let nav = call('.header__Nav')
let input = call('input')
let button = call('button[type=submit]')
let alertt = call('.alert')

ham.addEventListener('click', () => {
    overlay.classList.toggle('toggle_show');
    nav.classList.toggle('toggle_show')
    ham.classList.toggle('change')
    document.body.classList.toggle('overflowY')
})

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value.length > 0) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
            alertt.textContent = ""
            console.log("hi");
        } 
        else {
            alertt.textContent = `Please insert a valid email`
        }
    } else {
        alertt.textContent = ""
    }
    console.log(input.value.setAttribute('class', 'red'));
    
})