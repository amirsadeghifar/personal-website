"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

type AnimationProps = {
  rotate: string;
  top: number;
  left: number;
};

type AnimationPropsTwo = {
  rotate: string;
  bottom: number;
  right: number;
};

export const AboutImages = () => {
  const [animationProps, setAnimationProps] = useState<AnimationProps>({
    rotate: "-3deg",
    top: 32,
    left: 90,
  });

  const [animationPropsTwo, setAnimationPropsTwo] = useState<AnimationPropsTwo>(
    {
      rotate: "3deg",
      bottom: 32,
      right: 90,
    }
  );

  useEffect(() => {
    const updateAnimationProps = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        // For smaller screens
        setAnimationProps({ rotate: "-1deg", top: 10, left: 40 });
        setAnimationPropsTwo({ rotate: "1deg", bottom: 10, right: 40 });
      } else {
        // For larger screens
        setAnimationProps({ rotate: "-3deg", top: 32, left: 90 });
        setAnimationPropsTwo({ rotate: "3deg", bottom: 32, right: 90 });
      }
    };

    updateAnimationProps(); // Call initially
    window.addEventListener("resize", updateAnimationProps);

    return () => {
      window.removeEventListener("resize", updateAnimationProps);
    };
  }, []);
  return (
    <div className="flex justify-center items-center flex-[1] relative sm:w-[565px] h-full">
      <motion.img
        whileInView={animationProps}
        src="/mountain.png"
        className="h-fit absolute"
        width={160}
        height={160}
        alt="amir's mountain picture"
      />
      <motion.img
        src="/amir_headshot.png"
        className="h-fit absolute z-[2]"
        width={166}
        height={166}
        alt="amir's headshot"
      />
      <motion.img
        whileInView={animationPropsTwo}
        src="/5k-race.png"
        className="h-fit absolute z-[1]"
        width={160}
        height={160}
        alt="amir's 5k"
      />
    </div>
  );
};
