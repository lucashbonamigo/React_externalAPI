import { useParams } from "react-router-dom";


export const Movie = () => {
    const { id } = useParams();
    
    return (
        <>
            <p>Movie {id}</p>
        </>
    )
}

export default Movie;