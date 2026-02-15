import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { companies } from "@/data/companies";
import { ArrowRight, ArrowLeft, Building2, Globe, Briefcase } from "lucide-react";

const gArr = ["hsl(217,89%,51%)", "hsl(4,90%,58%)", "hsl(45,100%,51%)", "hsl(151,83%,34%)"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function CompanyDetailPage() {
    const { slug } = useParams();
    const company = companies.find((c) => c.slug === slug);

    if (!company) {
        return (
            <section className="min-h-[70vh] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-black text-gradient mb-4">404</h1>
                    <p className="text-[hsl(var(--muted-foreground))] mb-6">الشركة غير موجودة</p>
                    <Link to="/companies" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--g-blue))] text-white font-bold">
                        <ArrowRight className="h-5 w-5" />العودة للشركات
                    </Link>
                </div>
            </section>
        );
    }

    const related = companies.filter((c) => c.id !== company.id).slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                <div className="absolute bottom-0 right-0 left-0 pb-10">
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="flex items-end gap-5">
                            <div className="w-20 h-20 rounded-2xl bg-white g-shadow-xl flex items-center justify-center">
                                <img src={company.logo} alt="" className="w-12 h-12 object-contain" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black">{company.name}</h1>
                                <p className="text-[hsl(var(--muted-foreground))]">{company.nameEn}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8 g-shadow">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <Building2 className="h-5 w-5" style={{ color: gArr[0] }} />عن الشركة
                                </h2>
                                <p className="text-[hsl(var(--foreground)/0.8)] leading-8">{company.description}</p>
                                <div className="mt-6 h-1 rounded-full overflow-hidden flex">
                                    {gArr.map((c, j) => <div key={j} className="flex-1" style={{ backgroundColor: c }} />)}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.8, ease }}>
                            <div className="bg-white rounded-2xl p-6 g-shadow mb-5">
                                <h3 className="text-lg font-bold mb-4">معلومات الشركة</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="h-5 w-5" style={{ color: gArr[1] }} />
                                        <div>
                                            <p className="text-xs text-[hsl(var(--muted-foreground))]">المجال</p>
                                            <p className="font-medium text-sm">{company.field}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Globe className="h-5 w-5" style={{ color: gArr[2] }} />
                                        <div>
                                            <p className="text-xs text-[hsl(var(--muted-foreground))]">الاسم بالإنجليزية</p>
                                            <p className="font-medium text-sm" dir="ltr">{company.nameEn}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 g-shadow">
                                <h3 className="text-lg font-bold mb-4">شركات أخرى</h3>
                                <div className="space-y-2">
                                    {related.map((r, i) => (
                                        <Link key={r.id} to={`/companies/${r.slug}`} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[hsl(var(--secondary))] transition-all duration-500 group">
                                            <img src={r.logo} alt="" className="w-8 h-8 rounded-lg object-contain" />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium group-hover:text-[hsl(var(--g-blue))] transition-colors">{r.name}</p>
                                                <p className="text-xs text-[hsl(var(--muted-foreground))]">{r.field}</p>
                                            </div>
                                            <ArrowLeft className="h-3 w-3 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--g-blue))] transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
