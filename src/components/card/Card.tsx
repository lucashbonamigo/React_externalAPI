import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { MdOutlineStarRate } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface ICardParms{
    image: string,
    title?: string,
    rate?: number,
    id: number
}


export const Card = ({image, title, rate, id}: ICardParms) => {
    const Navigate = useNavigate();

    return (
        <>
            <div className="bg-gray-800 w-100 h-150 p-3 m-5 rounded-xl" >
                <div className="bg-gray-900 grid w-full h-full rounded-xl place-content-between p-3">
                    <div className="w-full">
                        <img className="size-100" src={image} alt="banner of movie" />
                    </div>

                    <div className="w-full size-35 flex-col place-content-end">
                        <h2 className="py-3 text-white font-bold text-nowrap">{title}</h2>
                        <h6 className="py-3 flex align-middle text-white"><MdOutlineStarRate className="text-yellow-500"/>{" "+rate}</h6>
                        <input 
                            type="button" 
                            className="cursor-pointer py-3 bg-yellow-500 bg-yellow-500 w-full p-3 rounded-xs hover:bg-yellow-700" 
                            value="Details"
                            onClick={()=> Navigate('/movie/'+id)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;