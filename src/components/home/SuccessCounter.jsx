// src/components/home/SuccessCounter.jsx

import CountUp from 'react-countup';

const SuccessCounter = () => {
  return (
    <div className="success-counter bg-white py-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
      <div>
        <h3 className="text-2xl font-bold">
          <CountUp end={5000} duration={3} />
        </h3>
        <p>Users</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          <CountUp end={100} duration={3} />
        </h3>
        <p>Lessons</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          <CountUp end={2000} duration={3} />
        </h3>
        <p>Vocabularies</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">
          <CountUp end={20} duration={3} />
        </h3>
        <p>Tutorials</p>
      </div>
    </div>
  );
};

export default SuccessCounter;
