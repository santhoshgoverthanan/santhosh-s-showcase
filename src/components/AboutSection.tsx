import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Database, Cloud } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building intelligent systems with TensorFlow, Keras, and scikit-learn",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Creating scalable web apps with Python, Django, React, and modern tools",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transforming data into insights with SQL, Tableau, and Power BI",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying solutions on AWS and Azure with modern CI/CD practices",
    },
  ];

  return (
    <section id="about" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Crafted by Curiosity,{" "}
            <span className="text-gradient">Carved in Code</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate and driven tech professional with a strong foundation in{" "}
                <span className="text-foreground font-medium">
                  Artificial Intelligence, Machine Learning, Web Development, and Data Analytics
                </span>
                . I've stepped beyond the classroom and into real-world problem-solving—building 
                solutions that are intelligent, scalable, and impactful.
              </p>
              <p>
                Over the years, I've evolved from a curious learner to a creator—designing systems 
                that combine smart algorithms with clean, functional code. From predictive models 
                and automation scripts to full-stack web apps and data pipelines, I thrive at the{" "}
                <span className="text-primary font-medium">intersection of innovation and execution</span>.
              </p>
              <p>
                My strength lies not just in code, but in communication, leadership, and a 
                vision-driven mindset. I believe in building with purpose—whether it's crafting 
                a seamless user experience, optimizing data workflows, or deploying AI that 
                actually serves people.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-10"
            >
              {[
                { value: "100+", label: "Projects" },
                { value: "6+", label: "Internships" },
                { value: "3+", label: "Years Exp" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl glass-card"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-3xl md:text-4xl font-bold text-gradient block"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
