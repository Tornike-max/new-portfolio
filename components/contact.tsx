"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/serverActions";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  const handleSendEmail = async (formData: FormData) => {
    try {
      await sendEmail(formData);
      toast.success("Email sended successfully");
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 max-w-[40rem] w-full scroll-mt-28 text-center "
    >
      <div className="w-full flex justify-center items-center mb-10">
        <SectionHeading>Contact me</SectionHeading>
      </div>

      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ozbetelashvilitornike2@gmail.com">
          ozbetelashvilitornike2@gmail.com{" "}
        </a>
        or through this form.
      </p>

      <form className="mt-10 flex flex-col gap-2" action={handleSendEmail}>
        <input
          type="email"
          className="h-14 w-full rounded-lg borderBlack p-4"
          placeholder="Your email"
          name="senderEmail"
          maxLength={500}
          required
        />
        <textarea
          className="h-52 w-full my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          maxLength={5000}
          required
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
