import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoPlayInterval?: number;
}

const TestimonialCarousel = ({
  testimonials = [
    {
      id: 1,
      quote:
        "The Illuminated Girls Glow program transformed my daughter's confidence. She's now more outspoken and self-assured in everything she does.",
      author: "Sarah Johnson",
      role: "Parent",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      quote:
        "I've never felt so empowered and supported. This program taught me skills I'll use for the rest of my life.",
      author: "Mia Thompson",
      role: "Program Graduate",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    },
    {
      id: 3,
      quote:
        "The mentorship I received was invaluable. I now have clear goals and the confidence to achieve them.",
      author: "Zoe Williams",
      role: "Current Participant",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zoe",
    },
  ],
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, testimonials.length, autoPlayInterval]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-gradient-to-r from-offWhite to-solarYellow/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-radiantRed font-texGyreBonum">
          What Our Community Says
        </h2>

        <div className="relative">
          <Card className="border-0 shadow-lg bg-white rounded-xl overflow-hidden border-l-4 border-radiantRed">
            <CardContent className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    <Avatar className="h-20 w-20 border-4 border-honeyAmber">
                      <AvatarImage
                        src={testimonials[currentIndex].avatarUrl}
                        alt={testimonials[currentIndex].author}
                      />
                      <AvatarFallback className="bg-offWhite text-radiantRed">
                        {testimonials[currentIndex].author
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="relative">
                    <svg
                      className="absolute -top-6 -left-6 h-12 w-12 text-mangoOrange opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <p className="text-lg md:text-xl italic text-charcoal mb-6 font-openSans">
                      {testimonials[currentIndex].quote}
                    </p>

                    <h3 className="font-bold text-radiantRed text-lg font-texGyreBonum">
                      {testimonials[currentIndex].author}
                    </h3>
                    <p className="text-mangoOrange font-openSans">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-offWhite border-honeyAmber"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5 text-radiantRed" />
              <span className="sr-only">Previous testimonial</span>
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-radiantRed" : "w-2 bg-honeyAmber"}`}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white hover:bg-offWhite border-honeyAmber"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5 text-radiantRed" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
