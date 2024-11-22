import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const read = async (url) => {
  const filePath = path.join(process.cwd(), url);
  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const data = JSON.parse(fileContent);
  return data;
};
const write = async (url, data) => {
  const filePath = path.join(process.cwd(), url);
  await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
};

export const GET = async () => {
  try {
    const getdata = await read("public/json/user.json");
    return NextResponse.json(getdata);
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};

export const POST = async (req) => {
  try {
    const getdata = await read("public/json/user.json");

    const { email, password } = await req.json();

    const user = getdata.find((user) => user.email === email);

    if (user && user.password === password) {
      const cookies = new Cookies(req, NextResponse);

      cookies.set("auth", user.u_name, {
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      });

      return NextResponse.json({ state: "success", data: user });
    }
  } catch (error) {
    console.error("Error reading the JSON file:", error);
    return NextResponse.error();
  }
};
