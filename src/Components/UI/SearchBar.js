import React from 'react';
import { useRef } from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../Assets/Image/search_icon.png';
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {
    const searchInputRef = useRef();
    const history = useHistory();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        let enteredSearchValue = searchInputRef.current.value;
        if (enteredSearchValue.trim().length <= 1) {
            searchInputRef.current.focus();
            return;
        }
        enteredSearchValue = enteredSearchValue[0].toUpperCase() + enteredSearchValue.slice(1);
        history.push(`/recipe/${enteredSearchValue}`)

    };


    return (
        <form onSubmit={formSubmitHandler} className={`${classes.SearchBar} ${props.className}`}>
            <input
                ref={searchInputRef}
                className={`${classes.SearchInput} ${props.inputClassName}`}
                type="text"
                placeholder={props.placeholder}
            />

            <button className={`${classes.Button} ${props.btnClassName}`} type="submit">
                <img src={searchIcon} alt="search" />
            </button>
        </form>
    );
}

export default SearchBar;