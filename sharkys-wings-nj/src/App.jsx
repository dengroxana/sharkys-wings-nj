import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Banner from "./components/banner"
import Awards from "./components/Awards"
import HoursAddress from "./components/HoursAddress"
import HappyHour from "./components/HappyHour"
import BarMenu from "./components/BarMenu"
import Footer from "./components/Footer"
import Specials from "./components/Specials"


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Awards />
      <HoursAddress />
      <HappyHour />
      <Specials />
      <BarMenu />
      <Footer />
    </div>
  );
}

export default App;
