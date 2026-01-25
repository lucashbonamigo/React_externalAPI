import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

interface PaginationProps {
    currentPage: number | undefined;
    setPage: (page: number) => void; // A tipagem correta
}

export const Pagination = ({ currentPage = 1, setPage }: PaginationProps) => {
    const startPage = Math.max(1, currentPage - 2);

    return (
        <>
            <div className="flex p-5 justify-center">
                <div className="bg-gray-900 items-center mx-1 rounded-sm text-white">
                    <button className="h-full w-full cursor-pointer p-3 hover:bg-gray-700" onClick={() => setPage(1)} title="Ir para o início">
                        <BiArrowFromRight />
                    </button>
                </div>

                <ol className="flex">
                    {Array.from({ length: 5 }).map((_, i) => {
                        const pageNumber = startPage + i;

                        return (
                            <li
                                key={pageNumber}
                                className={`mx-1 rounded-sm cursor-pointer transition-colors
                                    ${currentPage === pageNumber
                                        ? "bg-yellow-500 text-black font-bold border-yellow-500"
                                        : "bg-gray-900 text-white hover:bg-gray-700"
                                    }`}
                            >
                                <button 
                                    className="cursor-pointer p-3 w-full h-full" 
                                    onClick={() => setPage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        );
                    })}
                </ol>

                <div className="bg-gray-900 mx-1 rounded-sm text-white">
                    <button className="h-full w-full cursor-pointer p-3 hover:bg-gray-700" onClick={() => setPage(currentPage + 5)} title="Avançar 5 páginas">
                        <BiArrowFromLeft />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pagination;