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
  { label: "Características", href: "#features" },
  { label: "Soluciones", href: "#services" },
  { label: "Precios", href: "#pricing" },
  { label: "Preguntas Frecuentes", href: "#faq" },
];

const stats = [
  { value: "10,000+", label: "Flujos de Trabajo Activos" },
  { value: "200+", label: "Integraciones" },
  { value: "99.9%", label: "SLA de Disponibilidad" },
  { value: "50M+", label: "Tareas Automatizadas" },
];

const features = [
  {
    icon: Zap,
    title: "Automatización con IA",
    description: "Nuestro motor inteligente aprende tus patrones y sugiere optimizaciones para agilizar tus flujos de trabajo automáticamente.",
  },
  {
    icon: Layers,
    title: "Constructor Sin Código",
    description: "La interfaz de arrastrar y soltar facilita que cualquiera cree flujos de trabajo complejos sin escribir una sola línea de código.",
  },
  {
    icon: BarChart3,
    title: "Análisis en Tiempo Real",
    description: "Monitorea métricas de rendimiento, rastrea cuellos de botella y obtén información procesable con nuestro panel en vivo.",
  },
  {
    icon: Plug,
    title: "Más de 200 Integraciones",
    description: "Conéctate con tus herramientas favoritas incluyendo Salesforce, Slack, HubSpot, Jira y cientos más listas para usar.",
  },
  {
    icon: Users,
    title: "Colaboración en Equipo",
    description: "Trabaja en conjunto sin problemas con espacios de trabajo compartidos, comentarios, historial de versiones y edición en tiempo real.",
  },
  {
    icon: Webhook,
    title: "Webhooks Personalizados",
    description: "Construye integraciones potentes con webhooks API personalizados que activan flujos de trabajo desde cualquier sistema externo.",
  },
  {
    icon: Shield,
    title: "Acceso Basado en Roles",
    description: "Mantén tus flujos de trabajo seguros con permisos granulares y control de acceso basado en roles para todo tu equipo.",
  },
  {
    icon: FileStack,
    title: "Biblioteca de Plantillas",
    description: "Comienza rápidamente con cientos de plantillas de flujos de trabajo prediseñadas para procesos empresariales comunes.",
  },
];

const services = [
  {
    title: "Automatización de Ventas",
    description: "Automatiza la calificación de leads, seguimientos y gestión del pipeline para cerrar negocios más rápido.",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Operaciones de Marketing",
    description: "Orquesta campañas, sincroniza datos entre plataformas y personaliza los recorridos del cliente a escala.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Éxito del Cliente",
    description: "Automatiza secuencias de incorporación, puntuación de salud y alcance proactivo para reducir la deserción.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Operaciones de TI",
    description: "Optimiza el aprovisionamiento, gestión de incidentes y flujos de trabajo de cumplimiento en toda tu infraestructura.",
    color: "from-orange-500/20 to-amber-500/20",
  },
];

const products = [
  {
    title: "Estudio de Flujos de Trabajo",
    description: "Lienzo visual para construir y probar flujos de automatización con vista previa en tiempo real y herramientas de depuración.",
  },
  {
    title: "Centro de Integraciones",
    description: "Gestión centralizada para todas tus aplicaciones conectadas con autenticación, mapeo y monitoreo.",
  },
  {
    title: "Motor de Análisis",
    description: "Información profunda sobre el rendimiento de los flujos de trabajo con informes personalizados, alertas y sugerencias de optimización.",
  },
];

const pricingPlans = [
  {
    name: "Inicial",
    description: "Para equipos pequeños que están comenzando",
    price: "Gratis",
    period: "",
    features: [
      "Hasta 500 tareas por mes",
      "5 flujos de trabajo activos",
      "10 integraciones",
      "Soporte comunitario",
      "Análisis básico",
    ],
    highlighted: false,
    cta: "Comenzar",
  },
  {
    name: "Profesional",
    description: "Para negocios en crecimiento",
    price: "$49",
    period: "/mes",
    features: [
      "Hasta 10,000 tareas por mes",
      "Flujos de trabajo ilimitados",
      "Más de 50 integraciones",
      "Soporte prioritario por email",
      "Análisis avanzado",
      "Colaboración en equipo",
      "Webhooks personalizados",
    ],
    highlighted: true,
    cta: "Iniciar Prueba Gratis",
  },
  {
    name: "Empresarial",
    description: "Para grandes organizaciones",
    price: "Personalizado",
    period: "",
    features: [
      "Tareas ilimitadas",
      "Flujos de trabajo ilimitados",
      "Más de 200 integraciones",
      "Soporte dedicado 24/7",
      "Análisis personalizado",
      "SSO y SAML",
      "Garantía de SLA",
      "Opción local",
    ],
    highlighted: false,
    cta: "Contactar Ventas",
  },
];

const testimonials = [
  {
    quote: "FlowStack transformó la forma en que manejamos la incorporación de clientes. Lo que antes tomaba horas ahora sucede automáticamente en minutos.",
    name: "Director de Operaciones",
    company: "Startup en Crecimiento",
    initials: "DO",
  },
  {
    quote: "El constructor sin código es increíblemente intuitivo. Nuestro equipo de marketing creó flujos de trabajo complejos sin ningún soporte de ingeniería.",
    name: "Líder de Marketing",
    company: "Agencia Digital",
    initials: "LM",
  },
  {
    quote: "Redujimos la entrada manual de datos en un 90% y eliminamos los errores por completo. El ROI fue claro dentro del primer mes.",
    name: "VP de Ventas",
    company: "SaaS Empresarial",
    initials: "VV",
  },
];

