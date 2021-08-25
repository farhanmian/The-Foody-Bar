import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import classes from './RecipeDetails.module.css';
import Card from '../../UI/Card';
import RecipeIngredients from './Ingredients/RecipeIngredients';
import Steps from './Steps/Steps';
import Loading from '../../UI/Loading';
import YoutubeVideo from '../../../pages/YoutubeVideo';

function RecipeDetails() {
    const [isLoading, setIsLoading] = useState(false);
    const [recipeDetails, setRecipeDetails] = useState();

    const { recipeId } = useParams();




    useEffect(() => {
        const fetchRecipeDetails = (id) => {
            setIsLoading(true);
            const options = {
                method: 'GET',
                url: `https://tasty.p.rapidapi.com/recipes/detail`,
                params: { id: id },
                headers: {
                    'x-rapidapi-host': 'tasty.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY
                }
            };

            axios.request(options).then(function (response) {
                setIsLoading(false);
                const data = response.data;
                setRecipeDetails({
                    name: data.name,
                    id: data.id,
                    img: data.thumbnail_url,
                    instructions: data.instructions,
                    sections: data.sections

                });

            }).catch(function (error) {
                console.log(error);
                setIsLoading(false);
                throw new Error("Something went wrong");
            });
        };

        fetchRecipeDetails(recipeId);
    }, [recipeId])


    return (
        <Card className={classes.RecipeDetails}>
            {isLoading && <Loading />}
            {recipeDetails &&
                <Fragment>
                    <div style={{ backgroundImage: `linear-gradient(10deg, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.14) 41%), url(${recipeDetails.img})` }} className={classes['RecipeDetails-innerContainer']} >
                        <h1 >
                            {recipeDetails.name}
                        </h1>
                    </div>

                    <YoutubeVideo search={recipeDetails.name} />

                    <div className={classes['RecipeDetails-Ingredients_Steps']}>
                        <RecipeIngredients className={classes.RecipeDetailsIngredients} ingredients={recipeDetails.sections} />
                        <Steps className={classes.RecipeDetailsSteps} steps={recipeDetails.instructions} />
                    </div>
                </Fragment>
            }
        </Card>
    );
}

export default RecipeDetails;