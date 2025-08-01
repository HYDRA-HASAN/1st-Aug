import { useEffect } from 'react';
import { Coffee, Utensils, Laugh, Heart, Camera } from 'lucide-react';
import FloatingHearts from '@/components/floating-hearts';
import Navigation from '@/components/navigation';
import TimelineSection from '@/components/timeline-section';
import GalleryLightbox from '@/components/gallery-lightbox';

export default function Home() {
  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.parallax-bg') as HTMLElement;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Couple walking in garden'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Sharing ice cream together'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Watching sunset together'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1554844453-7ea2a562a6dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1554844453-7ea2a562a6dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Romantic picnic in the park'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Dancing together at wedding'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Hiking together in mountains'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Cooking together in kitchen'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
      full: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
      alt: 'Reading books together'
    }
  ];

  const scrollToTimeline = () => {
    const element = document.querySelector('#first-meet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-poppins bg-gradient-romantic overflow-x-hidden">
      <FloatingHearts />
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center parallax-bg relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 105, 180, 0.3), rgba(255, 215, 0, 0.3)), url('https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="text-center text-white z-10" data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-6xl md:text-8xl font-vibes mb-4">Our Love Story</h2>
          <p className="text-xl md:text-2xl font-light mb-8">A journey of hearts intertwined</p>
          <button
            onClick={scrollToTimeline}
            className="bg-white text-rose-pink px-8 py-3 rounded-full font-semibold hover:bg-rose-pink hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="inline mr-2" size={20} />
            Begin Our Journey
          </button>
        </div>
      </section>

      {/* Timeline Container */}
      <div className="relative bg-gradient-to-b from-cream to-white py-20">
        <div className="timeline-line h-full"></div>

        {/* First Meet Section */}
        <TimelineSection
          id="first-meet"
          icon={<Coffee size={32} />}
          title="The First Spark"
          content="It was a rainy Tuesday morning when our eyes first met across the crowded coffee shop. You were reading your favorite book, and I couldn't help but notice how your smile lit up the entire room. Little did we know, that accidental coffee spill would be the beginning of our beautiful love story."
          date="March 15, 2022"
          image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          imageAlt="Cozy coffee shop where we first met"
          iconColor="text-rose-pink"
          dateColor="text-rose-pink"
        />

        {/* First Date Section */}
        <TimelineSection
          id="first-date"
          icon={<Utensils size={32} />}
          title="Our First Date"
          content="Nervous butterflies filled our stomachs as we sat across from each other at that little Italian restaurant. The conversation flowed like fine wine, and we talked until the restaurant was closing around us. You laughed at all my terrible jokes, and I knew I was falling for you."
          date="March 22, 2022"
          image="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          imageAlt="Romantic dinner date with candles"
          isReversed={true}
          iconColor="text-gold"
          dateColor="text-gold"
        />

        {/* Funniest Moment Section */}
        <TimelineSection
          id="funny-moment"
          icon={<Laugh size={32} />}
          title="The Funniest Memory"
          content="Remember when we tried to cook dinner together for the first time? You accidentally added salt instead of sugar to the dessert, and I somehow managed to burn water. We ended up ordering pizza and laughing until our sides hurt. That's when I realized that with you, even disasters become beautiful memories."
          date="April 10, 2022"
          image="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          imageAlt="Couple laughing together in the kitchen"
          iconColor="text-rose-pink"
          dateColor="text-rose-pink"
        />

        {/* Deep Conversation Section */}
        <TimelineSection
          id="deep-convo"
          icon={<Heart size={32} />}
          title="When We Opened Our Hearts"
          content="That night by the beach, under a blanket of stars, we shared our deepest fears, wildest dreams, and everything in between. We talked about our childhoods, our hopes for the future, and what love meant to us. It was the moment we truly saw each other's souls, and I knew you were my person."
          date="May 18, 2022"
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          imageAlt="Peaceful beach at sunset for deep conversations"
          isReversed={true}
          iconColor="text-gold"
          dateColor="text-gold"
        />

        {/* Picture Gallery Section */}
        <section id="gallery" className="container mx-auto px-6 py-20 relative">
          <div className="timeline-dot" style={{ top: 0 }}></div>
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <Camera className="mx-auto text-4xl text-rose-pink mb-4" size={48} />
            <h3 className="text-4xl font-dancing font-bold text-gray-800 mb-4">Our Beautiful Memories</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every picture tells a story, and every story brings us closer together
            </p>
          </div>

          <GalleryLightbox images={galleryImages} />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-pink-gold text-white py-12">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-3xl font-vibes mb-4">Forever & Always</h3>
          <p className="text-lg mb-6">Our love story continues to be written, one beautiful day at a time</p>
          <div className="flex justify-center space-x-6">
            <Heart className="text-2xl hover:scale-110 transition-transform cursor-pointer" size={24} />
            <div className="text-2xl hover:scale-110 transition-transform cursor-pointer">∞</div>
            <Heart className="text-2xl hover:scale-110 transition-transform cursor-pointer" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
}
