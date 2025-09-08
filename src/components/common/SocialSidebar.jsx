import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Facebook, Instagram, Youtube, Twitter, Send, PinOff as PinIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function SocialSidebar() {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center justify-center bg-gray-900 z-40 text-gray-400">
      <div className="flex flex-col space-y-4">
        <span className="text-xs tracking-widest transform -rotate-90 origin-center mb-8 text-gray-400 absolute left-1/2 -translate-x-1/2 top-40">HOME</span>
        <div className="w-px h-20 bg-gray-600 mx-auto mb-40"></div> {/* Adjusted spacing */}
        {[
          { icon: Phone, label: 'WhatsApp' },
          { icon: Facebook, label: 'Facebook' },
          { icon: Youtube, label: 'YouTube' },
          { icon: Instagram, label: 'Instagram' },
          { icon: Twitter, label: 'Twitter' },
          { icon: Send, label: 'Telegram' },
          { icon: PinIcon, label: 'Pinterest' }
        ].map(({ icon: Icon, label }, index) => (
          <motion.button
            key={label}
            onClick={handleSocialClick}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Icon size={16} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}