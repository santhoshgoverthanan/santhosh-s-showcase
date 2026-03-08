import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 80 },
        { name: "Django", level: 85 },
        { name: "React", level: 75 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 85 },
        { name: "scikit-learn", level: 90 },
        { name: "OpenCV", level: 80 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 90 },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Azure", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "Docker", level: 70 },
      ],
    },
  ];

  const technologies = [
    "Python", "JavaScript", "Django", "Flask", "React", "TensorFlow",
    "Keras", "scikit-learn", "OpenCV", "Pandas", "NumPy", "AWS",
    "Azure", "Git", "MongoDB", "MySQL", "Tableau", "Power BI",
    "Docker", "REST APIs", "HTML5", "CSS3", "Agile", "Linux"
  ];

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Skill Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl glass-card"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-mono text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-mono text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="skill-badge cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
