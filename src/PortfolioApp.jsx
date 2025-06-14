import React, { useState } from 'react';

export default function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 font-sans leading-relaxed">
        {/* Sticky header */}
        <header className="sticky bg-blue-200 top-0 bg-[#f9fafb] shadow-sm z-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="#profile" className="text-2xl font-[pricedown] text-gray-900">
      MyPortfolio
    </a>
    <nav className="hidden md:flex space-x-8 items-center text-xl font-[pricedown] font-semibold text-indigo-600">
      <a
        href="#about"
        className="hover:text-indigo-800 transition-colors duration-300"
      >
        About
      </a>
      <a
        href="#projects"
        className="hover:text-indigo-800 transition-colors duration-300"
      >
        Projects
      </a>
      <a
        href="#skills"
        className="hover:text-indigo-800 transition-colors duration-300"
      >
        Skills
      </a>
      <a
        href="#contact"
        className="hover:text-indigo-800 transition-colors duration-300"
      >
        Contact
      </a>
    </nav>
    <button
      className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
      aria-label="Toggle Menu"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <svg
        className="w-6 h-6 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {menuOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>
  {menuOpen && (
    <div className="md:hidden bg-[#f9fafb] shadow-md border-t border-gray-200">
      <nav className="flex flex-col px-6 py-4 space-y-4 text-lg font-semibold text-indigo-600">
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="hover:text-indigo-800 transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="hover:text-indigo-800 transition-colors duration-300"
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className="hover:text-indigo-800 transition-colors duration-300"
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="hover:text-indigo-800 transition-colors duration-300"
        >
          Contact
        </a>
      </nav>
    </div>
  )}
</header>


        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:grid md:grid-cols-[280px_1fr] gap-12 min-h-[70vh]">
          {/* Profile Section */}
          <aside
        id="profile"
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center 
               hover:shadow-xl hover:ring-2 hover:ring-indigo-500 transition 
               md:sticky md:top-20 md:self-start"
         >
            {/* Profile photo */}
            <img
              src="/yogeeta.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover scale-125 shadow-lg mb-6 transform transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            {/* Name */}
            <h1
              className="text-3xl font-extrabold text-gray-900 mb-2
                transition-colors duration-300 hover:text-indigo-600"
            >
              Yogeeta
            </h1>
            {/* Short intro/tagline */}
            <p
              className="text-gray-600 mb-6 max-w-xs transition-colors duration-300 hover:text-indigo-800 brightness-105"
            >
              Enthusiastic Frontend Developer crafting clean, modern, and responsive web experiences with React and Tailwind CSS.
            </p>
            {/* Quick nav links */}
            <nav className="space-y-3 w-full">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact Me' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="block w-full bg-indigo-50 text-indigo-700 py-3 rounded-lg 
                    hover:bg-indigo-600 hover:text-white transition-colors duration-300 font-semibold"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content Sections */}
          <section className="space-y-20 text-gray-700 dark:text-gray-300">
            {/* About Section */}
            <section id="about" className="max-w-4xl mx-auto mb-24 scroll-mt-28" aria-labelledby="about-heading">
              <h2
                id="about-heading"
                className="text-4xl font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-3"
              >
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hello! I&apos;m a passionate developer specializing in building performant, accessible, and stunning web applications using React and Tailwind CSS. I have a strong focus on clean code, responsive design, and intuitive user experiences.
              </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="max-w-4xl mx-auto mb-24 scroll-mt-28" aria-labelledby="projects-heading">
              <h2
                id="projects-heading"
                className="text-4xl font-extrabold text-gray-900 mb-12 border-b border-gray-200 pb-3"
              >
                Projects
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {[
                  {
                    title: 'Portfolio Website',
                    description: 'A sleek, responsive portfolio built with React and Tailwind CSS.',
                    url: 'http://localhost:5173/?name=yogeeta&_replyto=yogeeta1312%40gmail.com&message=happy#contact',
                  },

                  // {
                  //   title: 'E-commerce Store',
                  //   description:
                  //     'Modern e-commerce website with shopping cart, product filtering, and checkout.',
                  //   url: '#',
                  // },
                  {
                    title: 'GTA-VI-Clone',
                    description: 'Clean platform-clone made with React and Tailwind CSS,Provides the view of GTA-VI.',
                  },
                  {
                    title: 'E-commerce Store',
                    description:
                      'Modern e-commerce website with shopping cart, product filtering, and checkout.',
                    url: '#',
                  },
                  {
                    title: 'GTA-VI-Clone',
                    description: 'Clean blog platform with markdown support and SEO optimizations.',
                    url: 'http://localhost:5174/',
                  },
                ].map((project, idx) => (
                  <a
                    key={idx}
                    href={project.url}
                    className="block bg-white rounded-xl shadow hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-shadow transition-ring duration-300 transition p-6 text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-2xl font-[pricedown] font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </a>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="max-w-4xl mx-auto mb-24 scroll-mt-28" aria-labelledby="skills-heading">
              <h2
                id="skills-heading"
                className="text-4xl font-extrabold text-gray-900 mb-12 border-b border-gray-200 pb-3"
              >
                Skills
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-600 text-lg max-w-md mx-auto">
                {[
                  'React JS',
                  'Tailwind CSS',
                  'JavaScript (ES6+)',
                  'HTML5 & CSS3',
                  'Git & GitHub',
                  'Responsive Design',
                  'Problem Solving',
                ].map((skill, idx) => (
                  <li
                    key={idx}
                    className="border border-gray-300 rounded-lg py-3 hover:ring-2 hover:ring-indigo-500 transition-shadow transition-ring duration-300 shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              
            </section>
          </section>
        </main>

        {/* Contact Footer Section */}
        <footer
          id="contact"
          className="bg-gray-50 border-t border-gray-200 py-16 mt-20"
          // aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="text-4xl font-extrabold text-gray-900 mb-12 text-center max-w-7xl mx-auto"
          >
            Contact Me
          </h2>
          <form
            // action="https://formspree.io/f/moqprplq"
            // method="POST"
            className="max-w-xl mx-auto space-y-6 px-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-4 rounded-lg font-semibold text-lg hover:bg-indigo-800 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          {/* <div className="mt-12 text-center text-indigo-600 font-semibold">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </div> */}
        </footer>
      </div>
    </>
  );
}
