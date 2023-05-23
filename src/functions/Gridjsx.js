import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import PopUpItem from "./PopUpItem";
function Gridjsx() {
  //varible for the popup
  const [popUpData, setPopUpData] = useState(null);
  // context gobal variable
  const { fetcheddata } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  //pagenation  data slice function per page 10 capcules
  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return fetcheddata.slice(startIndex, endIndex);
  };
  //pagenation function
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // open popup function and store data into Variable
  const handleItemClick = (item) => {
    //console.log("Clicked item:", item);
    setPopUpData(item);
  };
  // Close popup function
  const closePopup = () => {
    setPopUpData(null);
  };
  return (
    <div className="cap-and-pg-c">
      <div className="cap-data-sec">
        {/* fetch only 10 data item per page */}
        {paginateData().map((item) => (
          <div
            key={item.capsule_serial}
            className="capsules-data-bx"
            onClick={() => handleItemClick(item)}
          >
            <p className="item-info">
              <span>Capsule Serial</span> <span>{item.capsule_serial}</span>
            </p>
            <p className="item-info">
              <span> Capsule id</span> <span>{item.capsule_id}</span>
            </p>
            <p className="item-info">
              <span>Type</span> <span>{item.type}</span>
            </p>
            <p className="item-info">
              <span>Status</span> <span>{item.status}</span>
            </p>
          </div>
        ))}
      </div>

      {/* pagenation button*/}
      <div className="page-btns">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(fetcheddata.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
      {/* popup box */}
      {popUpData && <PopUpItem popUpData={popUpData} onClose={closePopup} />}
    </div>
  );
}

export default Gridjsx;
