"use client";
import react, { useState, useEffect } from "react";
import axios from "axios";
import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
import { useSearchParams } from "next/navigation";
const Books = () => {
  const [book, setBook] = useState([
    {
      b_id: 1,
      b_title: "The Great Gatsby",
      b_price: 500,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 8690,
      b_date: "2024-07-22",
    },
    {
      b_id: 2,
      b_title: "Business Secrets",
      b_price: 400,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 876,
      b_date: "2024-08-22",
    },
    {
      b_id: 3,
      b_title: "Social Science 101",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 123,
      b_date: "2023-04-29",
    },
    {
      b_id: 4,
      b_title: "Mind Over Matter",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "心理勵志",
      b_sales: 4537,
      b_date: "2022-02-22",
    },
    {
      b_id: 5,
      b_title: "Learn a New Language",
      b_price: 200,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 5,
      b_date: "2022-12-25",
    },
  ]);
  const searchParams = useSearchParams();
  const b_genre = searchParams.get("b_genre");
  const [tag, setTag] = useState();

  const getdata = async () => {
    let newdata = books;
    if (b_genre) {
      newdata = newdata.filter((v) => v.b_genre === b_genre);
    }
    if (tag === "hot") {
      newdata = newdata.sort((a, b) => b.b_sales - a.b_sales);
    } else if (tag === "new") {
      newdata = newdata.sort((a, b) => b.b_date - a.b_date);
    } else if (tag === "upprice") {
      newdata = newdata.sort((a, b) => b.b_price - a.b_price);
    } else if (tag === "downprice") {
      newdata = newdata.sort((a, b) => a.b_price - b.b_price);
    }
    setBooks(newdata);
  };
  useEffect(() => {
    getdata();
  }, [b_genre, tag]);

  return (
    <div className="l-book">
      <SortBook />
      <AllBook book={book} setTag={setTag} />
    </div>
  );
};

export default Books;
