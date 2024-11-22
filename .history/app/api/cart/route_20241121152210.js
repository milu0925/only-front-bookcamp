import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const read = async (url) => {
  const filePath = path.join(process.cwd(), url);
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return NextResponse.json(data);
};
const write = async (url, data) => {
  const filePath = path.join(process.cwd(), url);
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
};

export const GET = async () => {
  try {
    const getdata = await read("public/json/cart.json");
    return getdata;
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};

export const POST = async (req) => {
  try {
    const getdata = await read("public/json/cart.json");
    const requestBody = await req.json();

    const updatedCartData = cartData.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity }; // 更新數量
      }
      return item;
    });

    // 寫回更新後的資料
    await write("public/json/cart.json", updatedCartData);

    return NextResponse.json({
      message: "Cart updated successfully",
      updatedCartData,
    });

    return getdata;
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};