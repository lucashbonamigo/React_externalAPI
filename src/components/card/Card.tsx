
interface ICardParms{
    image: string,
    title: string,
    rate: number
}


export const Card = ({image, title, rate}: ICardParms) => {
    return (
        <>
            <div className="bg-gray-800 w-100 h-150 p-3 rounded-xl" >
                <div className="bg-gray-900 grid w-full h-full rounded-xl place-content-between p-3">
                    <div className="w-full">
                        <img className="size-100" src={image} alt="" />
                    </div>

                    <div className="w-full size-35 flex-col place-content-end">
                        <h2 className="py-3 text-white font-bold">{title}</h2>
                        <h6 className="py-3 text-white">{rate}</h6>
                        <input type="button" className="py-3 bg-yellow-500 bg-yellow-500 w-full p-3 rounded-xs hover:bg-yellow-700" value="Details"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;