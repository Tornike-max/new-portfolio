"use client";
import { experiencesData } from "@/lib/data";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref, inView } = useSectionInView("Experience", 0.2);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView]);

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-20 max-w-[56rem] scroll-mt-28 text-center "
    >
      <div className="w-full flex justify-center items-center mb-10">
        <SectionHeading>My Experience</SectionHeading>
      </div>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item) => (
          <React.Fragment key={item.id}>
            <VerticalTimelineElement
              visible={hasAnimated ? true : inView}
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
