"use client";
import react, { useState, useEffect } from "react";
import axios from "axios";
import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
import { useSearchParams } from "next/navigation";
const Books = () => {
  const [books, setBooks] = useState([]);
  const searchParams = useSearchParams();
  const b_genre = searchParams.get("b_genre");
  const [tag, setTag] = useState();

  console.log(searchParams, "2");
  console.log(b_genre, "1");

  const getdata = async () => {
    const data = await axios.get(`/api/book?b_genre=${b_genre}`);
    console.log(data, "前端抓到ㄌㄇ");

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
  useEffect(() => {
    getdata();
  }, [b_genre, tag]);

  return (
    <div className="l-book">
      <SortBook />
      <AllBook books={books} setTag={setTag} />
    </div>
  );
};

export default Books;