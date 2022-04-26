import './reset.css';
import classes from './App.module.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import Frame from "./components/Frame/Frame";

function App() {
  return (
    <div className={classes.app}>
        <Frame />
        <div className={classes.content}>
            <Header />
            <HomePage />
            <Footer />
        </div>
        <Frame />
    </div>
  );
}

export default App;
