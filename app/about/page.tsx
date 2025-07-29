import Link from "next/link"
import { Check, Users, Award, Globe, Heart, Shield, Truck, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/10 text-white backdrop-blur-sm">About Us</Badge>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Learn More About FashionStore</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
            We're passionate about bringing you the latest fashion trends with quality products and exceptional service.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/shop">
              <Button size="lg" className="bg-white text-violet-700 hover:bg-white/90">
                Start Shopping
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">How It All Started</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  FashionStore was founded in 2020 with a simple mission: to make fashion accessible to everyone. 
                  What started as a small local boutique has grown into one of the most trusted online fashion destinations.
                </p>
                <p>
                  Our journey began when our founder, Sarah Johnson, noticed that quality fashion was either too expensive 
                  or too difficult to find online. She envisioned a platform that would bridge this gap, offering 
                  premium products at reasonable prices with exceptional customer service.
                </p>
                <p>
                  Today, we serve customers worldwide, offering a curated selection of clothing, shoes, and accessories 
                  from both established brands and emerging designers. Our commitment to quality, style, and customer 
                  satisfaction remains at the heart of everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 p-8 text-white">
                <div className="flex h-full flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                  <p className="text-lg text-white/90">
                    "To inspire confidence through fashion, making quality style accessible to everyone while 
                    maintaining the highest standards of customer service and product quality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Drives Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core values guide everything we do and help us deliver the best experience to our customers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Heart,
                title: "Customer First",
                description: "Every decision we make is with our customers in mind."
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "We never compromise on the quality of our products."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connecting fashion lovers worldwide through our platform."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for excellence in every aspect of our business."
              }
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-violet-100 p-3 text-violet-600 dark:bg-violet-900/30">
                      <value.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Makes Us Different</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover the unique advantages that set FashionStore apart from the competition.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                {
                  icon: Check,
                  title: "Curated Selection",
                  description: "Every product is carefully selected by our fashion experts to ensure quality and style."
                },
                {
                  icon: Check,
                  title: "Fast Delivery",
                  description: "Get your orders delivered quickly with our efficient shipping network."
                },
                {
                  icon: Check,
                  title: "Easy Returns",
                  description: "Not satisfied? We offer hassle-free returns within 30 days."
                },
                {
                  icon: Check,
                  title: "24/7 Support",
                  description: "Our customer service team is always here to help you."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2 text-green-600 dark:bg-green-900/30">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
                <div className="flex h-full flex-col justify-center">
                  <h3 className="mb-4 text-2xl font-bold">Our Promise</h3>
                  <p className="text-lg text-white/90">
                    "We promise to deliver not just products, but an exceptional shopping experience that 
                    makes you feel confident and beautiful."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { label: "Happy Customers", value: "50,000+", icon: Users },
              { label: "Products Sold", value: "200,000+", icon: Award },
              { label: "Countries Served", value: "25+", icon: Globe },
              { label: "Years Experience", value: "5+", icon: Heart }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-violet-100 p-3 text-violet-600 dark:bg-violet-900/30">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="mb-2 text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Meet the People Behind FashionStore</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our dedicated team works tirelessly to bring you the best fashion experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                description: "Passionate about making fashion accessible to everyone."
              },
              {
                name: "Michael Chen",
                role: "Head of Design",
                description: "Curates our product selection with an eye for style."
              },
              {
                name: "Emily Rodriguez",
                role: "Customer Experience",
                description: "Ensures every customer has an exceptional experience."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 aspect-square overflow-hidden rounded-full bg-muted">
                    <img
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mb-1 font-bold">{member.name}</h3>
                  <p className="mb-3 text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-violet-600 to-purple-700 text-white">
            <CardContent className="p-12">
              <h2 className="mb-4 text-3xl font-bold">Ready to Start Shopping?</h2>
              <p className="mb-8 text-lg text-white/80">
                Join thousands of satisfied customers who trust FashionStore for their fashion needs.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/shop">
                  <Button size="lg" className="bg-white text-violet-700 hover:bg-white/90">
                    Start Shopping
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
} 