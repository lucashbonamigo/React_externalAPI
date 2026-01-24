import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import Movie from "../Movie";


export const AppRoutes = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/movie/:id' element={<Movie />} />
        </Routes>
    </BrowserRouter>
    );

};

export default AppRoutes;