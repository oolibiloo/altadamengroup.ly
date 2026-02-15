import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { companies } from "../data/companies";

export default function CompaniesPage() {
    return (
        <div className="pt-10 pb-24">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">شركات <span className="text-gradient">المجموعة</span></h1>
                    <p className="text-xl text-[hsl(var(--muted-foreground))]">استثمارات متنوعة لغدٍ مشرق</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {companies.map((company, i) => (
                        <motion.div
                            key={company.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={`/companies/${company.slug}`} className="group block bg-white rounded-3xl overflow-hidden g-shadow hover:g-shadow-xl transition-all duration-500 h-full flex flex-col">
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={company.image} alt={company.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-4 right-4 z-20 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg">
                                        <img src={company.logo} alt="" className="h-10 w-auto" />
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[hsl(var(--g-blue))] transition-colors">{company.name}</h3>
                                    <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 line-clamp-2 flex-1">{company.description}</p>
                                    <span className="inline-flex items-center text-sm font-bold text-[hsl(var(--g-blue))]">
                                        التفاصيل <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
