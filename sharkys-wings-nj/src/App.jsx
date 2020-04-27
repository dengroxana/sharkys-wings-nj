import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Awards from "./components/Awards"
import HoursAddress from "./components/HoursAddress"
import HappyHour from "./components/HappyHour"
import BarMenu from "./components/BarMenu"
import Footer from "./components/Footer"


import './App.css';

function App() {
  return (
    <div className="App">
<Header/>
<Awards/>
<HoursAddress/>
<HappyHour />
<BarMenu/>
<Footer/>
    </div>
  );
}

export default App;
