import Banner from './home/Banner';
import About from './home/About';
import SuccessCounter from './home/SuccessCounter';
import ExtraSection from './home/ExtraSection';

const Home = () => {
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
