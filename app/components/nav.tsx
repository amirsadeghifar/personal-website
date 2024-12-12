"use client";
import React from "react";
import Link from "next/link";

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");
  const strokeColor = theme === "dark" ? "white" : "black";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // Check if theme is stored
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = (selectedTheme: string) => {
    const newTheme = selectedTheme;
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save to localStorage
  };

  return (
    <div className="flex gap-2">
      <button
        className={`flex gap-2 p-2 ${
          theme === "dark"
            ? "bg-[color:var(--container-color)] shadow-sm"
            : "hover:bg-[color:var(--container-color)] hover:shadow-sm"
        } rounded-md text-sm items-center`}
        onClick={() => toggleTheme("dark")}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 10C8.88071 10 10 8.88071 10 7.5C10 6.11929 8.88071 5 7.5 5C6.11929 5 5 6.11929 5 7.5C5 8.88071 6.11929 10 7.5 10Z"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 1.875V2.5"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12.5V13.125"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.875 7.5H2.5"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 7.5H13.125"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4775 3.52246L11.0356 3.96434"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.96434 11.0356L3.52246 11.4775"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.52246 3.52246L3.96434 3.96434"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.0356 11.0356L11.4775 11.4775"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Dark
      </button>
      <button
        className={`flex gap-2 p-2 ${
          theme === "light"
            ? "bg-[color:var(--container-color)] shadow-sm"
            : "hover:bg-[color:var(--container-color)] hover:shadow-sm"
        } rounded-md text-sm items-center`}
        onClick={() => toggleTheme("light")}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 1.875C6.75408 2.62092 6.33503 3.63261 6.33503 4.6875C6.33503 5.74239 6.75408 6.75408 7.5 7.5C8.24592 8.24592 9.25761 8.66498 10.3125 8.66498C11.3674 8.66498 12.3791 8.24592 13.125 7.5C13.125 8.61252 12.7951 9.70006 12.177 10.6251C11.5589 11.5501 10.6804 12.2711 9.6526 12.6968C8.62476 13.1226 7.49376 13.234 6.40262 13.0169C5.31148 12.7999 4.3092 12.2641 3.52253 11.4775C2.73586 10.6908 2.20013 9.68853 1.98309 8.59738C1.76604 7.50624 1.87744 6.37524 2.30318 5.34741C2.72892 4.31957 3.44989 3.44107 4.37492 2.82298C5.29995 2.2049 6.38748 1.875 7.5 1.875Z"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 1.875V4.375"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 3.125H11.25"
            stroke={strokeColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Light
      </button>
    </div>
  );
};

export default ThemeSwitcher;

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/">
        {" "}
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="35"
          viewBox="0 0 450.000000 480.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="var(--text-color)"
          >
            <path
              d="M1556 4501 c-3 -5 -202 -519 -442 -1142 -240 -624 -438 -1140 -441
-1146 -4 -10 63 -13 313 -13 l319 0 78 200 78 200 416 -2 415 -3 19 -50 c11
-27 40 -111 65 -185 100 -294 166 -346 615 -485 200 -62 240 -79 294 -127 49
-42 66 -80 66 -143 0 -237 -343 -301 -643 -119 -34 21 -87 58 -117 82 -52 43
-55 44 -68 26 -15 -20 -243 -449 -243 -457 0 -9 110 -77 190 -117 192 -96 390
-143 620 -144 248 -1 442 59 622 195 123 92 209 239 245 418 22 111 22 320 -1
396 -37 124 -103 219 -205 294 -109 80 -197 118 -471 201 -58 18 -130 45 -161
60 -133 67 -168 186 -82 275 69 71 164 96 290 76 96 -15 170 -44 250 -97 50
-34 69 -41 75 -32 4 7 58 111 118 230 l111 218 -78 39 c-192 95 -413 145 -643
145 -177 -1 -259 -18 -380 -78 l-71 -36 -10 28 c-6 15 -107 284 -225 597 -118
314 -227 600 -241 638 l-26 67 -323 0 c-178 0 -325 -4 -328 -9z m451 -1076
l121 -365 -250 0 c-196 0 -249 3 -246 13 3 6 58 171 123 365 66 193 122 352
125 352 3 0 60 -164 127 -365z"
            />
          </g>
        </svg>
      </Link>
      <div className="flex items-center gap-5">
        <ThemeSwitcher />
        {/*
        <div className='h-[15px] w-[.05px] bg-[color:var(--not-important)]'></div>
        <Link href='/blogs' className=''>Blogs</Link>
        */}
      </div>
    </nav>
  );
};
