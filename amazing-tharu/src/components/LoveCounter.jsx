import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const LoveCounter = () => {
    const [count, setCount] = useState(0);
    const [showSpecial, setShowSpecial] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    const messages = [
        "You are amazing 💖",
        "You are so cute 🌹",
        "Your smile makes my day ✨",
        "I’m so lucky to know you 🍀",
        "You light up my world 💡",
        "Sending you a big hug! 🤗",
        "You are beautiful inside and out 🦋",
        "Thinking of you... 💭",
        "You make everything better 🌈",
        "Keep shining! ⭐",
        "You are loved! ❤️",
        // New Messages (Crush Friendly)
        "Have I told you today that you're wonderful? 😊",
        "Just a reminder: You're special 🌟",
        "Your vibe is unmatched ✨",
        "The world is brighter with you in it 🌍",
        "You have the prettiest smile 😄",
        "I hope your day is as lovely as you are 🌸",
        "You are a masterpiece 🎨",
        "Can't stop thinking about you 💕",
        "You deserve all the happiness in the world 🎁",
        "You're my favorite notification 📱",
        "Being around you is the best feeling 🥰",
        "You are magic ✨",
        "Simply seeing you makes me happy 😊",
        "You have such a kind heart ❤️",
        "You're glowing today! ✨",
        "I admire you so much 💫",
        "You're one of a kind 💎",
        "Spending time with you is never enough ⏳",
        "You make my heart skip a beat 💓",
        "Your laugh is my favorite sound 🎵",
        "You are effortlessly beautiful 🌺",
        "I love the way you think 🧠",
        "You inspire me 🌟",
        "You are sunshine in human form ☀️",
        "Just wanted to say hi to someone special 👋",
        "You're pretty cool, you know that? 😎",
        "I like you. A lot. 🙈",
        "You make simple moments special ✨",
        "I’m glad our paths crossed 🛣️",
        "You have a contagious smile 😁",
        "Everything about you is lovely 🌷",
        "I could talk to you for hours 🗣️",
        "You're sweeter than chocolate 🍫",
        "You are a dream come true 🌙",
        "My day gets better when I see you 👀",
        "You have beautiful eyes 👁️",
        "You are smart, funny, and kind 🧠😂❤️",
        "You're the best kind of distraction 💭",
        "I wish I could teleport to you 🚀",
        "Sending you good vibes only ✌️",
        "You are art 🖼️",
        "I’m smiling because of you 😊",
        "You make life more colorful 🎨",
        "You're a gem 💎",
        "I appreciate you 🙏",
        "You are simply wonderful ✨",
        "You have a beautiful soul 👻",
        "You make my heart happy 💖",
        "I’m a fan of you 👏",
        "You're captivating 🤩",
        "I love your energy ⚡",
        "You're stunning 💃",
        "You make me want to be better 📈",
        "You are pure joy 🥳",
        "I hope you know how great you are 🏆",
        "You're my daily dose of happiness 💊",
        "You are incredibly charming 😉",
        "I love listening to you 👂",
        "You are perfect just the way you are 👌",
        "You radiate positivity ➕",
        "I’m lucky to be in your orbit 🪐",
        "You are a star 🌟",
        "You make the ordinary extraordinary ✨",
        "I like your style 👗",
        "You are creating magic wherever you go 🪄",
        "You are strong and beautiful 💪",
        "I’m cheering for you 🎉",
        "You are a blessing 🙏",
        "You melt my heart 🫠",
        "You are unforgettable 🧠",
        "I cherish every moment with you ⏳",
        "You make me smile without trying 😁",
        "You are dazzling ✨",
        "I’m so glad you exist 🌍",
        "You are a breath of fresh air 🍃",
        "You are my favorite mystery 🕵️‍♀️",
        "You are poetry in motion 📜",
        "I love your perspective 🔭",
        "You are a ray of light 🔦",
        "You are incredibly sweet 🍬",
        "You make the world a softer place ☁️",
        "I admire your strength 💪",
        "You are a true beauty 🌹",
        "You are mesmerizing 😵‍💫",
        "I’m hooked on you 🪝",
        "You are a keeper 🔑",
        "You are delightfully wonderful 🌈",
        "I’m always happy to see you 👋",
        "You are a lovely surprise 🎁"
    ];

    const handleClick = () => {
        setCount(prev => prev + 1);
        setShowSpecial(true);

        // Pick a random message
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setCurrentMessage(randomMsg);

        // Hide special message after 2 seconds, but keep count
        setTimeout(() => setShowSpecial(false), 2000);
    };

    return (
        <section className="py-20 flex flex-col items-center justify-center relative z-10">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="relative group bg-gradient-to-br from-red-500 to-pink-600 p-8 rounded-full shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all duration-300 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <FaHeart className="text-6xl text-white animate-pulse-slow" />
            </motion.button>

            <p className="mt-8 text-gray-400 text-lg">Click the heart for a surprise!</p>

            <div className="h-16 mt-4 flex items-center justify-center w-full px-4 text-center">
                <AnimatePresence mode='wait'>
                    {showSpecial ? (
                        <motion.p
                            key={count} // Changing key triggers animation on every click
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-sm"
                        >
                            {currentMessage}
                        </motion.p>
                    ) : (
                        // Placeholder to keep layout stable
                        <span className="opacity-0">Placeholder</span>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default LoveCounter;
