"use client";

import Image from "next/image";
import React from "react";
import me from "@me.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section>
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Owner"
              width={100}
              height={100}
              quality="95"
              priority={true}
              className="rounded-full h-24 w-24 border-[0,25rem] object-cover border-white"
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
    </section>
  );
};

export default Intro;
