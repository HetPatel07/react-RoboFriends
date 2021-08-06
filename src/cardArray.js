import React from "react";
import Card from "./card";

const CardArray = ({robots}) => {
    console.log(robots);

    // if(true){
    //   throw new Error("bhagg");
    // }
    const cardComponent = robots.map((users,i) => {
        return <Card name={robots[i].name} email={robots[i].email} id={robots[i].id} />
    });
    
  return cardComponent;
};

export default CardArray;
