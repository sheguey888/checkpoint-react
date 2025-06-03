import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Sadio Mané
            </h1>
            <h2 className="text-2xl lg:text-3xl mb-6 text-gray-300">Full Stack Developer</h2>
            <p className="text-lg mb-8 text-gray-400 max-w-2xl">
              I create beautiful, responsive web applications using modern technologies. Passionate about clean code,
              user experience, and bringing ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
                <Image
                  src="https://mediaactu.com/wp-content/uploads/2022/06/Sadio-mane-triple-1.jpeg"
                  alt="Alex - Full Stack Developer"
                  width={320}
                  height={320}
                  className="rounded-full "
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-white mb-12 text-center">Technologies I Work With</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {["React", "Next.js",  "Node.js", "Python"].map((tech) => (
            <div key={tech} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-gray-300">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:sadio@mane.sn" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </section>
    </div>
  )
}
