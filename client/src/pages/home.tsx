import { useEffect } from 'react';
import { Coffee, Utensils, Laugh, Heart } from 'lucide-react';
import FloatingHearts from '@/components/floating-hearts';
import Navigation from '@/components/navigation';
import TimelineSection from '@/components/timeline-section';

export default function Home() {
  useEffect(() => {
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

  const scrollToTimeline = () => {
    const element = document.querySelector('#first-meet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-poppins bg-gradient-romantic overflow-x-hidden">
      <FloatingHearts />
      <Navigation hideGallery />

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
            My Lovely Journey with Maryam 
          </button>
        </div>
      </section>

      {/* Timeline Container */}
      <div className="relative bg-gradient-to-b from-cream to-white py-20">
        <div className="timeline-line h-full"></div>

        <TimelineSection
  id="first-meet"
  icon={<Coffee size={32} />}
  title="The First Spark"
  content="I met you online way before, back when we used to play Fortnite. We didn't even know each other properly, just some random usernames in the same lobbies. But maybe we were destined to be together, because on July 5, 2025, you messaged me. That one message turned into hours of talking—deep, fun, endless conversations. It felt like we’d known each other for centuries. From that moment, something just clicked between us."
  date="July 5, 2025"
  image="https://i.postimg.cc/wB82s10Y/Whats-App-Image-2025-08-01-at-16-47-46-58440f1c.jpg"
  imageAlt="The beginning of our spark"
  iconColor="text-rose-pink"
  dateColor="text-rose-pink"
/>
<TimelineSection
  id="first-love"
  icon={<Utensils size={32} />}
  title="The First 'I Love You'"
  content="The first time I said 'I love you' to you, Maryam, was when I truly felt it in my heart. I knew it was time to tell you how deeply I feel about you. You asked, 'Are you sure you wanna say it right now?' And I said, 'Yes.' That moment is forever etched in my soul."
  date="July 18, 2025"
  image="https://i.postimg.cc/RFjDCvqg/Whats-App-Image-2025-08-01-at-16-55-42-d2ec93bd.jpg"
  imageAlt="The magical moment of our first 'I love you'"
  isReversed={true}
  iconColor="text-gold"
  dateColor="text-gold"
/>



<TimelineSection
  id="funny-moment"
  icon={<Laugh size={32} />}
  title="The Funniest Memory"
  content="Do you remember when I was singing something for you, and you started laughing so hard? I didn’t even get mad—I just smiled and thought, ‘At least I can make her laugh.’ Hehe. That moment was silly and sweet, and it stuck with me."
  date="July 18, 2025"
  image="https://i.postimg.cc/52dQBTQD/Whats-App-Image-2025-08-01-at-17-04-28-8385b86b.jpg"
  imageAlt="A funny, heartwarming memory"
  iconColor="text-rose-pink"
  dateColor="text-rose-pink"
/>


<TimelineSection
  id="deep-convo"
  icon={<Heart size={32} />}
  title="Our First Promise"
  content="Maryam, I know we’ve made many promises to each other since then, but this was our first one—and the most special. We promised to stay by each other’s side and keep every word we gave, no matter what. And In Sha Allah, we will keep those promises and be together for the rest of our lives."
  date="July 17, 2025"
  image="https://i.postimg.cc/4xP8j6G4/Whats-App-Image-2025-08-01-at-17-10-36-416836ab.jpg"
  imageAlt="Our first promise together"
  isReversed={true}
  iconColor="text-gold"
  dateColor="text-gold"
/>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-pink-gold text-white py-12">
        <div className="container mx-auto px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-3xl font-vibes mb-4">Forever & Always</h3>
          <p className="text-lg mb-6">I love you so much, my beautiful Maryam. I'm so grateful to have you in my life. I promise to always be there for you, and to love you forever. I love you so much, my beautiful Maryam. I'm so grateful to have you in my life. I promise to always be there for you, and to love you forever. I love you so much, my beautiful Maryam. I'm so grateful to have you in my life. I promise to always be there for you, and to love you forever.</p>
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
