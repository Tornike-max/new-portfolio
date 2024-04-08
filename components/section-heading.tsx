"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-3xl font-medium capitalize mb-b"
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
