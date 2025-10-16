import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
      <button
        onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover-elevate active-elevate-2 transition-all"
        data-testid="button-language-toggle"
      >
        <Globe className="h-5 w-5" />
        <span className="font-bold text-sm">
          {language === 'zh' ? t('language.english') : t('language.chinese')}
        </span>
      </button>
    </div>
  );
}
