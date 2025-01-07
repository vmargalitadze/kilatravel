import { getAllTours } from "@/utils/actions";
import React from "react";
import Slider from "./Slider";

async function Helper() {
  const tours = await getAllTours();
 

  return <Slider tours={tours} />;
}

export default Helper;

