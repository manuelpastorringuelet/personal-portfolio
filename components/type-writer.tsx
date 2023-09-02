"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriter = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My name's Manuel`,
      "guy-who-loves-movement.tsx",
      "<ButAlsoLovesToCode />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <span className="mr-3 overflow-auto">{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </>
  );
};

export default Typewriter;
