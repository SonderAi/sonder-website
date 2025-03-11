import React, { useState, useRef, useEffect } from "react";

const predefinedQuestions = [
  { id: "name", question: "Hey there! What's your name?", placeholder: "Enter your name" },
  { id: "email", question: "Nice to meet you, {name}! What's your email?", placeholder: "Enter your email address" },
  { id: "project", question: "Great! What project are you thinking about?", placeholder: "Describe your project briefly" },
  { id: "details", question: "That sounds interesting! Can you share more details about your vision?", placeholder: "Provide more details about your goals and requirements" },
];

interface FormResponses {
  [key: string]: string;
}

interface Question {
  id: string;
  question: string;
  placeholder: string;
}

const ConversationalForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<FormResponses>({});
  const [inputValue, setInputValue] = useState("");
  const [conversation, _setConversation] = useState<Question[]>(predefinedQuestions);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input on load and when current step changes
  useEffect(() => {
    inputRef.current?.focus();
    
    // Show typing animation when new question appears
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [currentStep]);
  
  // Fixed scrolling logic - only scroll on step change with a slight delay
  useEffect(() => {
    // Only scroll when moving to a new step (not on initial load)
    if (currentStep > 0 && messageEndRef.current) {
      // Add a small delay to allow animations to complete
      const timer = setTimeout(() => {
        if (containerRef.current && messageEndRef.current) {
          // Smooth scroll to the new question
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const validateInput = () => {
    const currentQuestion = conversation[currentStep];
    
    if (!inputValue.trim()) {
      setError("Please provide an answer before continuing");
      return false;
    }
    
    if (currentQuestion.id === 'email' && !/^\S+@\S+\.\S+$/.test(inputValue)) {
      setError("Please enter a valid email address");
      return false;
    }
    
    setError("");
    return true;
  };

  const handleSubmit = async () => {
    if (!validateInput()) return;
    
    const currentQuestion = conversation[currentStep];
    const updatedResponses = { ...responses, [currentQuestion.id]: inputValue };
    setResponses(updatedResponses);

    // If this is the last question, submit the form
    if (currentStep === conversation.length - 1) {
      setIsSubmitting(true);
      
      try {
        // Replace with your actual submission logic
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form submitted:", updatedResponses);
        setIsComplete(true);
      } catch (error) {
        console.error("Error submitting form:", error);
        setError("Failed to submit your message. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Move to next question with a short delay for animation
      setTimeout(() => {
        setInputValue("");
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const currentQuestion = conversation[currentStep];
  const formattedQuestion = currentQuestion?.question.replace("{name}", responses.name || "");

  if (isComplete) {
    return (
      <div className="bg-dark-surface border border-dark-border rounded-xl p-8 shadow-lg transition-all duration-500 animate-fade-in">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Thanks, {responses.name}!</h3>
          <p className="text-text-secondary mb-6">We've received your message and will get back to you soon at {responses.email}.</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setCurrentStep(0);
              setResponses({});
              setInputValue("");
              setIsComplete(false);
            }}
          >
            Start a New Conversation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-surface/90 backdrop-blur-md border border-dark-border rounded-xl shadow-lg transition-all duration-300 overflow-hidden">
      {/* Assistant header */}
      <div className="bg-gradient-to-r from-dark via-primary/10 to-dark px-5 py-4 border-b border-dark-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path d="M16.5 7.5h-9v9h9v-9z" />
                <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-dark-surface"></span>
          </div>
          <div>
            <h2 className="text-sm font-bold text-white">Sonder AI Assistant</h2>
            <p className="text-xs text-text-secondary">Online</p>
          </div>
        </div>
      </div>
      
      {/* Conversation area */}
      <div 
        ref={containerRef}
        className="p-5 h-[480px] overflow-y-auto custom-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Previous questions and answers */}
        <div className="space-y-6 mb-6 mx-auto max-w-md">
          {/* Initial greeting message */}
          {currentStep === 0 && (
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M16.5 7.5h-9v9h9v-9z" />
                  <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-dark/60 to-dark-surface/80 rounded-xl rounded-tl-none p-4 shadow-sm border border-dark-border max-w-[85%]">
                <p className="text-white">Hello! I'm the Sonder AI assistant. Let's learn more about your project.</p>
              </div>
            </div>
          )}

          {/* Previous Q&A pairs */}
          {currentStep > 0 && conversation.slice(0, currentStep).map((q, _index) => (
            <div key={q.id} className="space-y-4">
              {/* AI Question */}
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M16.5 7.5h-9v9h9v-9z" />
                    <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-dark/60 to-dark-surface/80 rounded-xl rounded-tl-none p-4 shadow-sm border border-dark-border max-w-[85%]">
                  <p className="text-white">{q.question.replace("{name}", responses.name || "")}</p>
                </div>
              </div>

              {/* User Answer */}
              <div className="flex items-start justify-end">
                <div className="bg-gradient-to-br from-primary/10 to-dark/60 rounded-xl rounded-tr-none p-4 shadow-sm border border-dark-border/50 max-w-[85%]">
                  <p className="text-white">{responses[q.id]}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/70 to-accent/70 flex-shrink-0 flex items-center justify-center ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
          
        {/* Current question with animation */}
        <div 
          className="flex items-start mt-8 max-w-md mx-auto transform transition-all duration-500" 
          ref={messageEndRef}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
              <path d="M16.5 7.5h-9v9h9v-9z" />
              <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="bg-gradient-to-br from-dark/60 to-dark-surface/80 rounded-xl rounded-tl-none p-4 shadow-sm border border-dark-border max-w-[85%]">
            <div className="text-white">
              {isTyping ? (
                <div className="flex space-x-2 items-center h-6">
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                </div>
              ) : (
                <p className="animate-fade-in">{formattedQuestion}</p>
              )}
            </div>
          </div>
        </div>
        
        {/* User input area - only show when typing animation is done */}
        {!isTyping && (
          <div className="flex items-start justify-end mt-4 max-w-md mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-dark/60 rounded-xl rounded-tr-none p-4 shadow-sm border border-dark-border/50 w-[85%]">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={currentQuestion.placeholder}
                  className={`w-full bg-transparent border-none p-0 text-white placeholder-text-muted/50 transition-all duration-300
                    focus:outline-none ${error ? 'text-error' : ''}`}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary/70 to-accent/70 flex-shrink-0 flex items-center justify-center ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Show error message */}
        {error && (
          <div className="text-center mt-2 text-error text-xs animate-fade-in max-w-md mx-auto">
            {error}
          </div>
        )}
      </div>
      
      {/* Input action bar */}
      <div className="px-5 py-3 bg-dark/50 border-t border-dark-border flex justify-between items-center">
        <div className="flex space-x-2">
          {/* Progress indicators */}
          {conversation.map((_, index) => (
            <div 
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index < currentStep 
                  ? 'bg-primary w-6' 
                  : index === currentStep 
                    ? 'bg-primary/60 w-8 animate-pulse' 
                    : 'bg-dark-border w-3'
              }`}
            ></div>
          ))}
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || isTyping}
          className={`btn btn-primary btn-sm relative overflow-hidden group ${
            isSubmitting || isTyping ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : (
            <>
              <span className="relative z-10">
                {isTyping ? "Thinking..." : "Send"}
              </span>
              <span className="absolute inset-0 w-full h-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ConversationalForm;