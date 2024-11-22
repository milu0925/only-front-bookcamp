"use client";
import react, { useState, useEffect } from "react";
import axios from "axios";
import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
import { useParams } from "next/navigation";
const Books = () => {
  const [books, setBooks] = useState([]);
  const { b_genre } = useParams();
  const [tag, setTag] = useState();
  const getdata = async (tag) => {
    const data = await axios.get(`/api/book?b_genre=${b_genre}`);
    let newdata;

    if (tag === "hot") {
      newdata = data.data.sort((a, b) => b.b_sales - a.b_sales);
    } else if (tag === "new") {
      newdata = data.data.sort((a, b) => b.b_date - a.b_date);
    } else if (tag === "upprice") {
      newdata = data.data.sort((a, b) => b.b_price - a.b_price);
    } else if (tag === "downprice") {
      newdata = data.data.sort((a, b) => a.b_price - b.b_price);
    }
    setBooks(newdata);
  };

  return (
    <div className="l-book">
      <SortBook setTag={setTag} />
      <AllBook books={books} setTag={setTag} />
    </div>
  );
};

export default Books;
