import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Entry from "./pages/Entry.page.js";
import Login from "./pages/CreateData.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/Protectedroutes";
function App() {
  return (
    <div className="App">
      {/* <Loginpage /> */}
      {/* <div> */}
      {/* <Entry /> */}

      {/* </div> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
