import { NAV_LINKS } from "@/constants";
import Logo from "./Logo";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FadeInDown } from "./AnimateOnScroll";

const Navigation = () => {
  return (
    <nav className="z-20 relative">
      <div className="flex items-center justify-between container">
        <FadeInDown>
          <Logo />
        </FadeInDown>

        <div>
          <ul className="flex flex-row items-center relative z-30">
            {NAV_LINKS.map((link) => (
              <FadeInDown key={link.label}>
                <li className="hidden md:block relative z-40">
                  <Link
                    href={link.href}
                    className="text-white font-medium hover:text-accent transition-all relative z-50"
                  >
                    {link.label}
                  </Link>
                </li>
              </FadeInDown>
            ))}

            {/* Phone link (optional: animate after all nav links) */}
            <FadeInDown>
              <li>
                <Link
                  href="tel:00000000000"
                  className="flex flex-row items-center text-white gap-2 hover:text-accent transition-all text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4 pt-px" /> 999 999 999
                </Link>
              </li>
            </FadeInDown>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
