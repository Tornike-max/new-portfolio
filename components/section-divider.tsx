"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="my-20 bg-gray-200 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-30"
    ></motion.div>
  );
};

export default SectionDivider;
