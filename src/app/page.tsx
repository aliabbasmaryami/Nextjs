'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Ali");

  const User = () => {
    setName("Abbas");
           }

  const InnerCom = () => {
    return (
      <h1>Hello, this is InnerComp</h1>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Events, function, states {name}</h1>
      <button onClick={User} > Clicked Me</button>
      {/* Using InnerCom correctly as a React component */}
      {/* <h6>this is for git practice</h6> */}
      <InnerCom />
    </div>
  );
}
