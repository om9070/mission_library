'use client'
import React, { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown, Check } from 'lucide-react';
import { BsTelegram } from 'react-icons/bs';


export default function Faqs() {

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Mission Library?",
      answer: "Mission Library is a comprehensive digital platform that provides access to thousands of books, resources, and educational materials. Our mission is to make knowledge accessible to everyone, everywhere."
    },
    {
      question: "How do I access the library resources?",
      answer: "Once you sign up for any of our plans, you'll receive instant access to our entire collection. You can browse, search, and read materials directly on our platform or download them for offline reading."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes! All our plans are flexible. You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your billing period."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 30% discount for students with a valid student ID. Please contact our support team with your student credentials to receive your discount code."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 14-day free trial for the Professional plan so you can explore all our features before committing to a subscription."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "INR-350",
      period: "/month",
      description: "Perfect for casual readers",
      features: [
        "Access to 1,000+ books",
        "Time start from 06:10",
        "Standard support",
        "Mobile app access",
        "Basic search features"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "INR-400",
      period: "/month",
      description: "Ideal for avid readers",
      features: [
        "Access to 10,000+ books",
        "Time start from 08:12",
        "Priority support",
        "Mobile & desktop apps",
        "Advanced search & filters",
        "Personalized recommendations",
        "Offline reading"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "INR-550",
      period: "/month",
      description: "Best for organizations",
      features: [
        "Access to entire library",
        "Time start from 10:05",
        "24/7 dedicated support",
        "All platform access",
        "Advanced analytics",
        "Team management tools",
        "Custom integrations",
        "API access"
      ],
      popular: false
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, url: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, url: "https://www.instagram.com/missionlibraryofficial?igsh=MWM4dGxpcnpoN2NhYQ==", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, url: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Youtube, url: "#", label: "YouTube", color: "hover:bg-red-600" },
    { icon: BsTelegram, url: "https://t.me/missionlibraryctr", label: "BsTelegram", color: "hover:bg-red-600" }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Select the perfect plan for your reading journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-4 ring-blue-500 transform scale-105' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-red-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about Mission Library</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600 mb-12">
            Follow us on social media for updates, reading tips, and community events
          </p>

          <div className="flex justify-center items-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                target='_blank'
                className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg hover:scale-110`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
