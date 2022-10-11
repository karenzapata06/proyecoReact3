export async function servicioSpoty(){

    const URI= "https://api.spotify.com/v1/artists/57ekbx9PSS4ORs5wTZMSYp/top-tracks?market=US"
    
    const TOKEN=" Bearer BQDnbPdZaFx9wM55c_uAJDVlos03U0oQa7dZG7ku2MGavA4gpDqmSEXZHjwOeu7HVVEhGmfMwaYVR_93yKx-SngtQoJmR6QNHmeyjrvihDODm8VlT0ECQeXv58z_XfsRpaQLkevv-kxGUY9QNzzDiaX4rM29IL_pPk3DHdkA5PayyAV-d0mXVIwOe5fFhlNXwCU"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

     let  respuesta=await fetch(URI,PETICION)
     let datos=await respuesta.json()

     return datos 

}