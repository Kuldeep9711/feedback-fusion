import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background w-full">
          <div className="w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">

              
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
               <span>Made with</span>
               <Heart className="h-4 w-4 text-red-500 fill-red-500" />
               <span>by the Kuldeep Saini</span>
            </div>
           
            <div className="text-sm text-muted-foreground ml-auto">
             <span>© {currentYear} Feedback Fusion. All rights reserved.</span>
            </div>
            </div>
        </footer>
    )
}