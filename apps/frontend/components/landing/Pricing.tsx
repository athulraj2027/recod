import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingPlans } from "@/constants/landing";

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[0] }) => (
  <Card
    className={`relative bg-[#0A0A0A] pt-20 border-white/5 transition-all duration-300 text-center hover:border-[#CCFF00]/50 ${
      plan.isPopular
        ? "border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.1)] scale-105 z-10"
        : ""
    }`}
  >
    {plan.isPopular && (
      <span className="absolute top-5 left-1/2 -translate-x-1/2 bg-[#CCFF00] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </span>
    )}
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-white">
        {plan.name}
      </CardTitle>
      <CardDescription className="text-gray-400">
        {plan.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6 text-center">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3 text-sm text-gray-300"
          >
            <Check size={16} className="text-[#CCFF00]" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        className={`w-full rounded-full py-6 font-semibold transition-transform active:scale-95 ${
          plan.isPopular
            ? "bg-[#CCFF00] text-black hover:bg-[#b8e600]"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      >
        {plan.buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Simple, <span className="text-[#CCFF00]">transparent</span> pricing.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your production scale. Upgrade or
            downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Bottom Detail */}
        <p className="text-center mt-12 text-sm text-gray-600">
          All plans include secure cloud storage and 24/7 technical support.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
