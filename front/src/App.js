import './reset.css';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Frame from "./components/Frame/Frame";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TopPageContainer from "./components/TopPage/TopPageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import FavouritesPageContainer from "./components/FavouritesPage/FavouritesPageContainer";
import BeerCard from "./components/BeerCard/BeerCard";
import BeerCardContainer from "./components/BeerCard/BeerCardContainer";
import LoginPage from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
      <BrowserRouter>
          <div className={classes.app}>
              <Frame />
              <div className={classes.content}>
                  <HeaderContainer />
                  <div className={classes.routeContent}>
                      <Routes>
                          <Route path="/home" element={<HomePage />} />
                          <Route path="/top" element={<TopPageContainer />} />
                          <Route path="/favourites" element={<FavouritesPageContainer />} />
                          <Route path="/beer/:beerId" element={<BeerCardContainer />} />
                          <Route path="/login" element={<LoginPage />}/>
                          <Route path="/profile" element={<Profile/>}/>
                      </Routes>
                  </div>
                  <Footer />
              </div>
              <Frame />
          </div>
      </BrowserRouter>
  );
}

export default App;
