import React from "react";
import { BsBell } from "react-icons/bs";
import { NotificationNumber } from "../atoms";

const Notifications = () => {
  return (
    <div className="self-end relative">
      <BsBell size={35} color="#F8B405" />
      <NotificationNumber />
    </div>
  );
};

export default Notifications;
