import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BookOpen } from "lucide-react"

export const metadata = {
  title: "Courses | NursingHub",
  description: "Explore our comprehensive B.Sc Nursing courses, batch timings, and fee structure.",
}

export default function CoursesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Courses</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive courses designed to help nursing students excel in their studies and career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter mb-8">Subjects We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cellular and tissue organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Organ systems and their functions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Homeostasis and regulation</span>
                  </li>
                </ul>
              </CardContent>
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
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Bacteria, viruses, and fungi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Infection control principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Antimicrobial therapy</span>
                  </li>
                </ul>
              </CardContent>
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
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Nursing process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Basic patient care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Documentation and reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Medical-Surgical Nursing
                </CardTitle>
                <CardDescription>Adult health nursing</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Care of adult patients with medical and surgical conditions.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Pre and post-operative care</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Management of various disorders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Critical care nursing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Community Health Nursing
                </CardTitle>
                <CardDescription>Public health perspective</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Nursing care in community settings and public health principles.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Health promotion and disease prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Family and community assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>National health programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-blue-600" />
                  Pharmacology
                </CardTitle>
                <CardDescription>Study of medications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Understanding medications, their actions, and nursing implications.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Drug classifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Medication administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Adverse effects and interactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Batch Timings */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Batch Timings</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Flexible schedules to accommodate different student needs
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Batch Name</TableHead>
                  <TableHead>Days</TableHead>
                  <TableHead>Timing</TableHead>
                  <TableHead>Focus</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableRow>
                  <TableCell className="font-medium">Morning Batch</TableCell>
                  <TableCell>Monday to Friday</TableCell>
                  <TableCell>8:00 AM - 11:00 AM</TableCell>
                  <TableCell>Regular comprehensive course</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Afternoon Batch</TableCell>
                  <TableCell>Monday to Friday</TableCell>
                  <TableCell>1:00 PM - 4:00 PM</TableCell>
                  <TableCell>Regular comprehensive course</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell className="font-medium">Evening Batch</TableCell>
                  <TableCell>Monday to Friday</TableCell>
                  <TableCell>5:00 PM - 8:00 PM</TableCell>
                  <TableCell>For working professionals</TableCell>
                </TableRow>
                {/* <TableRow>
                  <TableCell className="font-medium">Weekend Batch</TableCell>
                  <TableCell>Saturday & Sunday</TableCell>
                  <TableCell>10:00 AM - 4:00 PM</TableCell>
                  <TableCell>Intensive weekend program</TableCell>
                </TableRow> */}
                <TableRow>
                  <TableCell className="font-medium">Exam Special</TableCell>
                  <TableCell>Flexible</TableCell>
                  <TableCell>Flexible</TableCell>
                  <TableCell>Focused exam preparation</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Fee Structure</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Affordable education packages for all students
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic Package</CardTitle>
                <CardDescription>For single subject coaching</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold">₹5,000</div>
                <p className="text-sm text-gray-500 mt-2">Per subject</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Complete subject coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Study materials included</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Practice question banks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/apply" className="w-full">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-blue-600">
              <CardHeader className="bg-blue-50">
                <div className="text-center text-blue-600 font-medium text-sm mb-2">MOST POPULAR</div>
                <CardTitle>Standard Package</CardTitle>
                <CardDescription>For semester-wise coaching</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold">₹20,000</div>
                <p className="text-sm text-gray-500 mt-2">Per semester (all subjects)</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>All subjects for one semester</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comprehensive study materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regular tests and assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Doubt clearing sessions</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/apply" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
            {/* <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Premium Package</CardTitle>
                <CardDescription>Complete B.Sc program</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold">₹75,000</div>
                <p className="text-sm text-gray-500 mt-2">Full 4-year program</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>All subjects for entire B.Sc program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comprehensive study materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regular tests and assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>One-on-one mentoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Career guidance and placement support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/apply" className="w-full">
                  <Button className="w-full">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card> */}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              * Fees can be paid in installments. Scholarships available for meritorious students.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Excel in Your Nursing Studies?
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
