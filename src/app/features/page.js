'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const features = [
  {
    title: 'Student Management',
    description: 'Comprehensive student profiles, attendance tracking, and academic records management.',
    icon: '👨‍🎓',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Teacher Dashboard',
    description: 'Streamlined lesson planning, grade management, and student progress tracking.',
    icon: '👨‍🏫',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Parent Portal',
    description: 'Real-time access to student progress, attendance, and communication with teachers.',
    icon: '👪',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Administrative Tools',
    description: 'Powerful tools for school management, resource allocation, and reporting.',
    icon: '👨‍💼',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default function Features() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
          >
            Powerful Features for Every Role
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
          >
            Discover how EduSync can transform your educational institution
          </motion.p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className={`relative ${index % 2 === 0 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <div className={`mt-10 lg:mt-0 ${index % 2 === 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{feature.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-gray-500">{feature.description}</p>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">Real-time updates and notifications</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">Secure data management</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-700">Mobile-friendly interface</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 