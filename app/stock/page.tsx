import React from 'react'
import { Metadata } from "next";
import Stock from './Stock';

export const metadata : Metadata = {
    title: "Stock",
  };

const stock = () => {
  return (
    <div>
      <Stock/>
    </div>
  )
}

export default stock
