import { useState } from "react";
export const useKeywordList = () => {
  const [mykeywordArr, setMykeywordArr] = useState([
    {
      title: "Stocks",
      data: ["Twitter Inc", "NVIDIA Corp", "Amazon Inc"]
    },
    {
      title: "Commodities",
      data: ["WTI Crude Oil", "Brent Crude Oil", "Gold"]
    },
    {
      title: "Eexchange traded funds(eTFS)",
      data: ["USDCAD", "EURUSD", "EURGBP"]
    }
  ]);
  return mykeywordArr;
};
