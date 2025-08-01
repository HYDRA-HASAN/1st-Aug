import { ReactNode } from 'react';

interface TimelineSectionProps {
  id: string;
  icon: ReactNode;
  title: string;
  content: string;
  date: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
  iconColor: string;
  dateColor: string;
}

export default function TimelineSection({
  id,
  icon,
  title,
  content,
  date,
  image,
  imageAlt,
  isReversed = false,
  iconColor,
  dateColor
}: TimelineSectionProps) {
  return (
    <section id={id} className="container mx-auto px-6 py-20 relative">
      <div className="timeline-dot" style={{ top: 0 }}></div>
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:space-x-12 ${isReversed ? 'lg:space-x-reverse' : ''}`}>
        <div className={`lg:w-1/2 ${isReversed ? 'lg:pl-12' : 'lg:pr-12'}`} data-aos={isReversed ? "fade-left" : "fade-right"} data-aos-duration="1000">
          <img 
            src={image}
            alt={imageAlt}
            className="rounded-2xl shadow-2xl w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className={`lg:w-1/2 ${isReversed ? 'lg:pr-12' : 'lg:pl-12'} mt-8 lg:mt-0`} data-aos={isReversed ? "fade-right" : "fade-left"} data-aos-duration="1000" data-aos-delay="200">
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className={`text-4xl ${iconColor} mb-4`}>
              {icon}
            </div>
            <h3 className="text-3xl font-dancing font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {content}
            </p>
            <div className={`flex items-center text-sm ${dateColor}`}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
