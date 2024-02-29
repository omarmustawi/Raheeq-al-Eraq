import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Skeleton({ style }: { style: string }) {
  return (
    <div className={`w-full h-full relative z-20 rounded-full ${style}`}>
      <div className="flex flex-row justify-center items-center rounded-3xl w-full h-full">
        <div
          dir="ltr"
          className="flex flex-col justify-center  text-gray-700 items-center rounded-full bg-gray-300 w-full h-full animate-pulse"
        >
          <ThreeDots
            visible={true}
            height="30"
            width="30"
            color="gray"
            radius="9"
            ariaLabel="three-dots-loading"
          />
          loading..
        </div>
      </div>
    </div>
  );
}
