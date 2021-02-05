import React from 'react';
import '../RecipeBookEntries/RecipeBookEntries.css';

function RecipeBookEntries(props) {

    return (
      <>
        <div className="entry-container">
          <div>
            <h2>{props.recipeEntry.name}</h2>
            <span className='category'>{props.recipeEntry.category}</span>
          </div>
          <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=100:*" alt="food"/>

        </div>
      </>
    )

}

export default RecipeBookEntries;