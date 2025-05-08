import React from 'react'
import { Metadata } from "next";
import Etfs from './Etfs';

export const metadata : Metadata = {
    title: "Auto Insurance",
  };

const etf = () => {
  return (
    <div>
      <Etfs/>
    </div>
  )
}

export default etf
