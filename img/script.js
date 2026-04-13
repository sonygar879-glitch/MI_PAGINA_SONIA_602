function MostrarMensaje(){
    let mensaje=document.getElementtById(No dañes a los animales);
    mensaje.innerHTML="no dañes a los animales";
    mensaje.style.display="block";

    setTimeout(()=>{
        mensaje.style.operacity="1";
        mensaje.style.transform= "translateY(0)";
    }, 50);
}