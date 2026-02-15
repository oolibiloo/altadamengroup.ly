import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "الرئيسية", path: "/" },
    { label: "نبذة عنا", path: "/about" },
    { label: "شركاتنا", path: "/companies" },
    { label: "اتصل بنا", path: "/contact" },
];

const googleColors = ["bg-[hsl(217,89%,51%)]", "bg-[hsl(4,90%,58%)]", "bg-[hsl(45,100%,51%)]", "bg-[hsl(151,83%,34%)]"];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => setMobileOpen(false), [location.pathname]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 right-0 left-0 z-50 transition-all duration-700",
                    scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_hsl(0_0%_0%/0.06)] border-b border-[hsl(var(--border))]" : "bg-transparent"
                )}
            >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.img
                                whileHover={{ scale: 1.05, rotate: 3 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                src="/images/logo1.png"
                                alt="مجموعة التضامن القابضة"
                                className="h-11 w-auto"
                            />
                            <div className="hidden sm:block">
                                <h1 className="text-base font-bold text-[hsl(var(--foreground))]">مجموعة التضامن القابضة</h1>
                                <div className="flex gap-[3px] mt-1">
                                    {googleColors.map((c, i) => (
                                        <span key={i} className={cn("h-[2px] w-4 rounded-full", c)} />
                                    ))}
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item, i) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={cn(
                                        "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500",
                                        location.pathname === item.path
                                            ? "text-[hsl(var(--g-blue))]"
                                            : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
                                    )}
                                >
                                    {item.label}
                                    {location.pathname === item.path && (
                                        <motion.span
                                            layoutId="nav-pill"
                                            className={cn("absolute -bottom-0.5 right-3 left-3 h-[3px] rounded-full", googleColors[i % 4])}
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-full hover:bg-[hsl(var(--secondary))] transition-colors"
                        >
                            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-72 z-50 bg-white shadow-2xl lg:hidden"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <img src="/images/logo1.png" alt="" className="h-10" />
                                    <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-[hsl(var(--secondary))]">
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    {navItems.map((item, i) => (
                                        <motion.div key={item.path} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                                            <Link
                                                to={item.path}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all",
                                                    location.pathname === item.path
                                                        ? "text-[hsl(var(--g-blue))] bg-[hsl(var(--g-blue)/0.06)]"
                                                        : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))]"
                                                )}
                                            >
                                                <span className={cn("w-2 h-2 rounded-full", googleColors[i % 4])} />
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
