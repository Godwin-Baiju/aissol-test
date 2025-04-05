"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Download } from "lucide-react"
import { notFound } from "next/navigation"
import ProductEnquiryForm from "@/components/product-enquiry-form-fixed"
import ProductImageGallery from "@/components/product-image-gallery"
import { fetchProductById, getImageUrl, ContentfulProduct, ContentfulAsset } from "@/lib/contentful"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { use } from "react"
import Image from "next/image"
import { useNavigation } from '@/contexts/navigation-context'
import { useNavigationWithLoading } from '@/hooks/use-navigation-with-loading'
import LoadingAnimation from '@/components/loading-animation'

// Define product interface
interface Product {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  specifications: string[];
  images: {
    src: string;
    alt: string;
  }[];
  relatedProducts: string[];
  isContentful?: boolean;
  productId: string;
}

// This would typically come from a database or CMS
  

// Function to fetch product data from Contentful
async function getProductData(slug: string): Promise<Product | null> {
  try {
    // First try to fetch from Contentful
    const contentfulProduct = await fetchProductById(slug);
    
    if (contentfulProduct) {
      // Get the assets for the product
      const response = await fetch(`https://cdn.contentful.com/spaces/q25rx9gkhel0/environments/master/entries?access_token=wJE6c3JHkIJPlL_pv55REn1_fDbN36R3vSBx2X96sj8&content_type=product&select=fields.productId,fields.title,fields.categoryId,fields.categoryName,fields.description,fields.fullDescription,fields.features,fields.specifications,fields.images&sys.id=${contentfulProduct.sys.id}`);
      const data = await response.json();
      
      // Process fullDescription if it's a Rich Text object
      let processedFullDescription = contentfulProduct.fields.description;
      if (contentfulProduct.fields.fullDescription) {
        if (typeof contentfulProduct.fields.fullDescription === 'string') {
          processedFullDescription = contentfulProduct.fields.fullDescription;
        } else if (contentfulProduct.fields.fullDescription.content) {
          // Extract text from Rich Text content
          processedFullDescription = contentfulProduct.fields.fullDescription.content
            .map((node: any) => {
              if (node.nodeType === 'paragraph') {
                return node.content
                  .map((textNode: any) => textNode.value)
                  .join('');
              }
              return '';
            })
            .filter(Boolean)
            .join('\n\n');
        }
      }
      
      // Format the product data to match the expected structure
      return {
        title: contentfulProduct.fields.title,
        category: contentfulProduct.fields.categoryName || contentfulProduct.fields.categoryId,
        description: contentfulProduct.fields.description,
        fullDescription: processedFullDescription,
        features: contentfulProduct.fields.features || [],
        specifications: contentfulProduct.fields.specifications || [],
        images: contentfulProduct.fields.images.map((image: any) => {
          const assetId = image.sys.id;
          const asset = data.includes.Asset.find((a: any) => a.sys.id === assetId);
          let imageUrl = '/images/placeholder.jpg';
          
          if (asset) {
            imageUrl = asset.fields.file.url;
            if (imageUrl.startsWith('//')) {
              imageUrl = `https:${imageUrl}`;
            }
          }
          
          return {
            src: imageUrl,
            alt: contentfulProduct.fields.title,
          };
        }),
        relatedProducts: [], // Contentful doesn't have related products yet
        isContentful: true,
        productId: contentfulProduct.fields.productId || contentfulProduct.sys.id,
      };
    }
    
    // Fallback to local data if not found in Contentful
    return null;
  } catch (error) {
    console.error("Error fetching product data:", error);
    // Fallback to local data
    return null;
  }
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { setIsLoading } = useNavigation();
  const { navigateWithLoading } = useNavigationWithLoading();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoadingState] = useState(true);
  
  // Properly unwrap params using React.use()
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        setIsLoadingState(true);
        const productData = await getProductData(slug);
        if (!productData) {
          notFound();
        }
        setProduct(productData);
      } catch (error) {
        console.error("Error loading product:", error);
        notFound();
      } finally {
        setIsLoading(false);
        setIsLoadingState(false);
      }
    };

    loadProduct();
  }, [slug, setIsLoading]);

  if (isLoading) {
    return (
      <div className="container py-8 md:py-12 lg:py-16">
        <div className="flex justify-center items-center py-12">
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    navigateWithLoading(`/products?addToCart=${encodeURIComponent(product.title)}&productId=${encodeURIComponent(product.productId)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted animate-fade-in">
          <div className="container px-4 md:px-6">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Link href="/products" className="inline-flex items-center text-sm font-medium text-primary mb-4">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Products
              </Link>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{product.title}</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {product.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link href="/contact">
                    <Button className="group relative overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-2px] active:translate-y-0">
                      <span className="relative z-10">Request a Quote</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                    </Button>
                  </Link>
                  <a 
                    href="/Broucher-Al-Shaikh-International-Group.pdf" 
                    download="Broucher-Al-Shaikh-International-Group.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                      Download Brochure
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[600px] animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="relative aspect-square overflow-hidden rounded-lg animate-scale-in" style={{ animationDelay: '0.3s' }}>
                  <Image
                    src={product.images[0].src}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105 animate-pulse"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Product Description</h2>
                  <div className="text-muted-foreground space-y-4">
                    {typeof product.fullDescription === 'string' 
                      ? product.fullDescription.split("\n\n").map((paragraph: string, index: number) => (
                          <p key={index}>{paragraph}</p>
                        ))
                      : <p>{product.description}</p>
                    }
                  </div>
                </div>

                {product.features && product.features.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {product.specifications && product.specifications.length > 0 && (
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold">Technical Specifications</h3>
                        <ul className="space-y-2">
                          {product.specifications.map((spec: string, index: number) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Request Information</h3>
                    <p className="text-sm text-muted-foreground">Need more details about this product?</p>
                  </div>
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-start gap-2">
                      <p className="text-sm">
                        Our team can provide detailed specifications, compatibility information, and customized quotes.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button 
                        className="w-full"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
                      <ProductEnquiryForm productName={product.title} />
                    </div>
                  </div>
                </div>

                {product.relatedProducts && product.relatedProducts.length > 0 && (
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-2xl font-semibold leading-none tracking-tight">Related Products</h3>
                      <p className="text-sm text-muted-foreground">You might also be interested in</p>
                    </div>
                    <div className="p-6 pt-0">
                      <ul className="space-y-2">
                        {product.relatedProducts.map((relatedProduct: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4 rotate-180 text-primary" />
                            <Link href="/products" className="text-sm hover:underline">
                              {relatedProduct}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Need Assistance?</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our product specialists are ready to help you choose the right solution for your needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2 animate-slide-up" style={{ animationDelay: '0.9s' }}>
              <Link href="/contact">
                <Button className="w-full">Get Expert Advice</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

