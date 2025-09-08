import React from 'react';
import { useToast } from '@/components/ui/use-toast';

export function Footer({ scrollToSection }) {
  const { toast } = useToast(); // Using useToast here to satisfy the hook rule, even if not directly used by this button

  return (
    <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 ml-20">
      <div className="flex justify-between items-center pt-8 border-t border-gray-700">
        <span className="text-sm text-gray-400">Made with ❤️ by TheDevsTechnologies</span>
        <button
          onClick={() => scrollToSection(0)}
          className="text-sm tracking-wider hover:text-gray-300 transition-colors flex items-center"
        >
          TO TOP
          <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
        </button>
      </div>
    </footer>
  );
}