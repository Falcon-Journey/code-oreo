import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Users, Award, Lightbulb, Shield } from "lucide-react"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully delivered 50+ projects with 98% client satisfaction rate.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect deadlines and deliver projects on schedule, every time.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled developers and designers bring years of industry experience.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure bug-free, reliable solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of trends and implement cutting-edge technologies.",
    },
    {
      icon: Shield,
      title: "Ongoing Support",
      description: "24/7 support and maintenance to keep your solutions running smoothly.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Code Oreo?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another development agency. We're your strategic partner committed to your success and
            growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and turn them into reality. Get a free consultation and project estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
              Get Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
