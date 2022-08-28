const boton = document.querySelector("#btn");
console.log(boton);

boton.addEventListener("click",() =>{
    alert("click en el botón");
})

$(document).ready(() => {
    $(".btn-messege").click(()=>{
        console.log("Hola, estoy utilizando jQuery");
    })
    
})