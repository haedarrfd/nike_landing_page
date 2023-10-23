"use client";

import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max_container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="./images/footer-logo.svg"
              alt="Footer Logo"
              width={150}
              height={50}
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store.
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <Link href={social.link}>
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item) => (
            <div key={item.title} className="">
              <h4 className="text-white font-montserrat text-xl leading-normal font-medium mb-6">
                {item.title}
              </h4>

              <ul className="">
                {item.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer transition-colors hover:text-gray-500"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap2 font-montserrat cursor-pointer">
          <Image
            src="/icons/copyright-sign.svg"
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="ml-2">Nike Copyright. All Rights Reserved</p>
        </div>
        <p className="font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
