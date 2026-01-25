import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

interface PaginationProps {
    currentPage: number | undefined;
    setPage: (page: number) => void;
}


export const Pagination = ({ currentPage, setPage }: PaginationProps) => {
    return (
        <>
            <div className="flex p-5 justify-center-safe">
                <div className="bg-gray-900 items-center-safe mx-1 rounded-sm text-white">
                    <button className="h-full w-full cursor-pointer p-3" onClick={() => setPage(1)}>
                        <BiArrowFromRight />
                    </button>
                </div>
                <ol className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li
                            key={i}
                            className={`bg-gray-900 mx-1 rounded-sm text-white
                            ${currentPage === i+1
                                    ? "bg-yellow-500 text-black font-bold"
                                    : "bg-gray-900 text-white hover:bg-gray-700"
                                }`}
                        >
                            <button className="cursor-pointer p-3" onClick={() => setPage(prev => prev + i)}> {currentPage + i}</button>
                        </li>
                    ))}
                </ol>
                <div className="bg-gray-900 mx-1 rounded-sm text-white">
                    <button className="h-full w-full cursor-pointer p-3" onClick={() => setPage(100)}>
                        <BiArrowFromLeft />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Pagination;