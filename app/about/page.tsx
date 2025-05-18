import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, Users, Heart } from "lucide-react"

export const metadata = {
  title: "About Us | NursingHub",
  description: "Learn about NursingHub and Dr. Yogesh's vision for nursing education.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About NursingHub</h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                NursingHub was founded with a vision to provide quality education to nursing students, helping them
                build a strong foundation for their healthcare careers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="NursingHub Campus"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex justify-center order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Yogesh"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                NursingHub was established by Dr. Yogesh, a passionate educator with extensive experience in B.Sc
                Nursing. Recognizing the challenges faced by nursing students, Dr. Yogesh created a coaching center that
                focuses on comprehensive education, practical knowledge, and exam preparation.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Since our inception, we have helped hundreds of students achieve their dreams of becoming successful
                nursing professionals. Our teaching methodology combines theoretical knowledge with practical insights,
                ensuring students are well-prepared for both examinations and real-world healthcare scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Yogesh Profile */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Dr. Yogesh</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The visionary behind NursingHub
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8 space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Dr. Yogesh"
                width={200}
                height={200}
                className="rounded-full object-cover"
              />
              <div className="space-y-2 text-center">
                <h3 className="text-2xl font-bold">Dr. Yogesh</h3>
                <p className="text-blue-600">B.Sc Nursing, Educator & Founder</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400">
                Dr. Yogesh brings years of experience in nursing education and practice to NursingHub. With a strong
                academic background in B.Sc Nursing and a passion for teaching, he has dedicated his career to helping
                nursing students achieve excellence.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                His teaching philosophy emphasizes understanding core concepts rather than rote memorization, preparing
                students not just for exams but for successful careers in healthcare. Dr. Yogesh's vision is to create a
                new generation of competent, compassionate, and confident nursing professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose NursingHub?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                What sets us apart from other coaching centers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Expert Faculty</CardTitle>
                <Award className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Learn from experienced nursing professionals led by Dr. Yogesh.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Comprehensive Curriculum</CardTitle>
                <BookOpen className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Covers all subjects with in-depth explanations and practical insights.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Small Batch Sizes</CardTitle>
                <Users className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Personalized attention with limited students per batch.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Holistic Approach</CardTitle>
                <Heart className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Focus on both academic excellence and professional development.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
