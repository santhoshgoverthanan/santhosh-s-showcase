import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Smartphone, Globe, Server, FileText, Linkedin, Users,
  Brain, Bot, Cog, Monitor, GraduationCap, Tablet, MessageCircle
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "919361431370";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Santhosh,%20I'm%20interested%20in%20your%20services.`;

  const services = [
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native & cross-platform mobile applications with intuitive UI/UX",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive, modern websites and web applications",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable APIs, databases, and server-side architecture",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Resume Creation",
      description: "ATS-optimized, professional resumes that stand out",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Optimization",
      description: "Profile makeovers for maximum visibility and engagement",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personal Mentoring",
      description: "1-on-1 guidance for career growth and skill development",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Brain,
      title: "ML Models",
      description: "Custom machine learning solutions for your business needs",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Bot,
      title: "AI Models",
      description: "Intelligent AI systems, chatbots, and NLP solutions",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Cog,
      title: "Automation Tools",
      description: "Workflow automation, scripts, and productivity tools",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Monitor,
      title: "Desktop Apps",
      description: "Cross-platform desktop applications with modern interfaces",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: GraduationCap,
      title: "College Project Prototypes",
      description: "Academic projects with documentation and presentation support",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Tablet,
      title: "Mobile Apps",
      description: "Feature-rich mobile applications for iOS and Android",
      color: "from-sky-500 to-indigo-500",
    },
  ];

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From idea to execution — I deliver end-to-end solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${service.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>

              {/* Contact Button */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all`}
              >
                <MessageCircle className="w-4 h-4" />
                Contact Me
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Have a custom requirement? Let's discuss your project!
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
