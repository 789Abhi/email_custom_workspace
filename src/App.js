import React from "react";
import Header from "./components/Header";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";

function App() {
  return (
    <Router>
      <div className="app h-[100vh]">
        <Header />
        <div className="app__body flex h-[100vh] ">
          <Sidebar />
          <Routes>
            <Route path="/email" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <SendMail/>
      </div>
    </Router>
  );
}

export default App;
