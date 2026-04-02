'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { FilterSidebar } from '@/components/filter-sidebar'

const mockProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 29.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    rating: 4.5,
    reviews: 128,
    discount: 50
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 199.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    rating: 4.3,
    reviews: 89,
    discount: 33
  },
  {
    id: 3,
    name: 'Laptop Backpack',
    price: 39.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
    rating: 4.7,
    reviews: 234,
    discount: 43
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 24.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop',
    rating: 4.2,
    reviews: 156,
    discount: 44
  },
  {
    id: 5,
    name: 'USB-C Hub Adapter',
    price: 34.99,
    originalPrice: 54.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    rating: 4.6,
    reviews: 98,
    discount: 36
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1598928424272-9e663960bbec?w=300&h=300&fit=crop',
    rating: 4.8,
    reviews: 312,
    discount: 38
  },
  {
    id: 7,
    name: 'Phone Stand Holder',
    price: 12.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1586953208448-215a0c90e42e?w=300&h=300&fit=crop',
    rating: 4.1,
    reviews: 67,
    discount: 48
  },
  {
    id: 8,
    name: 'Portable Charger',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1596456101602-353b260aefbd?w=300&h=300&fit=crop',
    rating: 4.4,
    reviews: 189,
    discount: 40
  }
]

export default function HomePage() {
  const [products] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [sortBy, setSortBy] = useState('featured')

  const handleFilter = (filters: any) => {
    let filtered = [...products]
    
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category)
    }
    
    if (filters.priceRange) {
      filtered = filtered.filter(p => 
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      )
    }
    
    if (filters.rating) {
      filtered = filtered.filter(p => p.rating >= filters.rating)
    }

    setFilteredProducts(filtered)
  }

  const handleSort = (sortType: string) => {
    setSortBy(sortType)
    let sorted = [...filteredProducts]
    
    switch(sortType) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'discount':
        sorted.sort((a, b) => b.discount - a.discount)
        break
      default:
        // featured - keep original order
        break
    }
    
    setFilteredProducts(sorted)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Mega Sale Event!</h1>
        <p className="text-xl mb-6">Get up to 70% off on selected items</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Shop Now
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="lg:w-64">
          <FilterSidebar onFilter={handleFilter} />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">All Products</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select 
                value={sortBy} 
                onChange={(e) => handleSort(e.target.value)}
                className="border rounded-md px-3 py-1 text-sm"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
