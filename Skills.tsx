import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Data Visualization', level: 95, color: 'primary' },
    { name: 'Data Analysis', level: 92, color: 'electric' },
    { name: 'Microsoft Power BI', level: 88, color: 'purple' },
    { name: 'Python Programming', level: 90, color: 'primary' },
    { name: 'SQL Database Management', level: 85, color: 'electric' },
    { name: 'Machine Learning', level: 87, color: 'purple' },
    { name: 'AI Automation', level: 93, color: 'primary' },
    { name: 'WhatsApp Bot Development', level: 96, color: 'electric' },
  ];

  const certifications = [
    'Software Engineering: Implementation and Testing',
    'Introduction to Cloud Computing',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      primary: 'bg-gradient-to-r from-primary-500 to-primary-600',
      electric: 'bg-gradient-to-r from-electric-500 to-electric-600',
      purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technical proficiencies and certifications that drive innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${getColorClasses(skill.color)}`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-500 to-electric-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Strengths
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Problem Solving',
                  'Team Leadership',
                  'Project Management',
                  'Client Communication',
                  'Innovation',
                  'Adaptability',
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;