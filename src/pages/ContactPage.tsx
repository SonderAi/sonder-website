import React from "react";
import ConversationalForm from "../components/contact/ConversationalForm";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark pt-32 pb-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <motion.div 
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build <span 
                  className="inline-block"
                  style={{ 
                    background: 'linear-gradient(to right, var(--primary), var(--accent), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent'
                  }}
                >Something Amazing</span> Together
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Share your project ideas with us and discover how our team can transform your vision into reality. 
            We're ready to listen and collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Contact Form Column */}
          <motion.div 
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ConversationalForm />
          </motion.div>

          {/* Contact Information Column */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Direct Contact Card */}
            <div className="bg-dark-surface border border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                    <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267a.217.217 0 00-.142.142.217.217 0 00.142.142l.933.267a1.5 1.5 0 011.052 1.767l-.716 3.223a1.5 1.5 0 01-1.465 1.175H3.5A1.5 1.5 0 012 16.5v-13z" clipRule="evenodd" />
                    <path d="M15 2a1 1 0 011 1v1h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H15V3a1 1 0 011-1zm3 4.5a.5.5 0 00-.5.5v8a.5.5 0 001 0V7a.5.5 0 00-.5-.5z" />
                  </svg>
                </span>
                Direct Contact
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center mr-4 group-hover:border-primary/50 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Email</p>
                    <a href="mailto:hello@sonder.com" className="text-white hover:text-primary transition-colors duration-300">hello@sonder.com</a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center mr-4 group-hover:border-primary/50 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-white hover:text-primary transition-colors duration-300">+1 (555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-10 h-10 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center mr-4 group-hover:border-primary/50 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary mb-1">Office</p>
                    <address className="text-white not-italic">
                      123 Innovation Drive<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Availability */}
            <div className="bg-dark-surface border border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                  </svg>
                </span>
                Hours & Availability
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
                
                <div className="pt-4 border-t border-dark-border mt-4">
                  <p className="text-text-secondary text-sm">
                    Our team typically responds within 24 hours during business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-dark-surface border border-dark-border rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </span>
                Connect With Us
              </h3>
              
              <div className="grid grid-cols-4 gap-3">
                <a href="https://twitter.com/sonder" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/sonder" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/company/sonder" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://instagram.com/sonderdesign" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 rounded-lg bg-dark/50 border border-dark-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;