import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import React, { ReactNode } from "react";
import "easymde/dist/easymde.min.css";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
