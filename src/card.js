import React from "react";

const Card = ({name, email, id}) => {
    // console.log(robots);    
  return (
    <div className = "dib bg-light-red br3 grow ma3 tc shadow-5">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};



export default Card;
