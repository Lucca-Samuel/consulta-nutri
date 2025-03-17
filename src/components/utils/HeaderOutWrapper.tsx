// src/components/headerOut/HeaderOutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import HeaderOut from "@/components/headerOut/header";

const HeaderOutWrapper = () => {
  const pathname = usePathname();

  if (
    pathname === "/pages/quest" ||
    pathname === "/pages/login" ||
    pathname === "/pages/cadastroClie" ||
    pathname === "/pages/cadastroPro"
  ) {
    return <HeaderOut />;
  }

  return <Header />;
};

export default HeaderOutWrapper;
