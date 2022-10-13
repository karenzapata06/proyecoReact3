import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState, useEffect } from "react"
import { servicioToken } from "../services/servicioToken.js"

export function Albumes(){

    //useEffect me indica cuantas veces voy a ejecutar el cursor
    //Declarando mi primer useState un useState es un metodo de react 
    
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos []cuando se pone vacio solo se ejecuta una vez, function(){} indica las veces que se va a repetir 

    const[carga,setCarga]=useState(true)

    //Usando el useEffect 
    useEffect(function(){


        servicioSpoty()
        .then(function(respuesta){
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)


    },[])

    if(carga==true){

        return(
            <>
            <h1>Estoy cargando ...</h1>
            </>
        )
    }else{

        return(
            <div className="row row-cols-1 row-cols-md-4 g-3 mt-5 justify-content-center ">
                 {
                    canciones.map(function(cancion){
                        return(
                            <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                        <img src={cancion.album.images[0].url} className="img-fluid w-100 h-100" alt="foto"></img>
                                        <audio src={cancion.preview_url} className="w-100" controls="controls"></audio>
                                        <h1 className="text-center">{cancion.album.nombre}</h1>
                                </div>
                            </div>
                            </>

                        )
                    })
                 }
            </div>
        )

    }




   

    

   
}