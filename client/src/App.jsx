import { Landing } from "./pages/landing";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <div>
      <Router>
          <Routes>
            <Route exact path='/' element={<Landing />} />
      
          </Routes>
      </Router>
    </div>
  );
};

export default App;
