import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Briefcase, Calendar } from 'lucide-react';
import * as THREE from 'three';


export default function Portfolio() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleCardMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05) translateY(-10px)`;
  };

  const handleCardMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateY(0)';
  };

  const projects = [
    {
      id: 1,
      title: "LangChain E-commerce Customer Support App",
      description: "Developed an AI-driven chatbot for an e-commerce platform to enhance customer support by automatically answering FAQs, including shipping, returns, payments, and product information. The system leverages retrieval-augmented generation (RAG) with a vector database to provide accurate, context-aware responses.",
      tech: ["Python", "LangChain", "RAG", "ChromaDB", "OpenAI/DeepSeek LLM API", "Docker"],
      gradient: "from-blue-500 to-cyan-500",
      url : "https://github.com/marwanekh/ecobody-ecommerce-rag"
    },
    {
      id: 2,
      title: "100 Sports Classification Project",
      description: "Leveraging a pre-trained VGG16 model to extract meaningful features from sports images, this project applies multiple machine learning classifiers, including Random Forest, to accurately categorize them. The solution enhances automated sports analytics, streamlines media organization, and improves fan engagement by enabling faster and more reliable image classification.",
      tech: ["Python", "Scikit-learn", "VGG16", "K-Nearest Neighbors", "SVM", "Random Forest", "Decision Tree", "Logistic Regression"],
      gradient: "from-purple-500 to-pink-500",
      url : "https://github.com/marwanekh/Sports-Classification-Project"
    },
    {
      id: 3,
      title: "predicting cardiovascular disease",
      description: "This project focuses on analyzing and predicting cardiovascular disease by combining data analysis, visualization, and machine learning techniques. Using Python, it performs comprehensive data exploration and creates insightful visualizations with Pandas, NumPy, Matplotlib, and Seaborn. Machine learning models are implemented with Apache Spark in Java to predict cardiovascular risk, enabling better understanding and early detection of the disease.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      gradient: "from-orange-500 to-red-500",
      url : "https://github.com/marwanekh/Big-Data_Machine_learning_with_SparkML"
    },
    {
      id: 4,
      title: "Marketing Campaign Analysis Project",
      description: "Designed to analyze data from a previous marketing campaign of a financial institution, the project focuses on data exploration, data preparation, and data clustering. Using Python, it uncovers insights and patterns through detailed analysis and visualization, enabling more effective, data-driven decisions for future marketing strategies.",
      tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Data clustering (various algorithms)"],
      gradient: "from-green-500 to-teal-500",
      url : "https://github.com/marwanekh/Bank-Data-Mining-project-with-python"
    }
  ];

  const experiences = [
    {
      company: "University of Limerick, Ireland",
      role: "AI Research Intern",
      period: "Jan 2025 – Jun 2025",
      description: "Evaluated state-of-the-art multimodal LLMs (BLIP-2, MiniGPT-4, LLaVA, Flamingo) on Visual Question Answering, benchmarking on 100k+ GQA samples.",
      achievements: ["Designed an evaluation pipeline with accuracy, consistency, and mean-per-type metrics, enabling systematic comparison of 4+ models.", "Conducted qualitative error analysis that identified recurring failure patterns, informing future dataset augmentation strategies."]
    },
    {
      company: "OCP S.A, Morocco",
      role: "AI & Data Science Intern",
      period: "Jun 2024 – Aug 2024",
      description: "Built ML/DL forecasting models for phosphate price prediction, achieving a 15% reduction in error rate compared to baseline statistical methods.",
      achievements: ["Performed exploratory analysis on 10+ years of market data, uncovering key demand–supply drivers.", "Automated data preprocessing and model evaluation pipeline, reducing experimentation time by 30%."]
    },
    {
      company: "Techbible-UK",
      role: "MERN Stack Developer",
      period: "Apr 2023 – Jun 2023",
      description: "Designed and launched techbible.ai, a platform for technological tool discovery, reaching 500+ active users within first month.",
      achievements: ["Improved user engagement by 60% through optimized search and NLP chatbot integration.", "Built interactive features (likes, comments, personalized dashboards) that increased community retention."]
    }
  ];

  const tools = [
    { name: "Python", color: "#3776AB", icon: "./tools_icon/Python.png"},
    { name: "FastAPI", color: "#009688", icon: "./tools_icon/FastAPI.png" },
    { name: "TensorFlow", color: "#FF6F00", icon: "./tools_icon/TensorFlow.png" },
    { name: "Pandas", color: "#150458", icon: "./tools_icon/Pandas.png" },
    { name: "SQL", color: "#4479A1", icon: "./tools_icon/MySQL.png" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-gray-50 to-blue-50'}`}>
      {/* Floating Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
          isDark ? 'bg-yellow-400 text-gray-900' : 'bg-gray-900 text-yellow-400'
        } shadow-lg hover:shadow-2xl`}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse ${
                isDark ? 'bg-blue-500' : 'bg-purple-300'
              }`}
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="max-w-4xl text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className={`w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 transform transition-transform duration-500 hover:scale-110 hover:rotate-6`}>
              <div className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                <img 
                  src="./portfolio_profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    console.log("Image failed to load");
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log("Image loaded successfully")}
                />
              </div>
            </div>
          </div>
          
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Marwane K. HASSANI
          </h1>
          
          <p className={`text-2xl md:text-3xl mb-6 transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold`}>
            Data Scientist & ML Engineer
          </p>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I’m a Data Scientist with a Master’s in Data Science and Intelligent Systems, driven by curiosity and problem-solving. I enjoy exploring data, building intelligent systems, and experimenting with AI models to uncover insights and make things work smarter.
          </p>
          
          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-8 py-4 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                isDark ? 'border-white text-white hover:bg-white hover:text-gray-900' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className={`text-sm uppercase tracking-wider mb-2 transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              MY JOURNEY
            </p>
            <h2 className={`text-5xl font-bold transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Work Experience
            </h2>
          </div>
          
          <div className="relative mt-20">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="space-y-24">
              {experiences.map((exp, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${
                        isDark ? 'bg-gray-800' : 'bg-white'
                      } border-4 border-blue-500`}>
                        <Briefcase className="text-blue-500" size={24} />
                      </div>
                    </div>

                    {/* Date Label - alternating left/right */}
                    {isLeft ? (
                      <div className={`absolute left-1/2 ml-12 top-0 transform -translate-y-1/2 z-10 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      } text-sm font-medium whitespace-nowrap`}>
                        {exp.period}
                      </div>
                    ) : (
                      <div className={`absolute left-1/2 -ml-12 top-0 transform -translate-x-full -translate-y-1/2 z-10 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      } text-sm font-medium whitespace-nowrap`}>
                        {exp.period}
                      </div>
                    )}

                    {/* Content Card */}
                    <div className={`grid grid-cols-2 gap-8 items-start ${isLeft ? '' : ''}`}>
                      {isLeft ? (
                        <>
                          {/* Left Card */}
                          <div className="text-right pr-12">
                            <div
                              className={`inline-block text-left p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                                isDark ? 'bg-gray-800 bg-opacity-80' : 'bg-white'
                              } backdrop-blur-sm shadow-xl hover:shadow-2xl border ${
                                isDark ? 'border-gray-700' : 'border-gray-200'
                              }`}
                            >
                              <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {exp.role}
                              </h3>
                              <p className={`text-lg font-semibold mb-4 transition-colors duration-500 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                                {exp.company}
                              </p>
                              <p className={`mb-4 leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {exp.description}
                              </p>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    <span className={`transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* Right Empty Space */}
                          <div />
                        </>
                      ) : (
                        <>
                          {/* Left Empty Space */}
                          <div />
                          {/* Right Card */}
                          <div className="pl-12">
                            <div
                              className={`p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                                isDark ? 'bg-gray-800 bg-opacity-80' : 'bg-white'
                              } backdrop-blur-sm shadow-xl hover:shadow-2xl border ${
                                isDark ? 'border-gray-700' : 'border-gray-200'
                              }`}
                            >
                              <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {exp.role}
                              </h3>
                              <p className={`text-lg font-semibold mb-4 transition-colors duration-500 ${isDark ? 'text-blue-400' : 'text-blue-500'}`}>
                                {exp.company}
                              </p>
                              <p className={`mb-4 leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {exp.description}
                              </p>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, j) => (
                                  <li key={j} className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    <span className={`transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                      {achievement}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-center text-lg mb-16 transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Innovative solutions powered by data and AI
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseMove={(e) => handleCardMouseMove(e, project.id)}
                onMouseLeave={handleCardMouseLeave}
                className="relative group cursor-pointer transition-all duration-300"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                <div className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  isDark ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-95'
                } backdrop-blur-sm shadow-xl hover:shadow-2xl border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                      <ExternalLink className="text-white" size={24} />
                    </div>
                  </a>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`mb-6 leading-relaxed transition-colors duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-500 ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Tool Spheres Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technology Stack
          </h2>
          <p className={`text-center text-lg mb-16 transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hover and drag to interact with the tools
          </p>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, i) => (
              <ToolSphere key={i} tool={tool} isDark={isDark} />
            ))}
          </div> */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="group relative p-6 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon container */}
                <div className="relative z-10">
                  <div 
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 p-3"
                    style={{
                      background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
                      boxShadow: `0 10px 30px ${tool.color}50, 0 0 0 0 ${tool.color}30`,
                    }}
                  >
                     {tool.icon ? (
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className={`w-full h-full object-contain ${
                          tool.name === "Python" ? "" : "filter brightness-0 invert"
                        }`}
                      />
                    ) : (
                      <span className="text-white text-2xl font-bold">{tool.logo}</span>
                    )}
                  </div>
                  
                  <p className={`text-center font-semibold text-sm transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {tool.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-5xl font-bold mb-4 transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Let's Connect
          </h2>
          <p className={`text-lg mb-12 transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Interested in collaborating or have a project in mind?
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Github, href: "https://github.com/marwanekh", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/marwane-k-hassani-a65610217/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:marwane.hassani@outlook.ie", label: "Email" }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } shadow-lg hover:shadow-2xl`}
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
          
          <a
            href="mailto:marwane.hassani@outlook.ie"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 text-center transition-colors duration-500 ${isDark ? 'text-gray-400' : 'text-gray-600'} border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <p>© 2025 Marwane KHALFAOUI HASSANI. Crafted with data and design.</p>
      </footer>
    </div>
  );
}

function ToolSphere({ tool, isDark }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const sphereRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(160, 160);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Create canvas texture for hexagonal pattern
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Background color
    const color = new THREE.Color(tool.color);
    ctx.fillStyle = `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
    ctx.fillRect(0, 0, 512, 512);
    
    // Draw hexagonal pattern
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    const hexSize = 25;
    for (let y = 0; y < 512; y += hexSize * 1.5) {
      for (let x = 0; x < 512; x += hexSize * Math.sqrt(3)) {
        const offsetX = (y / (hexSize * 1.5)) % 2 === 0 ? 0 : hexSize * Math.sqrt(3) / 2;
        drawHexagon(ctx, x + offsetX, y, hexSize);
      }
    }
    
    // Add logo in center
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillText(tool.icon, 256, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    
    // Material with proper lighting
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.3,
      roughness: 0.4,
      envMapIntensity: 1
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-5, -5, 5);
    scene.add(pointLight);

    // Mouse interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let targetRotation = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        targetRotation.y += deltaX * 0.01;
        targetRotation.x += deltaY * 0.01;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth rotation interpolation
      rotation.x += (targetRotation.x - rotation.x) * 0.1;
      rotation.y += (targetRotation.y - rotation.y) * 0.1;
      
      sphere.rotation.x = rotation.x;
      sphere.rotation.y = rotation.y;
      
      // Auto-rotate slowly when not dragging
      if (!isDragging) {
        targetRotation.y += 0.003;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, [tool.color, tool.icon]);

  function drawHexagon(ctx, x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + size * Math.cos(angle);
      const hy = y + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.stroke();
  }

  return (
    <div className="flex flex-col items-center">
      <div 
        ref={mountRef} 
        className="cursor-grab active:cursor-grabbing transition-transform duration-300 hover:scale-110"
        style={{ width: '160px', height: '160px' }}
      />
      <p className={`mt-4 font-semibold text-lg transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {tool.name}
      </p>
    </div>
  );
}