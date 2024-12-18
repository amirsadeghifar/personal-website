import Image from "next/image";
import React from "react";
import { AboutImages } from "../components/aboutImages";

export const About = () => {
  return (
    <div className="flex gap-[17px] flex-col-reverse xl:flex-row">
      <div className="space-y-5">
        <div>
          <span className="flex gap-2 items-center">
            <svg
              width="49"
              height="24"
              viewBox="0 0 49 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.75 8L44.9167 12L36.75 16"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.08333 12H44.9167"
                stroke="var(--text-color)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-[18px] font-light">Hello Again</h3>
          </span>
          <h2 className="text-[23px] font-bold">I'm Amir</h2>
        </div>
        <div className="max-w-[565px] space-y-[13px] leading-relaxed">
          <p>
            I’m a full-stack software engineer with a background in biomedical
            engineering, skilled in designing scalable systems that solve
            complex problems with practical solutions.
          </p>
          <p>
            Outside of tech, I’m passionate about staying active and exploring
            new experiences. I enjoy watching and playing sports, embarking on
            outdoor adventures, and embracing opportunities to try something new
            and exciting.
          </p>
        </div>
      </div>
      <div className="relative h-[300px] xl:w-[570px]">
        <AboutImages />
      </div>
    </div>
  );
};
