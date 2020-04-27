import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import BarMenu from "./components/BarMenu"
import HappyHour from "./components/HappyHour"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HappyHour />
      <BarMenu />
    </div>
  );
}

export default App;
