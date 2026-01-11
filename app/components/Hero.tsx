"use client";

import Image from "next/image";
import { DownTrayIcon } from "./ui/Icons";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.purple.900),black)] opacity-20" />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl mb-6"
            >
                Expense Tracking <br className="hidden md:block" />
                <span className="text-purple-600 dark:text-purple-400">Made Simple</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10"
            >
                Manage group expenses effortlessly using Kharcha. Whether it's a trip, roommates, or an event — keep finances transparent and under control.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-20"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/25"
                >
                    <DownTrayIcon className="w-5 h-5" />
                    Download APK
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full text-lg font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
                >
                    Learn More
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl"
            >
                <div className="h-[32px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-zinc-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-zinc-800">
                    <Image
                        src="/screenshot/04-home-screen.png"
                        alt="App Screenshot"
                        width={272}
                        height={572}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
};
