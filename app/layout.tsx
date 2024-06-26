import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeWise",
  description: "The most comprehensive Time Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0e78f9",
            colorBackground: "#1c1f2b",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          // disableTransitionOnChange
        > */}
        <body
          className={cn(
            "min-h-screen md:overflow-hidden bg-background",
            inter.className
          )}
        >
          {children}
        </body>
        {/* </ThemeProvider> */}
      </ClerkProvider>
    </html>
  );
}
