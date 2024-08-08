// Others
import type { Metadata } from "next";

// Styles
import "./globals.css";

// Fonts
import { Inter } from "next/font/google";

// Tailwind
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruting AI",
  description: "",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
};

export default Layout;
