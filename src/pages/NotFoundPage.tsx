import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden relative">
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -z-10 bg-[hsl(var(--g-red)/0.05)] w-[500px] h-[500px] rounded-full blur-3xl"
            />
            
            <h1 className="text-9xl font-black text-[hsl(var(--foreground)/0.1)] mb-4">404</h1>
            <h2 className="text-4xl font-bold mb-6">الصفحة غير موجودة</h2>
            <p className="text-[hsl(var(--muted-foreground))] mb-10 max-w-md mx-auto text-lg">
                عذراً، الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو أنها غير موجودة.
            </p>
            
            <Link to="/" className="px-8 py-3 bg-[hsl(var(--g-blue))] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                العودة للرئيسية
            </Link>
        </div>
    );
}
