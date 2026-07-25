import React, { useState } from 'react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Monitor, 
  Layers, 
  Terminal,
  ChevronDown,
  Image as ImageIcon,
  Lock
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resources = [
    {
      title: 'Verbos en inglés',
      description: 'Lista interactiva de verbos y recursos de apoyo para estudio rápido.',
      href: '/verbos.html',
    },
  ];

  // Datos de habilidades (Skills)
  const skills = [
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Fullstack' },
    { name: 'Astro', category: 'Frontend' },
    { name: 'Vite', category: 'Tooling' },
    { name: 'HTML5 & CSS3', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Bootstrap', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL / MySQL', category: 'Database' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Figma', category: 'UI/UX' },
  ];

  // Datos de proyectos ordenados del más reciente al más antiguo
  const projects = [
    {
      id: 1,
      title: 'utsmaracaibo.edu.ve (Rediseño 2026)',
      description: 'Renovación total del portal web oficial, destacando por un diseño completamente moderno y contemporáneo. Integra un panel de control a la medida para la gestión dinámica del contenido, garantizando una administración eficiente y una experiencia de usuario vanguardista.',
      tech: ['Astro', 'React', 'Tailwind CSS'],
      status: 'En Desarrollo',
      year: '2026',
      featured: true,
      imagePlaceholder: '[Mockup del nuevo diseño UTS 2026]',
      imageUrl: '/asset/utsmaracaibo-new.png',
      linkUrl: 'https://utsmaracaibo.edu.ve'
    },
    {
      id: 2,
      title: 'SIGA - Sistema Integral de Gestión Académica',
      description: 'Plataforma robusta para la administración académica. Especializada en la gestión de docentes, permite la creación de sus usuarios y el manejo completo de sus horarios y asignaciones mediante un panel intuitivo.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      status: 'Completado',
      year: '2026',
      imagePlaceholder: '[Imagen del Dashboard de SIGA]',
      imageUrl: '/asset/siga.png',
      isPrivate: true
    },
    {
      id: 3,
      title: 'utsmaracaibo.edu.ve (Versión Actual)',
      description: 'Mantenimiento y optimización del portal web oficial de la institución, asegurando la entrega de información vital a la comunidad estudiantil.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'Mantenimiento',
      year: '2023',
      imagePlaceholder: '[Captura de la web actual UTS]',
      imageUrl: '/asset/utsmaracaibo-old.png',
      linkUrl: 'http://www.utsmaracaibo.edu.ve/'
    },
    {
      id: 4,
      title: 'Tortissimas and Cookies',
      description: 'E-commerce interactivo para una pastelería local. Catálogo dinámico, carrito de compras y sistema de pedidos por WhatsApp con animaciones fluidas.',
      tech: ['React', 'Vite', 'CSS Modules'],
      status: 'Completado',
      year: '2020',
      imagePlaceholder: '[Imagen de la tienda Tortissimas]',
      imageUrl: '/asset/tandc.png'
    }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navegación */}
      <nav className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Iván Pimentel.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <button onClick={() => scrollTo('home')} className="hover:text-indigo-400 transition-colors cursor-pointer">Inicio</button>
            <button onClick={() => scrollTo('skills')} className="hover:text-indigo-400 transition-colors cursor-pointer">Habilidades</button>
            <button onClick={() => scrollTo('projects')} className="hover:text-indigo-400 transition-colors cursor-pointer">Proyectos</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-indigo-400 transition-colors cursor-pointer">Contacto</button>
            <button onClick={() => setIsResourcesOpen(true)} className="hover:text-indigo-400 transition-colors cursor-pointer">Recursos</button>
          </div>
        </div>
      </nav>

      {isResourcesOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <button
            type="button"
            aria-label="Cerrar modal de recursos"
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setIsResourcesOpen(false)}
          />
          <div className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">Recursos</p>
                <h2 className="text-2xl font-bold text-slate-100">Paginas de ayuda</h2>
                <p className="text-sm text-slate-400 mt-2">
                  Accesos rápidos a materiales útiles que puedes abrir desde el portafolio.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsResourcesOpen(false)}
                className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                Cerrar
              </button>
            </div>

            <div className="space-y-3">
              {resources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-4 hover:border-cyan-500/60 hover:bg-slate-950 transition-colors"
                >
                  <div>
                    <p className="font-semibold text-slate-100">{resource.title}</p>
                    <p className="text-sm text-slate-400 mt-1">{resource.description}</p>
                  </div>
                  <ExternalLink size={18} className="shrink-0 text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
          {/* Elementos de fondo decorativos */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 text-center z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-300 mb-8">
              <Terminal size={14} className="text-cyan-400" />
              <span>Disponible para nuevos proyectos</span>
            </div>
            <p className="text-indigo-400 font-semibold tracking-wider mb-4 uppercase text-sm">¡Hola! Soy Iván Pimentel 👋</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Construyendo experiencias web <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                rápidas y escalables
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Soy un desarrollador Frontend/Fullstack especializado en crear sistemas robustos e interfaces modernas usando el ecosistema actual de JavaScript (React, Astro, Next.js).
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => scrollTo('projects')} className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-lg shadow-indigo-500/25 cursor-pointer">
                Ver mi trabajo
              </button>
              <button onClick={() => scrollTo('contact')} className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-all border border-slate-700 cursor-pointer">
                Contactarme
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={24} />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Code2 className="text-indigo-400" />
                Tecnologías y Herramientas
              </h2>
              <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                  <p className="font-semibold text-slate-300 group-hover:text-indigo-300 transition-colors">{skill.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Layers className="text-cyan-400" />
                Proyectos Destacados
              </h2>
              <div className="w-20 h-1 bg-cyan-500 rounded-full"></div>
              <p className="text-slate-400 mt-6 max-w-2xl">
                Una selección de sistemas académicos, e-commerce y portales institucionales en los que he trabajado, aplicando arquitecturas modernas.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`flex flex-col md:flex-row rounded-2xl bg-slate-900 border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 ${project.featured ? 'border-indigo-500/50' : 'border-slate-800'}`}
                >
                  {/* Image Placeholder Area */}
                  <div className="relative bg-slate-800 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-slate-800 md:w-[45%] min-h-[250px] overflow-hidden group">
                    
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    ) : (
                      <div className="text-center flex flex-col items-center gap-3 opacity-60 relative z-10">
                        <ImageIcon size={48} className="text-slate-500" />
                        <p className="text-sm text-slate-400 font-mono">
                          {project.imagePlaceholder}
                        </p>
                        <p className="text-xs text-slate-500">
                          (Inserta la imagen aquí)
                        </p>
                      </div>
                    )}

                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        Próximamente
                      </div>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col justify-between md:w-[55%]">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-200">{project.title}</h3>
                        <span className="text-xs font-mono text-slate-500 px-2 py-1 bg-slate-950 rounded border border-slate-800">
                          {project.year}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.isPrivate ? (
                          <span className="flex items-center gap-2 text-sm text-slate-500 font-medium cursor-not-allowed" title="Por motivos de confidencialidad, este sistema no es de acceso público.">
                            <Lock size={16} /> Sistema Interno / Privado
                          </span>
                        ) : (
                          <a href={project.linkUrl || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                            <ExternalLink size={16} /> Ver Proyecto
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Monitor className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">¿Trabajamos juntos?</h2>
            <p className="text-slate-400 mb-10 text-lg">
              Actualmente estoy abierto a nuevas oportunidades, ya sea para el desarrollo de sistemas web a medida o colaboraciones en proyectos web.
            </p>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/ivanpdelg" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ivan-pimentel-8532a3387/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
                <Linkedin size={24} />
              </a>
              {/* Actualizado con un Gmail genérico profesional */}
              <a href="mailto:ivanpdelg@gmail.com" className="p-4 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer actualizado sin el .me */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Iván Pimentel. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;