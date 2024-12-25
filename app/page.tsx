// app/page.js

import React from 'react';

const Home = () => {
  const services = [
    {
      title: 'Web Development',
      icon: '/icons/web-development.svg',
      description: 'Build fast, scalable, and secure web applications with modern frameworks.',
      techStack: ['React', 'Next.js', 'Node.js'],
    },
    {
      title: 'Mobile Development',
      icon: '/icons/mobile-development.svg',
      description: 'Create responsive and performant mobile apps for iOS and Android.',
      techStack: ['React Native', 'Flutter'],
    },
    {
      title: 'UI/UX Design',
      icon: '/icons/design.svg',
      description: 'Design beautiful, user-friendly interfaces with intuitive user experiences.',
      techStack: ['Figma', 'Sketch', 'Adobe XD'],
    },
    {
      title: 'SEO Optimization',
      icon: '/icons/seo.svg',
      description: 'Improve website visibility and ranking with cutting-edge SEO strategies.',
      techStack: ['Google Analytics', 'SEO Tools'],
    },
  ];

  const projects = [
    {
      name: 'Project One',
      description: 'A cutting-edge web app built with React and Next.js.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      thumbnail: '/projects/project-1.jpg',
      demo: '#',
      repository: '#',
    },
    {
      name: 'Project Two',
      description: 'A mobile app for e-commerce built with React Native.',
      techStack: ['React Native', 'Firebase'],
      thumbnail: '/projects/project-2.jpg',
      demo: '#',
      repository: '#',
    },
  ];

  const blogPosts = [
    {
      title: 'How to Build a Scalable Web App',
      excerpt: 'Learn the best practices for building scalable web applications.',
      thumbnail: '/blog/blog-1.jpg',
      url: '#',
    },
    {
      title: 'Mobile Development Trends in 2024',
      excerpt: 'Discover the latest trends in mobile app development.',
      thumbnail: '/blog/blog-2.jpg',
      url: '#',
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: 'url(/hero-background.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-6 sm:px-12 flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl font-bold leading-tight mb-4 animate__animated animate__fadeIn">Building Future-Ready Web Apps</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
            I craft innovative, scalable, and user-focused web experiences that drive business growth.
          </p>
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-lg text-xl transition-transform hover:scale-105">See My Work</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="/profile-image.webp" alt="Your Name" className="w-64 h-64 rounded-full border-4 border-primary mb-6 shadow-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              I'm a full-stack developer with a passion for creating modern web solutions. My expertise spans JavaScript, React, Next.js, Node.js, and more.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-800">Skills</h3>
              <div className="flex gap-6">
                <div className="flex-1">
                  <p className="font-semibold">React</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs font-semibold inline-block py-1 uppercase">Intermediate</span>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-primary text-xs font-medium leading-none py-1 text-center text-white rounded-full" style={{ width: '75%' }}>
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Node.js</p>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <span className="text-xs font-semibold inline-block py-1 uppercase">Advanced</span>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full">
                        <div className="bg-primary text-xs font-medium leading-none py-1 text-center text-white rounded-full" style={{ width: '90%' }}>
                          90%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">What I Do</h2>
          <p className="text-lg text-gray-600 mb-12">I specialize in providing top-notch services to meet your needs. Whether you're looking for a website, web application, or a full-stack solution, I can help.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12">
          {services.map(service => (
            <div key={service.title} className="bg-white shadow-lg hover:scale-105 transform transition-all p-6 rounded-lg text-center">
              <img src={service.icon} alt={service.title} className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12">
          {projects.map(project => (
            <div key={project.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all">
              <img src={project.thumbnail} alt={project.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-4 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
                <a href={project.demo} className="text-primary hover:underline">View Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Latest Posts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12">
          {blogPosts.map(post => (
            <div key={post.title} className="bg-white shadow-lg hover:scale-105 transition-all rounded-lg">
              <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
                <a href={post.url} className="text-primary hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-primary text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Let's Connect</h2>
          <p className="text-lg">Have a project or want to collaborate? I’d love to hear from you!</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-white text-gray-900" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-white text-gray-900" />
            <textarea placeholder="Your Message" className="w-full p-4 rounded-lg bg-white text-gray-900" rows="6"></textarea>
            <button type="submit" className="w-full p-4 bg-secondary text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </section>

      {/* Suggested Section */}
      <section id="suggested" className="py-12 bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore More</h2>
          <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-lg text-xl transition-transform hover:scale-105">See More Projects</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
