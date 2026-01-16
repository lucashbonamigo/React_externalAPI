import React from "react";
import logo from "../../../public/logo.jpg"

export const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="flex w-full h-17 bg-black  p-3">
                <div className="flex max-w-300  mx-auto">
                    <div>
                        <img className="h-full" src={logo} alt="logotipo de uma locadora achado na internet" />
                    </div>

                    <div className="flex place-content-between border-white">
                        <input type="text" className="rounded-sm bg-white mr-1" />
                        <input type="button" value="Pesquisar" className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-sm" />
                    </div>

                </div>
            </nav>
        </React.Fragment>
    );
}

export default NavBar;