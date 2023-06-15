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

export const metadata = {
  title: "Frontend Mentor Countries API app",
  description:
    "Frontend Mentor challange app with with the Countries REST API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <html lang="en" className={`${darkTheme && "dark"}`}>
      <body
        className={`${nunitoSans.className} bg-white dark:bg-veryDarkBlueBG dark:text-veryDarkBlueText`}
      >
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {children}
      </body>
    </html>
  );
}
