import './Home.css'
import {SubMenu} from '../SubMenu/SubMenu.js'
import {Footer} from '../Footer/Footer.js'
export function Home(){

    let descripcionBanda="JESSE Y JOY Jesse & Joy son un dúo de música pop originario de México, formado en 2005 por los hermanos Jesse (1982)​ y Joy Huerta Uecke (1986) en la Ciudad de México. ​​ El dúo ha lanzado seis álbumes de estudio, dos álbumes en vivo y un EP en Warner Music Latina Origen: Ciudad de México, México actividad: 2005-presente  Discográfica(s): Warner Music Latina"
   

    return(
        <>
        
        <div className="banner">
        </div>

        <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">JESSE Y JOY </h1>
                        <p className='text-center'>{descripcionBanda}</p>
                    </div>

                </div>
        </div>
        
        <div>
        <SubMenu></SubMenu>
        </div>

        <div>
        <Footer></Footer>
        </div>

            
       
        

        

        </>
    )
}
