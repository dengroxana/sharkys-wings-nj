import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import BarMenu from "./components/BarMenu";
import Banner from "./components/banner"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <BarMenu/>
    </div>
  );
}

export default App;
