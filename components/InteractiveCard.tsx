import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generateHolidayGreeting } from '../services/geminiService';
import { GoldCoinIcon } from './Icons';
import { Sparkles, Send, RefreshCw, Pencil, X, TreePine, Snowflake, Star } from 'lucide-react';

const OrnateCorner: React.FC<{ className?: string, rotate?: number }> = ({ className, rotate = 0 }) => (
    <svg 
        className={`absolute w-24 h-24 pointer-events-none ${className}`} 
        style={{ transform: `rotate(${rotate}deg)` }}
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Intricate Filigree */}
        <path d="M5 5 C 25 5 40 10 45 35" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 5 C 5 25 10 40 35 45" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        
        <path d="M10 10 Q 50 10 50 50" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" fill="none" />
        
        {/* Leaves */}
        <path d="M45 35 Q 55 45 65 35 Q 55 25 45 35" fill="#AA8C2C" />
        <path d="M35 45 Q 45 55 35 65 Q 25 55 35 45" fill="#AA8C2C" />
        
        {/* Berries */}
        <circle cx="15" cy="15" r="4" fill="#8B0000" stroke="#5C4B13" strokeWidth="0.5" />
        <circle cx="22" cy="10" r="3" fill="#8B0000" stroke="#5C4B13" strokeWidth="0.5" />
        <circle cx="10" cy="22" r="3" fill="#8B0000" stroke="#5C4B13" strokeWidth="0.5" />
        
        {/* Decorative dots */}
        <circle cx="5" cy="60" r="1.5" fill="#D4AF37" />
        <circle cx="5" cy="70" r="1" fill="#D4AF37" />
        <circle cx="60" cy="5" r="1.5" fill="#D4AF37" />
        <circle cx="70" cy="5" r="1" fill="#D4AF37" />
    </svg>
);

const InteractiveCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [company, setCompany] = useState('Acme Corp');
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [tone, setTone] = useState<'professional' | 'warm' | 'poetic' | 'witty'>('warm');

  const handleGenerate = async () => {
    if (!recipient) return;
    setIsGenerating(true);
    const msg = await generateHolidayGreeting({
      recipientName: recipient,
      companyName: company,
      tone: tone
    });
    setGeneratedMessage(msg);
    setIsGenerating(false);
  };

  return (
    <div className="relative w-full max-w-xl h-[650px] perspective-1000 mx-auto z-40">
      <motion.div
        className="relative w-full h-full transition-all duration-1000 transform-style-3d"
        animate={{ rotateY: isOpen ? -180 : 0 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 40, damping: 20 }}
      >
        {/* FRONT OF CARD */}
        <div 
            className={`absolute inset-0 w-full h-full backface-hidden rounded-md shadow-2xl overflow-hidden bg-christmas-red border-2 border-gold-800 ${isOpen ? 'pointer-events-none' : ''}`}
        >
            {/* Rich Pattern Overlay */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] mix-blend-multiply pointer-events-none"></div>
            
            {/* Ornate Decoration corners */}
            <OrnateCorner className="top-2 left-2" rotate={0} />
            <OrnateCorner className="top-2 right-2" rotate={90} />
            <OrnateCorner className="bottom-2 right-2" rotate={180} />
            <OrnateCorner className="bottom-2 left-2" rotate={270} />

            {/* Inner Gold Frame */}
            <div className="absolute inset-4 border border-gold-500/60 rounded-sm"></div>
            <div className="absolute inset-5 border border-dashed border-gold-500/40 rounded-sm"></div>
            
            <div className="relative flex flex-col items-center justify-center h-full p-10 text-center space-y-10 z-10">
                <div className="bg-gradient-to-br from-gold-800/40 to-black/40 p-8 rounded-full border border-gold-500/50 backdrop-blur-sm shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                    <TreePine className="w-28 h-28 text-gold-400 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-4">
                    <h1 className="font-display text-5xl md:text-6xl text-gold-100 tracking-widest uppercase drop-shadow-lg leading-none">
                        Merry<br/><span className="text-4xl text-gold-300 block mt-3 font-serif italic capitalize">Christmas</span>
                    </h1>
                </div>
                
                <p className="font-serif italic text-gold-200/90 text-lg max-w-xs leading-relaxed border-t border-b border-gold-500/30 py-4">
                    "May your days be merry and bright."
                </p>

                <div className="pt-2 group">
                    <p className="text-[10px] text-gold-300/60 mb-3 tracking-[0.2em] uppercase font-bold group-hover:text-gold-100 transition-colors">Tap to Open</p>
                    <GoldCoinIcon 
                        className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-2xl" 
                        onClick={() => setIsOpen(true)} 
                    />
                </div>
            </div>
            
            {/* Glossy sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>

        {/* INSIDE OF CARD */}
        <div 
            className={`absolute inset-0 w-full h-full backface-hidden rounded-md shadow-2xl overflow-hidden bg-[#fffcf5] rotate-y-180 border-[12px] border-christmas-red ${!isOpen ? 'pointer-events-none' : ''}`}
        >
             {/* Paper Texture */}
             <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
             
             {/* Decorative Inside Border */}
             <div className="absolute inset-0 border-[1px] border-gold-500/30 m-2 pointer-events-none"></div>
             
             {/* Corner Flourishes Inside */}
             <OrnateCorner className="top-1 left-1 w-16 h-16 opacity-20" rotate={0} />
             <OrnateCorner className="top-1 right-1 w-16 h-16 opacity-20" rotate={90} />
             <OrnateCorner className="bottom-1 right-1 w-16 h-16 opacity-20" rotate={180} />
             <OrnateCorner className="bottom-1 left-1 w-16 h-16 opacity-20" rotate={270} />

             <div className="relative h-full flex flex-col p-6 md:p-8 z-10">
                {/* Close Button */}
                <button 
                    className="absolute top-4 right-4 z-50 text-deepwood/50 hover:text-christmas-red hover:bg-stone-100 p-2 rounded-full transition-all duration-300 hover:rotate-90 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                    }}
                    type="button"
                    title="Close Card"
                >
                    <X className="w-6 h-6" strokeWidth={3} />
                </button>

                <div className="flex items-center justify-center mb-4 mt-2">
                    <Snowflake className="w-10 h-10 text-christmas-red/20 animate-spin-slow" />
                </div>

                <div className="flex-grow space-y-4 custom-scrollbar overflow-y-auto px-2 relative z-20">
                    {!generatedMessage ? (
                        <div className="space-y-6 text-center">
                            <h2 className="font-display text-2xl text-deepwood mb-2 border-b border-gold-300/30 pb-4 inline-block">Compose Your Wish</h2>
                            
                            <div className="space-y-4 text-left px-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-deepwood/60 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                        <Star className="text-gold-500 w-3 h-3 fill-gold-500" /> From
                                    </label>
                                    <input 
                                        type="text" 
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                        className="w-full bg-white border border-stone-200 rounded-sm p-3 text-deepwood focus:border-christmas-red focus:ring-1 focus:ring-christmas-red outline-none transition-all font-serif placeholder:text-stone-300 shadow-inner"
                                        placeholder="The Claus Family"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-deepwood/60 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                        <Star className="text-gold-500 w-3 h-3 fill-gold-500" /> To
                                    </label>
                                    <input 
                                        type="text" 
                                        value={recipient}
                                        onChange={(e) => setRecipient(e.target.value)}
                                        className="w-full bg-white border border-stone-200 rounded-sm p-3 text-deepwood focus:border-christmas-red focus:ring-1 focus:ring-christmas-red outline-none transition-all font-serif placeholder:text-stone-300 shadow-inner"
                                        placeholder="Rudolph"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-deepwood/60 uppercase tracking-widest mb-2">Style of Wish</label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {['professional', 'warm', 'poetic', 'witty'].map((t) => (
                                            <button
                                                key={t}
                                                onClick={() => setTone(t as any)}
                                                className={`py-2 px-1 text-[9px] uppercase tracking-wide rounded-sm border transition-all ${tone === t ? 'bg-christmas-red text-white border-christmas-red shadow-md' : 'bg-white text-deepwood/60 border-stone-200 hover:border-christmas-red/30 hover:text-christmas-red'}`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-8 px-4 border border-gold-200 bg-white/50 shadow-sm m-2 rounded-sm"
                        >
                            <h3 className="font-display text-xl text-christmas-red mb-6 drop-shadow-sm">Dearest {recipient},</h3>
                            <p className="font-serif text-lg md:text-xl text-deepwood leading-relaxed italic drop-shadow-sm px-2">
                                "{generatedMessage}"
                            </p>
                            <div className="mt-8 pt-6 border-t border-dashed border-stone-300 inline-block w-full max-w-xs">
                                <p className="font-sans text-xs text-deepwood/60 uppercase tracking-widest mb-2">Warmly,</p>
                                <p className="font-display text-xl font-bold text-deepwood">
                                    {company}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex justify-center z-20">
                    {!generatedMessage ? (
                        <button 
                            onClick={handleGenerate}
                            disabled={isGenerating || !recipient}
                            className={`flex items-center space-x-2 bg-gradient-to-r from-christmas-red to-red-900 text-white px-8 py-3 rounded-sm shadow-lg hover:shadow-red-900/30 transition-all ${isGenerating || !recipient ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'}`}
                        >
                            {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 fill-current" />}
                            <span className="font-sans font-bold tracking-wide text-xs uppercase">{isGenerating ? 'Weaving Magic...' : 'Create Wish'}</span>
                        </button>
                    ) : (
                         <div className="flex space-x-3">
                             <button 
                                onClick={() => setGeneratedMessage('')}
                                className="flex items-center space-x-2 bg-white border border-stone-200 text-deepwood px-4 py-2 rounded-sm hover:bg-stone-50 transition-colors shadow-sm"
                            >
                                <Pencil className="w-3 h-3" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Rewrite</span>
                            </button>
                            <button 
                                onClick={() => console.log("Greeting sent to the North Pole!")}
                                className="flex items-center space-x-2 bg-christmas-green text-white px-4 py-2 rounded-sm hover:bg-green-900 transition-colors shadow-md"
                            >
                                <Send className="w-3 h-3 fill-current" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Send</span>
                            </button>
                         </div>
                    )}
                </div>
             </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveCard;