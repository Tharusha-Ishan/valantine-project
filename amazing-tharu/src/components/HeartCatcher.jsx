import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const HeartCatcher = ({ onWin }) => {
    const [hearts, setHearts] = useState([]);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const containerRef = useRef(null);
    const WIN_SCORE = 5;

    // Game loop for spawning hearts
    useEffect(() => {
        if (!isPlaying) return;

        const spawnHeart = () => {
            const id = Date.now();
            const newHeart = {
                id,
                x: Math.random() * 80 + 10, // 10% to 90%
                speed: Math.random() * 2 + 1,
            };

            setHearts((prev) => [...prev, newHeart]);

            // Auto-remove heart after some time if missed
            setTimeout(() => {
                setHearts((prev) => prev.filter((h) => h.id !== id));
            }, 4000);
        };

        const interval = setInterval(spawnHeart, 800);
        return () => clearInterval(interval);
    }, [isPlaying]);

    const catchHeart = (id) => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
        setScore((prev) => {
            const newScore = prev + 1;
            if (newScore >= WIN_SCORE) {
                setIsPlaying(false);
                setTimeout(() => onWin(), 1000); // Delay for celebration
            }
            return newScore;
        });
    };

    return (
        <div ref={containerRef} className="relative w-full h-[400px] bg-black/40 backdrop-blur-md rounded-3xl overflow-hidden border border-pink-500/30 flex items-center justify-center">

            {showIntro ? (
                <div className="text-center z-20">
                    <h3 className="text-2xl font-bold text-white mb-4">Unlock My Heart 🔐</h3>
                    <p className="text-pink-200 mb-6">Catch 5 golden hearts to send a message!</p>
                    <button
                        onClick={() => { setShowIntro(false); setIsPlaying(true); }}
                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform animate-pulse"
                    >
                        Start Game 🎮
                    </button>
                </div>
            ) : isPlaying ? (
                <>
                    <div className="absolute top-4 right-4 bg-white/10 px-4 py-2 rounded-full border border-pink-500/50">
                        <span className="text-pink-300 font-bold">Hearts: {score}/{WIN_SCORE}</span>
                    </div>
                    {hearts.map((heart) => (
                        <motion.button
                            key={heart.id}
                            initial={{ y: 400, x: `${heart.x}%` }}
                            animate={{ y: -50 }}
                            transition={{ duration: 4 / heart.speed, ease: "linear" }}
                            onClick={() => catchHeart(heart.id)}
                            className="absolute text-4xl text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] hover:scale-125 transition-transform cursor-pointer"
                            style={{ left: `${heart.x}%` }}
                        >
                            <FaHeart />
                        </motion.button>
                    ))}
                </>
            ) : (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center"
                >
                    <h2 className="text-4xl text-pink-500 font-bold mb-2">Unlocked! 💖</h2>
                    <p className="text-white">You caught my heart!</p>
                </motion.div>
            )}
        </div>
    );
};

export default HeartCatcher;
