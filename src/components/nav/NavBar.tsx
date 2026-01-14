import logo from "../../../public/logo.jpg"

export const NavBar = () => {
    return (
        <>
            <nav className="flex place-content-between align-middle h-17 bg-black p-3">
                <div>
                    <img className="h-full" src={logo} alt="logotipo de uma locadora achado na internet" />
                </div>

                <div className="flex place-content-between border-white">
                    <input type="text" className="rounded-sm bg-white mr-1"/>
                    <input type="button" value="Pesquisar" className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-sm"/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;