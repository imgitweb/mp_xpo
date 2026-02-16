import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 
import { useNavigate } from "react-router-dom";

// 👇 Image import path
import popupImg from "../assets/popupimg.jpeg"; 

const RegistrationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Session logic (Testing ke liye commented)
      // const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
      // if (!hasSeenPopup) { 
        setIsVisible(true);
      // }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // sessionStorage.setItem("hasSeenPopup", "true"); 
  };

  const handleCTA = () => {
    setIsVisible(false);
    // sessionStorage.setItem("hasSeenPopup", "true"); 
    
    // 👇 Updated navigation path
    navigate("/visitor-pass"); 
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            // Padding hata diya hai taaki image card mein fit baithe
            className="relative w-full max-w-[500px] bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
          >
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/80 hover:text-white transition-colors z-30 cursor-pointer backdrop-blur-md border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 👇 ONLY CLICKABLE IMAGE SECTION */}
            <div 
              onClick={handleCTA} 
              className="relative w-full cursor-pointer group"
            >
                {/* Image */}
                 <img 
                   src={popupImg} 
                   alt="Special Offer" 
                   className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 
                 {/* Optional: Hover effect overlay to indicate clickability */}
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegistrationPopup;