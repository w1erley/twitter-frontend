'use client';

import { BsTwitter } from "react-icons/bs";

const SidebarLogo = ({size, className}) => {
  return (
    <BsTwitter className={className} size={size ?? 28} color="white" />
  );
};

export default SidebarLogo;
