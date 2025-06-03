import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides current conditions and forecasts with beautiful data visualizations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A modern blog platform with markdown support, SEO optimization, and content management system.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "MDX", "Prisma", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with multiple rooms, file sharing, and user presence indicators.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Socket.io", "Express", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
  },
]

export default function Projects() {

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">My Projects</h1>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning
            opportunity that has helped me grow as a developer.
          </p>

          

          {/* Other Projects */}
          <section>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
