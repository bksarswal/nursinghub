import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Award, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Best Coaching for B.Sc Nursing Students
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empowering future nurses with quality education, expert guidance, and comprehensive preparation for a
                  successful career in healthcare.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/apply">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Join Now
                  </Button>
                </Link>
                <Link href="https://wa.me/+917023742939" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Nursing students learning"
                width={400}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Yogesh Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Yogesh"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Meet Dr. Yogesh</h2>
              <p className="text-gray-500 dark:text-gray-400">
                With extensive experience in B.Sc Nursing education, Dr. Yogesh is dedicated to helping students excel
                in their nursing careers. His teaching methodology combines theoretical knowledge with practical
                insights, ensuring students are well-prepared for examinations and real-world healthcare scenarios.
              </p>
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Courses</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive courses designed to help nursing students excel in their studies and career.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Anatomy & Physiology
                </CardTitle>
                <CardDescription>Foundation of nursing education</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Comprehensive study of human body structure and functions essential for nursing practice.</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Microbiology
                </CardTitle>
                <CardDescription>Understanding microorganisms</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Study of microorganisms and their role in health and disease.</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Fundamentals of Nursing
                </CardTitle>
                <CardDescription>Core nursing principles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Essential nursing concepts, procedures, and patient care techniques.</p>
              </CardContent>
              <CardFooter>
                <Link href="/courses" className="text-blue-600 hover:underline">
                  Learn more
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/courses">
              <Button>View All Courses</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose NursingHub?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are committed to providing the best education for nursing students.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <Award className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Expert Faculty</h3>
              <p className="text-center text-gray-500">
                Led by Dr. Yogesh, our faculty consists of experienced nursing professionals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <CheckCircle className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Comprehensive Curriculum</h3>
              <p className="text-center text-gray-500">
                Covers all subjects with in-depth explanations and practical insights.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border p-6 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-bold">Flexible Batch Timings</h3>
              <p className="text-center text-gray-500">Multiple batch options to accommodate different schedules.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Nursing Journey?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join NursingHub today and take the first step towards a successful nursing career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/apply">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Apply Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
