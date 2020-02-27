import React from "react";
import Statistic from "./statistic/Statistic.js";
import statisticaldata from "../statistical-data.json";



const App = () => {
  return (
    <Statistic statisticaldata = {statisticaldata}/>
  )

  };

export default App;






