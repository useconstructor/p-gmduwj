"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Zap,
  Layers,
  BarChart3,
  Plug,
  Users,
  Webhook,
  Shield,
  FileStack,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
  Star,
  Quote,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const stats = [
  { value: "10,000+", label: "Active Workflows" },
  { value: "200+", label: "Integrations" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50M+", label: "Tasks Automated" },
];

const features = [
  {
    icon: Zap,
    title: "AI Powered Automation",
    description: "Our intelligent engine learns your patterns and suggests optimizations to streamline your workflows automatically.",
  },
  {
    icon: Layers,
    title: "No Code Builder",
    description: "Drag and drop interface makes it easy for anyone to create complex workflows without writing a single line of code.",
  },
  {
    icon: BarChart3,
    title: "Real Time Analytics",
    description: "Monitor performance metrics, track bottlenecks, and gain actionable insights with our live dashboard.",
  },
  {
    icon: Plug,
    title: "200+ Integrations",
    description: "Connect with your favorite tools including Salesforce, Slack, HubSpot, Jira, and hundreds more out of the box.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workspaces, comments, version history, and real time editing.",
  },
  {
    icon: Webhook,
    title: "Custom Webhooks",
    description: "Build powerful integrations with custom API webhooks that trigger workflows from any external system.",
  },
  {
    icon: Shield,
    title: "Role Based Access",
    description: "Keep your workflows secure with granular permissions and role based access control for your entire team.",
  },
  {
    icon: FileStack,
    title: "Template Library",
    description: "Get started fast with hundreds of pre-built workflow templates designed for common business processes.",
  },
];

const services = [
  {
    title: "Sales Automation",
    description: "Automate lead scoring, follow ups, and pipeline management to close deals faster.",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Marketing Operations",
    description: "Orchestrate campaigns, sync data across platforms, and personalize customer journeys at scale.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Customer Success",
    description: "Automate onboarding sequences, health scoring, and proactive outreach to reduce churn.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "IT Operations",
    description: "Streamline provisioning, incident management, and compliance workflows across your infrastructure.",
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const products = [
  {
    title: "Workflow Studio",
    description: "Visual canvas for building and testing automation flows with real time preview and debugging tools.",
  },
  {
    title: "Integration Hub",
    description: "Centralized management for all your connected apps with authentication, mapping, and monitoring.",
  },
  {
    title: "Analytics Engine",
    description: "Deep insights into workflow performance with custom reports, alerts, and optimization suggestions.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "For small teams getting started",
    price: "Free",
    period: "",
    features: [
      "Up to 500 tasks per month",
      "5 active workflows",
      "10 integrations",
      "Community support",
      "Basic analytics",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "$49",
    period: "/month",
    features: [
      "Up to 10,000 tasks per month",
      "Unlimited workflows",
      "50+ integrations",
      "Priority email support",
      "Advanced analytics",
      "Team collaboration",
      "Custom webhooks",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited tasks",
      "Unlimited workflows",
      "200+ integrations",
      "24/7 dedicated support",
      "Custom analytics",
      "SSO and SAML",
      "SLA guarantee",
      "On premise option",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

const testimonials = [
  {
    quote: "NexaFlow transformed how we handle customer onboarding. What used to take hours now happens automatically in minutes.",
    name: "Operations Director",
    company: "Growth Stage Startup",
    initials: "OD",
  },
  {
    quote: "The no-code builder is incredibly intuitive. Our marketing team created complex workflows without any engineering support.",
    name: "Marketing Lead",
    company: "Digital Agency",
    initials: "ML",
  },
  {
    quote: "We reduced manual data entry by 90% and eliminated errors completely. The ROI was clear within the first month.",
    name: "VP of Sales",
    company: "Enterprise SaaS",
    initials: "VS",
  },
];

const faqs = [
  {
    question: "How quickly can I get started with NexaFlow?",
    answer: "You can sign up and create your first workflow in under 5 minutes. Our intuitive drag and drop builder requires no technical knowledge, and we offer hundreds of templates to help you get started immediately.",
  },
  {
    question: "What integrations does NexaFlow support?",
    answer: "NexaFlow connects with over 200 popular business tools including Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, Jira, Zendesk, and many more. We also support custom webhooks and REST APIs for connecting to any system.",
  },
  {
    question: "Is my data secure with NexaFlow?",
    answer: "Absolutely. We use enterprise grade encryption for all data in transit and at rest. Our platform is SOC 2 Type II certified, GDPR compliant, and we offer role based access controls to ensure only authorized team members can access sensitive workflows.",
  },
  {
    question: "Can I try NexaFlow before committing?",
    answer: "Yes! Our Starter plan is completely free with up to 500 tasks per month. For Professional features, we offer a 14 day free trial with full access to all capabilities. No credit card required to get started.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include access to our comprehensive documentation and community forum. Professional plans receive priority email support with 24 hour response times. Enterprise customers get dedicated account managers and 24/7 phone support.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A0F", fontFamily: "Inter, sans-serif" }}>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10" style={{ backgroundColor: "rgba(10, 10, 15, 0.8)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6366F1" }}>
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}>
                NexaFlow
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-white"
                  style={{ color: "#71717A" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-white/10"
                style={{ color: "#F4F4F5" }}
              >
                Sign In
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all"
                style={{ backgroundColor: "#6366F1", color: "#F4F4F5" }}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" style={{ color: "#F4F4F5" }} />
              ) : (
                <Menu className="w-6 h-6" style={{ color: "#F4F4F5" }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 border-b border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ backgroundColor: "rgba(10, 10, 15, 0.95)", backdropFilter: "blur(12px)" }}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{
                  color: "#F4F4F5",
                  transitionDelay: mobileMenuOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-base font-medium rounded-lg text-center mt-4 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{
                backgroundColor: "#6366F1",
                color: "#F4F4F5",
                transitionDelay: mobileMenuOpen ? `${navLinks.length * 60}ms` : "0ms",
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ backgroundColor: "rgba(99, 102, 241, 0.15)", color: "#6366F1" }}
          >
            <Zap className="w-4 h-4" />
            <span>Introducing NexaFlow 2.0</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
          >
            Automate Your Workflows
            <br />
            <span style={{ color: "#6366F1" }}>With AI Intelligence</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#71717A" }}
          >
            Build powerful automations in minutes with our no-code visual builder. Connect 200+ apps, leverage AI, and scale your operations effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: "#6366F1", color: "#F4F4F5" }}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg border transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              style={{ borderColor: "rgba(255, 255, 255, 0.2)", color: "#F4F4F5" }}
            >
              See How It Works
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-5xl mx-auto">
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <Image
                src="/images/hero.png"
                alt="NexaFlow workflow automation dashboard"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 border-y" style={{ borderColor: "rgba(255, 255, 255, 0.1)", backgroundColor: "rgba(22, 22, 29, 0.5)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl sm:text-4xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#6366F1" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "#71717A" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              Everything You Need to Automate
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Powerful features designed to help you build, deploy, and scale workflows across your entire organization.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Large Feature Card */}
            <div
              className="lg:col-span-2 lg:row-span-2 p-8 rounded-2xl border relative overflow-hidden group"
              style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%)" }} />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(99, 102, 241, 0.15)" }}
                >
                  <Zap className="w-7 h-7" style={{ color: "#6366F1" }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}>
                  AI Powered Automation
                </h3>
                <p className="text-base mb-6" style={{ color: "#71717A" }}>
                  Our intelligent engine learns your patterns and suggests optimizations to streamline your workflows automatically.
                </p>
                <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                  <Image
                    src="/images/feature.png"
                    alt="AI workflow automation interface"
                    width={600}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Regular Feature Cards */}
            {features.slice(1).map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border relative overflow-hidden group"
                  style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, transparent 50%)" }} />
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(99, 102, 241, 0.15)" }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: "#6366F1" }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#71717A" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-24" style={{ backgroundColor: "rgba(22, 22, 29, 0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              Solutions for Every Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Purpose built automations to transform how your teams work across sales, marketing, customer success, and IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl border relative overflow-hidden group"
                style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-base" style={{ color: "#71717A" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Featured */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              The NexaFlow Platform
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Three powerful products that work together to give you complete control over your automation infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="relative p-8 rounded-2xl border"
                style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(99, 102, 241, 0.15)" }}
                >
                  <span className="text-lg font-bold" style={{ color: "#6366F1" }}>
                    {index + 1}
                  </span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
                >
                  {product.title}
                </h3>
                <p className="text-base" style={{ color: "#71717A" }}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-24" style={{ backgroundColor: "rgba(22, 22, 29, 0.3)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border ${plan.highlighted ? "scale-105" : ""}`}
                style={{
                  backgroundColor: plan.highlighted ? "#6366F1" : "#16161D",
                  borderColor: plan.highlighted ? "#6366F1" : "rgba(255, 255, 255, 0.1)",
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#F4F4F5", color: "#0A0A0F" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: plan.highlighted ? "#F4F4F5" : "#F4F4F5" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: plan.highlighted ? "rgba(255, 255, 255, 0.7)" : "#71717A" }}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className="text-4xl font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif", color: plan.highlighted ? "#F4F4F5" : "#F4F4F5" }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: plan.highlighted ? "rgba(255, 255, 255, 0.7)" : "#71717A" }}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? "#F4F4F5" : "#6366F1" }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: plan.highlighted ? "rgba(255, 255, 255, 0.9)" : "#F4F4F5" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === "Enterprise" ? "mailto:sales@nexaflow.io" : "#pricing"}
                  className="block w-full py-3 text-center font-semibold rounded-lg transition-all"
                  style={{
                    backgroundColor: plan.highlighted ? "#F4F4F5" : "rgba(99, 102, 241, 0.15)",
                    color: plan.highlighted ? "#0A0A0F" : "#6366F1",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              Loved by Teams Worldwide
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              See what industry leaders are saying about NexaFlow.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.company} className="w-full flex-shrink-0 px-4">
                    <div
                      className="p-8 md:p-12 rounded-2xl border text-center"
                      style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <Quote className="w-12 h-12 mx-auto mb-6 opacity-30" style={{ color: "#6366F1" }} />
                      <p
                        className="text-xl md:text-2xl mb-8 leading-relaxed"
                        style={{ color: "#F4F4F5" }}
                      >
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                          style={{ backgroundColor: "rgba(99, 102, 241, 0.2)", color: "#6366F1" }}
                        >
                          {testimonial.initials}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold" style={{ color: "#F4F4F5" }}>
                            {testimonial.name}
                          </div>
                          <div className="text-sm" style={{ color: "#71717A" }}>
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: carouselIndex === index ? "#6366F1" : "rgba(255, 255, 255, 0.2)",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="py-24" style={{ backgroundColor: "rgba(22, 22, 29, 0.3)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: "#71717A" }}>
              Got questions? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border overflow-hidden"
                style={{ backgroundColor: "#16161D", borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold pr-4" style={{ color: "#F4F4F5" }}>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "#6366F1" }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "#71717A" }} />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5" style={{ color: "#71717A" }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Full */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
            style={{ backgroundColor: "#6366F1" }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.2) 0%, transparent 40%)",
              }}
            />
            <div className="relative">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
              >
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Join thousands of teams who have automated their operations with NexaFlow. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F4F4F5", color: "#0A0A0F" }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sales@nexaflow.io"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg border transition-all hover:bg-white/10 flex items-center justify-center"
                  style={{ borderColor: "rgba(255, 255, 255, 0.3)", color: "#F4F4F5" }}
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#6366F1" }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
                >
                  NexaFlow
                </span>
              </a>
              <p className="text-sm mb-4" style={{ color: "#71717A" }}>
                Automate your business workflows with AI powered integrations and no code builder.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F4F4F5" }}>
                Product
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F4F4F5" }}>
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F4F4F5" }}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@nexaflow.io"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#71717A" }}
                  >
                    hello@nexaflow.io
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@nexaflow.io"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#71717A" }}
                  >
                    sales@nexaflow.io
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            <p className="text-sm" style={{ color: "#71717A" }}>
              &copy; {new Date().getFullYear()} NexaFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
