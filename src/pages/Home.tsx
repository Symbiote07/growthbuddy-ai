import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Users, Zap, BarChart3, MessageSquare, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            🚀 AI-Powered Customer Engagement
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Intelligent Chatbots
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Automate customer support, capture leads, and boost engagement with our
            advanced AI chatbot platform designed for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose DigitalDynamo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design
              to deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Intelligent AI Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced natural language processing ensures your chatbot understands
                  and responds accurately to customer inquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Lead Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically capture and qualify leads through intelligent
                  conversations that guide visitors to conversion.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Real-time Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instant responses 24/7 ensure your customers never wait,
                  improving satisfaction and engagement rates.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track performance metrics, conversation insights, and ROI
                  with comprehensive analytics and reporting tools.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Multi-Platform Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deploy your chatbot across websites, social media, and
                  messaging platforms for unified customer experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="bg-gradient-primary p-3 rounded-lg w-fit">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bank-level security ensures your customer data is protected
                  with encryption and compliance standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500M+</div>
              <div className="text-muted-foreground">Messages Processed</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About DigitalDynamo
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're passionate about helping businesses harness the power of AI
                to create meaningful customer connections. Our platform combines
                advanced machine learning with intuitive design to deliver chatbot
                solutions that actually work.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded by a team of AI experts and customer experience professionals,
                we understand the challenges businesses face in providing exceptional
                support at scale. That's why we've built a platform that's both
                powerful and easy to use.
              </p>
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/90 mb-6">
                  To democratize AI-powered customer engagement, making advanced
                  chatbot technology accessible to businesses of all sizes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">2019</div>
                    <div className="text-white/80">Founded</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-white/80">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of businesses already using DigitalDynamo to
            automate support and boost engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;