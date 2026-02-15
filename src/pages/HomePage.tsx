import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Building2,
    Target,
    TrendingUp,
    Handshake,
    ArrowLeft,
    Users,
    Briefcase,
    Sparkles,
    Globe,
} from "lucide-react";
import { companies } from "@/data/companies";

const gColors = {
    blue: "hsl(217,89%,51%)",
    red: "hsl(4,90%,58%)",
    yellow: "hsl(45,100%,51%)",
    green: "hsl(151,83%,34%)",
};
const gArr = [gColors.blue, gColors.red, gColors.yellow, gColors.green];

/* ========== Brand Color — Extracted from the logo ========== */
const brandGreen = "#76B947";

/* ========== Premium Cinematic Hero — Innovative Logo Showcase ========== */
function HeroSection() {
    const titleWords = ["مجموعة", "التضامن", "القابضة"];

    /* Floating stat badges */
    const badges = [
        { value: "13+", label: "شركة تابعة", delay: 2.5, x: "6%", y: "32%", rotation: -6 },
        { value: "5+", label: "قطاعات حيوية", delay: 2.8, x: "86%", y: "28%", rotation: 4 },
        { value: "+100", label: "موظف", delay: 3.1, x: "4%", y: "68%", rotation: 5 },
        { value: "2020", label: "سنة التأسيس", delay: 3.4, x: "88%", y: "70%", rotation: -3 },
    ];

    /* Constellation particles */
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
        { size: 80, x: "82%", y: "15%", delay: 1.5, rotation: -30, opacity: 0.05 },
        { size: 60, x: "90%", y: "55%", delay: 0.8, rotation: 20, opacity: 0.04 },
        { size: 100, x: "8%", y: "60%", delay: 2.0, rotation: -15, opacity: 0.05 },
        { size: 40, x: "75%", y: "80%", delay: 1.2, rotation: 60, opacity: 0.04 },
        { size: 50, x: "25%", y: "82%", delay: 0.5, rotation: -45, opacity: 0.05 },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafbfc]">

            {/* === Layer 1: Deep Background — Radial gradient wash === */}
            <div className="absolute inset-0">
                {/* Main radial gradient centered where logo will be */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
                            radial-gradient(ellipse 80% 60% at 50% 35%, ${brandGreen}08 0%, transparent 70%),
                            radial-gradient(ellipse 60% 50% at 30% 70%, hsl(217,89%,51%,0.03) 0%, transparent 60%),
                            radial-gradient(ellipse 50% 40% at 80% 20%, hsl(45,100%,51%,0.02) 0%, transparent 50%)
                        `,
                    }}
                />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `
                            linear-gradient(${brandGreen}30 1px, transparent 1px),
                            linear-gradient(90deg, ${brandGreen}30 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* === Layer 2: Floating Geometric Triangles (echo logo shape) === */}
            <div className="absolute inset-0 pointer-events-none">
                {geoShapes.map((shape, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: shape.opacity, scale: 1 }}
                        transition={{ delay: 0.5 + shape.delay, duration: 2, ease: "easeOut" }}
                        className="absolute"
                        style={{ left: shape.x, top: shape.y }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
                            }}
                            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {/* Triangle shape SVG */}
                            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" fill="none">
                                <path
                                    d="M50 8 L92 85 Q92 92 85 92 L15 92 Q8 92 8 85 Z"
                                    stroke={brandGreen}
                                    strokeWidth="1.5"
                                    fill="none"
                                    opacity="0.6"
                                    strokeLinejoin="round"
                                />
                                {i % 2 === 0 && (
                                    <path
                                        d="M50 30 L72 75 Q72 78 69 78 L31 78 Q28 78 28 75 Z"
                                        stroke={brandGreen}
                                        strokeWidth="1"
                                        fill="none"
                                        opacity="0.3"
                                        strokeLinejoin="round"
                                    />
                                )}
                            </svg>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* === Layer 3: Constellation Particles === */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                        className="absolute rounded-full"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                            background: brandGreen,
                        }}
                    />
                ))}
            </div>

            {/* === Layer 4: Animated Light Rays from center === */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 2 }}
                    className="relative"
                >
                    {/* Pulsing concentric rings */}
                    {[0, 1, 2, 3].map((ring) => (
                        <motion.div
                            key={ring}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                                opacity: [0, 0.12, 0],
                                scale: [0.8, 1.8 + ring * 0.5, 2.5 + ring * 0.5],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: ring * 1.2,
                                ease: "easeOut",
                            }}
                            className="absolute rounded-full border"
                            style={{
                                width: 200 + ring * 60,
                                height: 200 + ring * 60,
                                top: -(100 + ring * 30),
                                left: -(100 + ring * 30),
                                borderColor: brandGreen,
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* === Layer 5: MAIN LOGO — Premium 3D Glass Showcase === */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ top: "-8%" }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.3, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    {/* Outer halo glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.08, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[-60px] md:inset-[-80px] rounded-full"
                        style={{
                            background: `radial-gradient(circle, ${brandGreen}18 0%, ${brandGreen}08 40%, transparent 70%)`,
                        }}
                    />

                    {/* Rotating prismatic ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-8px] md:inset-[-10px]"
                        style={{
                            borderRadius: "35% 65% 55% 45% / 50% 40% 60% 50%",
                            background: `conic-gradient(from 0deg, ${brandGreen}50, ${brandGreen}10, ${gColors.blue}30, ${brandGreen}10, ${gColors.yellow}20, ${brandGreen}50)`,
                            filter: "blur(1px)",
                        }}
                    />

                    {/* Secondary counter-rotating ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-5px] md:inset-[-6px]"
                        style={{
                            borderRadius: "50% 45% 55% 50% / 45% 55% 45% 55%",
                            background: `conic-gradient(from 180deg, transparent 0%, ${brandGreen}20, transparent 30%, ${brandGreen}15, transparent 60%, ${brandGreen}20, transparent)`,
                            filter: "blur(0.5px)",
                        }}
                    />

                    {/* Main glass container */}
                    <div
                        className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2.5rem] flex items-center justify-center overflow-hidden"
                        style={{
                            background: "linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
                            boxShadow: `
                                0 0 0 1px ${brandGreen}15,
                                0 4px 12px ${brandGreen}10,
                                0 12px 40px rgba(0,0,0,0.06),
                                0 30px 80px rgba(0,0,0,0.04),
                                inset 0 1px 0 rgba(255,255,255,0.9),
                                inset 0 -1px 0 ${brandGreen}08
                            `,
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        {/* Inner light reflection */}
                        <div
                            className="absolute top-0 left-0 right-0 h-1/2 rounded-t-[2.5rem]"
                            style={{
                                background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",
                            }}
                        />

                        {/* The Logo — large and prominent */}
                        <motion.img
                            animate={{
                                scale: [1, 1.03, 1],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                            }}
                            src="/images/logo1.png"
                            alt="مجموعة التضامن القابضة"
                            className="relative z-10 w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain drop-shadow-sm"
                        />
                    </div>

                    {/* Orbiting mini company icons around the logo */}
                    {companies.slice(0, 6).map((company, i) => {
                        const angle = (i * 360) / 6;
                        const radius = 170;
                        const mdRadius = 210;
                        return (
                            <motion.div
                                key={company.id}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5 + i * 0.15, duration: 0.8, type: "spring" }}
                                className="absolute hidden md:flex"
                                style={{
                                    top: `calc(50% - 20px + ${-Math.sin((angle * Math.PI) / 180) * mdRadius}px)`,
                                    left: `calc(50% - 20px + ${Math.cos((angle * Math.PI) / 180) * mdRadius}px)`,
                                }}
                            >
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                                    style={{
                                        boxShadow: `0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px ${brandGreen}10`,
                                    }}
                                    title={company.name}
                                >
                                    <img src={company.logo} alt="" className="w-6 h-6 object-contain" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* === Layer 6: Floating Glass Stat Badges (desktop only) === */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
                {badges.map((badge, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            delay: badge.delay,
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute"
                        style={{ left: badge.x, top: badge.y }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0], rotate: [badge.rotation, badge.rotation + 2, badge.rotation] }}
                            transition={{ duration: 7 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative px-5 py-4 rounded-2xl"
                            style={{
                                background: "rgba(255,255,255,0.85)",
                                backdropFilter: "blur(20px)",
                                border: `1px solid ${brandGreen}15`,
                                boxShadow: `0 4px 24px rgba(0,0,0,0.04), 0 0 0 1px rgba(255,255,255,0.6)`,
                                transform: `rotate(${badge.rotation}deg)`,
                            }}
                        >
                            <p className="text-2xl font-black" style={{ color: brandGreen }}>{badge.value}</p>
                            <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{badge.label}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* === Layer 7: Main Text Content === */}
            <div className="relative z-30 text-center px-4 mt-[360px] md:mt-[400px] lg:mt-[420px]">

                {/* Cinematic staggered title with brand-green gradient */}
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

                {/* English subtitle with decorative lines */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center gap-4 mb-5"
                >
                    <span className="h-[1.5px] w-10 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${brandGreen}60)` }} />
                    <p className="text-lg md:text-xl text-gray-400 font-medium tracking-[0.15em]" dir="ltr">
                        AL-TADAMEN HOLDING GROUP
                    </p>
                    <span className="h-[1.5px] w-10 rounded-full" style={{ background: `linear-gradient(270deg, transparent, ${brandGreen}60)` }} />
                </motion.div>

                {/* Description text */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    مجموعة وطنية ليبية رائدة تمتلك وتدير أكثر من{" "}
                    <strong style={{ color: brandGreen }}>13 شركة</strong>{" "}
                    في مختلف القطاعات الصناعية والتجارية والخدمية
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link
                        to="/companies"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all duration-700 hover:scale-[1.04] hover:-translate-y-0.5 relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${brandGreen}, #5a9e36)`,
                            boxShadow: `0 4px 20px ${brandGreen}30, 0 8px 40px ${brandGreen}15`,
                        }}
                    >
                        <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-700" />
                        <Building2 className="h-5 w-5 relative z-10" />
                        <span className="relative z-10">استكشف شركاتنا</span>
                    </Link>
                    <Link
                        to="/about"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-gray-800 font-bold text-base transition-all duration-700 hover:scale-[1.04] hover:-translate-y-0.5"
                        style={{
                            boxShadow: `0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px ${brandGreen}12`,
                        }}
                    >
                        تعرف علينا
                        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-500" />
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="mt-16 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[4px] text-gray-400 font-medium">اكتشف المزيد</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-9 rounded-full border-2 flex items-start justify-center p-1"
                        style={{ borderColor: `${brandGreen}30` }}
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3], y: [0, 12, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: brandGreen }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

/* ========== Stats Section ========== */
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

/* ========== Companies Section ========== */
function CompaniesSection() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--g-blue)/0.06)] text-[hsl(var(--g-blue))] text-sm font-medium mb-4">
                        <Sparkles className="h-4 w-4" />شركاتنا
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black">الشركات الاستثمارية التابعة</h2>
                    <p className="text-[hsl(var(--muted-foreground))] mt-3 max-w-lg mx-auto">مجموعة متكاملة من الشركات تعمل في مختلف القطاعات الاقتصادية</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {companies.slice(0, 6).map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                to={`/companies/${c.slug}`}
                                className="block bg-white rounded-2xl overflow-hidden g-shadow hover:g-shadow-xl transition-all duration-700 group hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={c.image} alt={c.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-3 right-3 bg-white rounded-xl p-2 g-shadow">
                                        <img src={c.logo} alt="" className="h-7 w-7 object-contain" />
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-[hsl(var(--g-blue))] transition-colors duration-500">{c.name}</h3>
                                    <p className="text-sm text-[hsl(var(--muted-foreground))]">{c.field}</p>
                                    <div className="mt-3 h-[3px] rounded-full overflow-hidden flex">
                                        {gArr.map((col, j) => (
                                            <div key={j} className="flex-1 transition-transform duration-700 origin-right group-hover:scale-x-100 scale-x-0" style={{ backgroundColor: col, transitionDelay: `${j * 100}ms` }} />
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
                    <Link to="/companies" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--g-blue))] text-white font-bold g-shadow-lg hover:g-shadow-xl transition-all duration-700 hover:scale-105">
                        عرض جميع الشركات
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ========== Vision Section ========== */
function VisionSection() {
    return (
        <section className="py-20 bg-mesh relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="relative">
                            <img src="/images/feature-intro-2.jpg" alt="" className="rounded-3xl g-shadow-xl w-full" />
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 g-shadow-lg"
                            >
                                <p className="text-3xl font-black text-gradient">+13</p>
                                <p className="text-sm text-[hsl(var(--muted-foreground))]">شركة تابعة</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--g-green)/0.06)] text-[hsl(var(--g-green))] text-sm font-medium mb-4">
                            <Target className="h-4 w-4" />رؤيتنا
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                            نفتخر بأن جميع خدماتنا متطورة وتحت إشراف <span className="text-gradient">نخبة من ذوي الكفاءة العالية</span>
                        </h2>
                        <p className="text-[hsl(var(--muted-foreground))] leading-8 mb-6">
                            مجموعة التضامن القابضة مجموعة وطنية ليبية تؤمن بأهمية دورها في بناء الاقتصاد الليبي لذا تلتزم بدورها الريادي في التنمية الاقتصادية والاستثمار في المشاريع الكبيرة في العديد من القطاعات الحيوية.
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[hsl(var(--g-blue))] font-bold border-2 border-[hsl(var(--g-blue)/0.2)] hover:bg-[hsl(var(--g-blue)/0.04)] transition-all duration-500"
                        >
                            اقرأ المزيد
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ========== Features ========== */
function FeaturesGrid() {
    const features = [
        { icon: Handshake, title: "التعاون والإتقان", desc: "نلتزم بدورنا الريادي في التنمية الاقتصادية في ليبيا من خلال فريق متخصص ومؤهل", color: gColors.blue },
        { icon: Target, title: "الاستراتيجية الاستثمارية", desc: "تحديد أفضل المشاريع في جميع المجالات والمحافظة على التوجه الاستثماري للشركة", color: gColors.red },
        { icon: TrendingUp, title: "التنمية المستدامة", desc: "المساهمة في تنفيذ مشاريع استثمارية في قطاعات اقتصادية حيوية متنوعة", color: gColors.green },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-black">لماذا <span className="text-gradient-warm">التضامن القابضة؟</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-2xl p-8 g-shadow hover:g-shadow-xl transition-all duration-700 group hover:-translate-y-1 text-center"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
                                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                                style={{ backgroundColor: `${f.color}12` }}
                            >
                                <f.icon className="h-8 w-8" style={{ color: f.color }} />
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                            <p className="text-[hsl(var(--muted-foreground))] leading-7">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========== Partners Marquee ========== */
function PartnersMarquee() {
    const logos = companies.map((c) => ({ name: c.name, logo: c.logo, slug: c.slug }));
    const doubled = [...logos, ...logos];

    return (
        <section className="py-16 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 mb-8">
                <p className="text-center text-sm text-[hsl(var(--muted-foreground))] font-medium">شركاتنا التابعة</p>
            </div>
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent to-white z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-white z-10" />
                <div className="flex gap-8 animate-marquee" style={{ width: "max-content" }}>
                    {doubled.map((item, i) => (
                        <Link
                            key={i}
                            to={`/companies/${item.slug}`}
                            className="flex-shrink-0 bg-white rounded-2xl p-4 w-20 h-20 flex items-center justify-center g-shadow hover:g-shadow-lg transition-all duration-700 hover:scale-110 opacity-50 hover:opacity-100"
                        >
                            <img src={item.logo} alt={item.name} className="max-h-10 max-w-10 object-contain" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========== Main Page ========== */
export default function HomePage() {
    return (
        <div className="-mt-20">
            <HeroSection />
            <StatsSection />
            <VisionSection />
            <CompaniesSection />
            <FeaturesGrid />
            <PartnersMarquee />
        </div>
    );
}
