import { NAV_LINKS } from "@/constants";
import Logo from "./Logo";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu, Phone } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="z-10 relative">
      <div className="flex items-center justify-between container">
        <div>
          <Logo />
        </div>

        <div>
          <ul className="hidden sm:flex flex-row items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white font-medium hover:text-accent transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="tel:00000000000"
                className="flex flex-row items-center text-white gap-2 hover:text-accent transition-all"
              >
                <Phone className="h-4 w-4 pt-px" /> 999 999 999
              </Link>
            </li>
          </ul>

          <Sheet>
            <SheetTrigger className="sm:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Coastal Electrical</SheetTitle>
              </SheetHeader>
              <div>
                <ul className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
