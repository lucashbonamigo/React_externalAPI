import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import type { ITMDBMovieResponse } from "../Interface/ITMDBMovieResponse";

export const Movie = () => {
  const { id } = useParams();
  const { httpConfig, data } = useAxios<ITMDBMovieResponse>();

  useEffect(() => {
    httpConfig("GET", "/3/movie/" + id + "?language=pt-BR");
  }, []);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <span className="animate-pulse text-lg">Carregando...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center p-6">
      <div className="max-w-6xl w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden">

        {data.backdrop_path && (
          <div
            className="h-72 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.4), rgba(17,24,39,1)), 
              url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
            }}
          />
        )}

        <div className="flex flex-col md:flex-row gap-8 p-8 -mt-28">
          
          <img
            className="rounded-xl shadow-2xl max-w-xs self-center md:self-start"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">
              {data.title}
              <span className="text-gray-400 text-xl ml-2">
                ({new Date(data.release_date).getFullYear()})
              </span>
            </h1>

            {data.original_title !== data.title && (
              <span className="text-gray-400 italic">
                Título original: {data.original_title}
              </span>
            )}

            {data.tagline && (
              <span className="italic text-gray-300">{data.tagline}</span>
            )}

            <p className="text-gray-200 leading-relaxed mt-4">
              {data.overview}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {data.runtime} min
              </span>

              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {data.adult ? "🔞 Adulto" : "👨‍👩‍👧 Livre"}
              </span>

              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Idioma: {data.original_language.toUpperCase()}
              </span>

              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                Status: {data.status}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-sm">
              <div>
                <span className="block text-gray-400">Nota</span>
                <span>{data.vote_average.toFixed(1)} ⭐</span>
              </div>

              <div>
                <span className="block text-gray-400">Votos</span>
                <span>{data.vote_count}</span>
              </div>

              <div>
                <span className="block text-gray-400">Popularidade</span>
                <span>{data.popularity.toFixed(1)}</span>
              </div>

              <div>
                <span className="block text-gray-400">País</span>
                <span>{data.origin_country.join(", ")}</span>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2 mt-6">
              {data.genres.map((gen) => (
                <li
                  key={gen.id}
                  className="px-3 py-1 bg-indigo-600/80 rounded-full text-sm"
                >
                  {gen.name}
                </li>
              ))}
            </ul>

            {data.production_companies.length > 0 && (
              <div className="mt-6">
                <span className="block text-gray-400 mb-1">
                  Produção
                </span>
                <p className="text-sm">
                  {data.production_companies.map(c => c.name).join(", ")}
                </p>
              </div>
            )}

            {data.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${data.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block w-fit px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Ver no IMDb
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
