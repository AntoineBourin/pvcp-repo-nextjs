"use client";

import { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <p className={`text-md ${isClicked ? "text-green" : ""}`}>Bonjour</p>
      <button onClick={handleClick}>Like</button>
      {children}
    </div>
  );
}
