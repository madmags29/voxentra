import React from "react";
import { Target, Sliders, UserCheck, ShieldCheck, PhoneCall, TrendingUp, CheckCircle, ArrowRight, ArrowDown } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Tell Us Your Business Goals",
    desc: "We define your ideal customer profile, target geographic states, campaign budget, and minimum volume requirements.",
    icon: Target,
  },
  {
    step: "02",
    title: "Campaign Planning & Scripting",
    desc: "Our telemarketing architects co-design screening scripts, qualification criteria, and warm whisper notifications for your agents.",
    icon: Sliders,
  },
  {
    step: "03",
    title: "Target Audience Qualification",
    desc: "Our nationwide telemarketing network and targeted media channels engage active consumer prospects in real time.",
    icon: UserCheck,
  },
  {
    step: "04",
    title: "1-to-1 Lead & TCPA Verification",
    desc: "Every prospect is scrubbed against DNC lists and verified via 1-to-1 explicit consent visual certificates.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Live Warm Transfer or Lead Delivery",
    desc: "Prospects are transferred directly to your sales floor on the phone or pushed into your CRM in under 200ms.",
    icon: PhoneCall,
  },
  {
    step: "06",
    title: "Rapid Business & Revenue Growth",
    desc: "Your sales team closes high-intent buyers, enjoying maximum conversion velocity and transparent weekly analytics.",
    icon: TrendingUp,
  },
];

export const HowItWorksTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
            <CheckCircle className="w-4 h-4 text-brand-secondary" />
            Turnkey Campaign Execution
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tight font-heading">
            How Voxentra Delivers Premium Live Leads
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            From initial strategy alignment to real-time warm phone transfer, our 6-step quality control pipeline ensures max conversion velocity.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === STEPS.length - 1;
            const isLgRowEnd = (index + 1) % 3 === 0; // Step 3
            const isMdRowEnd = (index + 1) % 2 === 0; // Step 2, Step 4

            return (
              <div
                key={item.step}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-card transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center font-bold shadow-md group-hover:bg-brand-accent transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-300 font-mono group-hover:text-brand-primary transition">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2.5 group-hover:text-brand-primary transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>

                {!isLast && (
                  <>
                    {/* Desktop (lg: 3 columns) Arrow */}
                    {isLgRowEnd ? (
                      <div className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}

                    {/* Tablet (md: 2 columns, hidden on lg) Arrow */}
                    {isMdRowEnd ? (
                      <div className="hidden md:flex lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="hidden md:flex lg:hidden absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}

                    {/* Mobile (1 column, hidden on md+) Arrow */}
                    <div className="flex md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-primary text-brand-primary items-center justify-center shadow-md group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
