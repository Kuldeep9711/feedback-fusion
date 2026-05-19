import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/footer";
import { ClerkProvider, Show, SignInButton, UserButton } from "@clerk/nextjs";
import ThemeProvider from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback Fusion - Public Roadmap",
  description: "A platform for users to suggest and vote on features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

   return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <ClerkProvider>

            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
              {children}
            </main>

            <Footer />

            <Toaster />

          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
  
  