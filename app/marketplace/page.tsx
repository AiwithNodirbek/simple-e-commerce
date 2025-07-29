"use client"

import Link from "next/link"
import { Search, SortDesc, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-muted/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-4xl">Fashion Store</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for shoes, clothes, accessories..."
              className="h-12 bg-white pl-10 text-base shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters Sidebar */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Reset All
              </Button>
            </div>

            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="mb-3 font-medium">Category</h3>
                <div className="space-y-2">
                  {["Shoes", "Clothing", "Accessories", "Bags", "Jewelry"].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        className="h-4 w-4 rounded border-gray-300 text-violet-600"
                      />
                      <label htmlFor={category} className="ml-2 text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-3 font-medium">Price Range</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="Min" type="number" className="h-9" />
                  <Input placeholder="Max" type="number" className="h-9" />
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="mb-3 font-medium">Brand</h3>
                <div className="space-y-2">
                  {["Nike", "Adidas", "Zara", "H&M", "Apple", "Samsung", "Gucci", "Prada"].map((brand) => (
                    <div key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`brand-${brand}`}
                        className="h-4 w-4 rounded border-gray-300 text-violet-600"
                      />
                      <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="mb-3 font-medium">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <Button key={size} variant="outline" size="sm" className="h-8 text-xs bg-transparent">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="mb-3 font-medium">Customer Rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`rating-${rating}`}
                        className="h-4 w-4 rounded border-gray-300 text-violet-600"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-1 flex items-center text-sm">
                        {rating}+ <span className="ml-1 text-yellow-500">★</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-violet-600 hover:bg-violet-700"
                onClick={() => console.log("Apply Filters clicked")}
              >
                Apply Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div>
            {/* Sorting and View Options */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <Tabs defaultValue="all" className="w-full sm:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="shoes">Shoes</TabsTrigger>
                  <TabsTrigger value="clothing">Clothing</TabsTrigger>
                  <TabsTrigger value="accessories">Accessories</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex items-center gap-2">
                <Select defaultValue="newest">
                  <SelectTrigger className="h-9 w-[180px]">
                    <SortDesc className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Nike Air Max 270",
                  category: "Shoes",
                  price: 129.99,
                  originalPrice: 159.99,
                  rating: 4.8,
                  sold: 234,
                  badge: "Sale",
                  badgeColor: "bg-red-500"
                },
                {
                  name: "Designer Cotton T-Shirt",
                  category: "Clothing",
                  price: 49.99,
                  originalPrice: null,
                  rating: 4.5,
                  sold: 156,
                  badge: "New",
                  badgeColor: "bg-emerald-500"
                },
                {
                  name: "Leather Crossbody Bag",
                  category: "Accessories",
                  price: 89.99,
                  originalPrice: 119.99,
                  rating: 4.7,
                  sold: 89,
                  badge: "Sale",
                  badgeColor: "bg-red-500"
                },
                {
                  name: "Adidas Ultraboost 22",
                  category: "Shoes",
                  price: 179.99,
                  originalPrice: null,
                  rating: 4.9,
                  sold: 312,
                  badge: "Popular",
                  badgeColor: "bg-violet-500"
                },
                {
                  name: "Premium Denim Jeans",
                  category: "Clothing",
                  price: 79.99,
                  originalPrice: 99.99,
                  rating: 4.6,
                  sold: 198,
                  badge: "Sale",
                  badgeColor: "bg-red-500"
                },
                {
                  name: "Silver Necklace Set",
                  category: "Accessories",
                  price: 39.99,
                  originalPrice: null,
                  rating: 4.4,
                  sold: 67,
                  badge: "New",
                  badgeColor: "bg-emerald-500"
                },
                {
                  name: "Puma RS-X",
                  category: "Shoes",
                  price: 109.99,
                  originalPrice: 139.99,
                  rating: 4.3,
                  sold: 145,
                  badge: "Sale",
                  badgeColor: "bg-red-500"
                },
                {
                  name: "Casual Blazer Jacket",
                  category: "Clothing",
                  price: 129.99,
                  originalPrice: null,
                  rating: 4.7,
                  sold: 123,
                  badge: "Popular",
                  badgeColor: "bg-violet-500"
                },
                {
                  name: "Designer Sunglasses",
                  category: "Accessories",
                  price: 159.99,
                  originalPrice: 199.99,
                  rating: 4.8,
                  sold: 78,
                  badge: "Sale",
                  badgeColor: "bg-red-500"
                }
              ].map((product, index) => (
                <Link href="#" key={index}>
                  <Card className="overflow-hidden border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={`/placeholder.svg?height=300&width=300`}
                        alt="Product"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <Badge className={`absolute left-2 top-2 ${product.badgeColor} hover:${product.badgeColor.replace('bg-', 'bg-')}`}>
                        {product.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <Badge variant="outline" className="rounded-sm px-2 py-0 text-xs font-normal">
                          {product.category}
                        </Badge>
                        <div className="flex items-center text-sm text-yellow-500">
                          {product.rating} <span className="ml-1">★</span>
                        </div>
                      </div>
                      <h3 className="mb-1 font-semibold">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-violet-600">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Tag className="mr-1 h-3 w-3" />
                          {product.sold} sold
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        {index % 2 === 0 ? "Free shipping" : "2-day delivery"}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-violet-50">
                3
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                4
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                5
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8 bg-transparent">
                10
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
