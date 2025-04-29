import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TestimonialCarousel from "./TestimonialCarousel";

const Home = () => {
  return (
    <div className="min-h-screen bg-offWhite">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-solarYellow/20 to-offWhite">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-6 font-texGyreBonum">
              Empowering Young Women
            </h2>
            <p className="text-lg md:text-xl text-charcoal mb-8 max-w-3xl mx-auto font-openSans">
              Illuminated Girls Glow is dedicated to helping young women
              discover their inner strength, build confidence, and develop
              leadership skills in a supportive community environment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-radiantRed">
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
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Personal Growth
                </h3>
                <p className="text-charcoal font-openSans">
                  Develop self-awareness and emotional intelligence through
                  guided activities and reflection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-radiantRed">
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
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Community Building
                </h3>
                <p className="text-charcoal font-openSans">
                  Connect with like-minded peers and mentors who support your
                  journey and celebrate your achievements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-radiantRed">
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
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Leadership Skills
                </h3>
                <p className="text-charcoal font-openSans">
                  Learn practical leadership techniques that will serve you in
                  school, future careers, and beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Summer Experience Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-offWhite to-solarYellow/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-6 font-texGyreBonum">
                  Our Program
                </h2>
                <p className="text-lg text-charcoal mb-6 font-openSans">
                  Our flagship annual program is a unique 12-day journey across
                  St. Kitts and Nevis, designed to enlighten and transform.
                  Through activities like yoga, meditation, art, dance, cultural
                  exploration, financial literacy, and sessions with inspiring
                  empowerment speakers, we guide girls towards self-love,
                  resilience, and a balanced, positive lifestyle.
                </p>
                <button className="bg-radiantRed text-white hover:bg-radiantRed/90 px-6 py-2 rounded-full font-semibold transition-colors font-openSans">
                  Explore the Summer Experience
                </button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 font-openSans">
                    Video or Image Placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-offWhite">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-4 font-texGyreBonum">
                Voices of Illumination
              </h2>
              <p className="text-lg text-charcoal max-w-3xl mx-auto font-openSans">
                Hear from the young women and families whose lives have been
                transformed through our programs.
              </p>
            </motion.div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Join Us in Lighting the Way Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-offWhite">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-radiantRed mb-6 font-texGyreBonum">
              Join Us in Lighting the Way
            </h2>
            <p className="text-lg text-charcoal mb-10 max-w-3xl mx-auto font-openSans">
              There are many ways to support our mission of empowering young
              women. Choose the path that resonates with you and help us make a
              difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {/* Donation Option */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-radiantRed">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Make a Donation
                </h3>
                <p className="text-charcoal mb-4 font-openSans">
                  Your financial support helps us expand our programs and reach
                  more young women in need of mentorship and guidance.
                </p>
                <button className="bg-radiantRed text-white hover:bg-radiantRed/90 px-6 py-2 rounded-full font-semibold transition-colors font-openSans">
                  Donate Now
                </button>
              </div>

              {/* Partnership Option */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-radiantRed">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Become a Partner
                </h3>
                <p className="text-charcoal mb-4 font-openSans">
                  Partner with us to create meaningful opportunities for young
                  women through sponsorships, internships, or collaborative
                  programs.
                </p>
                <button className="bg-radiantRed text-white hover:bg-radiantRed/90 px-6 py-2 rounded-full font-semibold transition-colors font-openSans">
                  Partner With Us
                </button>
              </div>

              {/* Volunteer Option */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-radiantRed">
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
                      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-radiantRed mb-2 font-texGyreBonum">
                  Share Your Talent
                </h3>
                <p className="text-charcoal mb-4 font-openSans">
                  Volunteer your time and expertise as a mentor, workshop
                  facilitator, or event coordinator to directly impact the lives
                  of young women.
                </p>
                <button className="bg-radiantRed text-white hover:bg-radiantRed/90 px-6 py-2 rounded-full font-semibold transition-colors font-openSans">
                  Volunteer Now
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-radiantRed to-mangoOrange text-white">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-texGyreBonum">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto font-openSans">
              Join our community of young women who are discovering their
              potential and making a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-radiantRed hover:bg-offWhite px-8 py-3 rounded-full font-semibold text-lg transition-colors font-openSans">
                Register Now
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-colors font-openSans">
                Learn More
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
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
    </div>
  );
};

export default Home;
