import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AreaSelector from './pages/AreaSelector';
import WeatherCity from './pages/WeatherCity';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AreaSelector />}/>
        <Route path='/weathercity' element={<WeatherCity />}/>
      </Routes>
    </>
  );
}

export default App;
