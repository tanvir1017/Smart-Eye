import React from "react";
import dashboard from "../../../../Image/Dashboard.svg";

const DashChart = () => {
  return (
    <div>
      <h2 className="text-muted">Wellcome to dashboard.....</h2>
      <img className="img-fluid w-75" src={dashboard} alt="" />
    </div>
  );
};

export default DashChart;
