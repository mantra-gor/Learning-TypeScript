import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import ProductInfo from "./Exercises/Exercise1";
import ShoppingList from "./Exercises/Exercise2";
import UserList from "./Exercises/Exercise3";
import TodoReducer from "./Exercises/Exercise4";
import Theme from "./Exercises/Exercise5";
import { ThemeProvider } from "./Context/ThemeContext";
import { LangProvider } from "./Context/LangContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LangProvider>
        <div style={{ padding: "20px" }}>
          <Greeting age={32} name="John Wick" />
          <ProductInfo />
          <ShoppingList />
          <UserList />
          <TodoReducer />
          <Theme />
        </div>
      </LangProvider>
    </ThemeProvider>
  );
};

export default App;
