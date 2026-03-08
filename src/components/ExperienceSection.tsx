import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: "work",
      title: "Python Full Stack Developer Intern",
      company: "QSPIDERS",
      location: "Bengaluru, India",
      period: "Feb 2025 – Present",
      description: [
        "Developed and deployed full-stack web applications using Python, Flask, HTML, CSS, and JavaScript",
        "Integrated backend logic with frontend interfaces to create responsive and scalable solutions",
        "Collaborated in an Agile team to build and test real-time modules for client-based projects",
      ],
    },
    {
      type: "work",
      title: "Machine Learning Intern",
      company: "VCodez",
      location: "Chennai, India",
      period: "Feb 2025 – May 2025",
      description: [
        "Worked on machine learning model development and deployment",
        "Applied deep learning techniques for real-world problem solving",
      ],
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
      ],
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
      ],
    },
    {
      type: "education",
      title: "B.Tech in AI & Data Science",
      company: "Dhanalakshmi Srinivasan College of Engineering",
      location: "Coimbatore, Tamil Nadu",
      period: "2021 – 2025",
      description: ["CGPA: 8.4/10", "Specialized in Machine Learning, Deep Learning, and Data Analytics"],
    },
  ];

  const certifications = [
    "Microsoft Azure AI Certification",
    "Core Python - Coregenic",
    "Data Visualization - freeCodeCamp",
    "AI with IoT - AICRA",
    "Cloud Solutions - IBM",
    "Build Chatbot - Microsoft Azure",
  ];

  return (
    <section id="experience" className="section-padding" ref={ref}>
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
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary glow-primary transform -translate-x-1/2 z-10"
                />

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          exp.type === "education"
                            ? "bg-accent/10"
                            : exp.type === "freelance"
                            ? "bg-green-500/10"
                            : "bg-primary/10"
                        }`}
                      >
                        {exp.type === "education" ? (
                          <GraduationCap className="w-6 h-6 text-accent" />
                        ) : (
                          <Briefcase
                            className={`w-6 h-6 ${
                              exp.type === "freelance" ? "text-green-500" : "text-primary"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-mono text-primary uppercase tracking-wider">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-semibold text-foreground mt-1">{exp.title}</h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                        <ul className="mt-4 space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-primary mt-1">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/50 transition-all cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
