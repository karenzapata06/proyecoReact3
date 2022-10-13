import {Footer} from "../Footer/Footer.js"
export function Musicos (){

    //Un arreglo de objetos es formato comun al consumir un api 
    let musicos=[
        {
            nombre:"Jesse Huerta",
            rol:"Composición, piano,guitarra",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/Jesse_Huerta_(cropped).jpg?alt=media&token=f5513c40-39f8-4e1b-923d-91f91864e7dd",
        },
        {
            nombre:"Joy Huerta",
            rol:"Vocalista Principal",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/joy.jpg?alt=media&token=3a133664-1cb4-4d62-9bc9-84bb03cf4bb2",
        }  
    ]

    let conciertoMemorables=[
        {
            fecha:"12 noviembre 2016",
            pais:"colombia",
            descripcion:"JESSE Y JOY CLICHES TOUR... Responsable: Bizarro Colombia SAS ... El dúo mexicano Jesse & Joy regresar a Colombia para presentar su Cliches .. Siendo ganadores del premio al mejor cantante y compositor a nivel mundial",
            Foto:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/colombia.jpg?alt=media&token=a274a1cd-948a-4f1c-a4db-a74f061b0280",
        },
        {
            fecha:"16 mayo 2018",
            pais:"España",
            descripcion:"Jesse & Joy vuelven a hacer vibrar la tarima y a sus seguidores El dominicano Juan Luis Guerra fue el invitado especial al concierto que Jesse & Joy ofrecieron la semana pasada en el Auditorio Nacional, México. Esto fue con motivo de la gira que los hermanos están haciendo «Un besito más Este fue uno de los mejores conciertos que tuvo Guerra, ya que junto a Jesse & Joy lograron animar a más de 10 mil personas que fueron a verlos y  escucharlos cantar canciones como: ¿Con quién se queda el perro?, No soy una de esas, Chocolate y muchas más, así lo informó Grupo Formula ",
            Foto:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/espa%C3%B1a.jpg?alt=media&token=72e09984-ee54-4460-83c9-368bedc004b5",
        },
        {
            fecha:"03 diciembre 2005",
            pais:"Merida",
            descripcion:"",
            Foto:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/jesse%20y%20joy%20merida.jpg?alt=media&token=dba9abe4-f647-42fd-a93a-c7cfaa78100a",
        },
        {
            fecha:"20 marzo 2019",
            pais:"Mexico",
            descripcion:"",
            Foto:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/mexico.jpg?alt=media&token=1e28287e-5085-4bb3-8f8f-dfeb74faa45c",
        },{
            fecha:"15 enero 2022",
            pais:"Queretaro",
            descripcion:"",
            Foto:"https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/queretaro.jpg?alt=media&token=18df0b64-3c9e-4b2b-89f1-11c73bd93ccd",
        },
        
    ]

    //si yo tengo un arreglo para recorrerlo y renderizarlo se hace una funcion que se llama MAP
//Mapeando un arreglo para hacer render 
//Tambien estan las funciones de flecha en vez de poner function ()=>{}
return(
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3 mt-5 justify-content-center ">
                 {
                    musicos.map(function(musico){
                        return(
                            <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                        <img src={musico.url} className="img-fluid w-100 h-100" alt="foto"></img>
                                        <h1 className="text-center">{musico.nombre}</h1>
                                        <h2 className="text-center">{musico.rol}</h2>
                                </div>
                            </div>
                            </>
                        )
                    })
                 }
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-3 mt-5 justify-content-center ">
                 {
                    conciertoMemorables.map(function(Concierto){
                        return(
                            <>
                            <div className="col mt-3">
                                <div className="card h-100">
                                        <img src={Concierto.Foto} className="img-fluid w-100 h-100" alt="foto"></img>
                                        <h1 className="text-center">{Concierto.pais}</h1>
                                        <h2 className="text-center">{Concierto.fecha}</h2>
                                        <p className="text-center">{Concierto.descripcion}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                 }
            </div>
        <Footer className="position-absolute"></Footer>
        </>
        
    )

}
