import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Brain, Database, Cloud, Terminal, Palette,
  Server, Cpu, BarChart3, GitBranch, Globe, Layers
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "JavaScript", level: 80, icon: "⚡" },
        { name: "SQL", level: 85, icon: "📊" },
        { name: "Java", level: 60, icon: "☕" },
        { name: "LaTeX", level: 70, icon: "📄" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 90, icon: "🧠" },
        { name: "Keras", level: 88, icon: "🔮" },
        { name: "scikit-learn", level: 92, icon: "📈" },
        { name: "OpenCV", level: 85, icon: "👁️" },
        { name: "NLP", level: 80, icon: "💬" },
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 92, icon: "🔢" },
        { name: "Tableau", level: 85, icon: "📊" },
        { name: "Power BI", level: 85, icon: "📉" },
        { name: "Matplotlib", level: 88, icon: "📈" },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Django", level: 90, icon: "🎸" },
        { name: "Flask", level: 85, icon: "🧪" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "HTML/CSS", level: 92, icon: "🎨" },
        { name: "REST APIs", level: 88, icon: "🔗" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "AWS", level: 78, icon: "☁️" },
        { name: "Azure", level: 85, icon: "🔷" },
        { name: "Docker", level: 72, icon: "🐳" },
        { name: "Git/GitHub", level: 92, icon: "🔀" },
        { name: "Linux", level: 80, icon: "🐧" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Oracle", level: 75, icon: "🔶" },
        { name: "SQLite", level: 88, icon: "📦" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
      ],
    },
  ];

  const expertiseAreas = [
    { icon: Brain, title: "Machine Learning", desc: "Neural Networks, Deep Learning, NLP" },
    { icon: Cpu, title: "AI Solutions", desc: "Computer Vision, Speech Recognition" },
    { icon: Server, title: "Backend Dev", desc: "REST APIs, Microservices" },
    { icon: Palette, title: "UI/UX Design", desc: "Responsive, User-Centric" },
    { icon: GitBranch, title: "Version Control", desc: "Git, CI/CD Pipelines" },
    { icon: Layers, title: "Full Stack", desc: "End-to-End Development" },
  ];

  const softSkills = [
    "Problem-Solving", "Team Collaboration", "Attention to Detail", 
    "Adaptability", "Time Management", "Effective Communication",
    "Analytical Thinking", "Leadership", "Agile Methodology"
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From AI algorithms to full-stack development — here's what I bring to the table.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="p-4 rounded-2xl glass-card text-center group cursor-pointer hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:glow-primary transition-all">
                <area.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {area.title}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative p-6 rounded-2xl glass-card overflow-hidden group hover:border-primary/30 transition-all"
            >
              {/* Gradient top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
              
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.1 + skillIndex * 0.08,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Terminal className="w-5 h-5 text-accent" />
            <h3 className="text-xl font-semibold">Soft Skills & Methodologies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary cursor-default transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
