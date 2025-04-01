import React, { useEffect, useRef } from 'react';
import { X, MapPin, Mail, Phone, Instagram } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-lg w-full mx-4 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          FUNDACIÓN UNEXPO FÓRMULA SAE RACING
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 text-gray-600">
            <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <p className="text-sm sm:text-base">Urb. Villa Asia, Calle China. Ciudad Guayana, Edo. Bolívar; Venezuela.</p>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-6 h-6 text-blue-600" />
            <a href="mailto:unexpo.ufsae@gmail.com" className="hover:text-blue-600 transition-colors">
              unexpo.ufsae@gmail.com
            </a>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-600">
              <Phone className="w-6 h-6 text-green-600" />
              <p>Contactos:</p>
            </div>
            <div className="ml-9 space-y-1">
              <p className="text-gray-600">Luioner Navarro: 0412-1108574</p>
              <p className="text-gray-600">Richard Arias: 0424-9120039</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <Instagram className="w-6 h-6 text-purple-600" />
            <a
              href="https://www.instagram.com/unexpofsae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
            >
              @unexpofsae
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};