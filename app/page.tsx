'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Briefcase,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  User,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import profileImg from '../public/profile.png'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    'Python',
    'Django',
    'FastAPI',
    'React',
    'Docker',
    'PostgreSQL',
    'MySQL',
    'Git',
    'AWS',
  ]

  const projects = [
    {
      title: 'Weather Gateway API (MCP-Enabled)',
      description:
        'Microservices-based API Gateway for weather data, favorites, and alerts, with OAuth2 authentication. Can be accessed by LLMs via MCP.',
      technologies: ['FastAPI', 'Docker', 'OAuth2'],
      github: 'https://github.com/Amandabezsiv/climatewatch-gateway',
      demo: 'https://github.com/Amandabezsiv/climatewatch-gateway',
    },
    {
      title: 'Application Performance Monitoring System',
      description:
        'Performance Monitoring App is a system designed to track, monitor, and visualize key application performance metrics such as response time, CPU and memory usage, active sessions, and page load time. It features an alerting system managed through the Django admin panel and supports report generation with graphical data representation.',
      technologies: ['Django', 'HTML5', 'CSS', 'MongoDB'],
      github: 'https://github.com/Amandabezsiv/app_performance_monitoring',
      demo: 'https://github.com/Amandabezsiv/app_performance_monitoring',
    },
    {
      title: 'Crypto Dashboard',
      description:
        'Crypto Dashboard is an interactive app that tracks real-time crypto prices using a Flask API, CoinGecko integration, WebSocket, and a React frontend.',
      technologies: ['Flask', 'React', 'WebSocket'],
      github: 'https://github.com/Amandabezsiv/crypto-dashboard',
      demo: 'https://github.com/Amandabezsiv/crypto-dashboard',
    },
    {
      title: 'CRUD Flask',
      description:
        'This project is a simple CRUD (Create, Read, Update, Delete) application built using Flask, a Python web framework. It demonstrates basic operations with a MySQL database, allowing management of customers, products, orders, and order items.',
      technologies: ['Flask', 'MySQL', 'Docker', 'HTML5', 'CSS'],
      github: 'https://github.com/Amandabezsiv/CRUD_Flask',
      demo: 'https://github.com/Amandabezsiv/CRUD_Flask',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Amanda Bezerra</h1>
              <p className="text-purple-400 text-sm">Software Developer</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: MessageCircle },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                {[
                  { id: 'about', label: 'About', icon: User },
                  { id: 'skills', label: 'Skills', icon: Code },
                  { id: 'projects', label: 'Projects', icon: Briefcase },
                  { id: 'contact', label: 'Contact', icon: MessageCircle },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-left ${
                      activeSection === id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-8" />
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-left">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I build backend systems and fullstack web applications with
                    a focus on performance, reliability, and user experience.
                    From designing APIs to creating responsive interfaces, I
                    enjoy developing solutions that simplify processes and run
                    smoothly.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I care about clean code, clear logic, and building web
                    applications that are both functional and easy to use. I
                    also apply DevOps practices to keep things stable, testable,
                    and easy to maintain.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    In my free time, I like drinking coffee, drawing, and
                    observing nature.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                      onClick={() => scrollToSection('contact')}
                      type="button"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-gray-300 hover:text-white"
                      onClick={() =>
                        window.open('https://github.com/Amandabezsiv', '_blank')
                      }
                      type="button"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center transition-all duration-500  hover:scale-105 ">
                    <img
                      src={profileImg.src}
                      alt="Amanda Bezerra"
                      className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500"
                    />
                  </div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4">
                  Skills & Technologies
                </h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-8" />
                <p className="text-xl text-gray-300">
                  Technologies and tools I work with to bring ideas to life
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Backend</CardTitle>
                    <CardDescription>
                      Server-side development and APIs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Python',
                        'Django',
                        'FastAPI',
                        'Flask',
                        'TypeScript',
                        'Node.js',
                        'NestJS',
                        'Fastify',
                        'REST APIs',
                        'Redis',
                        'OAuth2 / JWT',
                      ].map((skill, i) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 animate-fade-in-up"
                          style={{ animationDelay: `${i * 0.07}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-purple-400">Frontend</CardTitle>
                    <CardDescription>
                      User interfaces and experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'React',
                        'TypeScript',
                        'JavaScript',
                        'HTML5',
                        'CSS3',
                        'Tailwind CSS',
                        'Next.js',
                      ].map((skill, i) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 animate-fade-in-up"
                          style={{ animationDelay: `${i * 0.07}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-purple-400">
                      DevOps & Database
                    </CardTitle>
                    <CardDescription>
                      Infrastructure and data management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Docker',
                        'AWS',
                        'Git',
                        'Linux',
                        'CI/CD',
                        'RabbitMQ',
                        'Celery',
                        'PostgreSQL',
                        'MySQL',
                        'MongoDB',
                        'Redis',
                      ].map((skill, i) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 animate-fade-in-up"
                          style={{ animationDelay: `${i * 0.07}s` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-8" />
                <p className="text-xl text-gray-300">
                  Some of my recent work and side projects
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:border-purple-600 transition-colors"
                  >
                    <CardHeader>
                      <CardTitle className="text-purple-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-purple-600 text-purple-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white"
                            onClick={() =>
                              window.open(project.github, '_blank')
                            }
                            type="button"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-300 hover:text-white"
                            onClick={() => window.open(project.demo, '_blank')}
                            type="button"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in-up">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <div className="w-20 h-1 bg-purple-600 mx-auto mb-8" />
                <p className="text-xl text-gray-300">
                  Let's discuss your next project or just say hello!
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                      Let's Connect
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      I'm always interested in hearing about new opportunities,
                      interesting projects, or just having a good conversation
                      about technology.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <a
                      href="mailto:amandabezsilv@gmail.com"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-300 group-hover:text-purple-300 transition-colors">
                          amandabezsilv@gmail.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com/in/amandabezsilv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-gray-300 group-hover:text-purple-300 transition-colors">
                          linkedin.com/in/amandabezsilv
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://github.com/Amandabezsiv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-gray-300 group-hover:text-purple-300 transition-colors">
                          github.com/Amandabezsiv
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-purple-400">
                      Send a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Your Message"
                          rows={4}
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Amanda Bezerra. Built with Next.js
              and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
