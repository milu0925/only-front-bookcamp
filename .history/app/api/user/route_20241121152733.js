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
    const getdata = await read("public/json/user.json");
    return getdata;
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};

export const POST = async (req) => {
  try {
    const getdata = await read("public/json/user.json");

    const requestBody = await req.json();
    console.log("收到的請求資料:", requestBody);

    const { itemId, quantity } = requestBody;

    const updatedCartData = cartData.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });

    await write("public/json/user.json", updatedCartData);

    return NextResponse.json({
      message: "Cart updated successfully",
      updatedCartData,
    });
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};
