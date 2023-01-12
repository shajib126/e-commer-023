import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  return categories;
}
