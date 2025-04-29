import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProgramProps {
  programs?: Program[];
}

interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProgramOverview: React.FC<ProgramProps> = ({
  programs = defaultPrograms,
}) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">
            Our Programs
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto font-openSans">
            Discover our transformative programs designed to empower and inspire
            young women to reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <motion.div
              key={program.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full overflow-hidden border-2 border-honeyAmber hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-radiantRed font-texGyreBonum">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-charcoal font-openSans">
                    {program.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-radiantRed hover:bg-mangoOrange text-white font-openSans"
                    asChild
                  >
                    <a href={program.link}>Register Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultPrograms: Program[] = [
  {
    id: "1",
    title: "Summer Leadership Camp",
    description:
      "A week-long immersive experience focused on building leadership skills, confidence, and community among young women ages 13-18.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    link: "/register/summer-camp",
  },
  {
    id: "2",
    title: "Mentorship Program",
    description:
      "Connect with successful women in various industries who provide guidance, support, and inspiration through our structured mentorship program.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
    link: "/register/mentorship",
  },
  {
    id: "3",
    title: "STEM Workshop Series",
    description:
      "Hands-on workshops designed to spark interest and build skills in science, technology, engineering, and mathematics for girls of all ages.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab10380ed66?w=800&q=80",
    link: "/register/stem-workshops",
  },
  {
    id: "4",
    title: "Creative Arts Program",
    description:
      "Express yourself through various art forms while building confidence and discovering your unique voice in our supportive creative community.",
    image:
      "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=800&q=80",
    link: "/register/arts-program",
  },
  {
    id: "5",
    title: "Wellness Retreat",
    description:
      "A weekend focused on mindfulness, self-care, and holistic wellness practices to help young women develop healthy habits for life.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    link: "/register/wellness-retreat",
  },
  {
    id: "6",
    title: "College Prep Academy",
    description:
      "Comprehensive guidance through the college application process, including essay writing, interview skills, and scholarship opportunities.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    link: "/register/college-prep",
  },
];

export default ProgramOverview;
