"use client";

import { ChartBarIcon, BanknotesIcon } from "./ui/Icons";
import { motion } from "framer-motion";

export const ComingSoon = () => {
    return (
        <section className="py-24 px-6 lg:px-8 bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold mb-12"
                >
                    Coming Soon
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg backdrop-blur-sm border border-zinc-700"
                    >
                        <ChartBarIcon className="w-8 h-8 text-blue-400" />
                        <div className="text-left">
                            <h4 className="font-semibold">Dashboard & Analytics</h4>
                            <p className="text-sm text-zinc-400">Visualise your spending habits</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-4 bg-zinc-800/50 p-4 rounded-lg backdrop-blur-sm border border-zinc-700"
                    >
                        <BanknotesIcon className="w-8 h-8 text-green-400" />
                        <div className="text-left">
                            <h4 className="font-semibold">Settlement & Payment</h4>
                            <p className="text-sm text-zinc-400">Settle up directly in the app</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
