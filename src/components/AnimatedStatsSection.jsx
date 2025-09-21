
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ target, duration = 2000, startAnimation = false }) => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!startAnimation) return;

    isMounted.current = true;
    let start = 0;
    const end = parseInt(target.replace(/\D/g, ''), 10);
    if (isNaN(end)) return;

    let startTime = null;

    const animateCount = (currentTime) => {
      if (!isMounted.current) return;
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);

    return () => {
      isMounted.current = false;
    };
  }, [target, duration, startAnimation]);

  const formattedCount = count.toLocaleString();
  return <span>{formattedCount}{target.includes('+') ? '+' : ''}</span>;
};

const AnimatedText = ({ text, startAnimation = false, delay = 0.05 }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, delay * 1000);

    return () => clearInterval(timer);
  }, [startAnimation, text.length, delay]);

  return (
    <span>
      {text.split('').map((letter, index) =>
      <span
        key={index}
        className={`inline-block transition-opacity duration-300 ${
        index < visibleLetters ? 'opacity-100' : 'opacity-0'}`
        }>

          {letter === ' ' ? '\u00A0' : letter}
        </span>
      )}
    </span>);

};

export default function AnimatedStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="font-montserrat font-black text-3xl md:text-4xl lg:text-5xl uppercase mb-16 text-white">

          OUR PROVEN TRACK RECORD
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Years of Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center">

            <div className="font-montserrat font-black text-4xl md:text-5xl gradient-text mb-4">
              <AnimatedNumber target="15+" startAnimation={isVisible} duration={2000} />
            </div>
            <p className="font-open-sans text-lg md:text-xl text-gray-300 uppercase font-semibold">
              Years of Experience
            </p>
          </motion.div>

          {/* Happy Clients */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center">

            <div className="font-montserrat font-black text-4xl md:text-5xl gradient-text mb-4">
              <AnimatedNumber target="9500+" startAnimation={isVisible} duration={2500} />
            </div>
            <p className="font-open-sans text-lg md:text-xl text-gray-300 uppercase font-semibold">Completed Projects

            </p>
          </motion.div>

          {/* Metal Installed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center">

            <div className="font-montserrat font-black text-3xl md:text-4xl gradient-text mb-4">
              <AnimatedNumber target="1000000+" startAnimation={isVisible} duration={3000} />
            </div>
            <p className="font-open-sans text-lg md:text-xl text-gray-300 uppercase font-semibold">LF METAL INSTALLED

            </p>
          </motion.div>

          {/* Satisfaction Guaranteed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center">
            <div className="font-montserrat font-black text-4xl md:text-5xl gradient-text mb-4">
              <AnimatedNumber target="100" startAnimation={isVisible} duration={3500} />%
            </div>
            <p className="font-open-sans text-lg md:text-xl text-gray-300 uppercase font-semibold">
              Guaranteed Satisfaction
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
