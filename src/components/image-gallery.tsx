

import type React from "react"

interface ImageGalleryProps {
  images: string[]
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img
                src={image || "/placeholder.svg"}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">Explore Destination</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
