// src/components/CtaSection.jsx
import React from "react";

const OLIVE = "#3B4421";

export default function CtaSection() {
  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="../Buttom1.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        /> 
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 md:pb-24 w-full">
        <div className="flex flex-col items-center">
          
          {/* Input and Button Row */}
          <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-2xl gap-0 mb-12">
            <input 
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 py-4 outline-none focus:border-white transition-all
                         md:w-[400px] text-lg uppercase tracking-wider
                         [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_0)]"
            /> 
            
            <a
              href="#register"
              className="bg-white hover:bg-gray-100 transition-colors text-black font-bold uppercase tracking-[3px] text-xl px-12 py-5 inline-block text-center
                         [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_80%,calc(100%-20px)_100%,0_100%)] shadow-2xl"
            >
              SUBMIT
            </a>
          </div>

          {/* Main Headline */}
          <h2 className="text-white text-center font-black uppercase leading-[0.92] text-[42px] md:text-[58px] lg:text-[68px] xl:text-[78px] title">
            BE PART OF HACK4BRAHMA JOURNEY
          </h2>
        </div>
      </div>
    </section>
  );
}