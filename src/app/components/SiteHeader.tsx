"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

/*
  SiteHeader:
  - usePathname to determine the current route.
  - if the current route is the home ("/"), it returns null (i.e. no header).
  - otherwise, it renders the Header component.
*/
export default function SiteHeader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Header />;
}
