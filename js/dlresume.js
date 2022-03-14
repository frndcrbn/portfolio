let button = document.querySelector ("body a");
button.addEventListener ("click", ()=>{
    const span = document.querySelector ("a span");
    button.style.paddingRight = '10px';
    span.style.visibility ="visible";
    setTimeout (() =>{
         span.style.visibility="hidden";
         button.style.transition = "ls ease-in-out";
         button.style.paddingRight = "Opx";
    },3000);
})
