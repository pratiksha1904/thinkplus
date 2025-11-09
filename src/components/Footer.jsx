import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed! Thank you, ${email}`);
      setEmail("");
    }
  };

  // Social media links
  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com/yourpage" },
    { Icon: Twitter, url: "https://twitter.com/yourhandle" },
    { Icon: Instagram, url: "https://www.instagram.com/firewing.tech?igsh=aGR4cGtydGszMjVz" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/firewing-technology-800547372/?originalSubdomain=in" },
    { Icon: Mail, url: "mailto:firewingtechnologiesindia@gmail.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-gray-300">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Brand & CTA */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_left,#7F00FF,#FB2576,#FF0077)]">ThinkPlus</h2>
          <p className="text-sm text-gray-400 max-w-sm text-center md:text-left">
            Driving innovation in IT with cutting-edge solutions, expert teams,
            and stellar support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 
             bg-clip-text text-transparent bg-[linear-gradient(to_left,#7F00FF,#FB2576,#FF0077)]
              text-white font-semibold hover:bg-[#471d65] transition"
          >
            Get in touch
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_left,#7F00FF,#FB2576,#FF0077)]">Contact Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:firewingtechnologiesindia@gmail.com"
              className="hover:text-[#808080]"
            >
              thinkplus@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+9189790877" className="hover:text-[#808080]">
              +91-8866343214
            </a>
          </p>
          <address>Pune, Maharashtra, India</address>
        </div>

        {/* Newsletter + Social */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold text-[#ff8c00]">Newsletter</h3>
          <form
            onSubmit={handleSubscribe}
            className="w-full flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 bg-gray-800 border-gray-600 text-gray-200 rounded focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#ff6600] via-[#ff9900] to-[#ffcc00] text-white rounded hover:opacity-90 transition">
              Subscribe
            </button>
          </form>

          {/* Social Media */}
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                className="text-gray-300 hover:text-[#ff9900] transition"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 text-center text-xs py-4">
        © {new Date().getFullYear()} Firewing Technology. All Rights Reserved.
      </div>
    </footer>
  );
}
