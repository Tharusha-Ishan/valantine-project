import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 text-center transform hover:scale-[1.02] transition-transform duration-500"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                    Just for You 🌹
                </h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
                    "I build complex systems every day, lines of code that run machines...
                    but today, I wrote this code just to make you smile."
                </p>
                <p className="text-lg md:text-xl text-pink-300 font-medium italic mt-4">
                    Because you are special to me. <br /> - Tharu 💜
                </p>

                {/* Floating particles or emojis can be added here if needed */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            </motion.div>
        </section>
    );
};

export default About;
