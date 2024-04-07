import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { authApi } from "../../api/authApi";
import apiCaller from "../../api/apiCaller";

export default function Dashboard() {
  const location = useLocation();
  const getDetails = async () => {
    const response = await apiCaller({
      request: authApi.getDetails(location.state.id),
      errorHandler: (error) => {
        console.log("Fail: ", error);
      },
    });

    if (response) {
      console.log(response);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  return <div>Dashboard</div>;
}
