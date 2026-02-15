import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Briefcase, Users, Globe, ChevronDown, CheckCircle } from "lucide-react";

/* Google Brand Colors (HSL) */
const gColors = {
    blue: "hsl(217, 89%, 51%)",
    red: "hsl(4, 90%, 58%)",
    yellow: "hsl(45, 100%, 51%)",
    green: "hsl(151, 83%, 34%)",
};

/* Core Brand Green for the logo/theme */
const brandGreen = "hsl(151, 83%, 34%)";

/* ========== Premium Cinematic Hero — Innovative Logo Showcase ========== */
function HeroSection() {
    const titleWords = ["مجموعة", "التضامن", "القابضة"];

    /* Floating stat badges */
    const badges = [
        { value: "13+", label: "شركة تابعة", delay: 2.5, x: "6%", y: "32%", rotation: -6 },
        { value: "5", label: "قطاعات", delay: 3.2, x: "82%", y: "20%", rotation: 4 },
        { value: "2020", label: "تأسست", delay: 3.8, x: "78%", y: "76%", rotation: -3 },
    ];

    /* Constellation particles targeting center */
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 3,
    }));

    /* Geometric floating shapes echoing logo's triangular form */
    const geoShapes = [
        { size: 120, x: "12%", y: "18%", delay: 0, rotation: 45, opacity: 0.06 },
        { size: 180, x: "85%", y: "65%", delay: 2, rotation: -15, opacity: 0.04 },
        { size: 90, x: "60%", y: "10%", delay: 4, rotation: 30, opacity: 0.05 },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafbfc]">
            {/* 1. Geometric Background Morphing */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Large Green Morph (Top-Left) */}
                <motion.div
                    animate={{
                        borderTopLeftRadius: ["40%", "20%", "40%"],
                        borderBottomRightRadius: ["50%", "30%", "50%"],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(52,168,83,0.04)_0%,transparent_70%)] blur-3xl z-0"
                />

                {/* Floating Triangles (Echoing Logo) */}
                {geoShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: shape.opacity,
                            scale: 1,
                            y: [0, -40, 0],
                            rotate: [shape.rotation, shape.rotation + 20, shape.rotation],
                        }}
                        transition={{
                            delay: shape.delay,
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute z-0 border-2 border-[#1ea362] rounded-3xl"
                        style={{
                            width: shape.size,
                            height: shape.size,
                            left: shape.x,
                            top: shape.y,
                        }}
                    />
                ))}

                {/* Constellation Particles */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: [0, 0.4, 0], y: [0, -60] }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear",
                        }}
                        className="absolute rounded-full bg-[#1ea362] z-0"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                    />
                ))}
            </div>

            {/* 2. Central 3D Logo Component */}
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="relative w-[340px] h-[340px] md:w-[480px] md:h-[480px]">
                    {/* Pulsing Light Rays */}
                    {[1, 2, 3].map((r) => (
                        <motion.div
                            key={r}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.6, opacity: 0 }}
                            transition={{
                                delay: r * 0.8,
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeOut",
                            }}
                            className="absolute inset-0 rounded-full border border-[#34a853]/20 z-0"
                        />
                    ))}

                    {/* Orbiting Mini-Logos / Orbs */}
                    <div className="absolute inset-0 animate-spin-slow">
                        {[0, 120, 240].map((deg, i) => (
                            <div
                                key={i}
                                className="absolute top-0 left-1/2 -ml-3 w-6 h-6 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center"
                                style={{ transformOrigin: "50% 240px", transform: `rotate(${deg}deg)` }}
                            >
                                <span className="w-2 h-2 rounded-full bg-[#1ea362]" />
                            </div>
                        ))}
                    </div>

                    {/* Rotating Prismatic Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 rounded-full border border-dashed border-[#1ea362]/20 z-10"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-12 rounded-full border border-dotted border-[#34a853]/30 z-10"
                    />

                    {/* Glassmorphism Logo Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.8, ease: "circOut" }}
                        className="absolute inset-[15%] bg-white/60 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(52,168,83,0.15)] border border-[#34a853]/10 flex items-center justify-center z-20 overflow-hidden"
                    >
                        {/* Inner Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white via-transparent to-[#34a853]/5" />

                        {/* The Actual Logo Image */}
                        <motion.img
                            src="/images/logo1.png"
                            alt="Al-Tadamen Logo"
                            className="w-2/3 h-2/3 object-contain drop-shadow-xl"
                            animate={{
                                y: [-8, 8, -8],
                                rotate: [0, 2, 0, -2, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    {/* Floating Badges */}
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
                            transition={{
                                delay: badge.delay,
                                opacity: { duration: 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }
                            }}
                            className="absolute bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center z-30"
                            style={{
                                left: badge.x,
                                top: badge.y,
                                transform: `rotate(${badge.rotation}deg)`
                            }}
                        >
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1ea362] to-[#34a853]">
                                {badge.value}
                            </span>
                            <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{badge.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Text & CTA Layer */}
            <div className="relative z-30 text-center px-4 mt-[360px] md:mt-[400px] lg:mt-[420px]">
                {/* Cinematic staggered title */}
                <div className="flex justify-center gap-3 md:gap-5 mb-5 flex-wrap">
                    {titleWords.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{
                                delay: 0.6 + i * 0.18,
                                duration: 1.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black inline-block"
                            style={{
                                background: i === 1
                                    ? `linear-gradient(135deg, ${brandGreen}, #5a9e36, ${brandGreen})`
                                    : `linear-gradient(135deg, hsl(0,0%,13%), hsl(0,0%,25%))`,
                                backgroundSize: "200% 200%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animation: i === 1 ? "gradient-text 6s ease infinite" : "none",
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1.5 }}
                    className="text-lg md:text-2xl text-[hsl(var(--muted-foreground))] mb-10 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    ريادة في الاستثمار وتنوع في الخدمات لبناء مستقبل ليبيا
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="/companies"
                        className="group relative px-8 py-4 bg-[hsl(var(--g-blue))] text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_8px_20px_-6px_hsl(var(--g-blue))]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            استكشف شركاتنا <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-skew-drift" />
                    </Link>

                    <Link
                        to="/contact"
                        className="px-8 py-4 bg-white text-[hsl(var(--foreground))] border border-[hsl(var(--border))] rounded-full font-bold hover:bg-[hsl(var(--secondary))] transition-colors"
                    >
                        تواصل معنا
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 3, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[hsl(var(--muted-foreground))]"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}

function StatsSection() {
    const stats = [
        { value: "13+", label: "شركة تابعة", icon: Building2, color: gColors.blue },
        { value: "5+", label: "قطاعات", icon: Briefcase, color: gColors.red },
        { value: "100+", label: "موظف", icon: Users, color: gColors.yellow },
        { value: "2020", label: "سنة التأسيس", icon: Globe, color: gColors.green },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-2xl p-6 md:p-8 g-shadow hover:g-shadow-lg transition-all duration-700 hover:-translate-y-1 text-center group"
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"
                                style={{ backgroundColor: `${s.color}10` }}
                            >
                                <s.icon className="h-7 w-7" style={{ color: s.color }} />
                            </div>
                            <p className="text-3xl md:text-4xl font-black mb-1" style={{ color: s.color }}>{s.value}</p>
                            <p className="text-sm text-[hsl(var(--muted-foreground))]">{s.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutSection() {
    return (
        <section className="py-24 bg-[hsl(var(--secondary))] relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--g-blue))] to-[hsl(var(--g-green))] rounded-[2rem] opacity-20 blur-2xl" />
                            <img src="/images/companies/demo-5.jpg" alt="Al-Tadamen HQ" className="relative rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" />
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                            نبني المستقبل <br /> <span className="text-gradient">برؤية وطنية</span>
                        </h2>
                        <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6 leading-relaxed">
                            مجموعة التضامن القابضة هي كيان اقتصادي ليبي رائد يضم نخبة من الشركات العاملة في قطاعات حيوية تشمل الصناعة، التجارة، الخدمات اللوجستية، والاستثمار العقاري.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["التزام بالجودة والتميز", "كوادر وطنية مؤهلة", "شراكات استراتيجية عالمية", "تنمية مستدامة"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 text-[hsl(var(--g-green))]" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="inline-flex items-center text-[hsl(var(--g-blue))] font-bold hover:gap-2 transition-all">
                            اقرأ المزيد عنا <ArrowLeft className="mr-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function CompaniesSection() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">شركاتنا <span className="text-[hsl(var(--g-blue))]">التابعة</span></h2>
                    <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">تتنوع استثماراتنا لتشمل قطاعات متعددة تخدم الاقتصاد الوطني</p>
                </motion.div>

                {/* Grid is handled in the main CompaniesPage, just a teaser here or link */}
                <div className="text-center">
                    <Link to="/companies" className="inline-block bg-[hsl(var(--g-blue))] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all hover:-translate-y-1">
                        تصفح جميع الشركات
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <CompaniesSection />
        </div>
    );
}
