import React from 'react';

const Card = ({data,handleClick}) => {
    return (
        <div
                key={data.id}
                className="card lg:w-[320px] rounded-lg bg-base-100 shadow-xl "
              >
                <figure><img className=" h-[210px] w-full" src={data.playerImage} alt="Shoes" /></figure>

                <div className="card-body pl-4 py-6">
                  <h2 className="text-xl font-semibold pb-1">
                    Name  :  {data.playerName}{" "}
                  </h2>
                  <h2 className="text-xl font-semibold pb-1">
                    Age   : {data.playerAge}
                  </h2>
                  <h2 className="text-xl font-semibold pb-1">
                    Country   : {data.country}
                  </h2>
                  <h2 className="text-xl font-semibold">
                    Salary   : ${data.playerCost}
                  </h2>
                  <div className="flex justify-center pt-5 pb-3">
                    <button onClick={() => handleClick(data)} className="px-7 py-2 rounded-lg bg-yellow-400 text-black text-lg">
                      Add This player
                    </button>
                  </div>
                </div>
              </div>
    );
};

export default Card;