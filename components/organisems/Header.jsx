import Image from "next/image";
import React from "react";
import { LogoApp, Notifications } from "../../components";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-screen-sm m-auto px-2">
      <LogoApp />
      <div className="flex items-center gap-[2rem]">
        <Notifications />
        <div className="rounded-full">
          <Image
            src="/img/user.jpg"
            width={40}
            height={50}
           layout='fixed'
            alt="logo"
            className="overflow-hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
