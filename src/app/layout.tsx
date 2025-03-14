import "./styles/output.css";
import { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import DraggableScrollContainer from "./components/DraggableScrollContainer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nky3fim.css" />
      </head>
      <body className="flex flex-col h-screen overflow-hidden bg-secondary-dark">
        <CustomCursor />
        <div className="flex-shrink-0">
          <SiteHeader />
        </div>

        {/* wrap main content in the DraggableScrollContainer */}
        <main className="flex-grow overflow-hidden">
          <DraggableScrollContainer>
            {children}
          </DraggableScrollContainer>
        </main>

        <div className="flex-shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
