"use client";

import { Button } from "@/components/ui/button";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { trackButtonClick } from "../utils/analytics";

const links = [
  {
    name: "About Me",
    url: "https://frankpena.dev",
    icon: <FaCode color="#ffffff" />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@frank_pena06",
    icon: <FaYoutube color="#FF0000" />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/frankpena06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: <FaLinkedin color="#0077B5" />,
  },
];

export default function Linktree() {
  const handleButtonClick = (linkName: string, linkUrl: string) => {
    // Track the button click with additional information
    trackButtonClick(linkName, {
      url: linkUrl,
      page: "linktree",
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-md mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <Image
              src="/profile.png"
              alt="Frank Pena"
              width={120}
              height={120}
              className="rounded-full border-4 border-gray-800 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Frank Pena</h1>
          <p className="text-gray-400 text-center mt-2">Software Developer</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4 w-full">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
              onClick={() => handleButtonClick(link.name, link.url)}
            >
              <Button className="w-full py-6 flex items-center justify-center gap-3 text-lg font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200 bg-gray-800 text-white border border-gray-700 hover:bg-gray-700">
                <span className="text-xl">{link.icon}</span>
                <span>{link.name}</span>
              </Button>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Frank Pena</p>
        </div>
      </div>
    </div>
  );
}
