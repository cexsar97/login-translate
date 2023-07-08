const container = document.querySelector(".container")
const btnregistrarse=document.getElementById("sign-up-btn")
const btniniciarsesion =document.getElementById("sign-in-btn")
btnregistrarse.addEventListener("click",()=>{
    container.classList.add("sign-up-mode")
})
btniniciarsesion.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode")
})