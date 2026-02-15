import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { companies } from "@/data/companies";
import { ArrowLeft, Building2 } from "lucide-react";

const gArr = ["hsl(217,89%,51%)", "hsl(4,90%,58%)", "hsl(45,100%,51%)", "hsl(151,83%,34%)"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function CompaniesPage() {
    return (
        <>
            <section className="relative py-32 overflow-hidden bg-mesh">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="relative container mx-auto px-4 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--g-blue)/0.06)] text-[hsl(var(--g-blue))] text-sm font-medium mb-4">
                            <Building2 className="h-4 w-4" />شركاتنا
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black"><span className="text-gradient">الشركات الاستثمارية التابعة</span></h1>
                        <p className="text-[hsl(var(--muted-foreground))] mt-4 max-w-2xl mx-auto text-lg">مجموعة متنوعة من الشركات تعمل في مختلف القطاعات الاقتصادية</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 -mt-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {companies.map((company, i) => (
                            <motion.div key={company.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06, duration: 0.8, ease }}>
                                <Link to={`/companies/${company.slug}`} className="block bg-white rounded-2xl overflow-hidden g-shadow hover:g-shadow-xl transition-all duration-700 group hover:-translate-y-1 h-full">
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={company.image} alt={company.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                        <div className="absolute top-3 left-3 bg-white rounded-xl p-2 g-shadow">
                                            <img src={company.logo} alt="" className="h-8 w-8 object-contain" />
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--g-blue))] transition-colors duration-500">{company.name}</h3>
                                        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">{company.field}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="inline-flex items-center gap-1 text-xs font-bold group-hover:gap-2 transition-all duration-500" style={{ color: gArr[i % 4] }}>
                                                عرض التفاصيل<ArrowLeft className="h-3 w-3" />
                                            </span>
                                            <div className="flex gap-[2px]">
                                                {gArr.map((c, j) => <span key={j} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c, opacity: 0.4 }} />)}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
