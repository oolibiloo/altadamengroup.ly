import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const gArr = ["hsl(217,89%,51%)", "hsl(4,90%,58%)", "hsl(45,100%,51%)", "hsl(151,83%,34%)"];

export default function NotFoundPage() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center relative bg-mesh overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />

            {/* Floating colored blobs */}
            {gArr.map((c, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-32 h-32 rounded-full blur-3xl opacity-10"
                    style={{ backgroundColor: c, top: `${20 + i * 15}%`, left: `${10 + i * 20}%` }}
                />
            ))}

            <div className="relative text-center px-4">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-8xl md:text-[10rem] font-black text-gradient mb-4">404</h1>
                    <p className="text-2xl font-bold mb-2">الصفحة غير موجودة</p>
                    <p className="text-[hsl(var(--muted-foreground))] mb-8 max-w-md mx-auto">
                        عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--g-blue))] text-white font-bold g-shadow-lg hover:g-shadow-xl hover:scale-105 hover:-translate-y-0.5 transition-all duration-700"
                    >
                        <Home className="h-5 w-5" />
                        العودة للرئيسية
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
