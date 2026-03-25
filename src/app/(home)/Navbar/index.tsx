import { navContent } from "@/app/data/content";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <Link href="#top" className="logo">
          <Image
            src="/images/logo/logo.svg"
            alt="School Discovery Logo"
            width={140}
            height={40}
          />
        </Link>
        <div className="navbar-right">
          <div className="nav-menu">
            <div className="nav-left">
              {navContent.links.map((link) => (
                <Link key={link.label} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="right-nav">
              <Link href="#contact" className="navbar-button">
                {navContent.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}