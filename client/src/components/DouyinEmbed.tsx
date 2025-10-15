interface DouyinEmbedProps {
  videoId: string;
  autoplay?: boolean;
  className?: string;
}

export default function DouyinEmbed({ videoId, autoplay = false, className = "" }: DouyinEmbedProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: '177.78%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-2xl border-4 border-black"
        src={`https://open.douyin.com/player/video?vid=${videoId}&autoplay=${autoplay ? '1' : '0'}`}
        frameBorder="0"
        referrerPolicy="unsafe-url"
        allowFullScreen
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
