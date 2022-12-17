import React, { useEffect, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { setLocationModal } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import "../../../css/navlocation.css";

function NavLocation() {
  const [locationModal, setLocationModalWithin] = useState("false");
  const state = useSelector((state) => state.user);

  const handleLocation = () => {
    store.dispatch(setLocationModal("on"));
    setLocationModalWithin(true);
  };
  useEffect(() => {
    if (locationModal) {
      window.addEventListener("click", closeLocationModal);
    }
    return () => {
      window.removeEventListener("click", closeLocationModal);
    };
  }, [locationModal]);

  const closeLocationModal = (e) => {
    const modal = document.getElementById("header-location__modal");
    if (e.target.contains(modal)) {
      store.dispatch(setLocationModal("off"));
      setLocationModalWithin(false);
    }
  };
  return (
    <div className="nav-location" tabIndex={0} onClick={handleLocation}>
      <div className="location-icon">
        <LocationOnOutlinedIcon sx={{ fontSize: 22 }} />
      </div>
      <div className="location-details">
        <p>Deliver to</p>
        <p>Nigeria</p>
      </div>
    </div>
  );
}

export default NavLocation;
