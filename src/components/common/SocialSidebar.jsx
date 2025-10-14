import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function SocialSidebar() {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col justify-between items-center bg-black z-40 text-white py-6">
      {/* Top Section */}
      <div className="flex flex-col items-center space-y-4">
        
        <span className="m-5 text-xs tracking-widest transform -rotate-90 origin-center text-gray-400 mt-40">
          HOME
        </span>

        {/* Divider Line */}
       
      </div>
     
      
      

      {/* Bottom Icons */}
      <div className="flex flex-col items-center space-y-4 mb-6">
         <div className="w-10 h-[1px] bg-gray-600" />
         <div className="w-7 h-[1px] bg-gray-600" />
        {[
          { icon: Phone, label: 'WhatsApp' },
          { icon: Facebook, label: 'Facebook' },
          { icon: Youtube, label: 'YouTube' },
          { icon: Instagram, label: 'Instagram' },
          { icon: Twitter, label: 'Twitter' },
          { icon: MessageCircle, label: 'MessageCircle' },
        ].map(({ icon: Icon, label }, index) => (
          <motion.button
            key={label}
            onClick={handleSocialClick}
            className="w-8 h-8 text-white hover:text-gray-400 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Icon size={18} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
