import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Gallery | NursingHub",
  description: "View photos of NursingHub classes, activities, and events.",
}

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Gallery</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore our classes, activities, and events through photos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="classes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
            </TabsList>
            <TabsContent value="classes">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={`class-${i}`} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Class+Photo+${i}`}
                      alt={`Classroom photo ${i}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={`event-${i}`} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Event+Photo+${i}`}
                      alt={`Event photo ${i}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="campus">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={`campus-${i}`} className="overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Campus+Photo+${i}`}
                      alt={`Campus photo ${i}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Gallery */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Video Testimonials</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our students about their experience at NursingHub
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video Testimonial 1</p>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Video Testimonial 2</p>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}
