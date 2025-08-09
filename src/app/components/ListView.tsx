"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function ListView({ list, removeFromList }: { list: number[]; removeFromList: (value: number) => void }) {
  
  const [isAscending, setIsAscending] = useState(false);

  const ChangeSortOrder = () => {
    setIsAscending(!isAscending);
  };

  // Sorting the list
  const sortedList = [...list].sort((firstNumber, secondNumber) => {
    if (isAscending) {
      return firstNumber - secondNumber;   // Ascending order
    } else {
      return secondNumber - firstNumber;   // Descending order
    }
  });

  // Delete a specific number from the list
  const deleteNumber = (numberToDelete) => {
    removeFromList((previousList) => 
      previousList.filter((item) => item !== numberToDelete)
    );
  };

  // Clear the entire list
  const clearAllNumbers = () => {
    removeFromList([]);
  };

  // Ranking the numbers in the list
  const createRankingMap = (numbers) => {
    // Get unique numbers and sort them from highest to lowest
    const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);
    
    // Map each number with its rank
    const rankingMap = {};
    uniqueNumbers.forEach((number, index) => {
      rankingMap[number] = index + 1; 
    });
    
    return rankingMap;
  };

  // get the rank map
  const numberRanks = createRankingMap(list);

  

  return (
    <div className="list_container">
      
      <div className="list_header">
        <p className="list_heading">Numbers List</p>
        <div className="list_buttons">
          <button className="reset_btn" onClick={clearAllNumbers}>
            Reset
          </button>
          <button className="sort_btn" onClick={ChangeSortOrder}>
            Sort 
            <img src="/filter_list.png" alt="sort icon" />
          </button>
        </div>
      </div>

      
      <div className="list_content">
        {sortedList.map((number, index) => (
          <div key={`${number}-${index}`} className="list_item">
            <div className="list_number">
              {number} <span className="rank"> # {numberRanks[number]}</span>
            </div>
            <div>
              <button
                className="delete_btn"
                onClick={() => deleteNumber(number)}
              >
                <FontAwesomeIcon icon={faXmark} className="delete_icon"/>

              </button>
            </div>
          </div>
        ))}
        <div className="list_total">
            Total Numbers: {sortedList.length}
        </div>
      </div>
    </div>
  );

}
