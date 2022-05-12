import * as Interfaz from './interfaz.js'


export class API {
     constructor(artista, cancion) {
         this.artista = artista;
         this.cancion = cancion;
     }

    consultarAPI(){
        const Url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(Url)
                .then(respuesta => respuesta.json())
                .then(resultado => {
                    if (resultado.lyrics) {
                        const { lyrics } = resultado;
                        Interfaz.divResultado.textContent = lyrics;
                        Interfaz.CabeceraResultado.textContent = `Letra de la cancion: ${this.cancion} del artista: ${this.artista}`;
                       
                    }else{
                        LimpiarHtml();
                        Interfaz.divMensajes.textContent = 'La cancion no existe, ingrese un artista valido';
                        Interfaz.divMensajes.classList.add('error');

                        setTimeout(() => {
                            Interfaz.divMensajes.textContent = '';
                            Interfaz.divMensajes.classList.remove('error');
                          
                        }, 4000);
                    }

                    
                })

    }
}



