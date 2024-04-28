"use client";
import { experiencesData } from "@/lib/data";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./section-heading";

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-20 max-w-[56rem] scroll-mt-28 text-center "
    >
      <div className="w-full flex justify-center items-center mb-4">
        <SectionHeading>Experience</SectionHeading>
      </div>
      <VerticalTimeline animate={true} lineColor="">
        {experiencesData.map((item, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid  #9ca3af",
              }}
              date={item.date}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
              icon={item.icon}
            >
              <h3 className="font-semibold capitalize text-slate-800">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-slate-600">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;