"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className=" max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="about"
    >
      <div className="w-full flex justify-center items-center mb-10">
        <SectionHeading>About Me</SectionHeading>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl flex items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-lg ">
          During my academic journey, I passionately pursued numerous personal
          projects, each contributing significantly to my growth as a{" "}
          <span className="font-bold">React developer</span>. With each project,
          I embraced new challenges, deepened my understanding, and honed my
          skills. This iterative process of learning and hands-on experience not
          only expanded my technical expertise but also instilled in me a deep
          sense of problem-solving and innovation. As I navigated through these
          projects, I evolved into a proficient{" "}
          <span className="font-bold">React developer</span>, equipped with a
          comprehensive skill set and a knack for delivering impactful
          solutions.
        </span>
      </motion.p>
    </motion.section>
  );
};

export default About;
