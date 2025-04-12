'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function GradesPage() {
  const [selectedSemester, setSelectedSemester] = useState('Fall 2023');
  const [grades] = useState([
    {
      subject: 'Mathematics',
      grade: 'A',
      credits: 4,
      teacher: 'Mr. Johnson'
    },
    {
      subject: 'Science',
      grade: 'B+',
      credits: 4,
      teacher: 'Ms. Smith'
    },
    {
      subject: 'English',
      grade: 'A-',
      credits: 3,
      teacher: 'Mr. Brown'
    },
    {
      subject: 'History',
      grade: 'B',
      credits: 3,
      teacher: 'Ms. Davis'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Grades</h1>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Fall 2023">Fall 2023</option>
              <option value="Spring 2023">Spring 2023</option>
              <option value="Fall 2022">Fall 2022</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Credits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {grades.map((grade, index) => (
                  <motion.tr
                    key={grade.subject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {grade.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        grade.grade === 'A' ? 'bg-green-100 text-green-800' :
                        grade.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                        grade.grade === 'A-' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {grade.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {grade.credits}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {grade.teacher}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 