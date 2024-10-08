import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { PinContainer } from "./ui/3DPin";

export default function Recent() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Check out my <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={item.name} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[517px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative overflow-hidden w-full h-full rounded-3xl bg-[#13162D">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full mx-1 bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex md:text-xs lg:text-xl text-sm text-purple">
                    Visit Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </a>
        ))}
      </div>
    </div>
  );
}
