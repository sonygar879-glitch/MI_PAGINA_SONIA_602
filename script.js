
    function toggleMensaje() {
    let mensaje = document.getElementById("mensaje");
    let boton = event.target; // Captura el botón
    
    // ¿Está VISIBLE? → OCULTAR
    if (mensaje.style.display === "block" || mensaje.style.display === "") {
        // Animación de salida
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            mensaje.style.display = "none";
            boton.textContent = "Mostrar mensaje"; // Texto del botón
        }, 300);
    } 
    // ¿Está OCULTO? → MOSTRAR
    else {
        // Mostrar mensaje
        mensaje.innerHTML = "cuida y protege a los animales";
        mensaje.style.display = "block";
        
        setTimeout(() => {
            mensaje.style.opacity = "1";
            mensaje.style.transform = "translateY(0)";
            boton.textContent = "Ocultar mensaje"; // Texto del botón
        }, 50);
    }
}


function toggleMensaje2() {
    let mensaje = document.getElementById("mensaje2");
    let boton = event.target; // Captura el botón
    
    // ¿Está VISIBLE? → OCULTAR
    if (mensaje.style.display === "block" || mensaje.style.display === "") {
        // Animación de salida
        mensaje.style.opacity = "0";
        mensaje.style.transform = "translateY(-20px)";
        
        setTimeout(() => {
            mensaje.style.display = "none";
            boton.textContent = "Mostrar mensaje"; // Texto del botón
        }, 300);
    } 
    // ¿Está OCULTO? → MOSTRAR
    else {
        // Mostrar mensaje
        mensaje.innerHTML = "hola soy sonia del rio hilo";
        mensaje.style.display = "block";
        
        setTimeout(() => {
            mensaje.style.opacity = "1";  // Corregido de "2" a "1"
            mensaje.style.transform = "translateY(0)";
            boton.textContent = "Ocultar mensaje"; // Texto del botón
        }, 50);
    }
}




// CÓDIGO DEL MODO OSCURO (ponlo en tu script.js o antes de </body>)
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const toggleIcon = darkModeToggle.querySelector('.toggle-icon');

    // Verificar si el modo oscuro está guardado
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Aplicar el modo guardado al cargar
    if (isDarkMode) {
        body.classList.add('dark-mode');
        updateToggleText(true);
    }

    // Función para actualizar texto e icono
    function updateToggleText(isDark) {
        if (isDark) {
            toggleIcon.textContent = '☀️';
            darkModeToggle.innerHTML = '<span class="toggle-icon">☀️</span>Modo Claro';
        } else {
            toggleIcon.textContent = '🌙';
            darkModeToggle.innerHTML = '<span class="toggle-icon">🌙</span>Modo Oscuro';
        }
    }

    // Click del botón
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDarkModeNow = body.classList.contains('dark-mode');
        updateToggleText(isDarkModeNow);
        localStorage.setItem('darkMode', isDarkModeNow);
    });
});





document.querySelector('.btn-volver-inicio').onclick = function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






// Mostrar/ocultar con scroll
window.addEventListener('scroll', function() {
    const boton = document.querySelector('.btn-volver-inicio');
    if (window.scrollY > 300) {
        boton.style.opacity = '1';
        boton.style.visibility = 'visible';
    } else {
        boton.style.opacity = '0';
        boton.style.visibility = 'hidden';
    }
});





document.getElementById('formContacto').onsubmit = function(e) {
    e.preventDefault();
    
    // Limpiar errores anteriores
    limpiarErrores();
    
    // Validar campos
    let esValido = true;
    
    // Nombre
    if (!validarCampo('nombre', '¡El nombre es obligatorio!')) {
        esValido = false;
    }
    
    // Email
    if (!validarEmail('email')) {
        esValido = false;
    }
    
    // Asunto
    if (!validarCampo('asunto', '¡Selecciona un asunto!')) {
        esValido = false;
    }
    
    // Mensaje
    if (!validarCampo('mensaje', '¡El mensaje no puede estar vacío!')) {
        esValido = false;
    }
    
    // Si todo está bien, simular envío
    if (esValido) {
        enviarFormulario();
    }
}

function validarCampo(idCampo, mensajeError) {
    const campo = document.getElementById(idCampo);
    const valor = campo.value.trim();
    
    if (valor === '') {
        mostrarError(campo, mensajeError);
        return false;
    }
    return true;
}

function validarEmail(idCampo) {
    const campo = document.getElementById(idCampo);
    const email = campo.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === '') {
        mostrarError(campo, '¡El email es obligatorio!');
        return false;
    }
    
    if (!regexEmail.test(email)) {
        mostrarError(campo, '¡Ingresa un email válido!');
        return false;
    }
    return true;
}

function mostrarError(campo, mensaje) {
    campo.classList.add('error');
    campo.parentNode.querySelector('.error-message').textContent = mensaje;
}

function limpiarErrores() {
    const campos = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    campos.forEach(campo => {
        campo.classList.remove('error');
    });
    
    const mensajes = document.querySelectorAll('.error-message');
    mensajes.forEach(msg => {
        msg.style.display = 'none';
    });
}

function enviarFormulario() {
    // Simular envío (aquí puedes conectar con backend)
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    
    // Scroll suave al mensaje
    successMsg.scrollIntoView({ behavior: 'smooth' });
    
    // Resetear formulario
    document.getElementById('formContacto').reset();
    
    // Ocultar éxito después de 5 segundos
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 5000);
}




// Agregar campo personalizado
if (!document.getElementById('miCampo').value) {
    mostrarError(document.getElementById('miCampo'), 'Mi error personalizado');
}


