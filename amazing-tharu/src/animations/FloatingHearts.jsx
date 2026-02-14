import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
    const hearts = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 10,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        x: `${heart.x + (Math.random() * 10 - 5)}vw`, // Slight random horizontal drift
                        opacity: [0, 0.5, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: heart.duration,
                        ease: "linear",
                        repeat: Infinity,
                        delay: heart.delay,
                    }}
                    style={{
                        position: 'absolute',
                        width: heart.size,
                        height: heart.size,
                    }}
                    className="text-pink-500/20 drop-shadow-lg"
                >
                    <FaHeart className="w-full h-full" />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
