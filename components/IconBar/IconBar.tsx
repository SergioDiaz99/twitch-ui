import Image from "next/image";
import React from "react";
import Remote from "../../public/assets/remote.png";
import Headphones from "../../public/assets/headphones.png";
import Mic from "../../public/assets/mic.png";
import Paint from "../../public/assets/paint.png";
import Trophy from "../../public/assets/trophy.png";

const IconBar = () => {
  return (
    <div className="p-2 md:p-8">
      {/**conainer */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
        {/**grid item */}
        <div className="w-full h-[50px] bg-twitchColor hover:bg-[#bf94ff] flex justify-between items-center px-4 rounded cursor-pointer">
          <p className="text-2xl font-bold">Games</p>
          <Image src={Remote} alt="remote image joystic controller" />
        </div>
        {/**grid item */}
        <div className="w-full h-[50px] bg-twitchColor hover:bg-[#bf94ff] flex justify-between items-center px-4 rounded cursor-pointer">
          <p className="text-2xl font-bold">IRL</p>
          <Image src={Mic} alt="mic image microphone" />
        </div>
        {/**grid item */}
        <div className="w-full h-[50px] bg-twitchColor hover:bg-[#bf94ff] flex justify-between items-center px-4 rounded cursor-pointer">
          <p className="text-2xl font-bold">Music</p>
          <Image src={Headphones} alt="headhpones image" />
        </div>
        {/**grid item */}
        <div className="w-full h-[50px] bg-twitchColor hover:bg-[#bf94ff] flex justify-between items-center px-4 rounded cursor-pointer">
          <p className="text-2xl font-bold">Esports</p>
          <Image src={Trophy} alt="trophy image" />
        </div>
        {/**grid item */}
        <div className="w-full h-[50px] bg-twitchColor hover:bg-[#bf94ff] flex justify-between items-center px-4 rounded cursor-pointer">
          <p className="text-2xl font-bold">Creative</p>
          <Image src={Paint} alt="paint image" />
        </div>
      </div>
    </div>
  );
};

export default IconBar;
