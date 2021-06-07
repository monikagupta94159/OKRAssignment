import React, { useCallback, useEffect, useState } from "react";
import { getOKRs } from "./services/okr-data";
import Filters from "./components/filters";
import OkrsList from "./components/okrs-list";
import "./styles.scss";

const App = () => {
  const [okrsData, setOkrsData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    // Can't use async await here because of being inside a useEffect
    getOKRs().then(setOkrsData);
  }, []);
  useEffect(() => {});
  const onFilterSelect = useCallback(
    (e) => {
      setSelectedCategory(e.target.value);
    },
    [setSelectedCategory]
  );
  if (!okrsData) return "Loading...";
  const { okrs, categories } = okrsData;
  return (
    <div className="App">
      <header>OKR List</header>
      <hr />
      <Filters data={categories} onFilterSelect={onFilterSelect} />
      <OkrsList data={okrs} category={selectedCategory} />
    </div>
  );
};

export default App;
