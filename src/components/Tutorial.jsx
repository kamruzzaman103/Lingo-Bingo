// src/components/Tutorial.jsx

import { Link } from "react-router-dom";
const Tutorial = () => {
  const tutorialVideos = [
    "https://www.youtube.com/embed/eay5wsKYZww?si=FtrCMPZw-ShfTC-y",
    "https://www.youtube.com/embed/nzy22LOgzsw?si=wSi3lKNcKB9D7_2h",
    "https://www.youtube.com/embed/xyVl2NfoTng?si=58WKjxKody96__IT",
    "https://www.youtube.com/embed/A_qB5yprdWU?si=iE6VetJkeIr8j7zY",
    "https://www.youtube.com/embed/z3nnWgIwHHg?si=ObOLXUKDdzCUHigd",
    "https://www.youtube.com/embed/IuziA9RyR88?si=l0Zi1kOgepSVEVQS"
  ];

  return (
    <div className="tutorial-page p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Tutorials</h1>

      <div className="video-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tutorialVideos.map((video, index) => (
          <iframe 
            key={index} 
            src={video} 
            className="w-full h-64 rounded-lg"
            title={`Tutorial ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
          ></iframe>
        ))}
      </div>
      

      <Link 
        to="/start-learning" 
        className="mt-8 block text-center text-blue-600 font-bold hover:underline"
      >
        Learn Vocabularies
      </Link>
    </div>
  );
};

export default Tutorial;
