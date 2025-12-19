import Image from 'next/image'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '150+', label: 'Projects Completed' },
  { value: '25+', label: 'Awards Won' },
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Clients Served' }
]

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                About Our Story
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Capturing the
                <span className="text-primary-500 block">Soul of Architecture</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="text-xl leading-relaxed">
                Sarah Chen Photography specializes in architectural photography that transcends mere documentation. 
                With over a decade of experience, I transform buildings into works of art through the timeless 
                elegance of black and white imagery.
              </p>
              
              <p className="leading-relaxed">
                My approach combines technical precision with artistic vision, revealing the hidden narratives 
                within concrete, steel, and glass. Each photograph captures not just the physical structure, 
                but the emotions and intentions of the architects who created them.
              </p>

              <p className="leading-relaxed">
                From intimate residential spaces to grand commercial complexes, I believe every building has 
                a unique story to tell. My award-winning work has been featured in prestigious architecture 
                magazines and exhibited in galleries worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Core Values</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Craftsmanship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Excellence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/images/about-feature-1766154504119.png"
                alt="Sarah Chen Photography - Architectural Photography Portfolio"
                width={600}
                height={800}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent-500 rounded-full opacity-15 blur-2xl"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Architectural Photographer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}