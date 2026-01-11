"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Kharcha
                </div>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <a href="#features" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Features</a>
                    <a href="#why-kharcha" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Why Kharcha?</a>
                    <a href="#gallery" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Gallery</a>
                    <a href="#download" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Download</a>
                </nav>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#download"
                    className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                    Get App
                </motion.a>
            </div>
        </motion.header>
    );
};
