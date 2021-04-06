import React from "react";

const Paddle = ({ position }) => {
  console.log(position);
  const className =
    position === "left" ? "bi bi-chevron-left" : "bi bi-chevron-right";
  const d =
    position === "left"
      ? "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      : "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z";
  return (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 16 16"
        class={className}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d={d} />
      </svg>
    </>
  );
};

export default Paddle;
