"use client"

import { useState, useRef, useEffect, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Search, Plus, Minus, ShoppingCart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { fetchProducts, getImageUrl, ContentfulProduct, ContentfulAsset } from "@/lib/contentful"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"
import { useNavigation } from '@/contexts/navigation-context'
import { useNavigationWithLoading } from '@/hooks/use-navigation-with-loading'
import LoadingAnimation from '@/components/loading-animation'

// Create a separate component for the products content
function ProductsContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<ContentfulProduct[]>([])
  const [assets, setAssets] = useState<ContentfulAsset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)
  const categoryBarRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const { setIsLoading: setNavigationIsLoading } = useNavigation()
  const { navigateWithLoading } = useNavigationWithLoading()

  // Fetch products from Contentful
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setNavigationIsLoading(true)
        setIsLoading(true)
        console.log("Fetching products...")
        
        try {
          const response = await fetchProducts()
          console.log("Products fetched:", response.items.length)
          
          // Check if we have products
          if (response.items && response.items.length > 0) {
            setProducts(response.items)
            setAssets(response.includes.Asset)
          } else {
            console.warn("No products found in the response")
            // Set empty arrays to avoid errors
            setProducts([])
            setAssets([])
          }
        } catch (contentfulError) {
          console.error("Error fetching from Contentful:", contentfulError)
          // Set empty arrays to avoid errors
          setProducts([])
          setAssets([])
        }
      } catch (error) {
        console.error("Error in loadProducts:", error)
        // Set empty arrays to avoid errors
        setProducts([])
        setAssets([])
      } finally {
        setNavigationIsLoading(false)
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [setNavigationIsLoading])

  // Handle addToCart query parameter
  useEffect(() => {
    const addToCartParam = searchParams.get('addToCart')
    const productIdParam = searchParams.get('productId')
    
    if (addToCartParam && products.length > 0) {
      const product = products.find(p => p.fields.title === decodeURIComponent(addToCartParam))
      if (product) {
        // If productId is provided, use it instead of the default
        if (productIdParam) {
          product.fields.productId = decodeURIComponent(productIdParam)
        }
        handleAddToCart(product)
        // Remove the query parameters from the URL
        window.history.replaceState({}, '', '/products')
      }
    }
  }, [searchParams, products])

  // Scroll the category bar left/right
  const scrollCategory = (direction: "left" | "right") => {
    if (categoryBarRef.current) {
      const scrollAmount = 200
      if (direction === "left") {
        categoryBarRef.current.scrollLeft -= scrollAmount
      } else {
        categoryBarRef.current.scrollLeft += scrollAmount
      }
    }
  }

  // Product categories (50+ items)
  const categories = [
    // General & Overview
    { id: "all", name: "All Products" },
  
    // Fire Detection Systems
    { id: "fire-detection", name: "Fire Detection" },
    { id: "alarm-panels", name: "Alarm Panels" },
    { id: "smoke-detectors", name: "Smoke Detectors" },
    { id: "heat-detectors", name: "Heat Detectors" },
    { id: "manual-call-points", name: "Manual Call Points" },
    { id: "notification-devices", name: "Notification Devices" },
    { id: "flame-detectors", name: "Flame Detectors" },
    { id: "beam-detectors", name: "Beam Detectors" },
    { id: "aspirating-systems", name: "Aspirating Systems" },
    { id: "smoke-control", name: "Smoke Control" },
  
    // Fire Suppression Systems
    { id: "fire-suppression", name: "Fire Suppression" },
    { id: "fm200-systems", name: "FM200 Systems" },
    { id: "co2-systems", name: "CO2 Systems" },
    { id: "foam-systems", name: "Foam Systems" },
    { id: "sprinkler-systems", name: "Sprinkler Systems" },
    { id: "water-mist-systems", name: "Water Mist Systems" },
    { id: "kitchen-suppression", name: "Kitchen Suppression" },
    { id: "fire-hoses", name: "Fire Hoses" },
    { id: "fire-hydrants", name: "Fire Hydrants" },
    { id: "fire-pumps", name: "Fire Pumps" },
    { id: "fire-cabinets", name: "Fire Cabinets" },
  
    // Safety Equipment & Emergency Systems
    { id: "safety-equipment", name: "Safety Equipment" },
    { id: "emergency-lighting", name: "Emergency Lighting" },
    { id: "exit-signs", name: "Exit Signs" },
    { id: "emergency-lights", name: "Emergency Lights" },
    { id: "first-aid-kits", name: "First Aid Kits" },
    { id: "safety-signage", name: "Safety Signage" },
    { id: "fire-blankets", name: "Fire Blankets" },
    { id: "evacuation-equipment", name: "Evacuation Equipment" },
    { id: "emergency-phones", name: "Emergency Phones" },
    { id: "voice-evacuation", name: "Voice Evacuation" },
    { id: "testing-equipment", name: "Testing Equipment" },
    { id: "maintenance-tools", name: "Maintenance Tools" },
    { id: "spare-parts", name: "Spare Parts" },
  
    // Gas Detection & Monitoring
    { id: "gas-detection", name: "Gas Detection" },
    { id: "gas-monitors", name: "Gas Monitors" },
    { id: "toxic-gas-detectors", name: "Toxic Gas Detectors" },
    { id: "oxygen-monitors", name: "Oxygen Monitors" },
    { id: "combustible-detectors", name: "Combustible Detectors" },
    { id: "calibration-equipment", name: "Calibration Equipment" },
  
    // Personal Protective Equipment (PPE)
    { id: "personal-protective", name: "Personal Protective" },
    { id: "breathing-apparatus", name: "Breathing Apparatus" },
    { id: "fire-helmets", name: "Fire Helmets" },
    { id: "fire-gloves", name: "Fire Gloves" },
    { id: "fire-boots", name: "Fire Boots" },
    { id: "fire-suits", name: "Fire Suits" }
  ];
  
  // Filter categories to only show those with products
  const availableCategories = categories.filter(category => {
    if (category.id === "all") return true; // Always show "All Products"
    return products.some(product => product.fields.categoryId === category.id);
  });

  // Filter products based on active category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.fields.categoryId === activeCategory;
    const matchesSearch = searchQuery === "" || 
      product.fields.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.fields.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  console.log("Filtered products:", filteredProducts.length, "Active category:", activeCategory, "Search query:", searchQuery);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  console.log("Pagination:", "Current page:", currentPage, "Items per page:", itemsPerPage, "Current items:", currentItems.length, "Total pages:", totalPages);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Add to cart
  const handleAddToCart = (product: ContentfulProduct) => {
    const imageId = product.fields.images[0]?.sys.id;
    const imageUrl = imageId ? getImageUrl(imageId, assets) : '/images/placeholder.jpg';
    
    addItem({
      id: product.sys.id,
      title: product.fields.title,
      quantity: 1,
      image: imageUrl,
      productId: product.fields.productId || product.sys.id
    });
    
    // Show toast notification
    toast({
      title: "Added to Cart",
      description: `${product.fields.title} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="container py-8 md:py-12 lg:py-16">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our comprehensive range of fire safety and protection equipment.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Category Bar */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scrollCategory("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div
              ref={categoryBarRef}
              className="flex gap-2 overflow-x-auto scroll-smooth px-10 py-2"
            >
              {availableCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className="whitespace-nowrap"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scrollCategory("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <LoadingAnimation />
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-lg font-medium mb-2">No products found</p>
            <p className="text-muted-foreground mb-4">
              {searchQuery ? `No products match your search "${searchQuery}"` : 
               activeCategory !== "all" ? `No products found in the ${categories.find(c => c.id === activeCategory)?.name || activeCategory} category` : 
               "No products are available at the moment"}
            </p>
            {searchQuery || activeCategory !== "all" ? (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
              >
                Clear filters
              </Button>
            ) : null}
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentItems.map((product) => {
                // Get the first image from the product
                const imageId = product.fields.images[0]?.sys.id;
                const imageUrl = imageId ? getImageUrl(imageId, assets) : '/images/placeholder.jpg';
                
                return (
                  <div
                    key={product.sys.id}
                    className="group relative overflow-hidden rounded-lg border bg-background transition-colors hover:bg-muted/50"
                  >
                    <Link href={`/products/${product.fields.productId || product.sys.id}`}>
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={imageUrl}
                          alt={product.fields.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{product.fields.title}</h3>
                        <p className="text-sm text-muted-foreground">{product.fields.description}</p>
                      </div>
                    </Link>
                    <div className="p-4 pt-0 flex flex-col gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                      <Link href={`/products/${product.fields.productId || product.sys.id}`}>
                        <Button 
                          variant="default" 
                          size="sm" 
                          className="w-full group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] active:translate-y-0"
                          onClick={(e) => {
                            e.preventDefault();
                            navigateWithLoading(`/products/${product.fields.productId || product.sys.id}`);
                          }}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// Main component with Suspense boundary
export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <LoadingAnimation />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}

