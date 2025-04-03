import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, FileDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold text-gray-900">Sujit Kumar</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
              <div className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors text-left">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl mx-auto text-center">
    
        {/* <img
  src="src/about_image.jpg" 
  alt="Profile"
  className="w-52 h-52 rounded-full mx-auto mb-6 border-4 border-white shadow-lg transition-transform duration-300 hover:scale-110"
/> */}

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Sujit Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Innovative Full-Stack Developer with a strong grasp of current web technologies, creating engaging and user-friendly digital experiences.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/sujitkumar001" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/pulakala-sujit-kumar" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pulakalasujit001@gmail.com" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a
            href="src\SujitResume.pdf"
            download
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download Resume <FileDown size={20} className="ml-2" />
          </a>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="src/about_image.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
            <div>
              <p className="text-gray-600 mb-4">
              I am a skilled web developer and Python programmer with expertise in creating dynamic, user-friendly websites and applications. My core skills include front-end development using HTML, CSS, and JavaScript, along with back-end programming in Python.
              </p>
              <p className="text-gray-600">
              I focus on clean, efficient code and seamless user experiences, while constantly expanding my knowledge of new tools and technologies to stay ahead in the ever-evolving tech industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              'React', 'TypeScript', 'Node.js',
              'Python', 'AWS', 'Artificial Intelligence',
              'Machine Learning', 'SQL','Python'
            ].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Projects Section */}
   <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              title: 'AI-Mock Interview Platform',
              description: 'It simulates real interviews, evaluates responses, and provides instant feedback, helping candidates prepare effectively with personalized insights across various industries and roles.',
              image: 'src/project1.png',
              link: 'https://github.com/sujitkumar001/AI_Interview_Platform'
            }, {
              title: 'File Storage System',
              description: 'A secure file storage platform for students and professors to store, organize, and access important documents seamlessly, ensuring efficient management, easy retrieval, and secure access control for academic needs.',
              image: 'src/project2.png',
              link: 'https://github.com'
            }].map((project) => (
              <div key={project.title} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
    <p className="text-gray-600 mb-8">
      I'm always open to new opportunities and interesting projects. Feel free to send me a message!
    </p>

    {/* Contact Form */}
    <form
      action="https://formspree.io/f/maykqple" 
      method="POST"
      className="space-y-6 max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg"
    >
      <div className="flex space-x-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>

    {/* Social Media Links */}
    <div className="flex justify-center gap-6 mt-12">
      <a href="https://github.com/sujitkumar001" className="text-gray-600 hover:text-blue-600 transition-colors">
        <Github size={24} />
      </a>
      <a href="https://linkedin.com/in/pulakala-sujit-kumar" className="text-gray-600 hover:text-blue-600 transition-colors">
        <Linkedin size={24} />
      </a>
      <a href="mailto:pulakalasujit001@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
        <Mail size={24} />
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 Sujit Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;