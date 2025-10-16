interface DouyinEmbedProps {
  videoId: string;
  autoplay?: boolean;
  className?: string;
}

export default function DouyinEmbed({ videoId, autoplay = false, className = "" }: DouyinEmbedProps) {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative w-full max-w-[450px] rounded-2xl border-4 border-black overflow-hidden" style={{ aspectRatio: '9/16' }}>
        <iframe
          className={`absolute inset-0 w-full h-full ${className}`}
          src={`https://open.douyin.com/player/video?vid=${videoId}&autoplay=${autoplay ? '1' : '0'}`}
          frameBorder="0"
          referrerPolicy="unsafe-url"
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{ transform: 'scale(1.15)', transformOrigin: 'center' }}
        />
      </div>
    </div>
  );
}
