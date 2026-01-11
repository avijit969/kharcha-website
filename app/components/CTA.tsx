"use client";

import { DownTrayIcon } from "./ui/Icons";
import { motion } from "framer-motion";

export const CTA = () => {
    return (
        <section id="download" className="py-24 px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-zinc-900 dark:text-white mb-6"
                >
                    Ready to get started?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-zinc-600 dark:text-zinc-400 mb-10"
                >
                    Start using Kharcha today and take the headache out of splitting expenses!
                </motion.p>
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href="/kharcha.apk"
                    download
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition-all shadow-xl hover:shadow-purple-500/25"
                >
                    <DownTrayIcon className="w-5 h-5" />
                    Download Kharcha APK
                </motion.a>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-4 text-sm text-zinc-500"
                >
                    Available for Android devices.
                </motion.p>
            </div>
        </section>
    );
};
