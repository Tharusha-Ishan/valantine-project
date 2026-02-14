import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaHeart } from 'react-icons/fa';
import HeartCatcher from './HeartCatcher';

const MessageForm = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [lastSent, setLastSent] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const now = Date.now();
        if (now - lastSent < 10000) {
            alert("Please wait a few seconds before sending another message! Tharu's heart can only take so much love at once! 💓");
            return;
        }

        setStatus('sending');

        // Check if env vars are set
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID || !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            console.error("EmailJS keys missing!");
            // Mock success for demo purposes if keys are missing
            setTimeout(() => {
                setStatus('success');
                setLastSent(now);
                form.current.reset();
            }, 2000);
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus('success');
                setLastSent(now);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 px-4 flex flex-col items-center justify-center relative z-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>

                <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-pink-200">
                    Send a Secret Message 💌
                </h2>

                <AnimatePresence mode="wait">
                    {!isUnlocked ? (
                        <motion.div
                            key="game"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <HeartCatcher onWin={() => setIsUnlocked(true)} />
                        </motion.div>
                    ) : status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="text-center py-12"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="inline-block text-6xl text-pink-500 mb-4"
                            >
                                <FaHeart />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                            <p className="text-pink-200">Your message reached my heart 💘</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-sm text-gray-400 hover:text-white underline"
                            >
                                Send another?
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            ref={form}
                            onSubmit={sendEmail}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2 pl-2">Your Name (Optional)</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                                    placeholder="Secret Admirer"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2 pl-2">Your Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows="4"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none"
                                    placeholder="Type something sweet..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl py-4 font-bold text-white shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>Sending... <span className="animate-spin">⏳</span></>
                                ) : (
                                    <>Send to My Heart <FaHeart className="ml-2" /></>
                                )}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default MessageForm;
