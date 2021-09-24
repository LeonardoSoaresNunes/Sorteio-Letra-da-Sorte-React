import React from 'react';


function Menu() {
    return (

        <div>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-md  navbar-dark bg-dark">

                    <a className="navbar-brand" href="Sage.com"><i class="fab fa-adversal"></i>&nbsp;SAGE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMainToggler"
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse " id="navbarMainToggler">
                        <div className="navbar-nav m-lg-auto">
                            <a className="nav-item nav-link" href="google">Home</a>
                            <a className="nav-item nav-link" href="google">Sobre</a>
                            <a className="nav-item nav-link" href="google">Blog</a>
                            <a className="nav-item nav-link" href="googele">Contato</a>
                            <a className="nav-item nav-link" href="googele">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    );
}

export default Menu;