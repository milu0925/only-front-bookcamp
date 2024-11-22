import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const read = async (url) => {
  const filePath = path.join(process.cwd(), url);
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return NextResponse.json(data);
};

export const GET = async (request) => {
  const url = new URL(request.url);
  const genre = url.searchParams.get("b_genre");
  try {
    const getdata = await read("public/json/book.json");
    console.log(getdata, "111111111111111111111111");

    if (genre) {
    }

    return getdata;
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};
