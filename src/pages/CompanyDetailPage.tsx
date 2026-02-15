import { useParams, Link } from "react-router-dom";
import { getCompanyBySlug } from "../data/companies";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Phone, MapPin } from "lucide-react";

export default function CompanyDetailPage() {
    const { slug } = useParams();
    const company = getCompanyBySlug(slug || "");

    if (!company) {
        return <div className="min-h-[50vh] flex items-center justify-center text-xl font-bold">الشركة غير موجودة</div>;
    }

    return (
        <div className="pb-20">
            {/* Header Image */}
            <div className="h-[40vh] md:h-[50vh] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10 }}
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 pb-10 container mx-auto px-4 lg:px-8">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        src={company.logo}
                        alt="Logo"
                        className="h-24 w-auto bg-white/95 backdrop-blur p-4 rounded-2xl shadow-xl mb-6"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black text-white mb-2"
                    >
                        {company.name}
                    </motion.h1>
                    <p className="text-white/80 text-lg md:text-xl">{company.field}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 mt-12 grid lg:grid-cols-3 gap-12">
                <motion.div
                    className="lg:col-span-2 prose prose-lg max-w-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">نبدة عن الشركة</h3>
                    <p className="text-[hsl(var(--muted-foreground))] leading-8 text-lg">{company.description}</p>
                    <p className="text-[hsl(var(--muted-foreground))] leading-8 text-lg mt-4">
                        تسعى الشركة دائمًا لتقديم أفضل الخدمات والمنتجات لعملائها، مع الالتزام بأعلى معايير الجودة والسلامة المهنية. نؤمن بأن العمل الجاد والتطوير المستمر هما مفتاح النجاح.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-[hsl(var(--secondary))] p-8 rounded-3xl h-fit sticky top-24"
                >
                    <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-[hsl(var(--muted-foreground))]">
                            <MapPin className="h-5 w-5 text-[hsl(var(--g-red))] shrink-0 mt-1" />
                            <span>ليبيا، بنغازي، المقر الرئيسي للمجموعة</span>
                        </li>
                        <li className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                            <Phone className="h-5 w-5 text-[hsl(var(--g-blue))] shrink-0" />
                            <span dir="ltr">+218 91 123 4567</span>
                        </li>
                        <li className="flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
                            <Globe className="h-5 w-5 text-[hsl(var(--g-green))] shrink-0" />
                            <a href="#" className="hover:text-[hsl(var(--g-blue))]">Visit Website</a>
                        </li>
                    </ul>
                </motion.div>
            </div>

            <div className="container mx-auto px-4 mt-16">
                <Link to="/companies" className="inline-flex items-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--g-blue))] transition-colors font-bold">
                    <ArrowRight className="ml-2 h-5 w-5" /> العودة للشركات
                </Link>
            </div>
        </div>
    );
}
