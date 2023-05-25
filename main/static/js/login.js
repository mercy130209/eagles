let input=document.querySelector('.input')
let see = document.querySelector('.see')
const showingPwdClass = "bi bi-eye-fill"
const notShowPwdClass = "bi bi-eye-slash-fill"

see.firstElementChild.className= notShowPwdClass

see.addEventListener('click', ()=>{
    if(input.type === 'password'){
        input.type = 'text';
        see.firstElementChild.className= showingPwdClass
    }
    else{
        input.type = 'password';
        see.firstElementChild.className= notShowPwdClass
    }
})

let put=document.querySelector('.put')
let show = document.querySelector('.show')

show.firstElementChild.className= notShowPwdClass

show.addEventListener('click', ()=>{
    if(put.type === 'password'){
        put.type = 'text';
        show.firstElementChild.className= showingPwdClass
    }
    else{
        put.type = 'password';
        show.firstElementChild.className= notShowPwdClass
    }
})