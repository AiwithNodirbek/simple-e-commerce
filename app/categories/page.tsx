import Link from "next/link"
import { Search, Filter, Grid, List, TrendingUp, Star, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CategoriesPage() {
  const categories = [
    {
      id: "shoes",
      name: "Shoes & Footwear",
      description: "Athletic shoes, boots, sandals, and designer footwear for every occasion",
      icon: "👟",
      color: "from-violet-500 to-purple-600",
      listings: 2847,
      avgPrice: 129,
      trending: true,
      subcategories: ["Sneakers", "Boots", "Sandals", "Dress Shoes", "Athletic"],
      featured: [
        { name: "Nike Air Max", count: 456 },
        { name: "Adidas Ultraboost", count: 389 },
        { name: "Converse Chuck Taylor", count: 234 },
      ],
    },
    {
      id: "clothing",
      name: "Clothing & Apparel",
      description: "Fashion-forward clothing for men, women, and children from top brands",
      icon: "👕",
      color: "from-blue-500 to-cyan-600",
      listings: 3892,
      avgPrice: 85,
      trending: true,
      subcategories: ["T-Shirts", "Jeans", "Dresses", "Jackets", "Activewear"],
      featured: [
        { name: "Designer T-Shirts", count: 612 },
        { name: "Denim Jeans", count: 498 },
        { name: "Summer Dresses", count: 345 },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      description: "Bags, jewelry, watches, and fashion accessories to complete your look",
      icon: "👜",
      color: "from-pink-500 to-rose-600",
      listings: 1567,
      avgPrice: 65,
      trending: false,
      subcategories: ["Bags", "Jewelry", "Watches", "Sunglasses", "Belts"],
      featured: [
        { name: "Leather Handbags", count: 289 },
        { name: "Gold Jewelry", count: 198 },
        { name: "Designer Watches", count: 145 },
      ],
    },
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets, smartphones, laptops, and electronic accessories",
      icon: "📱",
      color: "from-emerald-500 to-teal-600",
      listings: 1234,
      avgPrice: 299,
      trending: true,
      subcategories: ["Smartphones", "Laptops", "Headphones", "Cameras", "Gaming"],
      featured: [
        { name: "iPhone Cases", count: 367 },
        { name: "Wireless Headphones", count: 234 },
        { name: "Gaming Accessories", count: 189 },
      ],
    },
    {
      id: "home",
      name: "Home & Garden",
      description: "Home decor, furniture, kitchen essentials, and garden supplies",
      icon: "🏠",
      color: "from-amber-500 to-orange-600",
      listings: 923,
      avgPrice: 145,
      trending: false,
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding", "Garden"],
      featured: [
        { name: "Throw Pillows", count: 223 },
        { name: "Kitchen Gadgets", count: 198 },
        { name: "Plant Pots", count: 156 },
      ],
    },
    {
      id: "sports",
      name: "Sports & Outdoors",
      description: "Athletic gear, outdoor equipment, and fitness accessories",
      icon: "⚽",
      color: "from-green-500 to-emerald-600",
      listings: 745,
      avgPrice: 89,
      trending: true,
      subcategories: ["Fitness", "Outdoor Gear", "Team Sports", "Water Sports", "Cycling"],
      featured: [
        { name: "Yoga Mats", count: 167 },
        { name: "Camping Gear", count: 134 },
        { name: "Fitness Trackers", count: 98 },
      ],
    },
  ]

  const trendingCategories = categories.filter((cat) => cat.trending)
  const popularSubcategories = [
    { name: "Nike Sneakers", category: "Shoes", count: 456, growth: "+18%" },
    { name: "Designer T-Shirts", category: "Clothing", count: 612, growth: "+12%" },
    { name: "Wireless Headphones", category: "Electronics", count: 234, growth: "+25%" },
    { name: "Yoga Equipment", category: "Sports", count: 167, growth: "+15%" },
  ]

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Shop by Category</h1>
            <p className="mb-8 text-lg text-white/80 md:text-xl">
              Discover thousands of products across all categories
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for shoes, clothes, accessories..."
                  className="h-14 bg-white pl-12 pr-4 text-base shadow-lg text-black"
                />
                <Button className="absolute right-2 top-2 h-10 bg-violet-600 hover:bg-violet-700">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Bar */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">11,208</div>
              <div className="text-sm text-muted-foreground">Total Products</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Main Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">1,247</div>
              <div className="text-sm text-muted-foreground">Active Brands</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="mb-2 text-2xl font-bold text-primary">$127</div>
              <div className="text-sm text-muted-foreground">Avg. Price</div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Categories */}
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Trending Categories</h2>
              <p className="text-muted-foreground">Most popular categories this week</p>
            </div>
            <Badge className="bg-red-500 hover:bg-red-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              Hot
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingCategories.map((category) => (
              <Link href={`/marketplace?category=${category.id}`} key={category.id}>
                <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-3xl">{category.icon}</div>
                      <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Trending</Badge>
                    </div>
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary">{category.name}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{category.listings} products</span>
                      <span className="text-muted-foreground">Avg. ${category.avgPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Categories */}
        <section className="mb-12">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">All Categories</h2>
              <p className="text-muted-foreground">Explore all available product categories</p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="popular">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="grid" className="flex items-center gap-2">
                <Grid className="h-4 w-4" />
                Grid View
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <List className="h-4 w-4" />
                List View
              </TabsTrigger>
            </TabsList>

            <TabsContent value="grid">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                  <Link href={`/marketplace?category=${category.id}`} key={category.id}>
                    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="text-3xl">{category.icon}</div>
                          {category.trending && (
                            <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                              <TrendingUp className="mr-1 h-3 w-3" />
                              Hot
                            </Badge>
                          )}
                        </div>
                        <h3 className="mb-2 text-xl font-bold group-hover:text-primary">{category.name}</h3>
                        <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>

                        {/* Subcategories */}
                        <div className="mb-4">
                          <div className="mb-2 text-xs font-medium text-muted-foreground">POPULAR SUBCATEGORIES</div>
                          <div className="flex flex-wrap gap-1">
                            {category.subcategories.slice(0, 3).map((sub) => (
                              <Badge key={sub} variant="outline" className="text-xs">
                                {sub}
                              </Badge>
                            ))}
                            {category.subcategories.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{category.subcategories.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                              <Package className="h-3 w-3" />
                              {category.listings}
                            </span>
                            <span className="text-muted-foreground">Avg. ${category.avgPrice}</span>
                          </div>
                          <div className="flex items-center gap-1 text-yellow-500">
                            <Star className="h-3 w-3 fill-current" />
                            <span className="text-xs">4.{Math.floor(Math.random() * 3) + 6}</span>
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
                {categories.map((category) => (
                  <Link href={`/marketplace?category=${category.id}`} key={category.id}>
                    <Card className="group transition-all duration-300 hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-6">
                          <div
                            className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${category.color} text-2xl text-white`}
                          >
                            {category.icon}
                          </div>

                          <div className="flex-1">
                            <div className="mb-2 flex items-center gap-2">
                              <h3 className="text-xl font-bold group-hover:text-primary">{category.name}</h3>
                              {category.trending && (
                                <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                                  <TrendingUp className="mr-1 h-3 w-3" />
                                  Hot
                                </Badge>
                              )}
                            </div>
                            <p className="mb-3 text-muted-foreground">{category.description}</p>

                            {/* Featured Items */}
                            <div className="mb-3">
                              <div className="mb-1 text-xs font-medium text-muted-foreground">FEATURED ITEMS</div>
                              <div className="flex gap-4 text-sm">
                                {category.featured.map((item) => (
                                  <span key={item.name} className="text-muted-foreground">
                                    {item.name} ({item.count})
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="mb-1 text-2xl font-bold text-primary">{category.listings}</div>
                            <div className="text-sm text-muted-foreground">products</div>
                            <div className="mt-2 text-sm">
                              Avg. <span className="font-medium">${category.avgPrice}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Popular Subcategories */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Popular Subcategories</h2>
            <p className="text-muted-foreground">Fastest growing subcategories this month</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularSubcategories.map((sub) => (
              <Link href={`/marketplace?subcategory=${sub.name.toLowerCase().replace(/\s+/g, "-")}`} key={sub.name}>
                <Card className="group transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium group-hover:text-primary">{sub.name}</h3>
                        <p className="text-sm text-muted-foreground">{sub.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{sub.count}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{sub.growth}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
