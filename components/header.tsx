"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : " bg-white/0 backdrop-blur-lg shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              PropList
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/properties" className="text-gray-700 font-semibold text-lg hover:text-emerald-800 transition-colors">
              Properties
            </Link>
            <Link href="#sell" className="text-gray-700 font-semibold text-lg hover:text-emerald-800 transition-colors">
              Investments
            </Link>
            <Link href="#rent" className="text-gray-700 font-semibold text-lg hover:text-emerald-800 transition-colors">
              Analysis
            </Link>
            <Link href="/blogs" className="text-gray-700 font-semibold text-lg hover:text-emerald-800 transition-colors">
              Blogs
            </Link>
            <Link href="/contact-us" className="text-gray-700 font-semibold text-lg hover:text-emerald-800 transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Get Started
            </Button>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link href="/properties" className="text-gray-700 hover:text-emerald-600 font-medium">
                Properties
              </Link>
              <Link href="#sell" className="text-gray-700 hover:text-emerald-600 font-medium">
                Investments
              </Link>
              <Link href="#agents" className="text-gray-700 hover:text-emerald-600 font-medium">
                Analysis
              </Link>
              <Link href="/blogs" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                Blogs
              </Link>
              <Link href="/contact-us" className="text-gray-700 hover:text-emerald-600 font-medium">
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
