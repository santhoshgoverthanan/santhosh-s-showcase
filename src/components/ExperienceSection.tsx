import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Rocket, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      color: "from-cyan-500 to-blue-500",
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
      color: "from-purple-500 to-pink-500",
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
        "50+ successful client projects delivered",
        "Logo & Portfolio Design for individuals and businesses",
      ],
      color: "from-green-500 to-emerald-500",
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
      color: "from-blue-500 to-indigo-500",
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
      color: "from-orange-500 to-amber-500",
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
      color: "from-teal-500 to-cyan-500",
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
      color: "from-violet-500 to-purple-500",
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
      color: "from-yellow-500 to-orange-500",
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
      color: "from-red-500 to-pink-500",
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
      color: "from-accent to-yellow-500",
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
      color: "from-accent to-orange-500",
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.08 + 0.2, type: "spring" }}
                  className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} transform -translate-x-1/2 z-10 ring-4 ring-background`}
                />

                {/* Content */}
                <div className={`flex-1 ml-10 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-5 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color}`}>
                        {exp.type === "education" ? (
                          <GraduationCap className="w-5 h-5 text-white" />
                        ) : exp.type === "freelance" ? (
                          <Rocket className="w-5 h-5 text-white" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="text-xs font-mono text-primary">{exp.period}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{exp.company}</p>
                        <div className={`flex items-center gap-1 text-xs text-muted-foreground mt-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-1.5 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`text-sm text-muted-foreground flex gap-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="text-primary mt-0.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
