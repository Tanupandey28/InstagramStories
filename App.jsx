import React from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-body">
        <div className="feed-container">
          <Stories />
          <Feed />
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default App;
