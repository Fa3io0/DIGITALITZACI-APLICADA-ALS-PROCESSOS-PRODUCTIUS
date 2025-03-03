window.onload = function() {
    mostrarListaApellidos();
}

async function mostrarListaApellidos() {
    let respuesta = await fetch('2024_pad_m_cognom.json');
    let datos = await respuesta.json();
    console.log(datos);

    let apellidos = datos;
    rellenarTabla(apellidos);
}

function rellenarTabla(apellidos) {
    let tabla = document.createElement('table');
    tabla.innerHTML = "";

    tabla.id = 'tabla';
    tabla.style.width = '100%';
    tabla.style.margin = '20px 0';
    
    for (let persona of apellidos) {
        let fila = document.createElement('tr');

        let celdaApellido = document.createElement('td');
        celdaApellido.innerHTML = persona.COGNOM;

        if (persona.COGNOM === '') {
            celdaValor.innerHTML = '<p>No existe el apellido</p>';
        }

        fila.append(celdaApellido);
        tabla.append(fila);
    }

    document.body.append(tabla);
}