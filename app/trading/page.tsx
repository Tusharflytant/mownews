import { Metadata } from "next";
import Trading from "./Trading";

export const metadata : Metadata = {
    title: "Trading",
  };

const trading = () => {
  return (
    <div>
      <Trading/>
    </div>
  )
}

export default trading

