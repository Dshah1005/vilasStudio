import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-burgundy text-sm font-medium tracking-[0.2em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-hero text-foreground mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-elegant max-w-2xl mx-auto text-lg"
          >
            Have a project in mind? We'd love to hear from you. Reach out to discuss
            your photography needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-section text-foreground mb-8 text-center">
              Let's Create Together
            </h2>

            <p className="text-elegant text-lg mb-12 text-center">
              Whether it's your wedding, a corporate event, or a personal photoshoot,
              we're here to help you capture those precious moments.
            </p>

            <div className="space-y-10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+919664220584" className="hover:text-burgundy transition-colors">
                      +91 9664220584
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:+919820962053" className="hover:text-burgundy transition-colors">
                      +91 9820962053
                    </a>
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Location</h3>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Vilas+Photo+Studio+Veera+Desai+Road+Andheri+West+Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-burgundy transition-colors"
                  >
                    Address: Shop 7, Flower Queen Building,<br />
                    Veera Desai Rd, Azad Nagar,<br />
                    Andheri West, Mumbai,<br />
                    Maharashtra 400058
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-burgundy" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Sunday<br />
                    10:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-14 aspect-video rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps?q=Vilas+Photo+Studio+Veera+Desai+Road+Andheri+West+Mumbai&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Vilas Photo Studio Location"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Contact;
