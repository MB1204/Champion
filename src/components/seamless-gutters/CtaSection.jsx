import React from 'react';
import QuoteForm from "../QuoteForm";

export default function CtaSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-red-800 via-neutral-900 to-black">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-montserrat font-black text-4xl md:text-5xl lg:text-7xl text-white uppercase mb-12 leading-tight">
          PROTECT YOUR HOME<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">TODAY</span>
        </h2>
        <p className="font-open-sans text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto leading-relaxed">
          Don't wait for the next storm. Get your seamless gutter system installed by the most trusted professionals.
        </p>
        <div className="bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 rounded-3xl shadow-2xl border border-neutral-700">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}