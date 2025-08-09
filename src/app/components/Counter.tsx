"use client";
import { useState } from "react";

export default function Counter({ list, addToList }) {
    const [count, setCount] = useState(0);

    const handleAddToList = () => {
        if (list.includes(count)) {
        const confirmAdd = window.confirm(
            "This count is already in the list. Do you want to add it again?"
        );
        if (!confirmAdd) return;
        }
        addToList((prev) => [...prev, count]);
        setCount(0); 
    };


    const handleDecrement = () => {
        if (count > 0) {
        setCount(count - 1);
        } else {
        alert("Counter cannot be less than zero");
        }
    }    


    return (
        <div className="counter_component">
            <p className="counter_head">Counter</p>
            
            <div className="counter">
                <button onClick={handleDecrement} className="counter_buttons">-</button>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)} className="counter_buttons">+</button>
            </div>
            
            <button onClick={handleAddToList} className="add_btn">Add to List</button>
        </div>
    );
}
