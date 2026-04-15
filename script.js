
    function MostrarMensaje(){
    let mensaje=document.getElementById("Cuida y protege a los animales");
    mensaje.innerHTML="Cuida y protege a los animales";
    mensaje.style.display="block";

    setTimeout(()=>{
        mensaje.style.opacity="1";
        mensaje.style.transform= "translateY(0)";
    }, 50);
}