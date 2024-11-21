import backgroundImage from '/bg-shadow.png';
const ExtraSection = () => {
  return (
    <div className="extra-section bg-black text-white py-12 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-aos="fade-up"
    >
      <h2 className="text-3xl text-center font-bold mb-6">Why Learn With Us?</h2>
      <p className="max-w-4xl mx-auto text-center">
        Our language learning platform is designed to make vocabulary retention fun and efficient. With interactive lessons and practical vocabulary applications, you’ll master new words in no time.
      </p>
    </div>
  );
};

export default ExtraSection;