const faqs = [
  {
    question: "¿Qué tan rápido puedo comenzar con FlowStack?",
    answer: "Puedes registrarte y crear tu primer flujo de trabajo en menos de 5 minutos. Nuestro constructor intuitivo de arrastrar y soltar no requiere conocimientos técnicos, y ofrecemos cientos de plantillas para ayudarte a comenzar de inmediato.",
  },
  {
    question: "¿Qué integraciones soporta FlowStack?",
    answer: "FlowStack se conecta con más de 200 herramientas empresariales populares incluyendo Salesforce, HubSpot, Slack, Microsoft 365, Google Workspace, Jira, Zendesk y muchas más. También soportamos webhooks personalizados y APIs REST para conectar con cualquier sistema.",
  },
  {
    question: "¿Mis datos están seguros con FlowStack?",
    answer: "Absolutamente. Utilizamos cifrado de nivel empresarial para todos los datos en tránsito y en reposo. Nuestra plataforma cuenta con certificación SOC 2 Tipo II, cumple con GDPR, y ofrecemos controles de acceso basados en roles para asegurar que solo los miembros autorizados del equipo puedan acceder a flujos de trabajo sensibles.",
  },
  {
    question: "¿Puedo probar FlowStack antes de comprometerme?",
    answer: "¡Sí! Nuestro plan Inicial es completamente gratis con hasta 500 tareas por mes. Para las características Profesionales, ofrecemos una prueba gratuita de 14 días con acceso completo a todas las capacidades. No se requiere tarjeta de crédito para comenzar.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen?",
    answer: "Todos los planes incluyen acceso a nuestra documentación completa y foro comunitario. Los planes Profesionales reciben soporte prioritario por email con tiempos de respuesta de 24 horas. Los clientes Empresariales obtienen gerentes de cuenta dedicados y soporte telefónico 24/7.",
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
                FlowStack
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
                Iniciar Sesión
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all"
                style={{ backgroundColor: "#6366F1", color: "#F4F4F5" }}
              >
                Comenzar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Alternar menú"
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
              Comenzar
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
            <span>Presentamos FlowStack 2.0</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Space Grotesk, sans-serif", color: "#F4F4F5" }}
          >
            Automatiza Tus Flujos de Trabajo
            <br />
            <span style={{ color: "#6366F1" }}>Con Inteligencia Artificial</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10"
            style={{ color: "#71717A" }}
          >
            Crea automatizaciones potentes en minutos con nuestro constructor visual sin código. Conecta más de 200 aplicaciones, aprovecha la IA y escala tus operaciones sin esfuerzo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ backgroundColor: "#6366F1", color: "#F4F4F5" }}
            >
              Iniciar Prueba Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg border transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              style={{ borderColor: "rgba(255, 255, 255, 0.2)", color: "#F4F4F5" }}
            >
              Ver Cómo Funciona
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
                alt="Panel de automatización de flujos de trabajo FlowStack"
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
              Todo lo que Necesitas para Automatizar
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Características potentes diseñadas para ayudarte a construir, implementar y escalar flujos de trabajo en toda tu organización.
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
                    alt="Interfaz de automatización de flujos de trabajo con IA"
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
              Soluciones para Cada Equipo
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Automatizaciones diseñadas específicamente para transformar cómo trabajan tus equipos en ventas, marketing, éxito del cliente y TI.
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
              La Plataforma FlowStack
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Tres productos potentes que trabajan juntos para darte control completo sobre tu infraestructura de automatización.
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
              Precios Simples y Transparentes
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Comienza gratis y escala a medida que creces. Sin tarifas ocultas, sin sorpresas.
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
                    Más Popular
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
                  href={plan.name === "Enterprise" ? "mailto:sales@flowstack.io" : "#pricing"}
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
              Amado por Equipos en Todo el Mundo
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#71717A" }}>
              Mira lo que dicen los líderes de la industria sobre FlowStack.
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
                  aria-label={`Ir al testimonio ${index + 1}`}
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
              Preguntas Frecuentes
            </h2>
            <p className="text-lg" style={{ color: "#71717A" }}>
              ¿Tienes preguntas? Tenemos respuestas.
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
                ¿Listo para Transformar Tus Flujos de Trabajo?
              </h2>
              <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Únete a miles de equipos que han automatizado sus operaciones con FlowStack. Comienza tu prueba gratuita hoy.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#pricing"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F4F4F5", color: "#0A0A0F" }}
                >
                  Iniciar Prueba Gratis
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sales@flowstack.io"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg border transition-all hover:bg-white/10 flex items-center justify-center"
                  style={{ borderColor: "rgba(255, 255, 255, 0.3)", color: "#F4F4F5" }}
                >
                  Hablar con Ventas
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
                  FlowStack
                </span>
              </a>
              <p className="text-sm mb-4" style={{ color: "#71717A" }}>
                Automatiza los flujos de trabajo de tu negocio con integraciones impulsadas por IA y constructor sin código.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F4F4F5" }}>
                Producto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Características
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                    Soluciones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#F4F4F5" }}>
                Recursos
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
                Contacto
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:hello@flowstack.io"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#71717A" }}
                  >
                    hello@flowstack.io
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sales@flowstack.io"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "#71717A" }}
                  >
                    sales@flowstack.io
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
              &copy; {new Date().getFullYear()} FlowStack. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                Política de Privacidad
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: "#71717A" }}>
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
