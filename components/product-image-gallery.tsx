"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ProductImageGallery({ images, className }: ProductImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Ensure we have valid images
  const validImages =
    Array.isArray(images) && images.length > 0
      ? images
      : [{ src: "/placeholder.svg?height=800&width=1200&text=No+Image", alt: "No image available" }]

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? validImages.length - 1 : prevIndex - 1))
  }

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === validImages.length - 1 ? 0 : prevIndex + 1))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border bg-background">
        <Image
          src={validImages[currentIndex].src || "/placeholder.svg"}
          alt={validImages[currentIndex].alt}
          fill
          className="object-contain"
          priority={currentIndex === 0}
        />

        {validImages.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                onClick={prev}
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                type="button"
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button
                onClick={next}
                size="icon"
                variant="ghost"
                className="h-10 w-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
                type="button"
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
              {validImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`h-2 w-8 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-background/50 backdrop-blur-sm"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  type="button"
                >
                  <span className="sr-only">Image {index + 1}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {validImages.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {validImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`relative aspect-square overflow-hidden rounded-md ${
                currentIndex === index ? "ring-2 ring-primary" : "ring-1 ring-border"
              }`}
              type="button"
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

