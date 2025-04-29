import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  animatedTexts?: string[];
  ctaButtonText?: string;
  secondaryButtonText?: string;
  backgroundImageUrl?: string;
}

const HeroSection = ({
  title = "Illuminate Her Future",
  subtitle = "Empowering young women in St. Kitts & Nevis through holistic wellness experiences that nurture mind, body, and spirit.",
  animatedTexts = [
    "Build confidence",
    "Discover your potential",
    "Create lasting friendships",
    "Develop leadership skills",
  ],
  ctaButtonText = "Learn More",
  secondaryButtonText = "Support Our Mission",
  backgroundImageUrl = "/hero-background.jpg",
}: HeroSectionProps) => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % animatedTexts.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [animatedTexts.length]);

  return (
    <div className="relative h-[700px] w-full overflow-hidden bg-offWhite">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-solarYellow via-honeyAmber to-mangoOrange opacity-60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-charcoal md:px-8 lg:px-16">
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
          {subtitle}
        </motion.p>

        {/* Animated Text Container */}
        <div className="relative mb-8 h-12 overflow-hidden text-xl font-openSans md:text-2xl">
          {animatedTexts.map((text, index) => (
            <motion.div
              key={text}
              className="absolute left-0 right-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: index === currentTextIndex ? 1 : 0,
                y: index === currentTextIndex ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            className="bg-radiantRed text-white hover:bg-radiantRed/90 font-openSans"
            as={motion.button}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {ctaButtonText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-charcoal text-charcoal hover:bg-charcoal/10 font-openSans"
            as={motion.button}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
