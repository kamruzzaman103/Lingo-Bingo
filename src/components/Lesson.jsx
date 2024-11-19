import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Lesson = () => {
  const { lesson_no } = useParams();
  const [lessonWords, setLessonWords] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        navigate('/login');
      }
    });

    // Load vocabulary data
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const words = data.filter(item => item.Lesson_no === parseInt(lesson_no));
        setLessonWords(words);
      });
  }, [lesson_no, navigate]);

  const [modalData, setModalData] = useState(null);

  const openModal = (word) => {
    setModalData(word);
  };

  const closeModal = () => {
    setModalData(null);
  };

  // Function to pronounce the word with language support
  const pronounceWord = (word, lang = 'en-US') => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = lang; // Set language for pronunciation
    speechSynthesis.speak(utterance);
  };

  if (!isAuthenticated) return null;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Lesson {lesson_no}</h1>

      <div className="grid grid-cols-3 gap-4">
        {lessonWords.map(word => (
          <div
            key={word.Id}
            className={`p-4 rounded shadow ${
              word.difficulty === 'easy' ? 'bg-green-100' : word.difficulty === 'medium' ? 'bg-yellow-100' : 'bg-red-100'
            }`}
          >
            <h2 className="text-xl font-semibold">{word.word}</h2>
            <p><strong>Meaning:</strong> {word.meaning}</p>
            <p><strong>Pronunciation:</strong> {word.pronunciation}</p>
            <p><strong>Part of Speech:</strong> {word.part_of_speech}</p>
            <button
              onClick={() => pronounceWord(word.word, 'hi-IN')} // Use Hindi locale
              className="mt-2 bg-blue-500 text-white p-2 rounded"
            >
              Pronounce (Hindi)
            </button>
            <button onClick={() => openModal(word)} className="mt-2 bg-green-500 text-white p-2 rounded">
              When to say
            </button>
          </div>
        ))}
      </div>

      <Link to="/start-learning" className="mt-4 block bg-gray-300 text-center p-2 rounded">
        Back to Lessons
      </Link>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded w-1/2">
            <h2 className="text-2xl font-semibold mb-2">{modalData.word}</h2>
            <p><strong>Meaning:</strong> {modalData.meaning}</p>
            <p><strong>When to Say:</strong> {modalData.when_to_say}</p>
            <p><strong>Example:</strong> {modalData.example}</p>
            <button onClick={closeModal} className="mt-4 bg-gray-500 text-white p-2 rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
