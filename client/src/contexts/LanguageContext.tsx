import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Hero Section
    'hero.title': 'YoMee',
    'hero.subtitle': '萌萌企鹅',
    'hero.description': '中国最可爱的网红',
    'hero.buyNow': '立即购买',
    'hero.chart': '图表',
    'hero.contractAddress': 'CA:SOON',
    
    // Meet Section
    'meet.title': '认识 YoMee！',
    'meet.p1': '在一个已经以可爱动物闻名的国家里，需要一些真正特别的东西才能俘获全国人民的心。来自中国野生动物保护区的毛茸茸企鹅YoMee（萌萌）做到了这一点。',
    'meet.p2': '凭借着圆圆的大眼睛、柔软的绒毛和令人难以抗拒的笨拙步态，YoMee已经成为中国社交媒体的宠儿。这只珍贵企鹅跌倒、玩耍或啃鱼的每一个视频都在抖音、微博和小红书上疯传。',
    'meet.p3': '粉丝们说YoMee有着顽皮孩子的灵魂。一会儿自信地摇摆，下一刻就肚皮朝下滑进雪堆。YoMee顽皮的纯真感觉原始而真实。',
    'meet.p4': '在一个快节奏的世界里，YoMee提醒数百万人停下来、微笑，感受那温暖而美好的感觉。',
    'meet.p5': 'YoMee是中国的小企鹅，拥有一颗大大的心，是把互联网变成一个快乐冰雪仙境的毛茸茸朋友。',
    
    // Story Section
    'story.title': '牛市中的企鹅！',
    'story.p1': '在中国，熊猫是国宝，而像YoMee这样的企鹅正以全新的方式俘获人心。熊猫象征着力量和优雅，而YoMee证明了即使是最小的生物也能产生最大的影响。',
    'story.p2': '顽皮、好奇、永远有趣的YoMee提醒数百万人放慢脚步，享受生活的简单乐趣。在一个痴迷于"看涨"市场和登月的世界里，YoMee证明了软实力也同样有影响力——将互联网变成YoMee自己的冰雪仙境。',
    'story.p3': '每一次摇摆，每一次跌倒，每一刻吃鱼的时刻都提醒我们，成功以最简单的形式出现。YoMee不仅仅是一只可爱的企鹅。YoMee是一场运动。',
    
    // How to Buy Section
    'howto.title': '如何购买？',
    'howto.step1.number': '01',
    'howto.step1.title': '创建钱包',
    'howto.step1.desc': '打开您喜欢的钱包应用程序，创建一个新钱包来存储您的YoMee代币。',
    'howto.step2.number': '02',
    'howto.step2.title': '购买BNB',
    'howto.step2.desc': '从交易所购买BNB并发送到您的钱包地址。',
    'howto.step3.number': '03',
    'howto.step3.title': '兑换代币',
    'howto.step3.desc': '使用DEX，使用合约地址将您的BNB兑换成YoMee代币。',
    'howto.step4.number': '04',
    'howto.step4.title': '享受$$$',
    'howto.step4.desc': '恭喜！您现在是YoMee家族的一员了。看着您的投资增长！',
    
    // Community Section
    'community.title': '加入社区！',
    'community.p1': '加入成千上万的YoMee粉丝，成为网络上最毛茸茸企鹅不断增长社区的一部分！关注YoMee日常生活的最新动态，支持这个可爱的旅程，从冰雪仙境到月球。',
    'community.p2': '关注我们的社交媒体，分享温暖人心的帖子，加入社区，与粉丝联系。每一次分享，每一个心，每一篇帖子都帮助YoMee摇摆着向新的高度迈进一步——一次一次地把互联网变成一个温暖、毛茸茸的地方。',
    
    // Footer
    'footer.disclaimer': '免责声明',
    'footer.disclaimerText': '$YOMEE是一个受社区驱动的模因代币，没有内在价值或财务回报预期。该代币纯粹用于娱乐目的。',
    'footer.copyright': '© 2024 YoMee. 版权所有。',
    
    // Language
    'language.chinese': '中文',
    'language.english': 'English',
  },
  en: {
    // Hero Section
    'hero.title': 'YoMee',
    'hero.subtitle': '萌萌企鹅',
    'hero.description': "China's most adorable internet star",
    'hero.buyNow': 'Buy Now',
    'hero.chart': 'Chart',
    'hero.contractAddress': 'CA: 0x9cf86906120c238fa720917c012fb6aa5e4f4444',
    
    // Meet Section
    'meet.title': 'Meet YoMee!',
    'meet.p1': 'In a country already famous for its adorable animals, it takes something truly special to capture the nation\'s heart. YoMee (萌萌), the fluffy penguin from a wildlife sanctuary in China, has done exactly that.',
    'meet.p2': 'With big round eyes, soft downy feathers, and an irresistibly clumsy waddle, YoMee has become the darling of Chinese social media. Every video of this precious penguin tumbling, playing, or nibbling on fish spreads like wildfire across Douyin, Weibo, and Xiaohongshu.',
    'meet.p3': 'Fans say YoMee has the soul of a playful child. One moment waddling confidently, the next sliding belly-first into a snowbank. YoMee\'s playful innocence feels raw and real.',
    'meet.p4': 'In a world that moves too fast, YoMee reminds millions to pause, smile, and feel that warm fuzzy feeling.',
    'meet.p5': 'YoMee is China\'s little penguin with a big heart, the fluffy friend who turned the internet into one big, happy ice wonderland.',
    
    // Story Section
    'story.title': 'A Penguin in a Bull Market!',
    'story.p1': 'In China, where pandas are national treasures, penguins like YoMee are capturing hearts in a whole new way. While pandas symbolize strength and grace, YoMee shows that even the smallest creatures can make the biggest impact.',
    'story.p2': 'Playful, curious, and endlessly entertaining, YoMee reminds millions to slow down and enjoy life\'s simple joys. In a world obsessed with "bullish" markets and moonshots, YoMee proves that soft power can be just as influential—turning the internet into YoMee\'s very own ice wonderland.',
    'story.p3': 'Every waddle, every tumble, every fish-eating moment is a reminder that success comes in the simplest forms. YoMee isn\'t just a cute penguin. YoMee is a movement.',
    
    // How to Buy Section
    'howto.title': 'How to Buy?',
    'howto.step1.number': '01',
    'howto.step1.title': 'Create Wallet',
    'howto.step1.desc': 'Open your favorite wallet app and create a new wallet to store your YoMee tokens.',
    'howto.step2.number': '02',
    'howto.step2.title': 'Fund BNB',
    'howto.step2.desc': 'Purchase BNB from an exchange and send it to your wallet address.',
    'howto.step3.number': '03',
    'howto.step3.title': 'Swap Tokens',
    'howto.step3.desc': 'Use a DEX to swap your BNB for YoMee tokens using the contract address.',
    'howto.step4.number': '04',
    'howto.step4.title': 'Enjoy $$$',
    'howto.step4.desc': 'Congratulations! You\'re now part of the YoMee family. Watch your investment grow!',
    
    // Community Section
    'community.title': 'Join The Com!',
    'community.p1': 'Join the thousands of YoMee fans as part of a growing community around the fluffiest penguin on the web! Follow for the latest updates from YoMee\'s daily life and support this adorable journey from ice wonderland to the moon.',
    'community.p2': 'Follow our socials, share heartwarming posts, join the community, connect with fans. Every share, every heart, every post helps YoMee waddle one step closer to reaching new heights—turning the internet into a warm, fuzzy place one flap at a time.',
    
    // Footer
    'footer.disclaimer': 'Disclaimer',
    'footer.disclaimerText': '$YOMEE is a community-driven meme token with no intrinsic value or expectation of financial return. The token is purely for entertainment purposes.',
    'footer.copyright': '© 2024 YoMee. All rights reserved.',
    
    // Language
    'language.chinese': '中文',
    'language.english': 'English',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('yomee-language');
    return (saved === 'en' || saved === 'zh') ? saved : 'zh';
  });

  useEffect(() => {
    localStorage.setItem('yomee-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['zh']] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
