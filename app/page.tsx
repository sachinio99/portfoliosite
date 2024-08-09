"use client";
import Sidebar from "./links/sidenav";
import ContactMe from "./links/contact";
import "./globals.css";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';




export default function Home() {

  const experiences = [
    {
      role: "Learning like crazy, obessessing over the fundamentals, striving for aesthetics in all facets of life ",
      company: "Nowhere in particular",
      period: "January 2024 - Right freaking now",
      details: [

      ]

    },
    {
      role: "Travelling and Reconnecting with Family",
      company: "Lisbon, Porto, Athens, Mykonos, Santorini, Fremont, San Francisco",
      period: "September 2023 - January 2024",
      details: [

      ]
    },
    {
      role: "Software Engineer II - Core Platform Team",
      company: "ARCOS LLC",
      period: "August 2022 - August 2023",
      details: [

      ]
    },
    {
      role: "Software Engineer - Shared Technology Services Organization",
      company: "Bank of America Merrill Lynch",
      period: "August 2021 - August 2022",
      details: [
      ]
    },
    {
      role: "Software Engineering Intern- Global Markets Technology",
      company: "Bank of America Merrill Lynch",
      period: "Summer 2020",
      details: [
      ]
    },
    {
      role: "Software Engineer Intern - IBM Cloud - DB2 and IDAA ",
      company: "IBM",
      period: "March 2019 - August 2019",
      details: [
      ]
    }
  ];

  const ExperienceItem = ({ role, company, period, details }: { role: string, company: string, period: string, details: string[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="mb-4 border-b border-gray-200 pb-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h3 className="text-lg text-[#1A2F38] font-semibold">{role}</h3>
            <p className="text-sm text-gray-600">{company} | {period}</p>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {isExpanded && (
          <ul className="mt-2 ml-4 list-disc">
            {details.map((detail, index) => (
              <li key={index} className="text-sm">{detail}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <main className="md:container mx-auto flex-grow px-4">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center text-[#1A2F38]">
            Hi, I'm Sachin
          </h1>
          <h4 className="text-3xl md:text-4xl font-medium text-[#1A2F38] mt-4 ">
            Software Engineer  ||  Runner  ||  Music Savant
          </h4>
          <h5 className="text-2xl md:text-3xl font-medium text-[#1A2F38] mt-8 w-full ">
            What I've Been Up To:
          </h5>
          <section className="experience-section">
          <div className="experience-container">
              {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
            ))}
        </div>
          </section>
        </div>
        <div className="absolute top-0 right-0 m-4 text-[#1A2F38]">
          New York City, NY || San Francisco Bay Area, CA
        </div>
      </main>
      
    </div>
  );
}