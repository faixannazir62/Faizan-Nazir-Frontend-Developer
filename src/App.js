import React, { useState } from "react";
import "./styles/App.css";
import Header from "./sections/Header";
import TopBannerSection from "./sections/TopBannerSection";
import FormSection from "./sections/FormSection";
import GridSection from "./sections/GridSection";
import { DataContext } from "./contexts/DataContext";
function App() {
  //gobal varibles
  const [dataLoaded, setDataLoaded] = useState(false);
  const [fetcheddata, setFetchedData] = useState([]);
  // filter are active or not
  const [filtersActive, SetFiltersActive] = useState(false);
  //filter varible
  const [filters, setFilters] = useState({});
  return (
    <>
      {/* Header component */}
      <Header />
      {/* Mian content starts form here */}
      <main>
        {/* Top banner section component */}
        <TopBannerSection />

        {/* sending data to child components using context API*/}
        <DataContext.Provider
          value={{
            dataLoaded,
            setDataLoaded,
            fetcheddata,
            setFetchedData,
            filters,
            setFilters,
            filtersActive,
            SetFiltersActive,
          }}
        >
          {/* form section section component */}
          <FormSection />
          {/* Grid section section component */}
          <GridSection />
        </DataContext.Provider>
      </main>
    </>
  );
}

export default App;
