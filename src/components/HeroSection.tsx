import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/santhosh-profile.jpg";

const HeroSection = () => {
  const roles = ["AI/ML Engineer", "Software Developer", "Data Analyst", "Full Stack Developer"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/17/39591-421906416_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* Floating orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "5%", left: "5%" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "10%", right: "5%" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "40%", right: "20%" }}
        />

        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-primary font-mono">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient glow-text">Santhosh</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 h-12"
            >
              <motion.span
                key={roles[0]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-primary"
              >
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 3,
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: roles.length * 3 - 0.5,
                    }}
                    className="absolute"
                    style={{ display: "inline-block" }}
                  >
                    {role}
                  </motion.span>
                ))}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Passionate about building intelligent systems that solve real-world problems. 
              Specializing in AI, Machine Learning, and Full-Stack Development with a focus 
              on scalable, impactful solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow-primary hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://drive.google.com/uc?export=download&id=YOUR_RESUME_ID"
                className="px-6 py-4 rounded-full border border-accent text-accent font-semibold hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/santhosh-G-07", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/santhosh-goverthanan-25292b292", label: "LinkedIn" },
                { icon: Mail, href: "mailto:govakalaisanthosh@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary hover:glow-primary transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Profile container */}
            <div className="relative">
              {/* Rotating border */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ padding: "4px" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              {/* Second rotating ring */}
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Image */}
              <motion.img
                src={profileImage}
                alt="Santhosh Goverthanan"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Floating tech badges */}
            {[
              { text: "Python", top: "5%", left: "-5%" },
              { text: "AI/ML", top: "45%", left: "-20%" },
              { text: "React", top: "85%", left: "0%" },
              { text: "TensorFlow", top: "15%", right: "-15%" },
              { text: "AWS", top: "70%", right: "-10%" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                className="absolute px-4 py-2 rounded-full glass text-sm font-mono text-primary border border-primary/40 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.15, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  top: badge.top,
                  left: badge.left,
                  right: badge.right,
                }}
              >
                {badge.text}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-mono">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
