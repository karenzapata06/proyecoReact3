export function Carrusel(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/jessc2.webp?alt=media&token=db5bef71-2fd8-47d7-9c16-0c40a2361637" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/c2.webp?alt=media&token=cce96ebd-dab4-4a95-be07-cc421e547953" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/spotify2-29277.appspot.com/o/c1.jpg?alt=media&token=b65f356e-1816-444e-8dbe-4e61cd1d4ce5" className="d-block w-100" alt="..."/>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
        
</div>
        </>
    )
}