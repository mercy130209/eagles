 const checkbox = document.querySelector("#exampleCheck1")
 const btn = document.querySelector("#cl")


 if(checkbox.checked){
    btn.disabled = false
}else{
    btn.disabled = true
}

checkbox.addEventListener("change",(event)=>{
    if(event.target.checked){
        btn.disabled = false
    }else{
        btn.disabled = true
    }
})
