import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = ({handleClick}) => {
  const [display, setDisplay] = useState([]);
  

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setDisplay(data));
  }, []);


  return (
    <div >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {display.map(data => <Card handleClick={handleClick} key={data.id} data={data} />)}
      </div>
      
    </div>
  );
};

export default Cards;
