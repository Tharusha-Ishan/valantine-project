import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-pink-500 rounded-full pointer-events-none z-50 mix-blend-screen"
            animate={{
                x: position.x - 16,
                y: position.y - 16,
                scale: isHovering ? 1.5 : 1,
                borderColor: isHovering ? '#9370DB' : '#FF69B4',
                backgroundColor: isHovering ? 'rgba(147, 112, 219, 0.2)' : 'transparent'
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <div className="absolute inset-0 bg-pink-500 rounded-full blur-md opacity-20"></div>
        </motion.div>
    );
};

export default CursorEffect;
