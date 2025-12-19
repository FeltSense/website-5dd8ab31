'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Eye, ExternalLink } from 'lucide-react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: '/gallery/architecture-1.jpg',
      alt: 'Modern building facade with geometric shadows',
      title: 'Geometric Shadows',
      category: 'Commercial'
    },
    {
      id: 2,
      src: '/gallery/architecture-2.jpg',
      alt: 'Spiral staircase from below',
      title: 'Ascending Lines',
      category: 'Interior'
    },
    {
      id: 3,
      src: '/gallery/architecture-3.jpg',
      alt: 'Minimalist concrete structure',
      title: 'Concrete Poetry',
      category: 'Residential'
    },
    {
      id: 4,
      src: '/gallery/architecture-4.jpg',
      alt: 'Glass office building reflection',
      title: 'Urban Reflections',
      category: 'Commercial'
    },
    {
      id: 5,
      src: '/gallery/architecture-5.jpg',
      alt: 'Industrial warehouse interior',
      title: 'Industrial Elegance',
      category: 'Industrial'
    },
    {
      id: 6,
      src: '/gallery/architecture-6.jpg',
      alt: 'Modern bridge architecture',
      title: 'Bridge to Tomorrow',
      category: 'Infrastructure'
    },
    {
      id: 7,
      src: '/gallery/architecture-7.jpg',
      alt: 'Contemporary home exterior',
      title: 'Modern Living',
      category: 'Residential'
    },
    {
      id: 8,
      src: '/gallery/architecture-8.jpg',
      alt: 'Museum interior with natural light',
      title: 'Natural Illumination',
      category: 'Cultural'
    },
    {
      id: 9,
      src: '/gallery/architecture-9.jpg',
      alt: 'Skyscraper looking up',
      title: 'Reaching Heights',
      category: 'Commercial'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of architectural masterpieces captured through our lens. 
            Each image tells a story of design, light, and human creativity frozen in time.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index === 4 ? 'lg:col-span-2' : ''}`}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-slate-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <button
                        onClick={() => setSelectedImage(image.id)}
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full transition-colors duration-300"
                      >
                        <Eye size={16} />
                        <span className="text-sm font-medium">View</span>
                      </button>
                      <button className="flex items-center space-x-2 bg-primary-500/80 hover:bg-primary-500 px-4 py-2 rounded-full transition-colors duration-300">
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Details</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 delay-200"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <span>View Complete Portfolio</span>
            <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary-500 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}