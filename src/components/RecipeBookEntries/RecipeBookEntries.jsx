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
            <img src={props.recipeEntry.image || "https://cdn1.vectorstock.com/i/thumb-large/49/10/cartoon-dachshund-chef-with-a-spoon-vector-19784910.jpg"}  alt="food"/>

          </div>
        </Link>
      </>
    )

}

export default RecipeBookEntries;