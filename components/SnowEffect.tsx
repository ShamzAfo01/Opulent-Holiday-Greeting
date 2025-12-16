
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SnowDroplet, Puddle } from '../types';
import { useWindowSize } from './hooks/useWindowSize';

const SnowEffect: React.FC = () => {
  const [droplets, setDroplets] = useState<SnowDroplet[]>([]);
  const [puddles, setPuddles] = useState<Puddle[]>([]);
  const timeoutsRef = useRef<Set<number>>(new Set());
  const { height } = useWindowSize();

  const addTimeout = (callback: () => void, delay: number) => {
    const id = window.setTimeout(() => {
      callback();
      timeoutsRef.current.delete(id);
    }, delay);
    timeoutsRef.current.add(id);
    return id;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newDroplets: SnowDroplet[] = [];
      const count = 2 + Math.floor(Math.random() * 3);
      
      const now = Date.now();
      
      for(let i=0; i<count; i++) {
          const id = now + Math.random();
          const x = Math.random() * 100;
          
          const durationBase = 1000;
          const durationVar = 1500;
          const fallDuration = durationBase + Math.random() * durationVar; 

          newDroplets.push({ id, x, delay: 0 });

          addTimeout(() => {
              setPuddles(prev => {
                  const nextPuddles = [...prev, { id, x, y: 90 + Math.random() * 5 }];
                  if (nextPuddles.length > 20) return nextPuddles.slice(-20);
                  return nextPuddles;
              });
              setDroplets(prev => prev.filter(d => d.id !== id));
          }, fallDuration); 
          
          addTimeout(() => {
              setPuddles(prev => prev.filter(p => p.id !== id));
          }, fallDuration + 3000);
      }
      
      if (newDroplets.length > 0) {
        setDroplets(prev => {
             const next = [...prev, ...newDroplets];
             if (next.length > 200) return next.slice(-200);
             return next;
        });
      }
    }, 100);

    return () => {
        clearInterval(interval);
        timeoutsRef.current.forEach(id => clearTimeout(id));
        timeoutsRef.current.clear();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      <AnimatePresence>
        {droplets.map((droplet) => (
          <motion.div
            key={droplet.id}
            initial={{ y: -20, opacity: 0, scale: 0.5 }}
            animate={{ 
                y: height ? height + 20 : 1000, 
                opacity: [0, 0.9, 0.9, 0], 
                scale: [0.8, 1.2, 0.5] 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "linear" }}
            style={{ left: `${droplet.x}%`, top: 0 }}
            className="absolute w-2 h-2 bg-white rounded-full blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          />
        ))}
      </AnimatePresence>
      
      {puddles.map((puddle) => (
        <div
            key={puddle.id}
            style={{ left: `${puddle.x}%`, top: `${puddle.y}%` }}
            className="absolute w-6 h-1.5 bg-white/30 rounded-[100%] blur-sm animate-melt transform -translate-x-1/2"
        />
      ))}
    </div>
  );
};

export default SnowEffect;
