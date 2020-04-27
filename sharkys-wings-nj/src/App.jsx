import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import BarMenu from "./components/BarMenu"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
<Header/>
<BarMenu/>
<Footer/>
    </div>
  );
}

export default App;
