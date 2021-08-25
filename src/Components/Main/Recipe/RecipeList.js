import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './RecipeList.module.css';



function RecipeList(props) {

    let recipelist = [];
    
    props.fetchedRecipes.map(recipe => {
        
        return recipelist.push(
            <Link to={`/recipe/${props.search}/${recipe.id}`} className={classes.RecipeItem} key={recipe.id}>
                <div className={classes['RecipeItem-imgContainer']}>
                    <img src={recipe.thumbnail_url} alt={recipe.name} />
                </div>
                <p className={classes.RecipeItemName}>{recipe.name.trim().length > 23 ? `${recipe.name.slice(0, 23)}...` : recipe.name}</p>

            </Link>
        );
    });


    return (
        <Fragment>
            <h2 className={classes.RecipeMenu}>Menu</h2>
            <ul className={classes['RecipeItems-ul']}>
                {recipelist}
            </ul>
        </Fragment>
    );
}

export default RecipeList;