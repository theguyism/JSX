import React from "react";

function box(){
const colors = ['red', 'blue', 'green', 'purple', 'pink']
const myNewColor = Math.floor(Math.random() * 5);
const font = Math.floor(Math.random() * 41) + 20;
const keepFont = {
    fontSize: font
};

const keep = {
    border: "1px solid black", 
    height: "300px", 
    width: "300px", 
    margin: "80px",
    background: colors[myNewColor]
};


return (
    <div style = {keep}>
    <span style = {keepFont}>Random box</span>
    </div>
)
}

export default box;




