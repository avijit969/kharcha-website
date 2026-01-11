export const Footer = () => {
    return (
        <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
            <div className="max-w-7xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
                <p className="mb-4">Crafted with ❤️ to bring clarity and ease to shared spending.</p>
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Kharcha. Built with Love.
                </p>
            </div>
        </footer>
    );
};
