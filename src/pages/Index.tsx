import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Phone, Mail, MessageCircle, Facebook, Instagram, MapPin, Code, BarChart3,
  Settings, PenTool, CheckCircle2, Star, Zap, Shield, Clock, Users,
  TrendingUp, Award, Target, ArrowRight, Sparkles, Rocket, Globe,
  Database, Smartphone, Monitor, FileText, Quote, Play, ChevronRight,
  Heart, Coffee, Lightbulb, Gauge
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import dataImage from "@/assets/data-analytics.jpg";
import softwareImage from "@/assets/software-development.jpg";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254716608367', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:itsolutionscodebest@gmail.com', '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('https://formspree.io/f/mnngpbad', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const mainServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom solutions tailored to your business needs, from concept to deployment.",
      features: [
        "Desktop Applications with modern UI/UX",
        "Mobile Apps for iOS and Android",
        "Web Applications with cloud integration",
        "Legacy System Modernization",
        "API Development and Integration",
        "24/7 Maintenance and Support"
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights that drive business growth.",
      features: [
        "Advanced Data Cleaning & Preprocessing",
        "Business Intelligence Dashboards",
        "Predictive Analytics and Modeling",
        "Statistical Analysis and Reporting",
        "Data Visualization and Storytelling",
        "Machine Learning Solutions"
      ]
    },
    {
      icon: Settings,
      title: "IT Consultation",
      description: "Strategic technology guidance to optimize your digital infrastructure.",
      features: [
        "Digital Transformation Strategy",
        "Cloud Migration and Optimization",
        "Cybersecurity Assessment",
        "Performance Optimization",
        "Technology Stack Evaluation",
        "Ongoing Technical Support"
      ]
    },
    {
      icon: PenTool,
      title: "Professional Services",
      description: "Expert content creation and documentation services for your business.",
      features: [
        "Professional CV and Resume Writing",
        "Compelling Cover Letters",
        "Research Papers and Proposals",
        "Technical Documentation",
        "Content Marketing Strategy",
        "SEO-Optimized Blog Creation"
      ]
    }
  ];

  const stats = [
    { icon: Users, value: "150+", label: "Happy Clients", description: "Businesses transformed" },
    { icon: Award, value: "200+", label: "Projects Completed", description: "Successful deliveries" },
    { icon: Clock, value: "99%", label: "On-Time Delivery", description: "Meeting deadlines" },
    { icon: TrendingUp, value: "5+", label: "Years Experience", description: "In the industry" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized solutions for maximum performance"
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security in every solution"
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Built to grow with your business needs"
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Always here when you need us most"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Kenya",
      content: "CodeBest transformed our business operations with their custom software solution. The team's expertise and dedication exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      company: "DataFlow Ltd",
      content: "Their data analytics services helped us identify key insights that increased our revenue by 40%. Truly exceptional work!",
      rating: 5
    },
    {
      name: "Amira Hassan",
      role: "Founder",
      company: "Green Solutions",
      content: "Professional, reliable, and innovative. CodeBest delivered our mobile app on time and within budget. Highly recommended!",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What makes CodeBest IT Solutions different?",
      answer: "We combine technical expertise with a deep understanding of business needs. Our team doesn't just code – we solve problems and create value. We focus on long-term partnerships and deliver solutions that scale with your business."
    },
    {
      question: "How do you ensure project quality and timelines?",
      answer: "We follow agile methodologies with regular check-ins, use industry-standard testing practices, and maintain transparent communication throughout the project. Our 99% on-time delivery rate speaks to our commitment."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive maintenance packages, regular updates, and 24/7 technical support. Your success is our success, and we're here for the long term."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across various industries including healthcare, fintech, e-commerce, education, and manufacturing. Our adaptable approach allows us to understand and serve diverse business needs effectively."
    },
    {
      question: "How do you price your services?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Each quote is customized based on your specific requirements, timeline, and complexity."
    }
  ];

  const portfolioHighlights = [
    {
      title: "E-Commerce Platform",
      description: "Multi-vendor marketplace with advanced analytics",
      tech: ["React", "Node.js", "MongoDB"],
      image: softwareImage
    },
    {
      title: "Data Analytics Dashboard",
      description: "Real-time business intelligence platform",
      tech: ["Python", "Tableau", "PostgreSQL"],
      image: dataImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg font-sans">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary font-display">CodeBest IT</span>
                <div className="text-xs text-muted-foreground">Solutions</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">Portfolio</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
            <Button variant="hero" onClick={handleWhatsAppClick} className="animate-pulse-glow">
              <MessageCircle className="w-4 h-4" />
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Transforming Ideas Since 2022
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-bold font-display leading-tight">
                  Turning <span className="bg-gradient-hero bg-clip-text text-transparent">ideas and data</span> into powerful digital solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We craft exceptional software, unlock insights from your data, and provide strategic IT guidance 
                  to help your business thrive in the digital age. Your success story starts here.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={handleWhatsAppClick} className="group">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Play className="w-5 h-5 mr-2" />
                  View Our Work
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground font-medium">Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse-glow"></div>
              <img 
                src={heroImage} 
                alt="CodeBest IT Solutions - Professional IT Services" 
                className="relative rounded-3xl shadow-hover w-full animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-2xl shadow-elegant">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">99% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">Built for Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just deliver projects – we deliver results that matter to your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group text-center border-0 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <Gauge className="w-4 h-4 mr-2" />
              Our Expertise
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">Comprehensive IT Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology solutions that drive business growth and innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <FeatureCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped businesses transform their operations with innovative technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {portfolioHighlights.map((project, index) => (
              <Card key={index} className="group border-0 shadow-card hover:shadow-hover transition-all duration-500 overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="group">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="px-4 py-2">
                  <Coffee className="w-4 h-4 mr-2" />
                  About Us
                </Badge>
                <h2 className="text-4xl font-bold font-display text-foreground">Passionate About Your Success</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At CodeBest IT Solutions, we're more than just a service provider – we're your technology partners. 
                    Our team of experienced developers, data scientists, and IT consultants combines technical excellence 
                    with business acumen to deliver solutions that truly matter.
                  </p>
                  <p>
                    Since 2019, we've helped over 150 businesses transform their operations through innovative technology. 
                    Whether you're a startup looking to build your first product or an enterprise seeking to modernize 
                    your systems, we have the expertise to guide you every step of the way.
                  </p>
                  <p>
                    Our commitment goes beyond code delivery. We believe in building lasting relationships, providing 
                    ongoing support, and continuously evolving our solutions to meet your changing needs.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" onClick={handleWhatsAppClick} className="group">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Let's Connect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" onClick={handleEmailClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-secondary rounded-3xl blur-3xl opacity-20"></div>
              <img 
                src={teamImage} 
                alt="CodeBest IT Solutions Team" 
                className="relative rounded-3xl shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <Quote className="w-4 h-4 mr-2" />
              Client Stories
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it – hear from the businesses we've helped transform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about working with CodeBest IT Solutions.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-gradient-card rounded-xl px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <Badge variant="secondary" className="px-4 py-2">
              <Phone className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-4xl font-bold font-display text-foreground">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-hover bg-gradient-card animate-fade-in-left">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Send us a message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Message Submitted Successfully!</h3>
                    <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                        <Input id="name" name="name" placeholder="Enter your full name" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">Phone Number (Optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+254 000 000 000" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-semibold">Service of Interest</Label>
                      <select id="service" name="service" className="w-full h-12 px-3 border border-input rounded-md bg-background">
                        <option value="">Select a service</option>
                        <option value="software">Software Development</option>
                        <option value="data">Data & Analytics</option>
                        <option value="consultation">IT Consultation</option>
                        <option value="professional">Professional Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">Project Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements, timeline, and goals..."
                        className="min-h-[150px] resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" variant="hero" className="w-full h-12 text-lg group">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h3 className="text-2xl font-semibold font-display text-foreground mb-8">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">Email Us</div>
                      <div className="text-muted-foreground">itsolutionscodebest@gmail.com</div>
                      <div className="text-sm text-muted-foreground">We respond within 2 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">Call Us</div>
                      <div className="text-muted-foreground">+254 716 608 367</div>
                      <div className="text-sm text-muted-foreground">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-lg">Location</div>
                      <div className="text-muted-foreground">Nakuru, Kenya</div>
                      <div className="text-sm text-muted-foreground">Serving clients globally</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold font-display text-foreground mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button variant="hero" size="icon" onClick={handleWhatsAppClick} className="w-16 h-16 animate-pulse-glow">
                    <MessageCircle className="w-6 h-6" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={handleEmailClick} className="w-16 h-16">
                    <Mail className="w-6 h-6" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open('https://facebook.com', '_blank')} className="w-16 h-16">
                    <Facebook className="w-6 h-6" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => window.open('https://instagram.com', '_blank')} className="w-16 h-16">
                    <Instagram className="w-6 h-6" />
                  </Button>
                </div>
                <Card className="mt-8 border-0 bg-gradient-secondary/10 p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground mb-2">Instant Response</div>
                      <div className="text-sm text-muted-foreground">
                        For the fastest response, contact us via WhatsApp. We're available 24/7 to discuss your project and provide immediate assistance.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold font-display">CodeBest IT</span>
                  <div className="text-sm opacity-80">Solutions</div>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming ideas and data into powerful digital solutions that drive business growth and innovation.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" onClick={handleWhatsAppClick} className="text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleEmailClick} className="text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => window.open('https://facebook.com', '_blank')} className="text-white hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => window.open('https://instagram.com', '_blank')} className="text-white hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 font-display">Services</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#services" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Data Analytics</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">IT Consultation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Professional Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 font-display">Company</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6 font-display">Contact Info</h4>
              <div className="space-y-4 text-primary-foreground/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>itsolutionscodebest@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+254 716 608 367</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/80">
                &copy; 2024 CodeBest IT Solutions. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-primary-foreground/80">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Button
        variant="cta"
        size="icon"
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-glow z-50 animate-pulse-glow"
        onClick={handleWhatsAppClick}
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default Index;