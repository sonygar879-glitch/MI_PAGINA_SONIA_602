
 // 🎯 FUNCIÓN TOGGLE MEJORADA
document.addEventListener('DOMContentLoaded', function() {
    const mensaje = document.getElementById('mensaje');
    const btnToggle = document.getElementById('btnToggle');
    const btnIcon = btnToggle.querySelector('.btn-icon');
    const btnText = btnToggle.querySelector('.btn-text');
    
    let esVisible = false;

    function toggleMensaje() {
        esVisible = !esVisible;
        
        if (esVisible) {
            // 👁️ MOSTRAR MENSAJE
            mostrarMensaje();
        } else {
            // 🙈 OCULTAR MENSAJE
            ocultarMensaje();
        }
    }

    function mostrarMensaje() {
        mensaje.innerHTML = "🐾 CUIDA Y PROTEGE A LOS ANIMALES 🐾";
        mensaje.classList.remove('oculto');
        mensaje.classList.add('visible');
        
        // Cambiar estado del botón
        btnToggle.classList.remove('ocultar');
        btnToggle.classList.add('mostrar');
        btnText.textContent = 'Ocultar Mensaje';
        btnIcon.textContent = '🙈';
    }

    function ocultarMensaje() {
        mensaje.classList.remove('visible');
        mensaje.classList.add('oculto');
        
        // Cambiar estado del botón
        btnToggle.classList.remove('mostrar');
        btnToggle.classList.add('ocultar');
        btnText.textContent = 'Mostrar Mensaje';
        btnIcon.textContent = '👁️';
    }

    // EVENTO CLICK DEL BOTÓN
    btnToggle.addEventListener('click', toggleMensaje);

    // TECLA ENTER/SPACE para accesibilidad
    btnToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMensaje();
        }
    });

    // CLICK FUERA DEL MENSAJE PARA OCULTAR (OPCIONAL)
    document.addEventListener('click', function(e) {
        if (!mensaje.contains(e.target) && !btnToggle.contains(e.target) && esVisible) {
            ocultarMensaje();
        }
    });
});



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









  

// VALIDACIÓN DEL FORMULARIO
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const btnEnviar = document.getElementById('btnEnviar');

    // EXPRESIONES REGULARES
    const validaciones = {
        nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefono: /^[\+]?[0-9\s\-\$\$]{10,15}$/,
        mensaje: /^.{10,500}$/
    };

    // FUNCIÓN PARA MOSTRAR/OCULTAR ERRORES
    function mostrarError(campo, mensaje) {
        const input = document.getElementById(campo);
        const error = document.getElementById(`error-${campo}`);
        
        input.classList.add('input-error');
        input.classList.remove('input-success');
        error.textContent = mensaje;
    }

    function ocultarError(campo) {
        const input = document.getElementById(campo);
        const error = document.getElementById(`error-${campo}`);
        
        input.classList.remove('input-error');
        input.classList.add('input-success');
        error.textContent = '';
    }

    // VALIDAR CAMPO INDIVIDUAL
    function validarCampo(campo, regex, mensajeError) {
        const valor = document.getElementById(campo).value.trim();
        
        if (valor === '') {
            mostrarError(campo, 'Este campo es obligatorio');
            return false;
        }
        
        if (!regex.test(valor)) {
            mostrarError(campo, mensajeError);
            return false;
        }
        
        ocultarError(campo);
        return true;
    }

    // VALIDACIÓN EN TIEMPO REAL
    ['nombre', 'email', 'mensaje'].forEach(campo => {
        document.getElementById(campo).addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                validarCampo(campo, validaciones[campo], 
                    campo === 'nombre' ? 'Nombre inválido (solo letras, 2-50 caracteres)' :
                    campo === 'email' ? 'Email inválido' :
                    'Mensaje muy corto (mínimo 10 caracteres)'
                );
            }
        });
    });

    // VALIDAR SELECT ASUNTO
    document.getElementById('asunto').addEventListener('change', function() {
        if (this.value === '') {
            mostrarError('asunto', 'Selecciona un asunto');
        } else {
            ocultarError('asunto');
        }
    });

    // VALIDAR CHECKBOX
    document.getElementById('terminos').addEventListener('change', function() {
        if (!this.checked) {
            mostrarError('terminos', 'Debes aceptar los términos');
        } else {
            ocultarError('terminos');
        }
    });

    // VALIDAR TELÉFONO (OPCIONAL)
    document.getElementById('telefono').addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            if (!validaciones.telefono.test(this.value)) {
                mostrarError('telefono', 'Teléfono inválido');
            } else {
                ocultarError('telefono');
            }
        } else {
            ocultarError('telefono');
        }
    });

    // ENVÍO DEL FORMULARIO
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let esValido = true;

        // Validar todos los campos
        esValido = validarCampo('nombre', validaciones.nombre, 'Nombre inválido') && esValido;
        esValido = validarCampo('email', validaciones.email, 'Email inválido') && esValido;
        
        if (document.getElementById('telefono').value.trim() !== '') {
            esValido = validarCampo('telefono', validaciones.telefono, 'Teléfono inválido') && esValido;
        }
        
        const asunto = document.getElementById('asunto');
        if (asunto.value === '') {
            mostrarError('asunto', 'Selecciona un asunto');
            esValido = false;
        } else {
            ocultarError('asunto');
        }
        
        esValido = validarCampo('mensaje', validaciones.mensaje, 'Mensaje muy corto') && esValido;
        
        const terminos = document.getElementById('terminos');
        if (!terminos.checked) {
            mostrarError('terminos', 'Debes aceptar los términos');
            esValido = false;
        } else {
            ocultarError('terminos');
        }

        // SI TODO ES VÁLIDO, SIMULAR ENVÍO
        if (esValido) {
            btnEnviar.disabled = true;
            btnEnviar.querySelector('.btn-text').style.display = 'none';
            btnEnviar.querySelector('.btn-loading').style.display = 'inline';
            
            // Simular envío (2 segundos)
            setTimeout(() => {
                document.getElementById('mensajeExito').style.display = 'block';
                form.reset();
                btnEnviar.disabled = false;
                btnEnviar.querySelector('.btn-text').style.display = 'inline';
                btnEnviar.querySelector('.btn-loading').style.display = 'none';
                
                // Scroll suave al mensaje
                document.getElementById('mensajeExito').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }, 2000);
        }
    });
});