import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Rocket, MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      type: "work",
      title: "Python Full Stack Developer Intern",
      company: "QSPIDERS / Campus Connect",
      location: "Bengaluru, India",
      period: "Jan 2025 – Jul 2025",
      description: [
        "Developed and deployed full-stack web applications using Python, Flask, HTML, CSS, and JavaScript",
        "Integrated backend logic with frontend interfaces to create responsive and scalable solutions",
        "Collaborated in an Agile team to build and test real-time modules for client-based projects",
        "Extensive knowledge in SQL queries, CRUD operations, Joins, Sub-queries, and Functions",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      type: "work",
      title: "Machine Learning Intern",
      company: "VCodez",
      location: "Chennai, India",
      period: "Feb 2025 – May 2025",
      description: [
        "Engineered and optimized ML models for predictive analytics, boosting efficiency by 20%",
        "Implemented linear regression, decision trees, and neural networks with 90% accuracy",
        "Handled data preprocessing, feature engineering, and model deployment on AWS/Azure",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      type: "freelance",
      title: "Founder & Tech Consultant",
      company: "SpydX",
      location: "India",
      period: "Dec 2024 – Present",
      description: [
        "Software & App Development, Web Development, ML Model Creation",
        "Career Branding: ATS-optimized resumes, LinkedIn optimization, portfolio design",
        "100+ successful client projects delivered",
        "Logo & Portfolio Design for individuals and businesses",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      type: "work",
      title: "Microsoft Azure AI Services",
      company: "ICT Academy",
      location: "India",
      period: "Oct 2024 – Nov 2024",
      description: [
        "Developed expertise in Azure Cognitive Services including Computer Vision and LUIS",
        "Hands-on experience designing and deploying scalable AI solutions on cloud",
        "Built AI-driven applications covering NLP, data extraction, and model deployment",
      ],
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      type: "work",
      title: "Business Development Intern",
      company: "Maiyyam",
      location: "Coimbatore, India",
      period: "Sep 2024 – Oct 2024",
      description: [
        "Learned data analysis, project creation and business analysis",
        "Contributed to business strategy and development initiatives",
      ],
      gradient: "from-orange-500 to-amber-500",
    },
    {
      type: "work",
      title: "IoT Intern",
      company: "Extazee Software Solutions",
      location: "Trichy, India",
      period: "Jul 2024 – Aug 2024",
      description: [
        "Hands-on experience with IoT frameworks and technologies",
        "Contributing to innovative smart technology projects",
        "Best practices in IoT development and deployment",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      type: "work",
      title: "Machine Learning Bootcamp",
      company: "Atharvo",
      location: "Bengaluru, India",
      period: "Jun 2024 – Jul 2024",
      description: [
        "Completed intensive ML internship bootcamp program",
        "Deep dive into machine learning and its applications",
        "Hands-on project work with real datasets",
      ],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      type: "work",
      title: "Python Developer Intern",
      company: "Coregenic Solutions",
      location: "India",
      period: "Feb 2024 – Jul 2024",
      description: [
        "Established robust proficiency in Python programming, DS, OOP principles",
        "Developed 20+ scripts for complex data processing tasks",
        "Improved execution speed by 30% in real-world applications",
      ],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      type: "work",
      title: "Data Science Intern",
      company: "Techvolt Software",
      location: "Coimbatore, India",
      period: "Jul 2023 – Aug 2023",
      description: [
        "Completed training in 'AI with Industrial 4.0'",
        "Mastered machine learning, neural networks, data analytics, and automation",
        "Increased accuracy of data by 20%",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      type: "education",
      title: "B.Tech in AI & Data Science",
      company: "Dhanalakshmi Srinivasan College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      period: "Nov 2021 – Jul 2025",
      description: [
        "CGPA: 8.4/10",
        "Specialized in Machine Learning, Deep Learning, and Data Analytics",
        "Active participation in technical events and hackathons",
      ],
      gradient: "from-accent to-yellow-500",
    },
    {
      type: "education",
      title: "Higher Secondary Education",
      company: "ACS Matriculation Higher Secondary School",
      location: "Tiruvannamalai, Tamil Nadu",
      period: "Jul 2019 – Oct 2021",
      description: [
        "Bio-Mathematics Stream",
        "Percentage: 81%",
      ],
      gradient: "from-accent to-orange-500",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A timeline of my professional journey, internships, and academic milestones.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16"
        >
          {[
            { value: "8+", label: "Internships" },
            { value: "50+", label: "Projects" },
            { value: "3+", label: "Years Learning" },
            { value: "8.4", label: "CGPA" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                className="text-3xl md:text-4xl font-bold text-gradient block"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Card Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
              className="group"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative h-full p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${exp.gradient} mb-4`}>
                  {exp.type === "education" ? (
                    <GraduationCap className="w-6 h-6 text-white" />
                  ) : exp.type === "freelance" ? (
                    <Rocket className="w-6 h-6 text-white" />
                  ) : (
                    <Briefcase className="w-6 h-6 text-white" />
                  )}
                </div>

                {/* Period Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                {/* Title & Company */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                
                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </div>

                {/* Expandable Description */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedIndex === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pt-4 border-t border-border/50">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary shrink-0">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Expand/Collapse indicator */}
                <div className="flex items-center justify-center mt-4 text-muted-foreground group-hover:text-primary transition-colors">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${exp.gradient} transition-opacity duration-300 rounded-2xl pointer-events-none`} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
