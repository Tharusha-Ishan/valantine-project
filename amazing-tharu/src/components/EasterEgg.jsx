import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const EasterEgg = () => {
    const [inputBuffer, setInputBuffer] = useState('');
    const [showHearts, setShowHearts] = useState(false);
    const code = "tharu";

    useEffect(() => {
        const handleKeyDown = (e) => {
            setInputBuffer((prev) => {
                const updated = (prev + e.key).toLowerCase().slice(-code.length);
                if (updated === code) {
                    setShowHearts(true);
                    setTimeout(() => setShowHearts(false), 5000); // Rain for 5 seconds
                }
                return updated;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {showHearts && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -50, x: Math.random() * 100 + 'vw', opacity: 1 }}
                            animate={{ y: '110vh' }}
                            transition={{
                                duration: Math.random() * 2 + 2,
                                ease: "linear",
                                delay: Math.random() * 1
                            }}
                            className="absolute text-pink-500 text-4xl drop-shadow-lg"
                        >
                            <FaHeart />
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <h1 className="text-6xl font-bold text-white bg-pink-600/50 backdrop-blur-md p-10 rounded-3xl">
                            💖 You Found Me! 💖
                        </h1>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EasterEgg;
