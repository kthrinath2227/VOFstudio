import React from 'react';
import { useToast } from '@/components/ui/use-toast';

export function Footer({ scrollToSection }) {
  const { toast } = useToast();

  return (
    <footer className="relative z-10 max-w-7xl mx-auto px-7 py-8 md:ml-20">
      <div className="flex justify-between items-center pt-8 border-t border-gray-700">
        <span className="text-sm text-black">
          Made with ❤️ by{" "}
          <a
            href="https://www.thedevstechnologies.online"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            TheDevsTechnologies
          </a>
        </span>

        <button
          onClick={() => scrollToSection(0)}
          className="text-sm tracking-wider hover:text-gray-500 transition-colors flex items-center"
        >
          TO TOP
          <span className="w-2 h-2 bg-black rounded-full ml-2"></span>
        </button>
      </div>
    </footer>
  );
}
