import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function LoaderSpinner() {
  return (
    <div className="fixed w-screen h-screen bg-white/50 top-0 left-0 z-50 flex justify-center items-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#CDA72A"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
