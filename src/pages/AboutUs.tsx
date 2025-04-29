import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AboutHeroSection from "../components/AboutHeroSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-offWhite">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <AboutHeroSection />

      <main>
        {/* Our Mission & Vision Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-offWhite to-solarYellow/20">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-10 font-texGyreBonum">
              Our Mission & Vision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-radiantRed">
                <h3 className="text-2xl font-semibold text-radiantRed mb-4 font-texGyreBonum">
                  Our Mission
                </h3>
                <p className="text-lg text-charcoal font-openSans">
                  To enable young women in St. Kitts and Nevis (ages 11-16) to
                  discover their inner voice, cultivate meaningful friendships,
                  and build the confidence to pursue their aspirations through
                  holistic health and wellness experiences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-radiantRed">
                <h3 className="text-2xl font-semibold text-radiantRed mb-4 font-texGyreBonum">
                  Our Vision
                </h3>
                <p className="text-lg text-charcoal font-openSans">
                  To be a leading force for youth empowerment in the Federation,
                  creating distinctive, transformative programs that nurture the
                  mind, body, and spirit, fostering unity and positive change.
                  We dream of expanding our empowering spaces to eventually
                  include women and boys.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* A Mother-Daughter Vision Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-offWhite">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-10 text-center font-texGyreBonum">
              A Mother-Daughter Vision
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80"
                    alt="Winnielle Pereira and Destinee Guilbert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg text-charcoal mb-6 font-openSans">
                  Girls Illuminated was co-founded by Winnielle Pereira and her
                  daughter, Destinee Guilbert. Driven by a shared passion for
                  wellness, community, and empowering young women, Winnielle
                  brings her extensive background in youth development,
                  entrepreneurship (Founder of Pure Niceness), and wellness
                  advocacy.
                </p>
                <p className="text-lg text-charcoal font-openSans">
                  Together, they lead Girls Illuminated with heart, creating a
                  nurturing environment rooted in their belief that "Everything
                  begins with self."
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Holistic Wellness Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-offWhite to-solarYellow/20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-6 font-texGyreBonum">
              Holistic Wellness: Mind, Body, Spirit
            </h2>
            <p className="text-lg text-charcoal font-openSans">
              We believe true empowerment comes from within. Our approach
              addresses the whole person – nurturing mental resilience through
              mindfulness and self-discovery, promoting physical health through
              movement and nutrition, and fostering spiritual connection and
              self-awareness. We strive to redefine beauty by emphasizing inner
              strength and cultivate self-love as the foundation for a
              fulfilling life.
            </p>
          </motion.div>
        </section>

        {/* Our Values Section - First part */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-offWhite">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-10 text-center font-texGyreBonum">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Empowerment
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Equipping girls with tools and confidence to thrive in all
                  aspects of life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Wellness
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Promoting holistic health that nurtures mind, body, and
                  spirit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Sisterhood
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Fostering connection, support, and collaboration among young
                  women.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Authenticity
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Encouraging girls to embrace their true selves and express
                  their unique voices.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Community
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Building a supportive network that uplifts and celebrates each
                  individual.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Growth
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Nurturing continuous personal development and lifelong
                  learning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 bg-solarYellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-radiantRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 text-center font-texGyreBonum">
                  Respect
                </h3>
                <p className="text-charcoal text-center font-openSans">
                  Honoring each person's dignity, boundaries, and unique
                  journey.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer remains the same */}
        <footer className="bg-charcoal text-white py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-texGyreBonum">
                Girls Illuminated
              </h3>
              <p className="text-gray-400 mb-4 font-openSans">
                Empowering young women through holistic wellness and meaningful
                experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/girlsilluminated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/girlsilluminated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.045-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/girlsilluminated"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-texGyreBonum">
                Our Programs
              </h4>
              <ul className="space-y-2 font-openSans">
                <li>
                  <a
                    href="/our-program"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    St. Kitts & Nevis Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/our-program#workshops"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Wellness Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="/our-program#mentorship"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Mentorship Program
                  </a>
                </li>
                <li>
                  <a
                    href="/our-program#community"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Community Outreach
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-texGyreBonum">
                Quick Links
              </h4>
              <ul className="space-y-2 font-openSans">
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#testimonials"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-solarYellow transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 font-texGyreBonum">
                Contact
              </h4>
              <address className="not-italic text-gray-400 font-openSans">
                <p>St. Kitts & Nevis, Caribbean</p>
                <p className="mt-4">info@girlsilluminated.org</p>
                <p>+1 (869) 765-4321</p>
              </address>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="font-openSans">
              &copy; {new Date().getFullYear()} Girls Illuminated. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default AboutUs;
