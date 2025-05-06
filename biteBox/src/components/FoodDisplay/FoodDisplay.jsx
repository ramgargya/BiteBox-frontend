import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({category, searchText}) => {


  const { foodList } = useContext(StoreContext);
  const filteredFoods = foodList.filter(food => (
    food.category === category || category === "All") && 
    food.name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="container">
      <div className="row">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <FoodItem key={index} 
                      name={food.name}
                      description={food.description}
                      id={food.id}
                      imageUrl={food.imageUrl}
                      price={food.price}/>
          ))
        ) : (
          <div className="text-center mt-4">
            <h4 className="text-center">No Food Items Available</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
