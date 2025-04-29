import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AboutHeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaButtonText?: string;
  backgroundImageUrl?: string;
}

const AboutHeroSection = ({
  title = "Our Story: Nurturing Inner Light",
  subtitle = "Learn about our mission, vision, and the passionate women behind Girls Illuminated.",
  ctaButtonText = "Learn More",
  backgroundImageUrl = "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1200&q=80",
}: AboutHeroSectionProps) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-offWhite">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-radiantRed to-mangoOrange opacity-80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-8 lg:px-16">
        <motion.h1
          className="mb-4 text-4xl font-texGyreBonum tracking-wider md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col">
            <span>Girls</span>
            <span>Illuminated</span>
          </div>
        </motion.h1>

        <motion.p
          className="mb-6 text-xl font-canvaSans md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.p>

        <motion.p
          className="mb-8 max-w-2xl text-lg font-openSans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <div>
          <Button
            size="lg"
            className="bg-solarYellow text-charcoal hover:bg-solarYellow/90 font-openSans"
            as={motion.button}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {ctaButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
