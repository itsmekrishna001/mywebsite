import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Bot, BarChart3, Users, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'StartToAI.com Platform',
      description: 'Comprehensive AI automation platform offering WhatsApp chatbots, lead generation systems, and business intelligence solutions.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'WhatsApp API'],
      features: ['AI Chatbots', 'Lead Generation', 'Analytics Dashboard', 'Automation Tools'],
      icon: Bot,
      color: 'primary',
      link: '#',
      github: '#',
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'Advanced Power BI dashboard providing real-time insights and data visualization for enterprise clients.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Power BI', 'SQL', 'Python', 'Azure', 'DAX'],
      features: ['Real-time Analytics', 'Custom Visualizations', 'Automated Reports', 'KPI Tracking'],
      icon: BarChart3,
      color: 'electric',
      link: '#',
      github: '#',
    },
    {
      title: 'WhatsApp Automation Suite',
      description: 'Complete WhatsApp automation solution for customer support, lead nurturing, and sales conversion.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WhatsApp API', 'Node.js', 'MongoDB', 'AI/NLP', 'Webhook'],
      features: ['24/7 Support', 'Lead Qualification', 'Multi-language', 'Integration Ready'],
      icon: Users,
      color: 'purple',
      link: '#',
      github: '#',
    },
    {
      title: 'ML-Powered Lead Scoring',
      description: 'Machine learning system that automatically scores and prioritizes leads based on behavioral patterns and engagement.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'PostgreSQL', 'FastAPI'],
      features: ['Predictive Scoring', 'Behavioral Analysis', 'Auto-segmentation', 'CRM Integration'],
      icon: Zap,
      color: 'primary',
      link: '#',
      github: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      electric: 'from-electric-500 to-electric-600',
      purple: 'from-purple-500 to-purple-600',
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Innovative solutions that showcase expertise in AI automation, 
            machine learning, and data-driven business intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className={`p-3 bg-gradient-to-r ${getColorClasses(project.color)} rounded-lg`}>
                    <project.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.link}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(project.color)} rounded-full mr-2`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="flex space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.link}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-primary-600 to-electric-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    className="py-2 px-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300"
                  >
                    Code
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Build Something Amazing Together
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;