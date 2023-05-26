import React, { useContext, useEffect} from "react";
import { DataContext } from "../contexts/DataContext";
import { Endpoints } from "../functions/Endpoints";
import Gridjsx from "../functions/Gridjsx";
function GridSection() {
  const {
    dataLoaded,
    setDataLoaded,
    setFetchedData,
    filters,
    filtersActive,
    dataNotNull,
    setDataNotNull,
  } = useContext(DataContext);

  useEffect(() => {
    const loadData = async () => {
      // Send the request to the PHP file
      await fetch(
        "http://localhost:3500/rest/index.php?endpoint=" +
          encodeURIComponent(Endpoints({ filters, filtersActive })),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the PHP file
          if (data.length === 0) {
            setDataNotNull(false);
            return;
          }
          setDataNotNull(true);
          setFetchedData(data);
          setDataLoaded(true);
        })
        .catch((error) => {
          // Handle any errors
          setDataLoaded(false);
          setDataNotNull(false);
          console.error("Api is not responding");
        });
    };
     loadData();
  }, [setDataLoaded, setFetchedData, setDataNotNull, filters, filtersActive]);
  
  return (
    <section className="grid-sec">
      <div className="inner-grd-sec">
        <h1 className="grid-heading">Capsules Data</h1>
        {/* if no result Found  then show text message*/}
        {dataNotNull ? (
          // Show loader until data is been fetched from the api
          dataLoaded ? (
            <Gridjsx />
          ) : (
            <p className="loader">Loading Data...</p>
          )
        ) : (
          <p className="loader">No Result Found</p>
        )}
      </div>
    </section>
  );
}

export default GridSection;
