import React from "react";
import "../../../css/locationmodal.css";
import { useSelector } from "react-redux";

function LocationModal() {
  var modalStatus = useSelector((state) => state.user.locationModal);
  const handleScroll = () => {
    console.log("You scrolled");
    return null;
  };
  return (
    <div>
      {modalStatus && (
        <div
          id="header-location__modal"
          className="header-location__modal"
          onScroll={handleScroll}
        >
          <div className="header-location__modal-main">
            <div className="modalheader">
              <p>Change your location</p>
            </div>
            <div className="modalcontent">
              <p>
                Delivery options and delivery speeds may vary for different
                locations
              </p>
              <button className="sign-in banner__sign-in">
                Sign in to update your location
              </button>
            </div>
            <div className="modalfooter">
              <button className="banner__sign-in">Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LocationModal;
