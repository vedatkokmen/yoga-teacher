import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="/">
          <a className="link link-hover">Home</a>
        </Link>
        <Link href="/blog">
          <a className="link link-hover">Blog</a>
        </Link>
        <Link href="/testimonials">
          <a className="link link-hover">Testimonials</a>
        </Link>
        <Link href="/about">
          <a className="link link-hover">About</a>
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link href="https://instagram.com/ayuningt.y.a.s" passHref>
            <a>
              <FaInstagram className="link w-6 h-6 hover:text-blue-600" />
            </a>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCetrN7P7CkU53aZAzMbzjPw"
            passHref
          >
            <a>
              <FaYoutube className="link w-6 h-6 hover:text-red-600" />
            </a>
          </Link>
          <Link
            href="https://id.linkedin.com/in/metri-kumala-ayuningtyas-9349a51b8"
            passHref
          >
            <a>
              <FaLinkedin className="link w-6 h-6 hover:text-blue-400" />
            </a>
          </Link>
        </div>
      </div>
      <div>
        <p>{new Date().getFullYear()} - Soul Sanctuary by Tyas</p>
      </div>
    </footer>
  );
}

export default Footer;
