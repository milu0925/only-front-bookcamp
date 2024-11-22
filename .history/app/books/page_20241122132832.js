"use client";
import react, { useState, useEffect } from "react";
import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
import { useClick } from "@/hook/click-context";
const Books = () => {
  return (
    <div className="l-book">
      <SortBook />
      <AllBook />
    </div>
  );
};

export default Books;
