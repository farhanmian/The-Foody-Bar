import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../UI/Logo';
import classes from './NavigationBar.module.css';
import SearchBar from '../UI/SearchBar';

function NavigationBar() {
    
    return (
        <div className={classes.NavigationBar}>
            <Link to="/"> <Logo className={classes.Logo} /> </Link>

            <SearchBar
                inputClassName={classes['NavigationBar-SearchInput']}
                placeholder="Find a Recipe"
            />
            
            <span/>
        </div>
    );
}

export default NavigationBar;