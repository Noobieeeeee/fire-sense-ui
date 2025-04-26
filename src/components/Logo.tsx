
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`flex items-center ${withText ? 'gap-3' : ''}`}>
      <div className={`relative ${sizeClasses[size]} animate-flame-pulse`}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M100 20C100 20 120 60 120 90C120 106.569 106.569 120 90 120C73.431 120 60 106.569 60 90C60 106.569 73.431 120 90 120C106.569 120 120 133.431 120 150C120 166.569 106.569 180 90 180C73.431 180 60 166.569 60 150C60 166.569 46.569 180 30 180C13.431 180 0 166.569 0 150C0 120 60 90 60 60C60 90 80 120 100 90C120 60 100 20 100 20Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M100 20C100 20 80 60 80 90C80 106.569 93.431 120 110 120C126.569 120 140 106.569 140 90C140 106.569 126.569 120 110 120C93.431 120 80 133.431 80 150C80 166.569 93.431 180 110 180C126.569 180 140 166.569 140 150C140 166.569 153.431 180 170 180C186.569 180 200 166.569 200 150C200 120 140 90 140 60C140 90 120 120 100 90C80 60 100 20 100 20Z"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="60" y1="20" x2="60" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FCD34D" />
              <stop offset="0.5" stopColor="#F97316" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="140" y1="20" x2="140" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FCD34D" />
              <stop offset="0.5" stopColor="#F97316" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
          {size === 'lg' && <span className="flame-gradient text-3xl font-bold">ESPFIRE</span>}
        </div>
      </div>
      {withText && (
        <Link to="/" className="no-underline">
          <h1 className="text-2xl font-bold">
            <span className="flame-gradient">ESPFIRE</span>
            <span className="text-white text-opacity-80 text-sm ml-2">
              An Early Fire Detection and Warning System using Computer Vision
            </span>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Logo;
