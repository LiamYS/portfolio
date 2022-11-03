import React from "react";

export const PersonalInformation = () => {
  return (
    <div className="py-2">
      <p className="text-xl text-blue-300">Personal Information</p>
      <p>
        Hello! My name is Liam. Currently studying BSc Computer Science and
        Engineering at Eindhoven University of Technology. Interested to expand
        my knowledge about backend development and embedded systems. For more
        information you can go to my{" "}
        <a
          href="https://www.linkedin.com/in/liam-vlaskamp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-300"
        >
          [LinkedIn]{" "}
        </a>
        profile.
      </p>
    </div>
  );
};
