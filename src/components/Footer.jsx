import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            className="hover:cursor-pointer hover:text-[#00df9a]"
            size={30}
          />
          <FaInstagram
            className="hover:cursor-pointer hover:text-[#00df9a]"
            size={30}
          />
          <FaTwitterSquare
            className="hover:cursor-pointer hover:text-[#00df9a]"
            size={30}
          />
          <FaGithubSquare
            className="hover:cursor-pointer hover:text-[#00df9a]"
            size={30}
          />
          <FaDribbbleSquare
            className="hover:cursor-pointer hover:text-[#00df9a]"
            size={30}
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Analytics
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Marketing
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Commerce
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Pricing
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Documentation
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Guides
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              About
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Blog
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Jobs
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Press
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Careers
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Claim
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Policy
            </li>
            <li className="py-2 text-sm hover:cursor-pointer hover:text-gray-50">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
