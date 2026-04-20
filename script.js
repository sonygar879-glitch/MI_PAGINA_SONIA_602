
    function MostrarMensaje(){
    let mensaje=document.getElementById("mensaje");
    mensaje.innerHTML="soy de Rio Hilo";
    mensaje.style.display="block";

    setTimeout(()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform= "translateY(0)";
    }, 50);
}

