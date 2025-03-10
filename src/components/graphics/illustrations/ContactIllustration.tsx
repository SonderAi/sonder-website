import React from 'react';

interface ContactIllustrationProps {
  title?: string;
  prompt?: string;
  className?: string;
}

const ContactIllustration: React.FC<ContactIllustrationProps> = ({
  title = "Get in Touch",
  prompt = "We'd love to hear from you!",
  className = ""
}) => {
  return (
    <div className={`relative p-8 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-green-500 to-teal-500 ${className}`}>
      {/* Animated decorative element */}
      <div className="absolute top-0 left-0 -mt-8 -ml-8">
        <svg className="w-20 h-20 text-white opacity-30 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2v20m10-10H2" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">{title}</h2>
        <p className="text-white text-lg animate-fade-in-up">{prompt}</p>
      </div>
    </div>
  );
};

export default ContactIllustration;
