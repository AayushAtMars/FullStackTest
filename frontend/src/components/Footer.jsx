import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = ()=> {
  return (
    <footer className="max-w-9/10 mx-auto bg-white border-t-[1.5px] border-gray-200 font-sans text-[17px] text-[#20242d]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 border-b border-gray-300 text-center md:text-left">
        {/* Brand */}
        <div className="font-semibold text-[#192832]">MediCare Clinic</div>

        {/* Nav Links */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 font-medium text-[15px]">
          <a href="/" className="text-[#20242d] hover:underline">Home</a>
          <a href="/about" className="text-[#20242d] hover:underline">About</a>
          <a href="/department" className="text-[#20242d] hover:underline">Department</a>
          <a href="/doctors" className="text-[#20242d] hover:underline">Doctors</a>
          <a href="/pricing" className="text-[#20242d] hover:underline">Pricing</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-[#20242d] hover:text-[#4267B2]" size={22} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="text-[#20242d] hover:text-[#1DA1F2]" size={22} />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-[#20242d] hover:text-[#0077b5]" size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-6 py-3 text-[#8d94a3] text-[13px] border-t border-gray-200 bg-[#fafbfc] text-center md:text-left">
        <span>© 2025 MediCare Clinic. All rights reserved.</span>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
