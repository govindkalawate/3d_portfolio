import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaHackerrank,
} from "react-icons/fa";



const resumeUrl = "https://drive.google.com/file/d/1efC31fnXPvOkNJMobdIMYH7xSxgmuBG7/view?usp=sharing"; 

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY;

      if (windowHeight + scrollPosition >= bodyHeight - 1) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/govindkalawate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://www.hackerrank.com/ga3211"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank className="text-xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/govind-kalawate-1297a7231"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://x.com/GovindKalawate?t=jlmDMPAjaAaLIHxjlu-Jiw&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-xl text-white hover:text-gray-300" />
        </a>
        <a
          href="https://instagram.com/govind.kalawate?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl text-white hover:text-gray-300" />
        </a>
        
      </div>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 text-sm block mt-4"
      >
        🖨️ Resume
      </a>
      <p className="mt-1 text-gray-400">📶+91 7666486747</p>
      <p className="text-gray-400">
        &copy; {new Date().getFullYear()} Govind Kalawate. All Rights Reserved.
      </p>
      <style jsx>{`
        @media (max-width: 640px) {
          footer {
            position: fixed;
            bottom: ${isAtBottom ? "0" : "auto"};
            right: 0px;
            width: auto;
            z-index: 50;
          }
        }

        @media (min-width: 641px) {
          footer {
            position: fixed;
            bottom: ${isAtBottom ? "0" : "auto"};
            right: 300px;
            width: auto;
            z-index: 50;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
