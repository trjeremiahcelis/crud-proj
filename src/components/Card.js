import React from "react";

//to pass this or use this, you need to import the card in other js file then 
//if you decalre it as "Card" do this <Card name="" age="" gender="" />
const Card = ({ name, age, gender }) => {
    return (
        <div className="card-main">
            <h1>Users Card</h1>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
        </div>
    );
}

export default Card;