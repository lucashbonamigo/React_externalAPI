import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

export const Pagination = (data: any) => {
    return (
        <>
            <div className="flex p-5 justify-center-safe">
                <div className="bg-gray-900 items-center-safe cursor-pointer mx-1 p-3 rounded-sm text-white">
                    <BiArrowFromRight />
                </div>
                <ol className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <li
                            className="bg-gray-900 cursor-pointer mx-1 p-3 rounded-sm text-white"
                            key={i}
                        >
                            {i + 1}
                        </li>
                    ))}
                </ol>
                <div className="bg-gray-900 cursor-pointer mx-1 p-3 rounded-sm text-white">
                    <BiArrowFromLeft />
                </div>
            </div>
        </>
    );
}

export default Pagination;