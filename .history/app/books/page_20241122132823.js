"use client";
import react, { useState, useEffect } from "react";
import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
import { useClick } from "@/hook/click-context";
const Books = () => {
  const { click, getclickdata } = useClick();

  const [tag, setTag] = useState();

  useEffect(() => {
    getclickdata(tag);
  }, [tag]);

  return (
    <div className="l-book">
      <SortBook />
      <AllBook setTag={setTag} />
    </div>
  );
};

export default Books;
