import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-8 text-center relative z-10 text-gray-500 text-sm">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p>
                    Made with <span className="text-red-500 animate-pulse inline-block">❤️</span> by Tharu
                </p>
                <p className="mt-2 text-xs opacity-50">&copy; {new Date().getFullYear()} Amazing Tharu. All rights reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;
