
import React from 'react';
import InteractiveCard from './components/InteractiveCard';
import SnowEffect from './components/SnowEffect';

const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Background Layer: Cozy Indoor Christmas House with Fireplace */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[60s] hover:scale-105"
        style={{ 
            // A warm, dark interior room with a Christmas tree and fireplace
            backgroundImage: `url('https://images.unsplash.com/photo-1576666359048-52277d337f7a?q=80&w=2545&auto=format&fit=crop')`,
            // Dark room atmosphere
            filter: 'brightness(0.4) contrast(1.3)' 
        }}
      >
        {/* Vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.9)_100%)]"></div>
      </div>

      {/* Fireplace Glow Animation - Enhanced warm flickering light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,100,0,0.15),transparent_60%)] z-0 pointer-events-none mix-blend-screen animate-pulse-slow"></div>

      {/* Viewport Decoration: Festive Border / "Course" around the screen */}
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-24 z-30 pointer-events-none bg-gradient-to-b from-black to-transparent opacity-80"></div>
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-30 pointer-events-none bg-gradient-to-t from-black to-transparent opacity-80"></div>
      
      {/* Decorative corners for the Viewport */}
      <div className="absolute inset-0 z-30 pointer-events-none border-[16px] border-transparent"
           style={{
               borderImage: 'linear-gradient(to bottom right, #550000, #C5A028, #1A472A, #550000) 1',
               opacity: 0.6
           }}
      ></div>

      {/* Snow Effect Layer */}
      <SnowEffect />

      {/* Main Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4">
        
        {/* Header */}
        <div className="absolute top-12 left-0 right-0 text-center pointer-events-none z-30">
            <h2 className="text-gold-100 font-display text-2xl md:text-4xl tracking-[0.2em] uppercase opacity-0 animate-[fadeIn_2s_ease-out_0.5s_forwards] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] text-shadow">
                The Holiday Collection
            </h2>
        </div>

        {/* The Card */}
        <InteractiveCard />

        {/* Footer */}
        <div className="absolute bottom-6 text-gold-100/60 text-xs font-sans z-30 drop-shadow-md">
          <p className="tracking-widest uppercase">Gemini Powered • Holiday 2024</p>
        </div>
      </div>
    </div>
  );
};

export default App;
