import React from 'react'
import { Metadata } from "next";
import Finance from './Finance';

export const metadata : Metadata = {
    title: "Affordable Insurance",
  };

const finance = () => {
  return (
    <div>
      <Finance/>
    </div>
  )
}

export default finance
