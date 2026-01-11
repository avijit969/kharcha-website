"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const screenshots = [
    "/screenshot/01-welcome-screen.png",
    "/screenshot/02-signup-screen.png",
    "/screenshot/03-login-screen.png",
    "/screenshot/04-home-screen.png",
    "/screenshot/05.png",
    "/screenshot/06.png",
    "/screenshot/07.png",
    "/screenshot/09.png",
    "/screenshot/10.png",
    "/screenshot/11.png",
    "/screenshot/12.png",
    "/screenshot/13.png",
    "/screenshot/14.png",
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12 px-6"
            >
                <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase">Gallery</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                    See the app in action
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex overflow-x-auto pb-12 gap-8 px-6 snap-x snap-mandatory scrollbar-hide"
            >
                {screenshots.map((src, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="flex-shrink-0 snap-center relative border-zinc-200 dark:border-zinc-700 bg-zinc-800 border-[8px] rounded-[2rem] h-[500px] w-[240px] shadow-xl overflow-hidden"
                    >
                        <Image
                            src={src}
                            alt={`Screenshot ${index + 1}`}
                            width={240}
                            height={500}
                            className="object-cover w-full h-full bg-white dark:bg-zinc-800"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
