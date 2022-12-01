import { Gap, LogoApp, NotificationNumber } from "../components";
import { BsBell } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Gap height="h-5" />
      <header className="flex items-center justify-between ">
        <LogoApp />
        <div className="border flex items-center gap-[3rem]">
          <div className="flex border relative">
            <BsBell size={35} color="#F8B405" />
            <NotificationNumber />
          </div>
          <div>
            <img
              src="/img/user.jpg"
              className="w-[3.2rem] h-[3.2rem] object-cover rounded-full border border-4 border-yellow-500"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
