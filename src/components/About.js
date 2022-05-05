import React from "react";
import Url from "../images/kamran.jpg";
export default function About() {
  return (
    <>
      {/* component */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="max-h-96 md:h-screen">
            <img
              className="w-screen h-screen object-cover object-top"
              src={Url}
              alt=""
            />
          </div>
          <div className="flex bg-gray-100 p-10">
            <div className="mb-auto mt-auto max-w-lg">
              <h1 className="text-3xl uppercase">Muhammad Kamran</h1>
              <p className="font-semibold mb-5">Web Developer</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
              <a
                href="mailto:muhammadkamran8586@gmail.com"
                className="bg-teal-400 hover:bg-teal-500 rounded-md py-3 px-7 mt-4 text-white block w-fit "
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
