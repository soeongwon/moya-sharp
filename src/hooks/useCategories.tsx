import { useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([
    {
      code: "mp",
      name: "Major"
    },
    {
      code: "op",
      name: "Others"
    },
    {
      code: "r",
      name: "Research"
    },
    {
      code: "mp,op",
      name: "Major&Orhers"
    },
    {
      code: "mp,op,r",
      name: "ALL"
    }
  ]);
  return categories;
};
