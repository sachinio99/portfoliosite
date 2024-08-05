import Sidebar from "./links/sidenav";
import ContactMe from "./links/contact";
import Typewriter from 'typewriter-effect'; 
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="container mx-auto flex-grow px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#1A2F38]">
            Hi, I'm Sachin
          </h1>
          <h4 className="text-3xl md:text-4xl font-extrabold text-center text-[#1A2F38] mt-4">
            I am a Software Engineer, music enthusiast, runner, and writer
          </h4>
        </div>
      </main>
    </div>
  );
}