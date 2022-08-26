import React from "react";
import { AiOutlineAudio } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdOutlineQuiz } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import CountUp from "react-countup";

const CountsUp = () => {
  return (
    <div class="text-gray-600 body-font -mt-12">
      <div class="container px-5 lg:px-28 pb-24 mx-auto">
        <div>
          <img
            className="hidden lg:block"
            src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape16.png"
            alt=""
          />
        </div>
        <div class="flex flex-col text-center w-full mb-20 -mt-24">
          <p className="text-primary font-bold">OUR SUMMARY</p>
          <h1 class="font-bold py-2 text-3xl text-accent">
            Trusted By All Types Guardian
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="shadow-lg border-l-4 border-l-primary px-4 py-6 rounded-lg">
              <MdOutlineQuiz className="mx-auto text-5xl text-primary mb-3" />
              <h2 class="title-font font-bold text-3xl text-accent">
                <CountUp end={234} />K
              </h2>
              <p class="leading-relaxed text-primary">Quizzes</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="shadow-lg border-l-4 border-l-primary px-4 py-6 rounded-lg">
              <FiUsers className="mx-auto text-5xl text-primary mb-3" />
              <h2 class="title-font font-bold text-3xl text-accent">
                <CountUp end={334} />K
              </h2>
              <p class="leading-relaxed text-primary">Users</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="shadow-lg border-l-4 border-l-primary px-4 py-6 rounded-lg">
              <AiOutlineAudio className="mx-auto text-5xl text-primary mb-3" />
              <h2 class="title-font font-bold text-3xl text-accent">
                <CountUp end={734} />K
              </h2>
              <p class="leading-relaxed text-primary">Audio</p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="shadow-lg border-l-4 border-l-primary px-4 py-6 rounded-lg">
              <SiGoogleclassroom className="mx-auto text-5xl text-primary mb-3" />
              <h2 class="title-font font-bold text-3xl text-accent">
                <CountUp end={434} />K
              </h2>
              <p class="leading-relaxed text-primary">Courses</p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="float-right -mt-72 hidden lg:block"
        src="https://themes.envytheme.com/ecademy/wp-content/uploads/2020/07/k-shape12.png"
        alt=""
      />
    </div>
  );
};

export default CountsUp;
