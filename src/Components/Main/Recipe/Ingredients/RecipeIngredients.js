import React from 'react';

function RecipeIngredients(props) {

    if(props.ingredients === undefined) {
        return null ;
    }

    return (
        <div className={props.className} >
            <h2>Ingredients</h2>

            <ul>
                {props.ingredients.map(ingredients => {
                    return ingredients.components.map(ingredients => <li key={ingredients.position} >{ingredients.position} :  {ingredients.raw_text}</li>)
                })}

            </ul>
        </div>
    );
}

export default RecipeIngredients;