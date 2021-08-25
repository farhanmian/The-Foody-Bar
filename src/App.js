import { Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div className="App">

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/recipe/:recipeTitle" >
        <NavigationBar />
        <MainPage />
      </Route>


    </div>
  );
}

export default App;

