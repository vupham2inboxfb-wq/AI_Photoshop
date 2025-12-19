import React from 'react';
import { XIcon } from './icons/XIcon';

interface NotificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPopup: React.FC<NotificationPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const services = [
    'Bản quyền phần mềm',
    'Adobe full app',
    'VPN',
    'Capcut Pro',
    'Google Driver',
    'Cân màu màn hình',
    'HAICAOYUN'
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative border border-slate-200 dark:border-slate-700 transform transition-all scale-100">
        <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Đóng"
        >
            <XIcon className="w-5 h-5" />
        </button>

        <div className="text-center mb-8 mt-2">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.75 3c1.995 0 3.529.902 4.25 2.01C12.72 3.902 14.254 3 16.25 3c3.036 0 5.5 2.322 5.5 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Cảm ơn bạn!</h3>
            <p className="text-slate-600 dark:text-slate-300">
                Cảm ơn bạn đã đồng hành cùng <strong>AI DIP</strong>. App này hoàn toàn Free. Nếu bạn thấy hữu ích, hãy ủng hộ mình hoặc để lại góp ý nhé!
            </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
            {services.map((service) => (
                <a
                    key={service}
                    href="https://www.facebook.com/diepfoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-3 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-bold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all hover:scale-105 text-center shadow-sm"
                >
                    {service}
                </a>
            ))}
        </div>
        
        <div className="flex flex-col gap-3">
             <a 
                  href="https://www.facebook.com/diepfoto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                  Liên Hệ / Góp Ý Ngay
              </a>
              <button 
                  onClick={onClose}
                  className="w-full py-3 text-slate-500 dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors"
              >
                  Đóng thông báo này
              </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(-5%); }
            50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
};