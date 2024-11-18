// src/components/Lesson.jsx
import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Lesson = () => {
  const { lesson_no } = useParams();
  const [vocabularies, setVocabularies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      const lessonData = data.find(lesson => lesson.lesson_no === parseInt(lesson_no));
      setVocabularies(lessonData ? lessonData.vocabularies : []);
    };
    fetchData();
  }, [lesson_no]);

  return (
    <div className="lesson-page p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Lesson {lesson_no}</h1>

      <div className="vocab-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {vocabularies.map((vocab, index) => (
          <div 
            key={index} 
            className={`vocab-card p-4 rounded-lg ${
              vocab.difficulty === 'easy' ? 'bg-green-100' :
              vocab.difficulty === 'medium' ? 'bg-yellow-100' :
              'bg-red-100'
            }`}
          >
            <h2 className="text-xl font-semibold">{vocab.word}</h2>
            <p className="text-gray-700"><em>{vocab.pronunciation}</em></p>
            <p className="text-gray-500">{vocab.part_of_speech}</p>
            <button 
              className="text-blue-600 underline mt-2"
              onClick={() => alert(`Example: ${vocab.example}`)}
            >
              When to say
            </button>
          </div>
        ))}
      </div>

      <Link 
        to="/start-learning" 
        className="mt-8 block text-center text-blue-600 font-bold hover:underline"
      >
        Back to Lessons
      </Link>
    </div>
  );
};

export default Lesson;
