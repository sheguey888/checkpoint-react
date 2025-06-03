import Image from "next/image"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">About Me</h1>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://www.africatopsports.com/wp-content/uploads/2023/01/sadio-mane-senegal-can-2022-2048x1152.jpg"
                alt="About me"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Passionate Developer & Problem Solver</h2>
              <p className="text-gray-600 mb-6">
                With over 5 years of experience in web development, I specialize in creating modern, scalable
                applications that deliver exceptional user experiences. My journey started with a curiosity about how
                websites work, and it has evolved into a passion for crafting digital solutions.
              </p>
              <p className="text-gray-600 mb-6">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. When
                I'm not coding, you can find me exploring new frameworks, contributing to open source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-gray-600">
                Writing maintainable, scalable code that follows best practices and industry standards.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Palette className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating intuitive, beautiful interfaces that provide excellent user experiences.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimizing applications for speed, accessibility, and search engine visibility.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}
