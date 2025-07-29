import Link from "next/link"
import { ArrowLeft, Check, Heart, Share2, ShieldCheck, Star, User, Truck, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-muted/20 pb-16">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/marketplace" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border bg-white">
              <img src="/placeholder.svg?height=600&width=600" alt="Product" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="cursor-pointer overflow-hidden rounded-md border bg-white">
                  <img
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={`Product image ${img}`}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Badge className="bg-emerald-500 hover:bg-emerald-600">In Stock</Badge>
              <Badge variant="outline">Nike</Badge>
            </div>
            <h1 className="mb-2 text-3xl font-bold">Nike Air Max 270 - Black/White</h1>

            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center">
                <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="mr-1 h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-2 text-sm font-medium">4.8 (324 reviews)</span>
              </div>
              <span className="text-sm text-muted-foreground">1,240 sold</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-violet-600">$129.99</span>
              <span className="ml-2 text-sm text-muted-foreground line-through">$159.99</span>
              <span className="ml-2 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">19% OFF</span>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5"].map((size) => (
                  <Button key={size} variant="outline" className="h-12 bg-transparent">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold">Color</h3>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-black border-2 border-violet-600 cursor-pointer"></div>
                <div className="h-8 w-8 rounded-full bg-white border cursor-pointer"></div>
                <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"></div>
                <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer"></div>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="mb-3 font-semibold">Quantity</h3>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Separator className="my-6" />

            <div className="mb-6 space-y-4">
              <h3 className="font-semibold">Product Features</h3>
              <ul className="grid gap-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Air Max cushioning for all-day comfort</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Breathable mesh upper with synthetic overlays</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Durable rubber outsole with excellent traction</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-emerald-500" />
                  <span>Lightweight design perfect for daily wear</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Seller" />
                  <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Nike Store</p>
                  <p className="text-xs text-muted-foreground">Official Retailer</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                <User className="mr-2 h-4 w-4" />
                View Store
              </Button>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-violet-600 hover:bg-violet-700">Add to Cart</Button>
              <Button className="flex-1 bg-transparent" variant="outline">
                Buy Now
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-4 w-4 text-emerald-500" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw className="h-4 w-4 text-blue-500" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-violet-500" />
                <span>2-year manufacturer warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (324)</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="size-guide">Size Guide</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Product Specifications</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium">General Information</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Brand</span>
                          <span>Nike</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Model</span>
                          <span>Air Max 270</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Gender</span>
                          <span>Unisex</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Category</span>
                          <span>Athletic Shoes</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Season</span>
                          <span>All Season</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Materials & Care</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Upper Material</span>
                          <span>Mesh & Synthetic</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Sole Material</span>
                          <span>Rubber</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Closure Type</span>
                          <span>Lace-up</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-muted-foreground">Care Instructions</span>
                          <span>Spot clean only</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-5xl font-bold">4.8</div>
                      <div className="flex items-center justify-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">324 reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="mb-1 flex items-center gap-2">
                          <div className="text-sm">{rating} stars</div>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-yellow-400"
                              style={{
                                width:
                                  rating === 5
                                    ? "85%"
                                    : rating === 4
                                      ? "12%"
                                      : rating === 3
                                        ? "2%"
                                        : rating === 2
                                          ? "1%"
                                          : "0%",
                              }}
                            ></div>
                          </div>
                          <div className="text-sm">
                            {rating === 5 ? "275" : rating === 4 ? "39" : rating === 3 ? "7" : rating === 2 ? "3" : "0"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator className="my-6" />
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review}>
                        <div className="mb-2 flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt="Reviewer" />
                            <AvatarFallback>U{review}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">Customer{review}</p>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <span className="ml-2 text-xs text-muted-foreground">1 week ago</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Amazing shoes! Super comfortable and stylish. The Air Max cushioning really makes a difference
                          for all-day wear. Highly recommend!
                        </p>
                        {review !== 3 && <Separator className="my-4" />}
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-4 w-full bg-transparent">
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Similar Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Link href="#" key={item}>
                <Card className="overflow-hidden border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={`/placeholder.svg?height=300&width=300`}
                      alt="Product"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-1 font-semibold">Nike Air Force 1</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-violet-600">${89 + item * 10}.99</span>
                      <div className="flex items-center text-sm text-yellow-500">
                        4.{6 + item} <span className="ml-1">★</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
