"use client";

import { CheckBadgeIcon, UserGroupIcon, BellIcon, MoneyIcon } from "./ui/Icons";
import { motion } from "framer-motion";

export const WhyKharcha = () => {
    return (
        <section id="why-kharcha" className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-zinc-900 dark:text-white mb-16"
                >
                    Why Kharcha?
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Easy Interface", desc: "Clean and intuitive design for everyone.", icon: <CheckBadgeIcon className="w-6 h-6" /> },
                        { title: "Group Friendly", desc: "Perfect for trips, events & roommates.", icon: <UserGroupIcon className="w-6 h-6" /> },
                        { title: "Smart Alerts", desc: "Keep everyone in the loop instantly.", icon: <BellIcon className="w-6 h-6" /> },
                        { title: "Transparent", desc: "No more confusion about money.", icon: <MoneyIcon className="w-6 h-6" /> },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl"
                        >
                            <div className="p-3 bg-white dark:bg-zinc-800 rounded-full shadow-sm mb-4 text-purple-600 dark:text-purple-400">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
