import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

function ncard(val){
  return(
  <Card
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
  );

}
//console.log(Sdata[0].sname);
ReactDOM.render(
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series</h1>

   
   {Sdata.map(ncard)};
  </>,
  document.getElementById("root")
);
