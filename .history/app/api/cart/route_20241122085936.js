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

    const { id } = await req.json();

    const user = getdata.find((uid) => uid.u_id === id);

    if (user && user.password === password) {
      const response = NextResponse.json({ state: "success", data: user });
      response.cookies.set("auth", user.u_name, {
        httpOnly: true, // 防止 JavaScript 訪問 cookies
        sameSite: "strict", // 防止 CSRF 攻擊
        maxAge: 60 * 60 * 24, // 設置 cookies 24 小時有效
      });
      return response;
    }
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};
