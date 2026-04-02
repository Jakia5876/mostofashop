'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface FilterSidebarProps {
  onFilter: (filters: any) => void
}

export function FilterSidebar({ onFilter }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRating, setSelectedRating] = useState(0)

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Garden',
    'Sports',
    'Books',
    'Toys'
  ]

  const handlePriceChange = (index: number, value: string) => {
    const newRange = [...priceRange]
    newRange[index] = parseInt(value) || 0
    setPriceRange(newRange)
  }

  const applyFilters = () => {
    onFilter({
      category: selectedCategory,
      priceRange,
      rating: selectedRating
    })
  }

  const clearFilters = () => {
    setSelectedCategory('')
    setPriceRange([0, 500])
    setSelectedRating(0)
    onFilter({})
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mr-2"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Price Range</h4>
        <div className="space-y-3">
          <div>
            <label className="text-sm text-gray-600">Min Price</label>
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Max Price</label>
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              placeholder="500"
            />
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Minimum Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={(e) => setSelectedRating(parseInt(e.target.value))}
                className="mr-2"
              />
              <span className="text-sm">
                {rating} {'★'.repeat(rating)} & up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button onClick={applyFilters} className="w-full">
          Apply Filters
        </Button>
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
