import React from "react";
import kid from "../../assets/GuidelineImage/kid.png";
import { BsCheckCircleFill, BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { AiFillSmile } from "react-icons/ai";

const Guideline = () => {
  return (
    <div className=" ">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-accent">Join With us</h3>
        <h2 className="text-2xl text-primary">Guideline</h2>
      </div>
      <div className="md:flex lg:flex justify-center items-center">
        <div className="px-5 lg:px-0">
          <h2 className="font-black text-3xl text-accent py-4">
            Find Out Why You Should <br /> Learn With Verbalizer
          </h2>
          <div data-aos="fade-right" className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-lg border-l-4 border-l-primary md:w-80 lg:w:80 p-4 rounded-md">
              <div className="flex items-center">
                <BsCheckCircleFill className="text-primary mr-2" />
                <h3 className="font-bold text-accent">Create Account</h3>
              </div>
              <h4>At first create an account</h4>
            </div>
            <div className="bg-white shadow-lg border-l-4 border-l-primary md:w-80 lg:w:80 p-4 rounded-md">
              <div className="flex items-center">
                <BsFillBookmarkPlusFill className="text-primary mr-2" />
                <h3 className="font-bold text-accent">Select Quiz</h3>
              </div>
              <h4>Select your quiz at service section.</h4>
            </div>
            <div className="bg-white shadow-lg border-l-4 border-l-primary md:w-80 lg:w:80 p-4 rounded-md">
              <div className="flex items-center">
                <FaSignal className="text-primary mr-2" />
                <h3 className="font-bold text-accent">Learn Your Skill</h3>
              </div>
              <h4>Improve your skill by choosing difficulty level</h4>
            </div>
            <div className="bg-white shadow-lg border-l-4 border-l-primary md:w-80 lg:w:80 p-4 rounded-md">
              <div className="flex items-center">
                <AiFillSmile className="text-primary mr-2" />
                <h3 className="font-bold text-accent">Success Story</h3>
              </div>
              <h4>After completing the course we will share your story.</h4>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <img className="lg:w-[650px]" src={kid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Guideline;
