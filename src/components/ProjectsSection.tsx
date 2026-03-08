import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Brain, Eye, Mic, BarChart3, FileText } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Medico: AI-Powered EHR",
      description: "An intelligent Electronic Health Record system using AI for smart diagnostics and patient management. Built with Python, TensorFlow, and Django.",
      tags: ["Python", "TensorFlow", "Django", "Zephy 7B", "SQLite3"],
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      github: "https://github.com/santhosh-G-07/medicoproject",
    },
    {
      title: "Face Recognition Attendance",
      description: "Automated attendance system using facial recognition technology. Implements real-time face detection and recognition using OpenCV and deep learning.",
      tags: ["Python", "OpenCV", "NumPy", "Django", "Deep Learning"],
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/santhosh-G-07",
    },
    {
      title: "Virtual Assistant ML",
      description: "AI-driven virtual assistant that helps users with tasks through voice or text interaction, utilizing NLP and speech recognition.",
      tags: ["Python", "NLP", "Speech Recognition", "Machine Learning"],
      icon: Mic,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/santhosh-G-07/Virtual-assistan--ml",
    },
    {
      title: "Text To Speech Recognition",
      description: "Text-to-speech application powered by Microsoft Azure Cognitive Services for natural voice synthesis and speech recognition.",
      tags: ["Python", "Azure", "Speech SDK", "Cognitive Services"],
      icon: FileText,
      color: "from-orange-500 to-red-500",
      github: "https://github.com/santhosh-G-07",
    },
    {
      title: "Academic Flow Dashboard",
      description: "Comprehensive data visualization dashboard for managing and analyzing academic workflows using modern BI tools.",
      tags: ["Excel", "Tableau", "Power BI", "Data Visualization"],
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      github: "https://github.com/santhosh-G-07",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From AI-powered healthcare solutions to intelligent automation systems—here are some of my notable works.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden glass-card"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}
                >
                  <project.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs font-mono rounded-md bg-secondary/50 text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/santhosh-G-07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
