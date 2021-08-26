import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import classes from './SideBar.module.css';
import RecipeList from '../Recipe/RecipeList';
import axios from 'axios';
import Loading from '../../UI/Loading';

function SideBar() {
    const { recipeTitle } = useParams();
    const [noRedultFound, setNoResultFound] = useState();
    const [fetchRecipeList, setFetchRecipeList] = useState({
        data: []
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchRandomRecipe = async (query) => {
            setIsLoading(true);
            setFetchRecipeList({
                data: []
            });

            const options = {
                method: 'GET',
                url: `https://tasty.p.rapidapi.com/recipes/list`,
                params: { from: '0', size: '15', tags: 'under_30_minutes', q: query },
                headers: {
                    'x-rapidapi-host': 'tasty.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                }
            };

            axios.request(options).then(function (response) {
                setIsLoading(false);
                setNoResultFound(null);
                setFetchRecipeList({
                    data: response.data.results
                });
                
                if (response.data.results.length === 0) {
                    setNoResultFound('“No results found”');
                }

                const transformedData = response.data.results.map(food => (
                    {
                        id: food.id,
                        name: food.name,
                        thumbnail_url: food.thumbnail_url
                    }
                ));

                fetch(`${process.env.REACT_APP_STORED_DATA}/${recipeTitle}.json`, {
                    method: 'POST',
                    body: JSON.stringify(transformedData),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }).catch(function (error) {
                console.error(error.message);
                setIsLoading(false);
                throw new Error('something went wrong!')
            });
        }

        const fetchStoredData = async () => {
            setIsLoading(true);
            setNoResultFound(null);
            setFetchRecipeList({ data: [] });

            const response = await fetch(`${process.env.REACT_APP_STORED_DATA}/.json`);
            const data = await response.json();
            let storeData;

            Object.keys(data).map(function (key) {
                if (key.includes(recipeTitle)) {
                    const matchedData = data[key];
                    
                    Object.keys(matchedData).map((item)=> {
                        storeData = storeData ? [...storeData, ...matchedData[item]] : [...matchedData[item]];
                        setFetchRecipeList({data: [...storeData]});
                        setIsLoading(false);
                        return '';
                    });
                }
                return '';
            });
            const res = await storeData;
            
            if (!res) {
                fetchRandomRecipe(recipeTitle);
                console.log('fetching');
            }
            
        }
        fetchStoredData();

    }, [recipeTitle])

    return (
        <div className={classes.SideBar}>
            {isLoading && <Loading />}
            {fetchRecipeList.data !== [] && !noRedultFound && <RecipeList search={recipeTitle ? recipeTitle : ''} fetchedRecipes={fetchRecipeList.data} />}
            {noRedultFound && <h2 className={classes.NoResultFound}>{noRedultFound}</h2>}
        </div>
    );
}

export default React.memo(SideBar);