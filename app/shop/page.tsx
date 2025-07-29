"use client"

import Link from "next/link"
import { Search, Filter, Grid, List, Star, Package, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopPage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Shoes",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      sold: 234,
      badge: "Sale",
      badgeColor: "bg-red-500",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 2,
      name: "Designer Cotton T-Shirt",
      category: "Clothing",
      price: 49.99,
      originalPrice: null,
      rating: 4.5,
      sold: 156,
      badge: "New",
      badgeColor: "bg-emerald-500",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 3,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.7,
      sold: 89,
      badge: "Sale",
      badgeColor: "bg-red-500",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 4,
      name: "Adidas Ultraboost 22",
      category: "Shoes",
      price: 179.99,
      originalPrice: null,
      rating: 4.9,
      sold: 312,
      badge: "Popular",
      badgeColor: "bg-violet-500",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 5,
      name: "Premium Denim Jeans",
      category: "Clothing",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.6,
      sold: 198,
      badge: "Sale",
      badgeColor: "bg-red-500",
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 6,
      name: "Silver Necklace Set",
      category: "Accessories",
      price: 39.99,
      originalPrice: null,
      rating: 4.4,
      sold: 67,
      badge: "New",
      badgeColor: "bg-emerald-500",
      image: "/placeholder.svg?height=300&width=300"
    }
  ]

  const categories = [
    { name: "Shoes", count: 2847, icon: "👟" },
    { name: "Clothing", count: 3892, icon: "👕" },
    { name: "Accessories", count: 1567, icon: "👜" },
    { name: "Bags", count: 923, icon: "🛍️" },
    { name: "Jewelry", count: 745, icon: "💍" }
  ]

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Start Shopping</h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Discover amazing products at unbeatable prices
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for products..."
                  className="h-14 bg-white pl-12 pr-4 text-base shadow-lg text-black"
                />
                <Button className="absolute right-2 top-2 h-10 bg-violet-600 hover:bg-violet-700">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Products Available</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Main Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">Shipping</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Quick Access */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground">Quick access to your favorite categories</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link href={`/marketplace?category=${category.name.toLowerCase()}`} key={category.name}>
                <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 text-3xl">{category.icon}</div>
                    <h3 className="mb-1 font-semibold group-hover:text-primary">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} products</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <p className="text-muted-foreground">Handpicked products just for you</p>
            </div>
            <Link href="/marketplace">
              <Button variant="outline">
                View All Products
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <h3 className="mb-1 font-semibold group-hover:text-primary">
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
                        <Package className="mr-1 h-3 w-3" />
                        {product.sold} sold
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Special Offers</h2>
            <p className="text-muted-foreground">Limited time deals and discounts</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden bg-gradient-to-r from-red-500 to-pink-600 text-white">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <Badge className="bg-white/20 text-white">Flash Sale</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Up to 70% Off</h3>
                <p className="mb-4 text-white/80">On selected clothing and accessories</p>
                <Button className="bg-white text-red-600 hover:bg-white/90">
                  Shop Sale
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <Badge className="bg-white/20 text-white">New Arrivals</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">New Collection</h3>
                <p className="mb-4 text-white/80">Latest trends in shoes and bags</p>
                <Button className="bg-white text-blue-600 hover:bg-white/90">
                  Explore New
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Shop With Us */}
        <section>
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Why Shop With Us</h2>
            <p className="text-muted-foreground">We provide the best shopping experience</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl">🚚</div>
                <h3 className="mb-2 font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl">🔄</div>
                <h3 className="mb-2 font-bold">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 text-3xl">🛡️</div>
                <h3 className="mb-2 font-bold">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% secure checkout</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
} 