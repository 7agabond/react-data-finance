import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx8">1 Granted User</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="transition bg-[#00df9a] text-black hover:text-[#00df9a] hover:bg-transparent hover:outline hover:outline-1 hover:outline-[#00df9a] rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 active:translate-y-[2px]">
            Start Trial
          </button>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx8">1 Granted User</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="transition bg-black text-[#00df9a] hover:bg-transparent hover:outline hover:outline-1 hover:outline-black rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 active:translate-y-[2px]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx8">1 Granted User</p>
            <p className="py-2 border-b mx8">Send up to 2 GB</p>
          </div>
          <button className="transition bg-[#00df9a] text-black hover:text-[#00df9a] hover:bg-transparent hover:outline hover:outline-1 hover:outline-[#00df9a] rounded-md font-medium w-[200px] my-6 mx-auto px-6 py-3 active:translate-y-[2px]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;