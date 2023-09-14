/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa';

const Cart = ({ add,total,remaining,handleRemove,handleSingleRemove}) => {
  

  
  return (
    <div className=" md:w-[400px] mx-auto lg:w-[320px]">
      <h2 className=" text-center md:text-center lg:text-left bg-gray-300 p-3 lg:text-xl text-xl md:text-2xl font-semibold mb-3 rounded-md">
        Total Budget : $30000
      </h2>
      <div className=" bg-green-500 text-white lg:text-xl text-xl md:text-2xl mb-4 mt-4 p-5 rounded-lg ">
        <h2 className="   text-white font-semibold pb-2">Remaining : ${remaining}</h2>
        <h2 className=" text-white font-semibold">Total Cost : ${total}</h2>
      </div>

      <div className="bg-gray-400 p-4 rounded-md">
        <h2 className=" text-center pt-4  pb-4 text-xl md:text-2xl lg:text-xl font-semibold rounded-md">
          Player Added : {add.length}
        </h2>

        {add.map((item) => (
          <div key={item.id} className=" flex items-center justify-between bg-white p-3 mb-3 rounded-md  font-semibold">
            <p className=" text-lg">{item.playerName}</p>
            <button onClick={() =>handleSingleRemove(item.id)}   className=" px-3 py-2 text-base bg-red-500 rounded-md text-white">close</button>
          </div>
        ))}
      </div>
      <div className={add.length > 0 ? "flex justify-center" : "hidden"  }>
      <button onClick={handleRemove} className=" px-5 py-2 text-lg bg-red-600 text-white rounded-md mt-6">Clear All</button>
      </div>
      
    </div>
  );
};

export default Cart;
