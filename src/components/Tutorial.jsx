// src/components/Tutorial.jsx


const Tutorial = () => {
  const tutorialVideos = [
    "https://www.youtube.com/embed/YOUR_VIDEO_ID1",
    "https://www.youtube.com/embed/YOUR_VIDEO_ID2",
    "https://www.youtube.com/embed/YOUR_VIDEO_ID3"
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
