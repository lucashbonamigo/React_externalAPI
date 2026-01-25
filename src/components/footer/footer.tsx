import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-white text-xl font-bold mb-2">
            🎬 MovieApp
          </h2>
          <p className="text-sm">
            Explore filmes, descubra avaliações e veja detalhes completos.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              {/* <Link to="/" className="hover:text-white transition"> */}
                Home
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/favorites" className="hover:text-white transition"> */}
                Favoritos
              {/* </Link> */}
            </li>
            <li>
              {/* <Link to="/about" className="hover:text-white transition"> */}
                Sobre
              {/* </Link> */}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Conecte-se
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/lucashbonamigo"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/luckkkkas/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-800">
        <p>
          © {new Date().getFullYear()} • Dados fornecidos por
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className="text-white ml-1 hover:underline"
          >
            TMDB
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
