"use client";

import { UserGroupIcon, MoneyIcon, BellIcon } from "./ui/Icons";
import { motion } from "framer-motion";

export const Features = () => {
    return (
        <section id="features" className="py-24 px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-base font-semibold text-purple-600 dark:text-purple-400 tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                        Everything you need to manage expenses
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                            <UserGroupIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Khata Management</h3>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                Create new Groups (Khata)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                Manage members easily
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                                View all groups & lists
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                            <MoneyIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Kharcha Management</h3>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Add, edit & delete expenses
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Track member-wise spending
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                                Detailed expense history
                            </li>
                        </ul>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                    >
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6">
                            <BellIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Smart Notifications</h3>
                        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                Real-time alerts for members
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                Specific member tagging
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                                Invitation updates
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
