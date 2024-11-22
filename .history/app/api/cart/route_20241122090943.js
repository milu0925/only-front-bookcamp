import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const read = async (url) => {
  const filePath = path.join(process.cwd(), url);
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return data;
};

export const GET = async () => {
  try {
    const getdata = await read("public/json/cart.json");
    return NextResponse.json(getdata);
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};

export const POST = async (req) => {
  try {
    const getdata = await read("public/json/cart.json");
    const getbook = await read("public/json/book.json");

    const { id } = await req.json();
    const usercart = getdata.find((uid) => uid.u_id === id);

    console.log(usercart, "有嬤");

    if (!usercart) {
      return NextResponse.json({ state: "error", cart: [] });
    }

    const mergedData = usercart.map((cartItem) => {
      const bookDetails = getbook.find((book) => book.id === cartItem.book_id);
      return {
        ...cartItem,
        ...bookDetails, // 添加产品详细信息
      };
    });

    return NextResponse.json({ state: "success", data: mergedData });

    return NextResponse.json({ state: "success", data: usercart });
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};
