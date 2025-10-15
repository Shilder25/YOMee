interface DouyinEmbedProps {
  videoId: string;
  autoplay?: boolean;
  className?: string;
}

export default function DouyinEmbed({ videoId, autoplay = false, className = "" }: DouyinEmbedProps) {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className={`relative max-w-sm w-full ${className}`}>
        <iframe
          className="w-full rounded-2xl border-4 border-black"
          src={`https://open.douyin.com/player/video?vid=${videoId}&autoplay=${autoplay ? '1' : '0'}`}
          frameBorder="0"
          referrerPolicy="unsafe-url"
          allowFullScreen
          allow="autoplay; fullscreen"
          style={{ height: '600px' }}
        />
      </div>
    </div>
  );
}
