import Header from "./Components/Header";

import Cards from "./Components/Cards";
import Cart from "./Components/Cart";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState([]);
  let [total, setTotal] = useState(0);
  let [remaining, setRemaining] = useState(3000);
  // const [singleRemove, setRemove] = useState();

  let totalBudget = 30000;

  const handleClick = (data) => {
    const newAdd = [...add, data];
    const commonFind = add.find((item) => item.id === data.id);
    let total = data.playerCost
    if (commonFind) {
      return alert("Already added");
    } else {
      add.forEach((item) => {
        total += item.playerCost;
      });

      remaining = 30000- total;
      if (total > totalBudget) {
        return alert("You are running out of budget");
      } else {
        
        setTotal(total);
        setRemaining(remaining);
        setAdd(newAdd);
        
      }
    }
  };

  const handleRemove = () => {
    
    setAdd([]);
    setTotal(0);
    setRemaining(3000);
  };

  const handleSingleRemove = (id) => {
   console.log(add)
    const removeOne = add.filter(item => item.id !== id);
    setAdd(removeOne);
    setTotal(0)
    setRemaining(3000)
  };

  return (
    <>
      <Header />
      <div className=" flex flex-col md:flex-col-reverse lg:flex-row gap-12 py-10 lg:px-16 px-6">
        <Cards handleClick={handleClick} />
        <Cart
          handleSingleRemove={handleSingleRemove}
          handleRemove={handleRemove}
          remaining={remaining}
          total={total}
          add={add}
        />
      </div>
    </>
  );
}

export default App;
