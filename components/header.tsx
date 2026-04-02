'use client'

import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">ShopEasy</h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Categories Navigation */}
        <nav className="hidden md:flex space-x-6 py-4 border-t">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Electronics</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Fashion</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home & Garden</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Sports</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Books</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Toys</a>
        </nav>
      </div>
    </header>
  )
}
