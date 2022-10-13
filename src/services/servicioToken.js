export async function servicioToken(){

    //Uri
    const URI="https://accounts.spotify.com/api/token"

    //Datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=13307f68076a40568240e1f1e6e20529"
    const DATO3 ="client_id=a0349cae2d8344b6b36a00b5cbab0c65"

    //Petición
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }

    //Fetch
    let respuesta=await fetch (URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos
}
