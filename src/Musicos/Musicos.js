import {Footer} from "../Footer/Footer.js"
export function Musicos (){

    //Un arreglo de objetos es formato comun al consumir un api 
    let musicos=[
        {
            nombre:"Tilo Wolff",
            rol:"Composición, Programación, teclados, piano, trompeta, guitarra",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Tilo%20Wolff.jpg?alt=media&token=e2a6178b-c2bc-4bec-a886-68a994e7b451",
        },
        {
            nombre:"Anne Nurmi",
            rol:"Teclados",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/Anne%20Nurmi2.jpg?alt=media&token=d7953ccf-1686-40a7-8ce1-1e5e9450df61",
        },
        {
            nombre:"Tilo y Anne",
            rol:"Vocalistas",
            url:"https://firebasestorage.googleapis.com/v0/b/spotify-9b3a0.appspot.com/o/lacrimosaVocalistas.png?alt=media&token=7b5dcc22-bb08-4d4c-ae2f-3e4228ffc421",
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
            descripcion:"Jesse & Joy vuelven a hacer vibrar la tarima y a sus seguidores",
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
