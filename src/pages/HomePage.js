import Logo from '../Components/UI/Logo';
import SearchBar from '../Components/UI/SearchBar';
import classes from './HomePage.module.css';

function HomePage() {

    return (
        <div className={classes.HomePage}>
            <Logo className={classes.Logo} />
            <h1 className={classes.Heading}><span>Welcome</span> <span>To</span> <span>The</span> <span>Foody</span> <span>Bar</span></h1>
            
            <SearchBar
                className={classes.SearchBar}
                inputClassName={classes.SearchBarInput}
            />
        </div>
    );
}

export default HomePage;