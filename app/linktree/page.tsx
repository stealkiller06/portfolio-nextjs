import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frank Pena | Links",
  description: "Connect with Frank Pena across the web",
};

const links = [
  {
    name: "About Me",
    url: "https://frankpena.com",
    icon: <FaCode color="#ffffff" />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@frank_pena06",
    icon: <FaYoutube color="#FF0000" />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/frank-pena-06/",
    icon: <FaLinkedin color="#0077B5" />,
  },
];

export default function Linktree() {
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
