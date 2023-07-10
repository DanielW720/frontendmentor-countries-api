"use client";

import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import { useState } from "react";
import "material-icons/iconfont/material-icons.css";
import { Header } from "./Header";

const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <html lang="en" className={`${darkTheme && "dark"}`}>
      <body
        className={`${nunitoSans.className} bg-white dark:bg-veryDarkBlueBG text-veryDarkBlueText dark:text-white`}
      >
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <main className="min-h-[calc(100vh - 5rem)] pt-8">{children}</main>
      </body>
    </html>
  );
}
