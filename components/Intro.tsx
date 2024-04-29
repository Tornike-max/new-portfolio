/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/me.jpg"
              alt="Owner"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 object-cover bg-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tornike.</span> I'm a{" "}
        <span className="font-bold">React developer</span> with{" "}
        <span className="font-bold">1.5 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 focus:border-2 hover:bg-gray-950 focus:ring-2 focus:ring-gray-800 duration-150 transition-all "
        >
          Contact me here{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Tornike ozbetelashvili.pdf"
          download={true}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 duration-150 transition-all hover:bg-slate-100 dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/tornike-ozbetelashvili-1732b2205/"
          className="bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 duration-150 transition-all  hover:bg-slate-100 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Tornike-max"
          className="bg-white p-4 flex items-center gap-2 rounded-full cursor-pointer hover:scale-105 duration-150 transition-all  hover:bg-slate-100 dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
