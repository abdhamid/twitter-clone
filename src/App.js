import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import './App.css'
import Widgets from "./Widget";
import Trends from "./Trends";

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <Feed />
            <Widgets />
            {/* <Trends /> */}
        </div>
    )
}

export default App;