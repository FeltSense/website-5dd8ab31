import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Sarah's architectural photography transformed our portfolio completely. Her black and white compositions capture the soul of our buildings in ways we never imagined possible.",
      name: "Marcus Rodriguez",
      role: "Principal Architect, Rodriguez & Associates",
      image: "/images/testimonial-clients-0-1766154482759.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Working with Sarah was an incredible experience. She has an extraordinary eye for detail and her ability to showcase our design work is simply unmatched in the industry.",
      name: "Elena Volkov",
      role: "Creative Director, Modern Spaces Studio",
      image: "/images/testimonial-clients-1-1766154483368.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Sarah's photography elevated our real estate listings to an art form. Her striking imagery doesn't just show spaces—it tells their stories with remarkable sophistication.",
      name: "David Park",
      role: "CEO, Metropolitan Properties",
      image: "/images/testimonial-clients-2-1766154483980.jpg",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-primary-500">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className="flex items-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-500 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-primary-100 group-hover:ring-primary-200 transition-all duration-300">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 px-6 py-3 rounded-full">
            <span className="text-slate-700 font-medium">Join our satisfied clients</span>
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}