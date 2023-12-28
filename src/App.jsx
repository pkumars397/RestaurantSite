import React from "react";
import Header from "./components/LayOut/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
