import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Camera, Video, Frame, Book, Shirt, Printer, FileText, Gift, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

import weddingImage from '@/assets/weddingcam.jpeg';
import corporateImage from '@/assets/corporate-event.webp';
import industrialImage from '@/assets/industry.webp';
import socialImage from '@/assets/birthday.webp';
import albumImage from '@/assets/album.webp';
import framesImage from '@/assets/customframe.webp';
import mugsImage from '@/assets/mug.jpg';
import tshirtsImage from '@/assets/photo-tshirts.jpg';
import laserImage from '@/assets/laser-printing.jpg';
import xeroxImage from '@/assets/xerox-services.jpg';

/* ---------------- DATA ---------------- */

const photographyServices = [
  {
    title: 'Wedding Photography & Videography',
    description:
      'From pre-wedding shoots to the grand ceremony, we capture every precious moment of your special day with cinematic excellence.',
    image: weddingImage,
    icon: Camera,
  },
  {
    title: 'Corporate Events',
    description:
      'Professional coverage for conferences, seminars, product launches, and corporate celebrations.',
    image: corporateImage,
    icon: Video,
  },
  {
    title: 'Social Events',
    description:
      'Birthday parties, anniversaries, family gatherings, and celebrations of all kinds.',
    image: socialImage,
    icon: Camera,
  },
  {
    title: 'Industrial Photography',
    description:
      'Documentation of manufacturing facilities and industrial environments.',
    image: industrialImage,
    icon: Camera,
  },
];

const additionalServices = [
  { title: 'Custom Photo Frames', description: 'Premium quality frames.', icon: Frame, image: framesImage },
  { title: 'Wedding Albums', description: 'Elegant handcrafted albums.', icon: Book, image: albumImage },
  { title: 'Photo Mugs', description: 'Personalized photo mugs.', icon: Gift, image: mugsImage },
  { title: 'Photo T-Shirts', description: 'Printed t-shirts.', icon: Shirt, image: tshirtsImage },
  { title: 'Laser Printing', description: 'Laser printing services.', icon: Printer, image: laserImage },
  { title: 'Xerox Services', description: 'Photocopy services.', icon: FileText, image: xeroxImage },
];

/* ---------------- PRICE ROW ---------------- */

const PriceRow = ({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between border-b border-border/40 pb-2">
      <span className="text-muted-foreground">{label}</span>
      <span
        className={`font-medium ${
          highlight ? 'text-burgundy' : 'text-foreground'
        }`}
      >
        {value}
      </span>
    </div>
  );
};

/* ---------------- CARD ---------------- */

const ServiceCard = ({ service, index, onImageClick }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-elegant overflow-hidden"
    >
      <div
        className={`aspect-[16/10] ${onImageClick ? 'cursor-pointer' : ''}`}
        onClick={onImageClick ? () => onImageClick(service.image, service.title) : undefined}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
            <service.icon className="w-5 h-5 text-burgundy" />
          </div>
          <h3 className="heading-card text-foreground">{service.title}</h3>
        </div>
        <p className="text-elegant">{service.description}</p>
      </div>
    </motion.div>
  );
};

/* ---------------- PAGE ---------------- */

const Services = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');

  const openLightbox = (img: string, title: string) => {
    setLightboxImage(img);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-wide text-center">
          <h1 className="heading-hero text-foreground mb-6">Our Services</h1>
          <p className="text-elegant max-w-2xl mx-auto text-lg">
            From professional photography to custom photo products.
          </p>
        </div>
      </section>

      {/* Photography */}
      <section className="section-padding">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {photographyServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-secondary/10">
        <div className="container-wide max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-burgundy text-xs tracking-[0.3em] uppercase mb-4">
              Packages
            </p>
            <h2 className="heading-section mb-5">
              Photography & Videography Pricing
            </h2>
            <p className="text-elegant max-w-2xl mx-auto">
              Thoughtfully curated packages designed to capture every moment with elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl mb-6">Engagement</h3>
              <div className="space-y-4 text-sm">
                <PriceRow label="Traditional Photography" value="₹6,500" />
                <PriceRow label="Candid Photography" value="₹12,000" />
                <PriceRow label="Traditional Video" value="₹10,000" />
                <PriceRow label="Cinematic Video" value="₹16,000" />
                <PriceRow label="Instagram Reel" value="Included" highlight />
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl mb-6">Haldi</h3>
              <div className="space-y-4 text-sm">
                <PriceRow label="Traditional Photography" value="₹6,500" />
                <PriceRow label="Candid Photography" value="₹12,000" />
                <PriceRow label="Traditional Video" value="₹10,000" />
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl mb-6">Wedding</h3>
              <div className="space-y-4 text-sm">
                <PriceRow label="Traditional Photography" value="₹10,000" />
                <PriceRow label="Candid Photography" value="₹15,000" />
                <PriceRow label="Family Photography" value="Included" highlight />
                <PriceRow label="Cinematic Video" value="₹20,000" />
                <PriceRow label="Traditional Video" value="₹12,000" />
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="font-serif text-2xl mb-6">
                Birthday & Social Events
              </h3>
              <div className="space-y-4 text-sm">
                <PriceRow label="Traditional Photography" value="₹4,500" />
                <PriceRow label="Candid Photography" value="₹10,000" />
                <PriceRow label="Cinematic Video" value="₹15,000" />
                <PriceRow label="Traditional Video" value="₹8,500" />
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-12">
            * Final pricing may vary based on location, duration, and customization.
          </p>
        </div>
      </section>

      {/* Photo Products */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="heading-section text-center mb-12">Photo Products & Printing</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-12 right-0 text-white hover:text-burgundy"
                onClick={() => setLightboxOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>

              <h3 className="text-white text-center font-serif mb-4">{lightboxTitle}</h3>

              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Services;
