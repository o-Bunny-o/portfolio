import "./styles/output.css";
import { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor"; 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen overflow-hidden bg-secondary">
      <CustomCursor />
        <div className="flex-shrink-0">
        <SiteHeader />
        </div>

        <main className="flex-grow overflow-hidden">{children}</main>

        <div className="flex-shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
