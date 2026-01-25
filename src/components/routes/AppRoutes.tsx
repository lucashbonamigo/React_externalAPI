import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Movie from "../Movie";


export const AppRoutes = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Routes>
        </HashRouter>
    );

};

export default AppRoutes;