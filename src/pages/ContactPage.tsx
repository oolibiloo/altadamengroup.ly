import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";

/* Schema */
const formSchema = z.object({
    name: z.string().min(2, "الاسم مطلوب"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    message: z.string().min(10, "الرسالة قصيرة جداً"),
});

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async () => {
        // Simulate API
        await new Promise((r) => setTimeout(r, 1500));
        toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
        reset();
    };

    return (
        <div className="pt-10 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">تواصل <span className="text-gradient-warm">معنا</span></h1>
                    <p className="text-xl text-[hsl(var(--muted-foreground))]">نحن هنا للإجابة على استفساراتك</p>
                </motion.div>

                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] g-shadow-lg border border-[hsl(var(--border))]">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold">الاسم الكامل</label>
                                <input
                                    {...register("name")}
                                    className="w-full px-5 py-3 rounded-xl bg-[hsl(var(--secondary))] border-transparent focus:bg-white focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.2)] transition-all outline-none"
                                    placeholder="اكتب اسمك هنا"
                                />
                                {errors.name && <p className="text-xs text-[hsl(var(--g-red))]">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold">البريد الإلكتروني</label>
                                <input
                                    {...register("email")}
                                    className="w-full px-5 py-3 rounded-xl bg-[hsl(var(--secondary))] border-transparent focus:bg-white focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.2)] transition-all outline-none"
                                    placeholder="name@example.com"
                                />
                                {errors.email && <p className="text-xs text-[hsl(var(--g-red))]">{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold">الرسالة</label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                className="w-full px-5 py-3 rounded-xl bg-[hsl(var(--secondary))] border-transparent focus:bg-white focus:border-[hsl(var(--g-blue))] focus:ring-2 focus:ring-[hsl(var(--g-blue)/0.2)] transition-all outline-none resize-none"
                                placeholder="كيف يمكننا مساعدتك؟"
                            />
                            {errors.message && <p className="text-xs text-[hsl(var(--g-red))]">{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-[hsl(var(--g-blue))] text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? <Loader2 className="animate-spin" /> : <>إرسال الرسالة <Send className="w-4 h-4" /></>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
