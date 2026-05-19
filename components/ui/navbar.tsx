'use client';

import { Map, MessageSquare, Sparkle } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { SignInButton, useAuth } from "@clerk/nextjs"
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useAuth();

    return (
    <nav className="w-full border-b bg-white text-black dark:bg-gray-950 dark:text-white">
      
       <div className="container mx-auto flex h-16 items-center justify-between px-4">

         {/* Left - Logo + Links */}
          <div className="flex items-center gap-6">
           <Link href="/">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  
                <Sparkle className="h-4 w-4 text-white" />
                </div>
              <span className="text-xl font-bold">Feedback Fusion</span>
               </div>
           </Link>

           <Link
           href="/roadmap"
           className="text-sm hover:text-purple-500 flex items-center gap-1 transition-colors"
           >
           <Map className="h-4 w-4" />
           Roadmap 
           </Link>

             <Link
           href="/feedback"
           className="text-sm hover:text-purple-500 flex items-center gap-1 transition-colors"
           >
           <MessageSquare className="h-4 w-4" />
           Feedback 
           </Link>
            </div>

            {/* Right -Theme Toggle + Auth  */}
           <div className="flex items-center gap-4">
            <ThemeToggle />

            {isSignedIn ? (
               <UserButton />
            ) : (
               <SignInButton>
                  <button className="bg-linear-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity text-white rounded-full px-4 py-2 text-sm font-medium">
                    Sign In 
                  </button>
               </SignInButton>
           )}
          </div>
       </div>
    </nav>
    );
}