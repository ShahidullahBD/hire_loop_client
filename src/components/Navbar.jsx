"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Image from "next/image";
import logo from '../../public/images/logo.png';




const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" }  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, isPending } = useSession();
  // console.log(session, 'session', isPending);
  const user = session?.user;
  
  const handleSignOut = async ()=>{
    await signOut();
    redirect('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto max-w-7xl">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-5 lg:px-8 h-20 flex items-center justify-between shadow-[0_0_30px_rgba(0,0,0,0.2)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          <Image className="w-40 h-auto"
          src={logo} alt="logo" width={50} height={30}/>
            {/* <span className="text-3xl font-extrabold tracking-tight">
              <span className="text-sky-500">hire</span>
              <span className="text-orange-500">loop</span>
            </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}


            {/* Vertical Divider */}
            <div className="h-8 w-px bg-white/15" />
            {
              user &&
            <div>
              <Link href="/dashboard"><Button>Dashboard</Button></Link>
            </div>
            }
            { isPending? <p>Loading....</p>:
            user ? <>
              <h2>{user.name}</h2>
              <Button variant="ghost" onClick={handleSignOut}>SignOut</Button>
            </> :
              <Link
                href="/auth/signin"
                className="text-indigo-400 hover:text-indigo-300 font-medium transition"
              >
                Sign In
              </Link>
            }
            <Link href="/auth/signup">
              <Button className="bg-linear-to-r from-indigo-600 to-violet-500 text-white font-semibold px-7 btn">
                Get Started
              </Button>
            </Link>
            {/* <Button
              as={Link}
              href="/auth/signup"
                radius="lg"
                className="bg-linear-to-r from-indigo-600 to-violet-500 text-white font-semibold px-7"
              >
                Get Started
              </Button> */}

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <Xmark width={24} height={24} />
            ) : (
              <Bars width={24} height={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen
            ? "max-h-100 opacity-100 mt-3"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="rounded-2xl border border-white/10 bg-[#121212]/95 backdrop-blur-xl p-5">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-px bg-white/10" />

              <Link
                href="/auth/signin"
                onClick={() => setIsOpen(false)}
                className="text-indigo-400 font-medium"
              >
                Sign In
              </Link>

              <Button
                as={Link}
                href="/auth/signup"
                radius="lg"
                className="w-full bg-linear-to-r from-indigo-600 to-violet-500 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}