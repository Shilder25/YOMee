interface DouyinEmbedProps {
  videoId: string;
  autoplay?: boolean;
  className?: string;
}

export default function DouyinEmbed({ videoId, autoplay = false, className = "" }: DouyinEmbedProps) {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="rounded-2xl border-4 border-black overflow-hidden" style={{ width: '340px', height: '672px' }}>
        <iframe
          className={`w-full h-full block ${className}`}
          src={`https://open.douyin.com/player/video?vid=${videoId}&autoplay=${autoplay ? '1' : '0'}`}
          frameBorder="0"
          referrerPolicy="unsafe-url"
          allowFullScreen
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
}
