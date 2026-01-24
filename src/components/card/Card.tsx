import { MdOutlineStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ICardParms {
  image: string;
  title?: string;
  rate?: number;
  id: number;
}

export const Card = ({ image, title, rate, id }: ICardParms) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="group cursor-pointer w-64 bg-gray-800 rounded-2xl p-4 shadow-lg 
                 hover:scale-105 hover:shadow-indigo-500/20 transition-all duration-300 m-2"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title || "Movie poster"}
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-300"
        />

        {rate && (
          <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
            <MdOutlineStarRate className="text-yellow-400" />
            <span className="text-white font-semibold">
              {rate.toFixed(1)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h2
          className="text-white font-semibold text-sm line-clamp-2"
          title={title}
        >
          {title || "Título indisponível"}
        </h2>

        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/movie/${id}`);
          }}
          className="mt-2 w-full py-2 rounded-lg bg-yellow-500 text-black font-semibold 
                     hover:bg-yellow-400 transition cursor-pointer"
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};

export default Card;
