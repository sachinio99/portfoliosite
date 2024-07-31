import Image from "next/image";
import Link from 'next/link';
import Sidebar from "./links/sidenav";
import ContactMe from "./links/contact";

export default function Home() {
  
  return (
    <div className="relative">
      <Sidebar />
    <main className="container">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      </div>
    </main>
    {/* Contact Me Section */}
    <ContactMe />
    </div>
  );
}
