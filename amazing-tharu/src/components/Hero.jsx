import { motion } from 'framer-motion';
// Link import removed as we use vanilla JS scroll
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
    // Basic smooth scroll via window.scrollTo or native behavior if react-scroll logic is custom
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center relative z-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-6"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 animate-gradient-x">
                    Happy Valentine's Day 💖
                </h1>
                <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
                    Just for You, From <span className="text-pink-400 font-semibold">Tharu</span> 🌹
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="text-lg md:text-xl text-gray-400 mb-12 italic h-8"
            >
                <Typewriter text="Maybe this link reached you for a reason..." />
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-bold text-lg shadow-lg flex items-center gap-2 group transition-all duration-300"
            >
                Send Me a Secret Message 💌
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
        </section>
    );
};

// Simple Typewriter Component
const Typewriter = ({ text }) => {
    return (
        <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }}
            className="overflow-hidden whitespace-nowrap inline-block border-r-2 border-pink-500 pr-1 animate-pulse"
            style={{ maxWidth: '100%', verticalAlign: 'bottom' }} // Ensure it doesn't break layout
        >
            {text}
        </motion.span>
    );
};

export default Hero;
