
      

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Clock,
  Calendar,
  Bell,
  ShieldCheck,
  Sparkles,
  Check,
  Bot,
  Stethoscope,
  Users,
  ClipboardList,
  Heart,
  Phone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <main className="relative bg-white text-slate-900 overflow-x-hidden">
      {/* Header */}
      <motion.header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              MediBook
            </span>
          </motion.div>
          <nav className="hidden gap-8 text-sm font-medium md:flex items-center">
            {["Features", "How it Works", "Pricing"].map((item, i) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              href="#pricing"
              className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-all"
            >
              Book a Demo
            </motion.a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section style={{ y: heroY }} className="relative pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700">
              <Sparkles className="w-4 h-4" />
              WhatsApp Appointment Automation for Clinics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Let Patients Book<br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Appointments on WhatsApp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your clinic's phone chaos into seamless WhatsApp bookings. Patients book instantly, get automated reminders, and your staff focuses on care—not phones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#pricing"
              className="rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/25 hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="group flex items-center gap-2 text-base font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              See How It Works
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "70%", label: "Fewer Missed Calls" },
              { value: "50%", label: "Less No-Shows" },
              { value: "24/7", label: "Booking Availability" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual - WhatsApp Chat Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto max-w-5xl mt-20 relative"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl" />
            <div className="relative">
              {/* Mock WhatsApp Chat */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">City Medical Clinic</div>
                    <div className="text-xs text-emerald-600 flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      Online • Typically replies instantly
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-slate-700">Hi, I need to book an appointment with Dr. Johnson</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-emerald-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-white">Hello! I'd be happy to help you schedule with Dr. Johnson. What type of appointment do you need?</p>
                      <div className="mt-3 space-y-2">
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white font-medium">
                          🩺 General Consultation
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white font-medium">
                          🔬 Follow-up Visit
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white font-medium">
                          💉 Health Checkup
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="text-sm text-slate-700">General consultation please</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-emerald-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-white">Perfect! Here are Dr. Johnson's available slots this week:</p>
                      <div className="mt-3 space-y-2">
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white">
                          📅 Tomorrow, Wed 10:30 AM
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white">
                          📅 Thursday, 2:00 PM
                        </div>
                        <div className="bg-white/20 rounded-lg px-3 py-2 text-xs text-white">
                          📅 Friday, 11:00 AM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                      <p className="text-sm text-slate-700">Tomorrow 10:30 works great!</p>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="bg-emerald-500 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-white">✅ Booked! Appointment confirmed for tomorrow at 10:30 AM with Dr. Johnson.</p>
                      <div className="mt-2 bg-white/20 rounded-lg px-3 py-2">
                        <p className="text-xs text-white">📍 City Medical Clinic, 123 Main St</p>
                        <p className="text-xs text-white mt-1">You'll receive a reminder 24 hours before.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
              Features
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Everything your clinic needs
            </h2>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
              Streamline appointments and improve patient experience
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Instant Appointment Booking",
                text: "Patients book appointments directly on WhatsApp in seconds, any time of day.",
                color: "emerald",
              },
              {
                icon: <Bell className="w-6 h-6" />,
                title: "Automated Reminders",
                text: "Send automatic SMS and WhatsApp reminders to reduce no-shows by 50%.",
                color: "teal",
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "AI-Powered Assistant",
                text: "Smart chatbot handles FAQs, doctor availability, and service inquiries 24/7.",
                color: "cyan",
              },
              {
                icon: <ClipboardList className="w-6 h-6" />,
                title: "Calendar Sync",
                text: "Seamlessly integrates with your existing calendar system and practice management software.",
                color: "blue",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Staff Relief",
                text: "Free your front desk from constant phone calls. Let them focus on in-person patient care.",
                color: "indigo",
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "HIPAA Compliant",
                text: "End-to-end encrypted, secure patient data handling with full healthcare compliance.",
                color: "violet",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`mb-5 inline-flex rounded-xl bg-${f.color}-50 p-3 text-${f.color}-600`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="howitworks" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
              How It Works
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Get started in 3 simple steps
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Set up in under 10 minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Connect Your Calendar",
                text: "Link your practice management system or calendar. We integrate with all major platforms.",
                icon: <Calendar className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Customize Your Bot",
                text: "Set up your services, doctor schedules, and automated responses in minutes.",
                icon: <Bot className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Share Your WhatsApp",
                text: "Give patients your WhatsApp number and let them book instantly. That's it!",
                icon: <MessageCircle className="w-6 h-6" />,
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-bold text-xl shadow-lg shadow-emerald-500/25">
                  {s.step}
                </div>
                <div className="mb-4 flex justify-center text-emerald-600">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Why clinics love MediBook
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "For Your Patients",
                icon: <Heart className="w-8 h-8" />,
                benefits: [
                  "Book appointments anytime, anywhere on their favorite app",
                  "Get instant confirmation and appointment details",
                  "Receive timely reminders so they never miss appointments",
                  "No more waiting on hold or playing phone tag",
                ],
              },
              {
                title: "For Your Clinic",
                icon: <Stethoscope className="w-8 h-8" />,
                benefits: [
                  "Reduce front desk workload by 70%",
                  "Eliminate missed calls and lost appointment opportunities",
                  "Cut no-shows in half with automated reminders",
                  "Fill cancellation slots automatically with waitlist management",
                ],
              },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-2xl border border-slate-200 bg-white p-8 hover:border-emerald-300 hover:shadow-lg transition-all"
              >
                <div className="mb-6 inline-flex rounded-xl bg-emerald-50 p-4 text-emerald-600">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Trusted by healthcare providers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Our phone lines are finally quiet! Patients love booking on WhatsApp, and our staff can focus on patient care instead of answering calls.",
                author: "Dr. Sarah Mitchell",
                role: "Family Medicine",
                clinic: "Wellness Family Clinic",
              },
              {
                quote: "No-shows dropped from 30% to under 10%. The automated reminders are a game-changer for our practice.",
                author: "Dr. Rajesh Kumar",
                role: "Dental Surgeon",
                clinic: "Smile Dental Care",
              },
              {
                quote: "We're booking 40% more appointments because we never miss a call anymore. Patients can schedule even at midnight!",
                author: "Maria Garcia",
                role: "Practice Manager",
                clinic: "City Medical Center",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <p className="text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600" />
                  <div>
                    <div className="font-semibold text-slate-900">{t.author}</div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                    <div className="text-xs text-slate-500">{t.clinic}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
              Pricing
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
              Simple pricing for clinics
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Choose the plan that fits your practice size
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Solo Practice",
                price: "$49",
                period: "/month",
                features: [
                  "Up to 200 appointments/month",
                  "1 doctor/practitioner",
                  "WhatsApp booking bot",
                  "Automated reminders",
                  "Basic calendar sync",
                  "Email support",
                ],
                popular: false,
              },
              {
                name: "Multi-Doctor Clinic",
                price: "$129",
                period: "/month",
                features: [
                  "Up to 1,000 appointments/month",
                  "Up to 5 doctors/practitioners",
                  "Advanced AI assistant",
                  "Priority support",
                  "Full calendar integration",
                  "Custom workflows",
                  "Analytics dashboard",
                ],
                popular: true,
              },
              {
                name: "Large Practice",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited appointments",
                  "Unlimited doctors",
                  "Dedicated account manager",
                  "Custom integrations",
                  "Multi-location support",
                  "Advanced analytics",
                  "SLA guarantee",
                ],
                popular: false,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 transition-all ${
                  plan.popular
                    ? "border-emerald-300 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-xl scale-105"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#"
                  className={`block w-full rounded-xl px-6 py-3 text-center font-semibold transition-all ${
                    plan.popular
                      ? "bg-slate-900 text-white shadow-lg hover:bg-slate-800"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                  }`}
                >
                  {plan.popular ? "Start Free Trial" : "Get Started"}
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-600 mt-12"
          >
            All plans include 14-day free trial • No credit card required • Cancel anytime
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to automate your WhatsApp?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Join thousands of businesses using FlowChat to scale customer conversations
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl hover:bg-slate-50 transition-all"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6 text-center">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">FlowChat</span>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} FlowChat. All rights reserved. Empowering businesses through WhatsApp automation.
          </p>
        </div>
      </footer>
    </main>
  );
}