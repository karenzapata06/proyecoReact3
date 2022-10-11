import { servicioSpoty } from "../services/servicioSpoty.js"
import { useState } from "react"

export function Albumes(){

    //Declarando mi primer useState un useState es un metodo de react 
    
    const[canciones,setCanciones]=useState(null)


    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)

    

    return(
        <>
        <h2>HOLA ME LLAMO ALBUMES Y SOY UN COMPONENTE</h2>
        </>
    )
}