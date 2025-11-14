const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
const form = document.getElementById('form')
const answer = document.getElementById('answer')
const card = document.getElementById('card-inner')
const front = document.querySelector('.flip-card-front')
const input = document.getElementById('password')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        
        password: password.value
    }
    if(password.value === 'cooperaccion'){
        front.classList.add('opacity')
        
        

    }else{
        
    }

    console.log(data)
})
button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        
        password: password.value
    }
    if(password.value === 'cooperaccion'){
        console.log('bienvenido');
        
        card.classList.add('rotate')

    }else{
        console.log('denegados')
        window.alert('Contraseña incorrecta. No hagas trampa!')
    }

    console.log(data)
})
input.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        e.target.blur()
    }
})