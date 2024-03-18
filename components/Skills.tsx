import React, { ReactElement } from "react";
import ProgressiveImage from "./elements/ProgressiveImage";

interface Props {}

export default function Skills({}: Props): ReactElement {
  return (
    <div className="container w-10/12 h-full pb-8 mx-auto">
      <h1 className="text-2xl font-extrabold text-center sm:text-4xl">
        Core Skills
      </h1>
      <div className="m-4">
        <div className="md:flex md:justify-center skills">
          <div className="flex justify-center">
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/node.png"
                  alt="node"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/aws_lambda.png"
                  alt="aws-lambda"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/firestore.png"
                  alt="firestore"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/html.png"
                  alt="html"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/javascript.png"
                  alt="javascript"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/typescript.png"
                  alt="typescript"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/react.svg"
                  alt="react"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/mongodb-logo.png"
                  alt="mongo"
                />
              </div>
            </div>
            <div className="flex-col items-center justify-center m-8 skill__badge">
              <div className="w-16 mx-auto">
                <ProgressiveImage
                  originalImageSrc="./assets/digital_ocean.png"
                  alt="digital-ocean"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
