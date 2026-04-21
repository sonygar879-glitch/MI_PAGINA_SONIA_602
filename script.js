
    function MostrarMensaje(){
    let mensaje= document.getElementById("mensaje");
    mensaje.innerHTML="CUIDA Y PROTEGE A LOS ANIMALES";
    mensaje.style.display="block";

    setTimeout(()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform= "translateY(0)";
    }, 50);
}




function mostrarMensaje2 () {
    let mensaje= document.getElementById("mensaje2");

    mensaje.innerHTML="soy sonia ";
    mensaje.style.display="block";

    setTimeout (() => {
        mensaje.style.opacity = "2";
        mensaje.style.transform = "translateY(0)";
    }, 50);

}

