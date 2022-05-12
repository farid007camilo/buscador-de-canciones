import * as Interfaz from './interfaz.js'
import {API} from './api.js'

Interfaz.formularioBuscar.addEventListener('submit', BuscarCancion);


function BuscarCancion(e) {
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        
        Interfaz.divMensajes.textContent = 'Error, todos los campos son obligatorios';
        Interfaz.divMensajes.classList.add('error');

        setTimeout(() => {
            Interfaz.divMensajes.textContent = ''; 
            Interfaz.divMensajes.classList.remove('error');
        }, 3000);

        return;
    }

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI(); 
    
}