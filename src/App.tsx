import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import { CounterProvider } from "./provider/Context";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Button onClick={() => alert("clicked")} text="Click me" />
      </CounterProvider>
      {/* <Button onClick={() => alert("clicked")} text="Demonstarting components and props" /> */}
    </div>
  );
}

export default App;
