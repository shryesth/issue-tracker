import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <NavBar />
          <main className = "p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
