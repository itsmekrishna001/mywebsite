import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            About <span className="gradient-text">Krishna</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about transforming businesses through intelligent automation and data-driven solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm Krishna Handa, an AI Automation Expert and Machine Learning Engineer with a passion for 
              creating intelligent solutions that drive business transformation. Currently pursuing my 
              Bachelor's in Computer Science Engineering at Lovely Professional University.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As the Founder & CEO of StartToAI.com, I specialize in developing WhatsApp chatbots, 
              business workflow automation, and comprehensive data analysis solutions that help 
              organizations optimize their operations and achieve measurable results.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Phagwara, Punjab, India</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Available for Projects</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">2023 - 2027</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor of Computer Science Engineering<br />
                Lovely Professional University
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-electric-100 dark:bg-electric-900 rounded-lg">
                  <Briefcase className="text-electric-600 dark:text-electric-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Current Role</h3>
                  <p className="text-gray-600 dark:text-gray-400">June 2025 - Present</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Founder & CEO<br />
                StartToAI.com
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Previous Experience</h3>
                  <p className="text-gray-600 dark:text-gray-400">Jan 2024 - May 2025</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Content Writer<br />
                Infocresst
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;