import './Integrantes.css'
import 'animate.css'
import WOW from 'wowjs'

import { useEffect } from "react";

export function Integrantes(){

    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
    }, [])

    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/Jesse_Huerta_(cropped).jpg?alt=media&token=f5513c40-39f8-4e1b-923d-91f91864e7dd" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInLeft" data-bs-toggle="collapse"             data-bs-target="#artista1">
            </img>

                </div>
                <div className="col-12 col-md-4 align-self-center border-start ms-5">
                    <h2>Jesse</h2>
                    <h3>Guitarrista, Pianista y corista</h3>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista1">
                <div className="card card-body">
                Jesse Eduardo Huerta Uecke, mejor conocido como Jesse Huerta, es un guitarrista, baterista, percusionista, productor, compositor y cantante mexicano. Actualmente es baterista, compositor y segunda voz del dúo pop latino Jesse & Joy, que conforma con su hermana menor Joy Huerta.​
                Nacimiento: 31 de diciembre de 1982 (edad 39 años), Ciudad de México, México
                Padres: Michelle Lee Uecke Miller, Eduardo Huerta
                </div>
            </div>





            <div className="row my-5 justify-content-center">

                 <div className="col-12 col-md-4 align-self-center border-end ms-5">
                    <h2>Joy</h2>
                    <h3>vocalista principal</h3>
                </div>

                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/joy.jpg?alt=media&token=3a133664-1cb4-4d62-9bc9-84bb03cf4bb2" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInRight" data-bs-toggle="collapse"             data-bs-target="#artista2">
                </img>
                </div>


            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista2">
                <div className="card card-body">
                Tirzah Joy Huerta Uecke, más conocida como Joy Huerta, es una cantautora compositora y guitarrista mexicana, conocida por ser la vocalista de Jesse & Joy, dúo que conforma con su hermano Jesse Huerta.​
                Nacimiento: 20 de junio de 1986 (edad 36 años), Ciudad de México, México
                Padres: Michelle Lee Uecke Miller, Eduardo Huerta
                </div>
            </div>


            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/pareja.jpg?alt=media&token=94262900-2d54-412c-8bd0-218bb0e78341" alt="foto1" className="img-fluid w-100 rounded-circle animate__animated animate__bounce wow animate__backInLeft" data-bs-toggle="collapse"             data-bs-target="#artista3">
            </img>

                </div>
                <div className="col-12 col-md-4 align-self-center border-start ms-5">
                    <h2>Pareja Jesse y joy</h2>
                    <h3>Compositores</h3>
                </div>
            </div>


            <div className="row mt-2">
                <div className="col-12"></div>
            </div>
            <div className="collapse" id="artista3">
                <div className="card card-body">
                Son dos hermanos nacidos en México. Jesse el 21 de Enero de 1982 y Joy el 20 de Junio de 1986. Desde pequeños, ambos empiezan a demostrar su gusto por la música, pero es en 2001 cuando deciden luchar por su sueño y comienzan a escribir canciones junto a su padre.
                </div>
            </div>

            
            
        </>
    )
}
