import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const ValentineIntro = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-4"
                >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 via-black to-red-900/50 animate-pulse"></div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-10 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-pink-500 mb-4 drop-shadow-2xl">
                            Happy Valentine's Day 🌹
                        </h1>
                        <p className="text-xl md:text-2xl text-pink-200 mb-12 font-light italic">
                            I have something for you...
                        </p>

                        <motion.button
                            onClick={handleOpen}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-[0_0_30px_rgba(236,72,153,0.6)] flex items-center gap-3 mx-auto"
                        >
                            Open Gift <FaHeart className="animate-bounce" />
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ValentineIntro;
