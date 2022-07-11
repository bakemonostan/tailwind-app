const About = () => {
  return (
    <div className='w-full my-32'>
      <div className='mx-auto max-w-[1240px]'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>
            Trusted by developers across the world
          </h2>
          <p className='text-3xl py-6 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nihil quas porro error magni ea placeat. Consequatur rem doloribus
            aut?
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p mt-2 text-gray-400>
              Completeion
            </p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p mt-2 text-gray-400>
              Delivery
            </p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p mt-2 text-gray-400>
              Transactions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
