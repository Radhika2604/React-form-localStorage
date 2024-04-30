import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Tab1 /> } />
        <Route path="/tab2" exact element={<Tab2 />} />
        <Route path="/tab3" exact element={<Tab3 />} />
      </Routes>
    </div>
  );
}

export default App;
