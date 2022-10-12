export function Footer(){
    return(
        <>
            <footer className="container-fluid bg-dark text-white p-3 mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 text-center text-">
                        <h4>&copy; Karen zapata</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendiz SURA</h4>
                        <h4>2022</h4>
                    </div>
                    <div className="col-12 col-md-6 d-flex align-self-center border-start justify-content-center">
                        <a href="https://www.linkedin.com/in/karen-zapata-44b910252/">
                        <i className="bi bi-linkedin fs-1 text-white p-5"></i>
                        </a>
                        <a href="https://github.com/karenzapata06">
                        <i className="bi bi-github fs-1 text-white p-5"></i>
                        </a>

                    </div>
                </div>
            </footer>
        </>
    )
}