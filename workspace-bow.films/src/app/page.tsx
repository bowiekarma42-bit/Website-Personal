'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Menu, X, Download, Mail, Phone, MapPin, 
  Instagram, Linkedin, Youtube, ChevronRight, Star,
  Camera, Video, Palette, Code, Smartphone, Globe,
  Calendar, Award, Users, Briefcase, ArrowRight
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const textY = useTransform(scrollY, [0, 1000], [0, -100]);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "design",
      description: "Modern e-commerce solution with seamless user experience",
      image: "/project1.jpg",
      tags: ["UI/UX", "React", "Node.js"],
      details: "Complete e-commerce platform with payment integration, inventory management, and responsive design."
    },
    {
      id: 2,
      title: "Brand Photography",
      category: "photo",
      description: "Professional brand photography session",
      image: "/project2.jpg",
      tags: ["Photography", "Branding", "Creative"],
      details: "Comprehensive brand photography package including product shots, lifestyle images, and brand storytelling."
    },
    {
      id: 3,
      title: "Corporate Video",
      category: "video",
      description: "Engaging corporate promotional video",
      image: "/project3.jpg",
      tags: ["Video", "Editing", "Storytelling"],
      details: "Professional corporate video production from concept to final editing, including motion graphics."
    },
    {
      id: 4,
      title: "Mobile App Design",
      category: "design",
      description: "Intuitive mobile application interface",
      image: "/project1.jpg",
      tags: ["Mobile", "UI/UX", "Prototyping"],
      details: "Complete mobile app design with user research, wireframing, and interactive prototypes."
    },
    {
      id: 5,
      title: "Fashion Photography",
      category: "photo",
      description: "High-end fashion editorial shoot",
      image: "/project2.jpg",
      tags: ["Fashion", "Editorial", "Creative"],
      details: "Fashion photography for editorial campaigns, lookbooks, and brand collaborations."
    },
    {
      id: 6,
      title: "Documentary Film",
      category: "video",
      description: "Compelling documentary storytelling",
      image: "/project3.jpg",
      tags: ["Documentary", "Cinematography", "Post-production"],
      details: "Documentary film production covering social issues, personal stories, and cultural topics."
    }
  ];

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for brands, products, and special events."
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic video production from concept to final editing."
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity design including logos, colors, and guidelines."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web development with responsive design and optimal performance."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile application development."
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital marketing and online presence strategy."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Tech Startup",
      content: "Exceptional work! Our brand transformation exceeded all expectations. The attention to detail and creative vision brought our vision to life.",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "Professional, creative, and reliable. Delivered outstanding results on time and within budget. Highly recommended!",
      avatar: "/api/placeholder/100/100"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Incredible attention to detail and artistic vision. Our brand has never looked better. The team truly understands modern aesthetics.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Started Creative Journey",
      description: "Began professional career in creative industry"
    },
    {
      year: "2021",
      title: "Expanded Services",
      description: "Added videography and web development to portfolio"
    },
    {
      year: "2022",
      title: "International Recognition",
      description: "Received multiple awards for creative excellence"
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Built a talented team of creative professionals"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-serif font-bold text-gold"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-medium hover:text-gold elegant-transition"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-background border-b border-border/20"
          >
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize text-sm font-medium hover:text-gold elegant-transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-background via-cream to-background opacity-50"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden elegant-shadow-lg"
              >
                <Avatar className="w-full h-full">
                  <AvatarImage src="/profile.jpg" alt="Profile" />
                  <AvatarFallback className="text-2xl font-serif bg-gold text-background">
                    JD
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-serif font-bold mb-4 text-soft-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                John Doe
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Creative Professional & Visual Storyteller
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gold hover:bg-gold/90 text-background font-medium px-8 elegant-transition"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gold text-gold hover:bg-gold hover:text-background font-medium px-8 elegant-transition"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-soft-black">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 elegant-shadow-lg hover-lift">
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    With over 5 years of experience in the creative industry, I specialize in 
                    crafting compelling visual narratives that resonate with audiences. My work 
                    spans photography, videography, brand design, and digital development.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I believe in the power of authentic storytelling and meticulous attention 
                    to detail. Every project is an opportunity to create something meaningful 
                    and memorable.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-gold" />
                      <span className="text-sm">Award Winning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gold" />
                      <span className="text-sm">100+ Clients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gold" />
                      <span className="text-sm">200+ Projects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-gold" />
                      <span className="text-sm">5+ Years</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-soft-black">
                  Journey & Experience
                </h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex space-x-4"
                    >
                      <div className="flex-shrink-0 w-20 text-gold font-bold">
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-soft-black">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-soft-black">
              Portfolio
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8" />
            
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              {['all', 'photo', 'video', 'design'].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`capitalize ${
                    activeFilter === filter 
                      ? 'bg-gold hover:bg-gold/90 text-background' 
                      : 'border-gold text-gold hover:bg-gold hover:text-background'
                  } elegant-transition`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden elegant-shadow hover-lift cursor-pointer group">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 elegant-transition flex items-center justify-center">
                          <ArrowRight className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-soft-black">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-serif">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full rounded-lg"
                      />
                      <p className="text-muted-foreground leading-relaxed">
                        {project.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-soft-black">
              Services
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center elegant-shadow hover-lift h-full">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gold/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-soft-black">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-soft-black">
              Testimonials
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 elegant-shadow-lg">
                    <CardContent className="text-center space-y-6">
                      <div className="flex justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                      
                      <Avatar className="w-20 h-20 mx-auto">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="text-lg bg-gold text-background">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <blockquote className="text-lg font-serif leading-relaxed text-muted-foreground italic">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div>
                        <cite className="font-semibold text-soft-black not-italic">
                          {testimonial.name}
                        </cite>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-warm-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-soft-black">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 elegant-shadow-lg h-full">
                <CardContent className="space-y-6">
                  <h3 className="text-2xl font-serif font-bold text-soft-black">
                    Let's Create Something Amazing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always excited to work on new projects and collaborate with 
                    creative minds. Whether you have a specific project in mind or 
                    just want to chat about possibilities, I'd love to hear from you.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gold" />
                      <span>hello@johndoe.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gold" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gold" />
                      <span>New York, NY</span>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background">
                      <Youtube className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 elegant-shadow-lg">
                <CardContent className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input placeholder="Your Name" className="elegant-transition" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input type="email" placeholder="your@email.com" className="elegant-transition" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input placeholder="Project Discussion" className="elegant-transition" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        rows={5}
                        className="elegant-transition"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gold hover:bg-gold/90 text-background font-medium elegant-transition"
                    >
                      Send Message
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 John Doe. All rights reserved. Crafted with passion and creativity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}