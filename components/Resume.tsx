import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {}

export default function Resume({}: Props): ReactElement {
  return (
    <div className="flex justify-center py-12 bg-yellow-100">
      <div className="container flex justify-center w-12/12">
        <div className="flex-col w-11/12 p-8 bg-yellow-600 rounded-md">
          <p className="text-white text-xl">
            I am a Full-Stack Developer with 8+ years of experience building and
            maintaining products across E-commerce, Health Insurance, and
            FinTech.
          </p>
          <div className="flex items-baseline justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-block px-4 py-2 mt-4 mr-4 text-sm font-bold bg-white rounded-md flex-shrink-1"
            >
              Contact
            </Link>
            {/* TODO: Link to an s3 bucket */}
          </div>
        </div>
      </div>
    </div>
  );
}
