'use client'

import { Award, Camera, Building2, Palette, FileText, Star } from 'lucide-react'

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Features() {
  const features: FeatureCard[] = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Published in Prestigious Design Publications",
      description: "Featured work in Architectural Digest, Dwell Magazine, and leading industry publications worldwide."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-Winning Photography Expertise",
      description: "Recognized excellence with multiple industry awards for architectural photography and artistic vision."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Specialized in Architectural Spaces",
      description: "Deep expertise in capturing the essence of architectural and interior design with precision and artistry."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Distinctive Black and White Aesthetic",
      description: "Signature monochrome style that emphasizes form, texture, and the emotional impact of spaces."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Project Documentation",
      description: "Comprehensive documentation services for architects, designers, and developers with meticulous attention to detail."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Uncompromising Quality Standards",
      description: "Every image crafted with exceptional technical precision and artistic vision to exceed expectations."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose 
            <span className="text-primary-500 block mt-2">Sarah Chen Photography</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Capturing the soul of architectural design through masterful black and white photography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 font-medium">Trusted by Leading Architects</span>
            </div>
            <div className="w-px h-6 bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-gray-600 font-medium">Award-Winning Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}