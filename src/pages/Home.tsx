import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  PhoneOff,
  Users,
  Clock,
  Calendar,
  BrainCircuit,
  ShieldCheck,
  Zap,
  Sparkles,
  Check,
} from "lucide-react";

// Animated gradient blob
const Blob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-30 blur-3xl ${className}`}
    animate={{
      x: ["0%", "100%", "0%"],
      y: ["0%", "50%", "0%"],
      scale: [1, 1.3, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ 
      duration: 20, 
      repeat: Infinity, 
      delay,
      ease: "linear"
    }}
  />
);

// Floating particles
const Particle = ({ index }: { index: number }) => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 1000 });
  
  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
      initial={{
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
      }}
      animate={{
        y: [null, Math.random() * dimensions.height],
        x: [null, Math.random() * dimensions.width],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay: index * 0.2,
      }}
    />
  );
};

import { easeInOut } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.7, 
      ease: easeInOut
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Dynamic background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <Blob className="bg-blue-600 w-96 h-96 -top-20 -left-20" delay={0} />
        <Blob className="bg-purple-600 w-[500px] h-[500px] top-1/4 right-0" delay={3} />
        <Blob className="bg-pink-600 w-80 h-80 bottom-0 left-1/3" delay={6} />
        <Blob className="bg-cyan-600 w-72 h-72 top-2/3 right-1/4" delay={9} />
      </div>

      {/* Sticky Demo Button */}
      <motion.a
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        href="#demo"
        className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-white font-bold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all backdrop-blur-sm border border-white/20"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Request Demo
        </span>
      </motion.a>

      {/* Header */}
      <motion.header 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Luminivia
            </span>
          </motion.div>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {["Features", "How it works", "Demo"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-32 pb-20 text-center min-h-screen flex items-center"
      >
        <div className="mx-auto max-w-5xl px-6 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 px-6 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              AI-Powered Healthcare Revolution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Never Miss
            </span>
            <br />
            <span className="text-white">A Patient Again</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto"
          >
            Your clinic's AI receptionist that answers every call, books patients instantly, and eliminates front-desk chaos—24/7.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.97 }}
              href="#demo"
              className="group relative rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="group flex items-center gap-2 text-lg font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Watch 2-min Video
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "10k+", label: "Calls/day" },
              { value: "<2s", label: "Response" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            custom={0}
          >
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
              Powerful Features
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Everything Your Clinic Needs
            </h2>
            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
              Built for modern healthcare with enterprise-grade reliability
            </p>
          </motion.div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <PhoneOff className="w-6 h-6" />, title: "Never Miss a Call", text: "AI receptionist handles all patient calls, even after hours.", color: "from-blue-500 to-cyan-500" },
              { icon: <Users className="w-6 h-6" />, title: "Reduce Staff Workload", text: "Free your staff from constant phone interruptions and admin tasks.", color: "from-purple-500 to-pink-500" },
              { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", text: "Your clinic always ready to take patient bookings automatically.", color: "from-cyan-500 to-blue-500" },
              { icon: <Calendar className="w-6 h-6" />, title: "Seamless Calendar Sync", text: "Appointments appear instantly in your existing calendar system.", color: "from-pink-500 to-rose-500" },
              { icon: <Zap className="w-6 h-6" />, title: "Automated Reminders", text: "Reduce no-shows with SMS & email reminders automatically sent.", color: "from-orange-500 to-yellow-500" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "HIPAA Compliant", text: "Secure handling of patient data with full compliance.", color: "from-green-500 to-emerald-500" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-lg hover:border-white/20 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br ${f.color} p-4 text-white shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="py-32 relative">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">
              Simple Setup
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Get Started in Minutes
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                { step: "1", title: "Connect", text: "Link your calendar system in minutes with our one-click integration.", icon: <Calendar className="w-6 h-6" /> },
                { step: "2", title: "Forward Calls", text: "Forward your main clinic line to Luminivia's dedicated number.", icon: <PhoneOff className="w-6 h-6" /> },
                { step: "3", title: "Monitor", text: "Track all appointments and analytics in your real-time dashboard.", icon: <BrainCircuit className="w-6 h-6" /> },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-2xl shadow-lg shadow-purple-500/50">
                    {s.step}
                  </div>
                  <div className="mb-4 flex justify-center text-purple-400">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Trusted by Healthcare Providers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Luminivia completely transformed our front desk. Calls are never missed.", author: "Dr. Sarah Chen", role: "Family Practice" },
              { quote: "Our staff loves how easy it is to manage appointments automatically.", author: "Michael Rodriguez", role: "Clinic Manager" },
              { quote: "Patient satisfaction has gone through the roof thanks to AI scheduling.", author: "Dr. Emily Watson", role: "Pediatrics" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-lg hover:border-purple-500/30 transition-all"
              >
                <div className="text-purple-400 mb-4 text-4xl">"</div>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                  <div>
                    <div className="font-semibold text-white">{t.author}</div>
                    <div className="text-sm text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="demo" className="py-32 relative">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wider text-purple-400 uppercase">
              Pricing
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Choose Your Perfect Plan
            </h2>
            <p className="mt-4 text-xl text-slate-400">
              Flexible pricing for clinics of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$49", period: "/month", features: ["Up to 200 calls/month", "AI Receptionist", "Automated Reminders", "Email Support"], popular: false, gradient: "from-blue-500 to-cyan-500" },
              { name: "Professional", price: "$99", period: "/month", features: ["Up to 1000 calls/month", "AI Receptionist", "Calendar Sync", "Priority Support", "Advanced Analytics"], popular: true, gradient: "from-purple-500 to-pink-500" },
              { name: "Enterprise", price: "Custom", period: "", features: ["Unlimited calls", "Dedicated Account Manager", "Advanced Integrations", "Custom AI Training", "SLA Guarantee"], popular: false, gradient: "from-pink-500 to-rose-500" },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative rounded-3xl border p-8 backdrop-blur-lg transition-all duration-300 ${
                  plan.popular 
                    ? "border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-pink-500/10 shadow-2xl shadow-purple-500/20" 
                    : "border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={`inline-block rounded-full bg-gradient-to-r ${plan.gradient} px-6 py-2 text-sm font-bold text-white shadow-lg`}>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#demo"
                  className={`block w-full rounded-2xl px-8 py-4 text-center font-bold shadow-lg transition-all ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white shadow-purple-500/50 hover:shadow-purple-500/70`
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-16 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Luminivia
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Luminivia. All rights reserved. Revolutionizing healthcare communication.
          </p>
        </div>
      </footer>
    </main>
  );
}