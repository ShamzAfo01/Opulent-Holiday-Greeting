import React from 'react';

export const BlueLayeredIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 20L80 35L50 50L20 35L50 20Z" fill="#3B82F6" fillOpacity="0.8" />
    <path d="M50 40L80 55L50 70L20 55L50 40Z" fill="#2563EB" fillOpacity="0.9" />
    <path d="M50 60L80 75L50 90L20 75L50 60Z" fill="#1D4ED8" />
  </svg>
);

export const GoldCoinIcon: React.FC<{ className?: string, onClick?: () => void }> = ({ className, onClick }) => (
  <button onClick={onClick} className={`group relative ${className} transition-transform hover:scale-105 active:scale-95 focus:outline-none`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <circle cx="50" cy="50" r="45" fill="url(#goldGradient)" stroke="#B45309" strokeWidth="2" />
      <circle cx="50" cy="50" r="35" stroke="#B45309" strokeWidth="1" strokeDasharray="4 2" />
      <path d="M50 25L55 40L70 42L58 52L62 68L50 60L38 68L42 52L30 42L45 40L50 25Z" fill="#B45309" fillOpacity="0.2" />
      <text x="50" y="55" textAnchor="middle" fill="#78350F" fontSize="12" fontFamily="serif" fontWeight="bold">OPEN</text>
      <defs>
        <linearGradient id="goldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="0.5" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"></div>
  </button>
);
