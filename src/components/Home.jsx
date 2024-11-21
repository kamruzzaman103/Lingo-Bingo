import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Banner from './home/Banner';
import About from './home/About';
import SuccessCounter from './home/SuccessCounter';
import ExtraSection from './home/ExtraSection';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="home">
      <Banner />
      <About />
      <SuccessCounter />
      <ExtraSection />
    </div>
  );
};

export default Home;
