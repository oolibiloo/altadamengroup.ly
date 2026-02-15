import { motion } from "framer-motion";
import { Calendar, Phone, Globe, Mail, CheckCircle2, Scale, Target } from "lucide-react";

const gColors = { blue: "hsl(217,89%,51%)", red: "hsl(4,90%,58%)", yellow: "hsl(45,100%,51%)", green: "hsl(151,83%,34%)" };
const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutPage() {
    const purposes = [
        "تأسيس شركات تابعة لها، أو السيطرة على إدارة شركات أخرى أو المساهمة في رأس مالها.",
        "استثمار أموالها في الأسهم والسندات والأوراق المالية.",
        "تأسيس وإدارة الصناديق والمحافظ الاستثمارية.",
        "تقديم القروض والضمانات والتمويل للشركات التابعة لها.",
        "تملك براءات الاختراع والعلامات التجارية والامتيازات وغيرها من الحقوق المعنوية واستغلالها وتأجيرها للشركات التابعة لها أو لغيرها.",
    ];

    const conditions = [
        "أن تكون العملية مبررة للحاجة العملية الحقيقية لها.",
        "أن تتم العملية بصورة عادية ودون أن تتضمن شروطاً غير معتادة.",
        "ألا يترتب عليها ضرر أو إرهاق للشركة القائمة بها.",
        "ألا تكون العملية قائمة على اعتبارات ضريبية أو مراعاة لمصالح شخصية.",
    ];

    const pColors = [gColors.blue, gColors.red, gColors.yellow, gColors.green, gColors.blue];

    return (
        <>
            {/* Hero */}
            <section className="relative py-32 overflow-hidden bg-mesh">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--g-blue)/0.06)] text-[hsl(var(--g-blue))] text-sm font-medium mb-4">
                            <Target className="h-4 w-4" />من نحن
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black"><span className="text-gradient">مجموعة التضامن القابضة</span></h1>
                        <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-2xl mx-auto text-lg">شركة رائدة في مجال الاستثمار والتنمية في ليبيا</p>
                    </motion.div>
                </div>
            </section>

            {/* Info Cards */}
            <section className="py-10 -mt-10 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Calendar, label: "تاريخ التأسيس", value: "2020/12/13", color: gColors.blue },
                            { icon: Phone, label: "هاتف المدير العام", value: "0912099964", href: "tel:00218912099964", color: gColors.red },
                            { icon: Mail, label: "البريد الإلكتروني", value: "INFO@ALTADAMENGROUP.LY", href: "mailto:INFO@ALTADAMENGROUP.LY", color: gColors.yellow },
                            { icon: Globe, label: "الموقع الرسمي", value: "ALTADAMENGROUP.LY", href: "https://altadamengroup.ly", color: gColors.green },
                        ].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.8, ease }}
                                className="bg-white rounded-2xl p-5 g-shadow hover:g-shadow-lg transition-all duration-700 hover:-translate-y-0.5 group">
                                <item.icon className="h-6 w-6 mb-3" style={{ color: item.color }} />
                                <p className="text-xs text-[hsl(var(--muted-foreground))] mb-1">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} className="text-sm font-bold hover:text-[hsl(var(--g-blue))] transition-colors" dir="ltr">{item.value}</a>
                                ) : (
                                    <p className="text-sm font-bold" dir="ltr">{item.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Purposes */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="lg:col-span-2">
                            <img src="/images/feature-intro-2.jpg" alt="" className="rounded-3xl g-shadow-xl w-full" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease }} className="lg:col-span-3">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <CheckCircle2 className="h-7 w-7" style={{ color: gColors.green }} />أغراض الشركة
                            </h2>
                            <div className="space-y-3">
                                {purposes.map((p, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease }}
                                        className="bg-white rounded-xl p-4 flex gap-3 items-start g-shadow hover:g-shadow-lg transition-all duration-700 hover:-translate-y-0.5">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: pColors[i] }}>{i + 1}</span>
                                        <p className="text-[hsl(var(--foreground)/0.85)] leading-7">{p}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Conditions */}
            <section className="py-20 bg-mesh relative">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative container mx-auto px-4 lg:px-8 max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }}>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                            <Scale className="h-7 w-7" style={{ color: gColors.blue }} />الشروط القانونية
                        </h2>
                        <p className="text-[hsl(var(--muted-foreground))] mb-8 leading-7">
                            يجوز للشركة القابضة طبقاً لنص المادة (251) من القانون رقم (23 لسنة 2021) أن تقوم بتقديم القروض والضمانات والتمويل وفق الشروط التالية:
                        </p>
                        <div className="space-y-3">
                            {conditions.map((c, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8, ease }}
                                    className="bg-white rounded-xl p-4 flex gap-3 items-start g-shadow hover:g-shadow-lg transition-all duration-700">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${pColors[i]}15` }}>
                                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: pColors[i] }} />
                                    </span>
                                    <p className="text-[hsl(var(--foreground)/0.85)] leading-7">{c}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
