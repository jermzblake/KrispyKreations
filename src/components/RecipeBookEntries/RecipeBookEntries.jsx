import React from 'react';
import {Link} from 'react-router-dom';
import '../RecipeBookEntries/RecipeBookEntries.css';

function RecipeBookEntries(props) {

    return (
      <>
        <Link to={`/recipebook/${props.recipeEntry._id}`} >
          <div className="entry-container">
            <div>
              <h2>{props.recipeEntry.name}</h2>
              <span className='category'>{props.recipeEntry.category}</span>
            </div>
            <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=100:*" alt="food"/>

          </div>
        </Link>
      </>
    )

}

export default RecipeBookEntries;