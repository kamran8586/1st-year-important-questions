import React from "react";

export default function Cards(props) {
  return (
    <>
      <div className="card ml-3 bg-white dark:bg-[#15263F] md:w-96  w-11/12 lg:mx-0 mx-auto h-[32rem] rounded-xl p-6 space-y-4 shadow-xl hover:scale-[1.02] active:scale-[1.02]">
        <a href="#">
          <img
            className="w-full h-64 rounded-md transition hover:bg-cyan-300"
            src={props.dataObj.image}
            alt=""
          />
        </a>
        <div id="description" className="space-y-4">
          <h2 className="dark:text-white font-semibold text-xl">
            {props.dataObj.heading}
          </h2>

          <p className="text-slate-500 text-sm select-none">
            {props.dataObj.description}
          </p>
          <div className="flex items-center justify-between font-semibold text-sm border-b border-slate-500 pb-6">
            <a
              href={props.dataObj.pdf}
              id="price"
              className="text-teal-400 flex justify-between items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 320 512"
                fill="#67E7F9"
              >
                {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
