
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { IdPhotoGenerator } from './components/IdPhotoGenerator';
import { PhotoRestorer } from './components/PhotoRestorer';
import { ProAiRelight } from './components/pro-ai-relight/ProAiRelight';
import { ImageGenerator } from './components/ImageGenerator';
import { ConceptPhotoGenerator } from './components/concept-photo/ConceptPhotoGenerator';
import { ObjectCleaner } from './components/ObjectCleaner';
import { TattooSketchGenerator } from './components/TattooSketchGenerator';
import { CaricatureGenerator } from './components/CaricatureGenerator';
import { NotificationPopup } from './components/NotificationPopup';

type ActiveApp = 'conceptPhoto' | 'idPhoto' | 'caricature' | 'photoRestorer' | 'objectCleaner' | 'tattooSketch' | 'proAiRelight' | 'imageGenerator';
export type Theme = 'light' | 'dark';

export default function App() {
  const [activeApp, setActiveApp] = useState<ActiveApp>('conceptPhoto');
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : (prefersDark ? 'dark' : 'light');
  });

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Setup notification timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 10 * 60 * 1000); // 10 minutes

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const apps = [
    { id: 'conceptPhoto', component: <ConceptPhotoGenerator />, name: 'Tạo Concept' },
    { id: 'idPhoto', component: <IdPhotoGenerator />, name: 'Ảnh Thẻ' },
    { id: 'caricature', component: <CaricatureGenerator />, name: 'Chân dung biếm họa' },
    { id: 'photoRestorer', component: <PhotoRestorer />, name: 'Phục Hồi Ảnh Cũ' },
    { id: 'objectCleaner', component: <ObjectCleaner />, name: 'Làm Sạch vết Bẩn, Ố' },
    { id: 'tattooSketch', component: <TattooSketchGenerator />, name: 'Ảnh Nét Vẽ' },
    { id: 'proAiRelight', component: <ProAiRelight />, name: 'Ánh Sáng' },
    { id: 'imageGenerator', component: <ImageGenerator />, name: 'Tạo Ảnh' },
  ];

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
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <nav className="bg-white dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 flex justify-center">
            <div className="flex items-center space-x-2 p-2 bg-slate-100 dark:bg-slate-900 rounded-lg overflow-x-auto">
                 {apps.map(app => (
                    <button
                        key={app.id}
                        onClick={() => setActiveApp(app.id as ActiveApp)}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap ${
                            activeApp === app.id 
                              ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow' 
                              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                        }`}
                    >
                        {app.name}
                    </button>
                 ))}
            </div>
        </div>
      </nav>

      <div className="app-container">
        {apps.map(app => (
            <div key={app.id} style={{ display: activeApp === app.id ? 'block' : 'none' }}>
                {app.component}
            </div>
        ))}
      </div>
      
      <footer className="text-center mt-10 pb-8 text-slate-500 dark:text-slate-400 text-sm bg-slate-50 dark:bg-slate-900/50 pt-4">
          <p>Cung cấp bởi Google Gemini. Anh em có góp ý gì cứ nhắn mình nhé, ngoài ra mình có bán các tài khoản bên dưới .</p>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <p className="text-slate-600 dark:text-slate-300 font-medium">©Hoàng Điệp</p>
              <a 
                  href="https://www.facebook.com/diepfoto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-xs sm:text-sm shadow-md shadow-blue-500/30"
              >
                  Liên Hệ Hoàng Điệp
              </a>
          </div>
          <div className="mt-6 container mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-xs sm:text-sm">
                  {services.map((service, index) => (
                      <React.Fragment key={service}>
                          <a 
                              href="https://www.facebook.com/diepfoto" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-all duration-300 cursor-pointer hover:scale-110 drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] hover:drop-shadow-[0_0_15px_rgba(37,99,235,1)] uppercase tracking-wide"
                          >
                              {service}
                          </a>
                          {index < services.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600 select-none">|</span>
                          )}
                      </React.Fragment>
                  ))}
              </div>
          </div>
          <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl max-w-lg mx-auto text-left">
            <h4 className="font-bold text-slate-800 dark:text-slate-100">Lưu ý quan trọng</h4>
            <p className="mt-2 text-xs">Công cụ này sử dụng API của Google Gemini. Mọi hình ảnh bạn tải lên và tạo ra đều có thể được Google sử dụng để cải thiện dịch vụ của họ. Hãy cân nhắc kỹ trước khi tải lên ảnh nhạy cảm hoặc riêng tư. Chúng tôi không lưu trữ bất kỳ hình ảnh nào của bạn trên máy chủ của mình.</p>
          </div>
          
          <div className="mt-8">
            <button 
                onClick={() => setShowNotification(true)}
                className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 underline"
            >
                Test Popup Thông Báo
            </button>
          </div>
      </footer>

      <NotificationPopup isOpen={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  );
}
