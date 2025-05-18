"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky  top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container bg-blue-500 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-black">NursingHub</span>
          </Link>
        </div>
        <nav className="hidden  md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:bg-green-500 p-2 rounded text-white  transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:bg-green-500 p-2 rounded text-white  transition-colors">
            About
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:bg-green-500 p-2 rounded text-white  transition-colors">
            Courses
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:bg-green-500 p-2 rounded text-white  transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:bg-green-500 p-2 rounded text-white  transition-colors">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link href="/apply">
            <Button className="bg-green-600 hover:bg-green-700">Apply Now</Button>
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden container py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-green-600 hover:bg-green-700">Apply Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
