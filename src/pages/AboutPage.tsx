import { motion } from "framer-motion";
import { Award, Target, Eye, HISTORY } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-10 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-4 lg:px-8 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-black mb-6">عن <span className="text-gradient">المجموعة</span></h1>
                    <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
                        مجموعة التضامن القابضة، صرح اقتصادي ليبي تأسس ليكون رافداً للاقتصاد الوطني، من خلال إدارة وتشغيل مجموعة من الشركات الرائدة في قطاعات الصناعة، التجارة، والخدمات.
                    </p>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-[hsl(var(--secondary))] py-20 mb-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Eye, title: "رؤيتنا", desc: "أن نكون الخيار الأول والشريك الموثوق في مجالات الاستثمار والتنمية في ليبيا وشمال أفريقيا.", color: "text-[hsl(var(--g-blue))]" },
                            { icon: Target, title: "رسالتنا", desc: "تقديم منتجات وخدمات عالية الجودة تساهم في تحسين جودة الحياة ودفع عجلة الاقتصاد الوطني.", color: "text-[hsl(var(--g-red))]" },
                            { icon: Award, title: "قيمنا", desc: "النزاهة، الشفافية، الابتكار، والمسؤولية المجتمعية هي ركائز عملنا المستمر.", color: "text-[hsl(var(--g-yellow))]" },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl g-shadow hover:g-shadow-lg transition-all"
                            >
                                <item.icon className={`h-12 w-12 mb-6 ${item.color}`} />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-[hsl(var(--muted-foreground))] leading-7">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-4 lg:px-8">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[hsl(var(--foreground))] prose-p:text-[hsl(var(--muted-foreground))]">
                    <h3>كلمة رئيس مجلس الإدارة</h3>
                    <p>
                        نؤمن في مجموعة التضامن بأن النجاح الحقيقي يكمن في البناء المستدام والعلاقات القوية. لطالما سعينا لتقديم الأفضل لمجتمعنا ووطنا...
                    </p>
                </div>
            </div>
        </div>
    );
}
