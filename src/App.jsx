import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen">
        <Todo />
      </div>
    </>
  );
}

export default App;
