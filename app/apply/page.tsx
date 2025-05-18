"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    course: "",
    batch: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Application submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // In a real implementation, you would send this data to your backend
      // or use a service like EmailJS or Firebase
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <main className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-center">Application Submitted!</CardTitle>
              <CardDescription className="text-center">Thank you for applying to NursingHub</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">
                We've received your application and will contact you shortly to discuss the next steps.
              </p>
              <p className="text-sm text-gray-500">
                If you have any questions, please feel free to contact us at{" "}
                <Link href="tel:+917023742939" className="text-blue-600 hover:underline">
                  +91 7023742939
                </Link>
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/">
                <Button>Return to Home</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>
      </main>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Apply Now</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take the first step towards your nursing career by applying to NursingHub
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Admission Inquiry Form</CardTitle>
                <CardDescription>
                  Fill out the form below to inquire about admission to NursingHub. Our team will contact you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="education" className="text-sm font-medium">
                      Educational Background
                    </label>
                    <Input
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Your current education/qualification"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="course" className="text-sm font-medium">
                        Interested Course
                      </label>
                      <Select
                        onValueChange={(value) => handleSelectChange("course", value)}
                        defaultValue={formData.course}
                      >
                        <SelectTrigger id="course">
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single-subject">Single Subject</SelectItem>
                          <SelectItem value="semester-package">Semester Package</SelectItem>
                          <SelectItem value="full-program">Full B.Sc Program</SelectItem>
                          <SelectItem value="exam-preparation">Exam Preparation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="batch" className="text-sm font-medium">
                        Preferred Batch
                      </label>
                      <Select
                        onValueChange={(value) => handleSelectChange("batch", value)}
                        defaultValue={formData.batch}
                      >
                        <SelectTrigger id="batch">
                          <SelectValue placeholder="Select batch" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* <SelectItem value="morning">Morning Batch</SelectItem>
                          <SelectItem value="afternoon">Afternoon Batch</SelectItem> */}
                          <SelectItem value="evening">Evening Batch</SelectItem>
                          {/* <SelectItem value="weekend">Weekend Batch</SelectItem> */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col items-start text-sm text-gray-500">
                <p>By submitting this form, you agree to be contacted by our team regarding your inquiry.</p>
                <p className="mt-2">
                  For immediate assistance, please contact us at{" "}
                  <Link href="tel:+917023742939" className="text-blue-600 hover:underline">
                    +91 7023742939
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Apply Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Why Apply to NursingHub?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Benefits of joining our nursing coaching center
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Expert Faculty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn from Dr. Yogesh and other experienced nursing professionals with years of teaching experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Comprehensive Study Material
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Access to well-structured, easy-to-understand study materials covering all aspects of the curriculum.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Regular Assessments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Frequent tests and assessments to track your progress and identify areas for improvement.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Doubt Clearing Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Dedicated sessions to address your questions and clarify concepts for better understanding.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Flexible Batch Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Multiple batch options to accommodate your schedule and learning preferences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  Career Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional advice on career opportunities and further education in the nursing field.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
