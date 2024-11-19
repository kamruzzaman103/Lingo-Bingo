// src/components/LetsLearn.jsx

import { Link } from 'react-router-dom';

const LetsLearn = () => {
  return (
    <div className="lets-learn-page p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Let’s Learn</h1>
      
      {/* Lesson Cards Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        {Array.from({ length: 10 }, (_, i) => (
          <Link 
            key={i} 
            to={`/lessons/${i + 1}`} 
            className="lesson-card bg-blue-500 text-white text-center p-4 rounded-lg hover:bg-blue-600 transition"
          >
            Lesson {i + 1}
          </Link>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="tutorial-section bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Learn the Alphabet</h2>
        <iframe 
          className="mx-auto w-full sm:w-3/4 h-64 sm:h-80 rounded-lg" 
          src="https://www.youtube.com/embed/eay5wsKYZww?si=FtrCMPZw-ShfTC-y" 
          title="Alphabet Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen 
        ></iframe>
        <Link 
          to="/tutorials" 
          className="mt-6 inline-block text-blue-600 font-bold hover:underline"
        >
          View more tutorials
        </Link>
      </div>
    </div>
  );
};

export default LetsLearn;
