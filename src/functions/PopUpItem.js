import React from "react";
const PopUpItem = ({ popUpData, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="btn-bx">
          <button onClick={onClose} className="popup-close-btn">
            X
          </button>
        </div>

        <div key={popUpData.capsule_serial} className="cap-all-data">
          <p className="item-data">
            <span>Capsule Id</span>
            <span>{popUpData.capsule_id}</span>
          </p>
          <p className="item-data">
            <span>Capsule Serial</span>
            <span>{popUpData.capsule_serial}</span>
          </p>
          <p className="item-data">
            <span>Details</span>
            <span>{popUpData.details}</span>
          </p>
          <p className="item-data">
            <span>Landings</span>
            <span>{popUpData.landings}</span>
          </p>

          <p className="item-data">
            <span>Original Launch</span>
            <span>{popUpData.original_launch}</span>
          </p>
          <p className="item-data">
            <span>Original Launch Unix</span>
            <span>{popUpData.original_launch_unix}</span>
          </p>
          <p className="item-data">
            <span>Reuse Count</span>
            <span>{popUpData.reuse_count}</span>
          </p>
          <p className="item-data">
            <span>Status</span>
            <span>{popUpData.status}</span>
          </p>
          <p className="item-data">
            <span>Type</span>
            <span>{popUpData.type}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopUpItem;
