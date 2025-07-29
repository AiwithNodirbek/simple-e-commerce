"use client"

import Link from "next/link"
import { Search, Filter, Star, Package, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CollectionsPage() {
  const collections = [
    {
      id: "summer-2024",
      name: "Summer 2024",
      description: "Light and breezy styles for the warm season",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 156,
      featured: true,
      badge: "New",
      badgeColor: "bg-emerald-500"
    },
    {
      id: "winter-essentials",
      name: "Winter Essentials",
      description: "Cozy and warm clothing for cold weather",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 203,
      featured: true,
      badge: "Popular",
      badgeColor: "bg-violet-500"
    },
    {
      id: "athletic-wear",
      name: "Athletic Wear",
      description: "Performance gear for active lifestyles",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 89,
      featured: false,
      badge: "Trending",
      badgeColor: "bg-orange-500"
    },
    {
      id: "evening-elegance",
      name: "Evening Elegance",
      description: "Sophisticated styles for special occasions",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 67,
      featured: false,
      badge: "Limited",
      badgeColor: "bg-red-500"
    },
    {
      id: "casual-comfort",
      name: "Casual Comfort",
      description: "Relaxed and comfortable everyday wear",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 234,
      featured: false,
      badge: "Best Seller",
      badgeColor: "bg-blue-500"
    },
    {
      id: "street-style",
      name: "Street Style",
      description: "Urban fashion with attitude",
      image: "/placeholder.svg?height=400&width=400",
      productCount: 145,
      featured: false,
      badge: "Hot",
      badgeColor: "bg-pink-500"
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Summer Dress Collection",
      collection: "Summer 2024",
      price: 89.99,
      rating: 4.8,
      sold: 156,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 2,
      name: "Winter Coat Set",
      collection: "Winter Essentials",
      price: 199.99,
      rating: 4.9,
      sold: 89,
      image: "/placeholder.svg?height=300&width=300"
    },
    {
      id: 3,
      name: "Athletic Shoes Pack",
      collection: "Athletic Wear",
      price: 149.99,
      rating: 4.7,
      sold: 234,
      image: "/placeholder.svg?height=300&width=300"
    }
  ]

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Fashion Collections</h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Discover our carefully curated collections designed for every style and occasion
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search collections..."
                  className="h-14 bg-white pl-12 pr-4 text-base shadow-lg text-black"
                />
                <Button className="absolute right-2 top-2 h-10 bg-violet-600 hover:bg-violet-700">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Collections */}
        <section className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Featured Collections</h2>
              <p className="text-muted-foreground">Our most popular and trending collections</p>
            </div>
            <Badge className="bg-red-500 hover:bg-red-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              Trending
            </Badge>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {collections.filter(c => c.featured).map((collection) => (
              <Link href={`/collections/${collection.id}`} key={collection.id}>
                <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className={`absolute left-4 top-4 ${collection.badgeColor} hover:${collection.badgeColor.replace('bg-', 'bg-')}`}>
                      {collection.badge}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary">{collection.name}</h3>
                    <p className="mb-4 text-muted-foreground">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{collection.productCount} products</span>
                      <Button variant="outline" size="sm" className="opacity-0 transition-opacity group-hover:opacity-100">
                        Explore Collection
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Collections */}
        <section className="mb-16">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">All Collections</h2>
              <p className="text-muted-foreground">Browse through all our fashion collections</p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="featured">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {collections.map((collection) => (
                  <Link href={`/collections/${collection.id}`} key={collection.id}>
                    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img
                          src={collection.image}
                          alt={collection.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className={`absolute left-2 top-2 ${collection.badgeColor} hover:${collection.badgeColor.replace('bg-', 'bg-')}`}>
                          {collection.badge}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-1 font-semibold group-hover:text-primary">{collection.name}</h3>
                        <p className="mb-3 text-sm text-muted-foreground">{collection.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{collection.productCount} products</span>
                          <div className="flex items-center text-yellow-500">
                            <Star className="mr-1 h-3 w-3 fill-current" />
                            <span>4.{Math.floor(Math.random() * 3) + 6}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="list">
              <div className="space-y-4">
                {collections.map((collection) => (
                  <Link href={`/collections/${collection.id}`} key={collection.id}>
                    <Card className="group transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                            <img
                              src={collection.image}
                              alt={collection.name}
                              className="h-full w-full object-cover"
                            />
                            <Badge className={`absolute left-2 top-2 ${collection.badgeColor} hover:${collection.badgeColor.replace('bg-', 'bg-')}`}>
                              {collection.badge}
                            </Badge>
                          </div>

                          <div className="flex-1">
                            <h3 className="mb-2 text-xl font-bold group-hover:text-primary">{collection.name}</h3>
                            <p className="mb-3 text-muted-foreground">{collection.description}</p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1">
                                <Package className="h-3 w-3" />
                                {collection.productCount} products
                              </span>
                              <div className="flex items-center text-yellow-500">
                                <Star className="mr-1 h-3 w-3 fill-current" />
                                <span>4.{Math.floor(Math.random() * 3) + 6}</span>
                              </div>
                            </div>
                          </div>

                          <Button variant="outline" className="opacity-0 transition-opacity group-hover:opacity-100">
                            View Collection
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Featured Products from Collections */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked items from our collections</p>
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
                    <Badge className="absolute left-2 top-2 bg-violet-500 hover:bg-violet-600">
                      {product.collection}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline" className="rounded-sm px-2 py-0 text-xs font-normal">
                        Featured
                      </Badge>
                      <div className="flex items-center text-sm text-yellow-500">
                        {product.rating} <span className="ml-1">★</span>
                      </div>
                    </div>
                    <h3 className="mb-1 font-semibold group-hover:text-primary">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-violet-600">${product.price}</span>
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

        {/* Seasonal Collections */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Seasonal Collections</h2>
            <p className="text-muted-foreground">Collections designed for every season</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <Badge className="bg-white/20 text-white">Summer</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Summer 2024</h3>
                <p className="mb-4 text-white/80">Light and breezy styles for the warm season</p>
                <Button className="bg-white text-orange-600 hover:bg-white/90">
                  Explore Summer
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <Badge className="bg-white/20 text-white">Winter</Badge>
                </div>
                <h3 className="mb-2 text-2xl font-bold">Winter Essentials</h3>
                <p className="mb-4 text-white/80">Cozy and warm clothing for cold weather</p>
                <Button className="bg-white text-blue-600 hover:bg-white/90">
                  Explore Winter
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
} 