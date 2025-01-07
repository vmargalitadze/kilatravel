import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Logo from "@/public/2/logo.jpg";
import Image from "next/image";
import './header.css'
export default function Component() {
  return (
    <header className=" transparent  top-0 z-50 w-full ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="./" className="flex items-center gap-2 font-bold" prefetch={false}>
        
         <Image  style={{borderRadius:"50%" }} width={50} height={50} src={Logo} alt="logo" />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="#" className="text-sm header-link font-medium hover:text-primary transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm header-link font-medium hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm  header-link font-medium hover:text-primary transition-colors" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm header-link font-medium hover:text-primary transition-colors" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm header-link font-medium hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              {/* Add a DialogTitle */}
              <h2 className="sr-only" id="mobile-menu-title">
                Navigation Menu
              </h2>
              <div className="grid gap-4 p-6" aria-labelledby="mobile-menu-title">
                <Link href="#" className=" header-link text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className=" header-link text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  About
                </Link>
                <Link href="#" className="header-link text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  Features
                </Link>
                <Link href="#" className="header-link text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  Pricing
                </Link>
                <Link href="#" className="header-link text-lg font-medium hover:text-primary transition-colors" prefetch={false}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
