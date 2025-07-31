import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, BarChart3, Users } from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'WhatsApp chatbots and business workflow automation solutions that streamline operations and improve customer engagement.',
      features: ['WhatsApp Chatbots', 'Workflow Automation', 'Process Optimization', 'Customer Support Bots'],
      color: 'primary',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models and intelligent systems that learn from your data to provide actionable insights and predictions.',
      features: ['Custom ML Models', 'Predictive Analytics', 'Pattern Recognition', 'AI Integration'],
      color: 'electric',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Comprehensive data analysis and visualization solutions using Power BI and advanced analytics tools.',
      features: ['Dashboard Creation', 'Data Visualization', 'Business Intelligence', 'Performance Metrics'],
      color: 'purple',
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'AI-powered lead generation systems that identify and nurture potential customers automatically.',
      features: ['Automated Lead Capture', 'Lead Scoring', 'Customer Segmentation', 'Conversion Optimization'],
      color: 'primary',
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
      primary: 'from-primary-500 to-primary-600 group-hover:from-primary-600 group-hover:to-primary-700',
      electric: 'from-electric-500 to-electric-600 group-hover:from-electric-600 group-hover:to-electric-700',
      purple: 'from-purple-500 to-purple-600 group-hover:from-purple-600 group-hover:to-purple-700',
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
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
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specialized services in AI automation, machine learning, and data analysis 
            to help businesses thrive in the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <div className="relative mb-6">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(service.color)} rounded-xl flex items-center justify-center transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={32} />
                </motion.div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 * featureIndex }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${getColorClasses(service.color)} rounded-full mr-3`} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href="#contact"
                  className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                >
                  Learn More →
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;