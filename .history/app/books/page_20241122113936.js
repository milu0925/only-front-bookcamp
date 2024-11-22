"use client";
import react, { useState, useEffect } from "react";
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
      b_genre: "醫療保健",
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
      b_genre: "自然科普",
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
    {
      b_id: 6,
      b_title: "Advanced Programming",
      b_price: 600,
      b_img: "lover.png",
      b_genre: "程式設計",
      b_sales: 1500,
      b_date: "2024-01-15",
    },
    {
      b_id: 7,
      b_title: "Python Mastery",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "程式設計",
      b_sales: 2300,
      b_date: "2023-05-10",
    },
    {
      b_id: 8,
      b_title: "Graphic Design Fundamentals",
      b_price: 350,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 3000,
      b_date: "2024-06-18",
    },
    {
      b_id: 9,
      b_title: "Business Strategy for Entrepreneurs",
      b_price: 520,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 1200,
      b_date: "2023-11-30",
    },
    {
      b_id: 10,
      b_title: "Mental Health Awareness",
      b_price: 320,
      b_img: "lover.png",
      b_genre: "心理勵志",
      b_sales: 1500,
      b_date: "2024-02-05",
    },
    {
      b_id: 11,
      b_title: "Marketing Secrets",
      b_price: 500,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 1800,
      b_date: "2023-07-14",
    },
    {
      b_id: 12,
      b_title: "Philosophy for Beginners",
      b_price: 250,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 400,
      b_date: "2022-09-09",
    },
    {
      b_id: 13,
      b_title: "Financial Freedom",
      b_price: 600,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 950,
      b_date: "2024-04-11",
    },
    {
      b_id: 14,
      b_title: "Photography 101",
      b_price: 300,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 5000,
      b_date: "2024-03-20",
    },
    {
      b_id: 15,
      b_title: "AI for Beginners",
      b_price: 700,
      b_img: "lover.png",
      b_genre: "程式設計",
      b_sales: 1000,
      b_date: "2024-05-10",
    },
    {
      b_id: 16,
      b_title: "Data Science Essentials",
      b_price: 550,
      b_img: "lover.png",
      b_genre: "程式設計",
      b_sales: 1200,
      b_date: "2023-12-02",
    },
    {
      b_id: 17,
      b_title: "Leadership Skills",
      b_price: 420,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 1100,
      b_date: "2024-01-10",
    },
    {
      b_id: 18,
      b_title: "Self-Improvement Journey",
      b_price: 250,
      b_img: "lover.png",
      b_genre: "心理勵志",
      b_sales: 2300,
      b_date: "2022-10-12",
    },
    {
      b_id: 19,
      b_title: "Understanding Psychology",
      b_price: 350,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 1500,
      b_date: "2023-08-05",
    },
    {
      b_id: 20,
      b_title: "The Art of War",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "人文社科",
      b_sales: 3000,
      b_date: "2024-02-15",
    },
    {
      b_id: 21,
      b_title: "The Science of Happiness",
      b_price: 390,
      b_img: "lover.png",
      b_genre: "心理勵志",
      b_sales: 2400,
      b_date: "2023-11-22",
    },
    {
      b_id: 22,
      b_title: "Mastering Leadership",
      b_price: 520,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 850,
      b_date: "2024-03-05",
    },
    {
      b_id: 23,
      b_title: "Art of Creative Thinking",
      b_price: 450,
      b_img: "lover.png",
      b_genre: "藝術設計",
      b_sales: 2000,
      b_date: "2024-06-01",
    },
    {
      b_id: 24,
      b_title: "Understanding Human Behavior",
      b_price: 300,
      b_img: "lover.png",
      b_genre: "心理勵志",
      b_sales: 1300,
      b_date: "2023-10-25",
    },
    {
      b_id: 25,
      b_title: "The Digital Marketing Handbook",
      b_price: 650,
      b_img: "lover.png",
      b_genre: "商業理財",
      b_sales: 1750,
      b_date: "2024-07-01",
    },
  ]);
  const searchParams = useSearchParams();
  const b_genre = searchParams.get("b_genre");
  const [tag, setTag] = useState();

  const getdata = async () => {
    let newdata = book;
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
    setBook(newdata);
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
