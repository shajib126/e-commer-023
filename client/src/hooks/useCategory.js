import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("https://e-commer-023.vercel.app/api/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  return categories;
}
