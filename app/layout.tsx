import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import { Toaster } from "@/components/ui/sonner"

const font = Urbanist({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "ATPS 2",
  description: "Air Transport Pilot School",
  icons: {
    icon: "/czech-logos.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
