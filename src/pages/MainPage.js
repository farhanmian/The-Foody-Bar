import React from 'react';
import { Route } from 'react-router-dom';
import SideBar from '../Components/Main/SideBar/SideBar';
import RecipeDetails from '../Components/Main/Recipe/RecipeDetails';
import classes from './MainPage.module.css';

function MainPage(props) {
    const windowSize = window.innerWidth;

    return (
        <div className={classes.Main}>

            {windowSize < 900 ?
                <Route path="/recipe/:recipeTitle" exact >
                    <SideBar />
                </Route>
                :
                <Route path="/recipe/:recipeTitle" >
                    <SideBar />
                </Route>
            }

            <Route path="/recipe/:recipeTitle/:recipeId">
                <RecipeDetails />
            </Route>



        </div>
    );
}

export default MainPage;