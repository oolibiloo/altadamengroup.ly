import { Link } from "react-router-dom";
import { Phone, Globe, Mail, MapPin, Facebook, Twitter } from "lucide-react";

const googleColors = ["bg-[hsl(217,89%,51%)]", "bg-[hsl(4,90%,58%)]", "bg-[hsl(45,100%,51%)]", "bg-[hsl(151,83%,34%)]"];

export default function Footer() {
    return (
        <footer className="mt-24 relative">
            {/* Google stripe */}
            <div className="h-1 flex">
                {googleColors.map((c, i) => <div key={i} className={`flex-1 ${c}`} />)}
            </div>

            <div className="bg-[hsl(220,14%,97%)] border-t border-[hsl(var(--border))]">
                <div className="container mx-auto px-4 lg:px-8 py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Logo */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center gap-3 mb-5">
                                <img src="/images/logo1.png" alt="" className="h-12" />
                                <div>
                                    <h3 className="text-lg font-bold">مجموعة التضامن القابضة</h3>
                                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Al-Tadamen Holding Group</p>
                                </div>
                            </Link>
                            <p className="text-sm text-[hsl(var(--muted-foreground))] leading-7 max-w-md">
                                شركة وطنية ليبية تمتلك العديد من الشركات الصناعية والتجارية والخدمية، تقوم بالإشراف عليها ومتابعة أعمالها.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 text-[hsl(var(--foreground))]">روابط سريعة</h4>
                            <ul className="space-y-2.5">
                                {[
                                    { label: "الرئيسية", path: "/" },
                                    { label: "نبذة عنا", path: "/about" },
                                    { label: "شركاتنا", path: "/companies" },
                                    { label: "اتصل بنا", path: "/contact" },
                                ].map((item) => (
                                    <li key={item.path}>
                                        <Link to={item.path} className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--g-blue))] transition-colors duration-500">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-sm font-bold mb-4 text-[hsl(var(--foreground))]">التواصل</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                                    <MapPin className="h-4 w-4 text-[hsl(var(--g-red))] shrink-0" />ليبيا - بنغازي
                                </li>
                                <li className="flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                                    <Phone className="h-4 w-4 text-[hsl(var(--g-blue))] shrink-0" />
                                    <a href="tel:00218912099964" className="hover:text-[hsl(var(--g-blue))] transition-colors" dir="ltr">+218 912 099 964</a>
                                </li>
                                <li className="flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                                    <Mail className="h-4 w-4 text-[hsl(var(--g-yellow))] shrink-0" />
                                    <a href="mailto:INFO@ALTADAMENGROUP.LY" className="hover:text-[hsl(var(--g-blue))] transition-colors">INFO@ALTADAMENGROUP.LY</a>
                                </li>
                                <li className="flex items-center gap-2.5 text-sm text-[hsl(var(--muted-foreground))]">
                                    <Globe className="h-4 w-4 text-[hsl(var(--g-green))] shrink-0" />
                                    <a href="https://altadamengroup.ly" target="_blank" rel="noreferrer" className="hover:text-[hsl(var(--g-blue))] transition-colors">ALTADAMENGROUP.LY</a>
                                </li>
                            </ul>
                            <div className="flex gap-2 mt-5">
                                <a href="https://web.facebook.com/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white g-shadow hover:g-shadow-lg hover:text-[hsl(var(--g-blue))] transition-all duration-500 hover:-translate-y-0.5">
                                    <Facebook className="h-4 w-4" />
                                </a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white g-shadow hover:g-shadow-lg hover:text-[hsl(var(--g-blue))] transition-all duration-500 hover:-translate-y-0.5">
                                    <Twitter className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row justify-between items-center gap-3">
                        <p className="text-xs text-[hsl(var(--muted-foreground))]">جميع الحقوق محفوظة © {new Date().getFullYear()} مجموعة التضامن القابضة</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
