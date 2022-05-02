import './reset.css';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Frame from "./components/Frame/Frame";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TopPage from "./components/TopPage/TopPage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";

function App() {
  return (
      <BrowserRouter>
          <div className={classes.app}>
              <Frame />
              <div className={classes.content}>
                  <Header />
                  {/*<HomePage />*/}
                  <Routes>
                      <Route path="/home" element={<HomePage />} />
                      <Route path="/top" element={<TopPage />} />
                      <Route path="/favourites" element={<FavouritesPage />} />
                  </Routes>
                  <Footer />
              </div>
              <Frame />
          </div>
      </BrowserRouter>
  );
}

export default App;
