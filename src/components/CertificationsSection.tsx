import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Microsoft Azure AI Certification",
      issuer: "ICT Academy",
      date: "2024",
      description: "Azure Cognitive Services, Computer Vision, LUIS, Speech Recognition",
      color: "from-blue-500 to-cyan-500",
      badge: "🔷",
    },
    {
      title: "Core Python Certification",
      issuer: "Coregenic Software IT Solutions",
      date: "2024",
      description: "Advanced Python programming, OOP, Data Structures, File Handling",
      color: "from-yellow-500 to-orange-500",
      badge: "🐍",
    },
    {
      title: "Data Visualization Developer",
      issuer: "freeCodeCamp",
      date: "2024",
      description: "D3.js, Responsive Data Visualization, Interactive Charts",
      color: "from-green-500 to-emerald-500",
      badge: "📊",
    },
    {
      title: "Artificial Intelligence with IoT",
      issuer: "AICRA",
      date: "2023",
      description: "AI integration with IoT systems, Smart Automation",
      color: "from-purple-500 to-pink-500",
      badge: "🤖",
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM",
      date: "2023",
      description: "Cloud Architecture, Solution Design, IBM Cloud Services",
      color: "from-indigo-500 to-blue-500",
      badge: "☁️",
    },
    {
      title: "Build Your Own Chatbot",
      issuer: "Microsoft Azure",
      date: "2023",
      description: "Azure Bot Service, Natural Language Processing, Conversational AI",
      color: "from-cyan-500 to-teal-500",
      badge: "💬",
    },
    {
      title: "Introduction to AI & Data Science Foundations",
      issuer: "Great Learning",
      date: "2023",
      description: "Machine Learning Basics, Data Analysis, Statistical Methods",
      color: "from-red-500 to-orange-500",
      badge: "🎓",
    },
    {
      title: "Data Tableau Certification",
      issuer: "Jobaaj Learning",
      date: "2024",
      description: "Tableau Desktop, Data Visualization, Dashboard Design",
      color: "from-blue-600 to-indigo-600",
      badge: "📈",
    },
    {
      title: "Advance Core Python Language",
      issuer: "Professional Training",
      date: "2024",
      description: "Advanced Python concepts, Meta-programming, Performance Optimization",
      color: "from-yellow-600 to-amber-500",
      badge: "⚡",
    },
    {
      title: "Academic On Demand Cohort",
      issuer: "Industry Training",
      date: "2024",
      description: "Industry-ready skills, Project-based learning, Professional Development",
      color: "from-teal-500 to-green-500",
      badge: "🏆",
    },
  ];

  return (
    <section id="certifications" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning is the key to growth. Here are my professional certifications and achievements.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-8 mb-12"
        >
          <div className="text-center p-4">
            <span className="text-4xl font-bold text-gradient">{certifications.length}+</span>
            <p className="text-sm text-muted-foreground font-mono mt-1">Certifications</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center p-4">
            <span className="text-4xl font-bold text-gradient">5+</span>
            <p className="text-sm text-muted-foreground font-mono mt-1">Platforms</p>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center p-4">
            <span className="text-4xl font-bold text-gradient">2023-24</span>
            <p className="text-sm text-muted-foreground font-mono mt-1">Years Active</p>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
            >
              {/* Gradient top accent */}
              <div className={`h-1 bg-gradient-to-r ${cert.color}`} />
              
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="p-6 relative">
                {/* Badge and Year */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cert.badge}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-mono text-muted-foreground border border-border">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">{cert.issuer}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Verified badge */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span>Verified Credential</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://linkedin.com/in/santhosh-goverthanan-25292b292"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent/10 transition-all"
          >
            <ExternalLink size={18} />
            View All on LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
