import { useEffect, useState } from "react";
import logo from "../../../public/logo.jpg";
import { useDispatch } from 'react-redux';
import { setMoviesList } from '../../redux/actions';
import useAxios from "../../hooks/useAxios"; 

export const NavBar = () => {
    const [find, setFind] = useState("");
    const dispatch = useDispatch();

    const { httpConfig, data, loading } = useAxios<any>();

    const searchMovie = () => {
        httpConfig(`/3/search/movie?query=${find}&language=pt-BR`);
    };

    useEffect(() => {
        if (data) {
            console.log("Dados recebidos, enviando para o Redux:", data);
            dispatch(setMoviesList(data));
        }
    }, [data, dispatch]);

    return (
        <nav className="flex w-full h-17 bg-black p-3">
            <div className="flex max-w-300 mx-auto">
                <div>
                    <img className="h-full" src={logo} alt="logo" />
                </div>

                <div className="flex place-content-between border-white">
                    <input 
                        type="text" 
                        onChange={(e) => setFind(e.target.value)} 
                        className="rounded-sm bg-white mr-1 pl-1" 
                    />
                    <input 
                        type="button" 
                        onClick={() => searchMovie()} 
                        value={loading ? "Carregando..." : "Pesquisar"} 
                        className="bg-yellow-500 hover:bg-yellow-700 p-2 rounded-sm cursor-pointer" 
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;