import React, { ReactElement } from "react";
import ProgressiveImage from "./elements/ProgressiveImage";

interface Props {}

export default function Employment({}: Props): ReactElement {
  return (
    <div className="p-10 bg-gray-300">
      <div className="container w-10/12 p-6 mx-auto">
        <div className="pb-4">
          <h1 className="py-4 text-2xl font-extrabold leading-tight text-center sm:text-4xl lin sm:leading-none">
            Past Organizations
          </h1>
          <p className="text-xs text-center sm:leading-none">
            Where I have added value
          </p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-md">
            <div className="xs:flex-col lg:flex">
              <div className="flex justify-center xs:m-1">
                <div className="flex items-center flex-grow-0 flex-shrink-0 w-auto h-16 p-2 m-2 bg-gray-100 rounded-md ">
                  <ProgressiveImage
                    originalImageSrc="./assets/sci.png"
                    alt=""
                    className="h-12 mx-auto"
                  />
                </div>
                <div className="flex items-center flex-grow-0 flex-shrink-0 h-16 p-2 m-2 bg-gray-100 rounded-md">
                  <ProgressiveImage
                    originalImageSrc="./assets/robosys.png"
                    alt=""
                    className="h-12"
                  />
                </div>
              </div>
              <div className="flex justify-center xs:m-1">
                <div className="flex items-center flex-grow-0 flex-shrink-0 w-auto h-16 px-4 py-2 m-2 bg-gray-100 rounded-md">
                  <ProgressiveImage
                    originalImageSrc="./assets/parallelscore.png"
                    alt=""
                    className="h-12"
                  />
                </div>
                <div className="flex items-center flex-grow-0 flex-shrink-0 h-16 px-4 py-2 m-2 bg-gray-100 rounded-md">
                  <ProgressiveImage
                    originalImageSrc="./assets/tradedepot.png"
                    alt=""
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
