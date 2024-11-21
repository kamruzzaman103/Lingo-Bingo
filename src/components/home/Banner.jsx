import backgroundImage from '/bg-shadow.png';



const Banner = () => {
  return (
    <div className="banner bg-black text-white py-12"
    style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        data-aos="fade-up"
    >
      <h1 className="text-center text-4xl font-bold">Expand Your Vocabulary</h1>
      <p className="text-center mt-4">Learn languages in a fun and interactive way!</p>
    </div>
  );
};

export default Banner;
