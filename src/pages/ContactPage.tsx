import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Send, Facebook, Twitter, CheckCircle2, MessageSquare } from "lucide-react";

const gColors = { blue: "hsl(217,89%,51%)", red: "hsl(4,90%,58%)", yellow: "hsl(45,100%,51%)", green: "hsl(151,83%,34%)" };
const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <>
            <section className="relative py-32 overflow-hidden bg-mesh">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--g-blue)/0.06)] text-[hsl(var(--g-blue))] text-sm font-medium mb-4">
                            <MessageSquare className="h-4 w-4" />تواصل معنا
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black"><span className="text-gradient">اتصل بنا</span></h1>
                        <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-2xl mx-auto text-lg">يسعدنا التواصل معكم والرد على جميع استفساراتكم</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 -mt-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease }} className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8 g-shadow">
                                <h2 className="text-xl font-bold mb-6">أرسل لنا رسالة</h2>
                                {submitted && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-[hsl(151,83%,34%/0.06)] border border-[hsl(151,83%,34%/0.15)] flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5" style={{ color: gColors.green }} />
                                        <p className="text-sm font-medium" style={{ color: gColors.green }}>تم إرسال رسالتك بنجاح!</p>
                                    </motion.div>
                                )}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-[hsl(var(--muted-foreground))]">الاسم</label>
                                            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.1)] outline-none transition-all duration-500 placeholder:text-[hsl(var(--muted-foreground)/0.5)]"
                                                placeholder="اسمك الكامل" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-[hsl(var(--muted-foreground))]">البريد الإلكتروني</label>
                                            <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.1)] outline-none transition-all duration-500 placeholder:text-[hsl(var(--muted-foreground)/0.5)]"
                                                placeholder="email@example.com" dir="ltr" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-[hsl(var(--muted-foreground))]">الموضوع</label>
                                        <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.1)] outline-none transition-all duration-500 placeholder:text-[hsl(var(--muted-foreground)/0.5)]"
                                            placeholder="موضوع الرسالة" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-[hsl(var(--muted-foreground))]">الرسالة</label>
                                        <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-[hsl(var(--secondary))] border border-[hsl(var(--border))] focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.1)] outline-none transition-all duration-500 resize-none placeholder:text-[hsl(var(--muted-foreground)/0.5)]"
                                            placeholder="اكتب رسالتك هنا..." />
                                    </div>
                                    <button type="submit"
                                        className="w-full md:w-auto px-8 py-4 rounded-full bg-[hsl(var(--g-blue))] text-white font-bold text-base hover:g-shadow-xl transition-all duration-700 hover:scale-105 hover:-translate-y-0.5 flex items-center justify-center gap-2 g-shadow-lg">
                                        <Send className="h-5 w-5" />إرسال الرسالة
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease }}>
                            <div className="bg-white rounded-2xl p-6 g-shadow mb-5">
                                <h3 className="text-lg font-bold mb-4">معلومات الاتصال</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: MapPin, label: "العنوان", value: "ليبيا - بنغازي", color: gColors.red },
                                        { icon: Phone, label: "الهاتف", value: "+218 912 099 964", href: "tel:00218912099964", color: gColors.blue },
                                        { icon: Mail, label: "البريد", value: "INFO@ALTADAMENGROUP.LY", href: "mailto:INFO@ALTADAMENGROUP.LY", color: gColors.yellow },
                                        { icon: Globe, label: "الموقع", value: "ALTADAMENGROUP.LY", href: "https://altadamengroup.ly", color: gColors.green },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}10` }}>
                                                <item.icon className="h-5 w-5" style={{ color: item.color }} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-[hsl(var(--muted-foreground))]">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-sm font-medium hover:text-[hsl(var(--g-blue))] transition-colors" dir="ltr">{item.value}</a>
                                                ) : (
                                                    <p className="text-sm font-medium">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 g-shadow">
                                <h3 className="text-lg font-bold mb-4">تابعنا</h3>
                                <div className="flex gap-3">
                                    <a href="https://web.facebook.com/" target="_blank" rel="noreferrer" className="flex-1 p-3 rounded-xl bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--g-blue)/0.06)] flex items-center justify-center gap-2 hover:text-[hsl(var(--g-blue))] transition-all duration-500">
                                        <Facebook className="h-5 w-5" /><span className="text-sm font-medium">Facebook</span>
                                    </a>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="flex-1 p-3 rounded-xl bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--g-blue)/0.06)] flex items-center justify-center gap-2 hover:text-[hsl(var(--g-blue))] transition-all duration-500">
                                        <Twitter className="h-5 w-5" /><span className="text-sm font-medium">Twitter</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
