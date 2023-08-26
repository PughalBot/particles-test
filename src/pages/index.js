// pages/index.js

import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-secondary">
      <ParticlesBackground />
      <h1 className="text-primary text-center py-20">Welcome to the Particles Test</h1>
    </div>
  );
}

export default Home;
