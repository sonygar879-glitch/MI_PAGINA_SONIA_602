
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

    mensaje.innerHTML="soy sonia del E-35";
    mensaje.style.display="block";

    setTimeout (() => {
        mensaje.style.opacity = "2";
        mensaje.style.transform = "translateY(0)";
    }, 50);

}







const btnModoOscuro = document.getElementById('btnModoOscuro');

// Cargar tema guardado (persiste al recargar)
const temaGuardado = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', temaGuardado);
actualizarBoton(temaGuardado);

btnModoOscuro.onclick = function() {
    const temaActual = document.documentElement.getAttribute('data-theme');
    const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';
    
    // Cambiar tema
    document.documentElement.setAttribute('data-theme', nuevoTema);
    
    // Guardar preferencia
    localStorage.setItem('theme', nuevoTema);
    
    // Actualizar botón
    actualizarBoton(nuevoTema);
    
    // Efecto visual
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
}

function actualizarBoton(tema) {
    if (tema === 'dark') {
        btnModoOscuro.innerHTML = '☀️';
        btnModoOscuro.classList.add('active');
        btnModoOscuro.title = 'Modo claro';
    } else {
        btnModoOscuro.innerHTML = '🌙';
        btnModoOscuro.classList.remove('active');
        btnModoOscuro.title = 'Modo oscuro';
    }
}








// FUNCIÓN PARA EL BOTÓN HOME
document.addEventListener('DOMContentLoaded', function() {
    
    const btnHome = document.querySelector('.btn-home');
    
    // Efecto click mejorado
    btnHome.addEventListener('click', function(e) {
        // Opción 1: Redirección directa
        window.location.href = '/';
        
        // Opción 2: Con confirmación (descomenta si quieres)
        // if (confirm('¿Volver al inicio?')) {
        //     window.location.href = '/';
        // }
    });
    
    // Efecto de scroll suave (opcional)
    btnHome.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    btnHome.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});