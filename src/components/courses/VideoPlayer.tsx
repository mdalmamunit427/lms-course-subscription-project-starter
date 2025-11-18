import React, { useMemo } from 'react';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';

type VideoPlayerProps = {
  videoUrl?: string;
  onReady?: (player: YouTubePlayer) => void;
  onStateChange?: YouTubeProps['onStateChange'];
  className?: string;
  iframeClassName?: string;
};

const getYouTubeVideoId = (url?: string): string | null => {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

export function VideoPlayer({
  videoUrl,
  onReady,
  onStateChange,
  className,
  iframeClassName,
}: VideoPlayerProps) {
  const videoId = useMemo(() => getYouTubeVideoId(videoUrl), [videoUrl]);

  const youtubeOpts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  if (!videoId) {
    return (
      <div className="aspect-video bg-linear-to-br from-blue-500 via-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🎥</div>
          <p className="text-xl font-semibold mb-2">No video available</p>
          <p className="text-sm text-blue-100">
            {videoUrl ? 'Invalid YouTube URL' : 'This lesson has no video'}
          </p>
        </div>
      </div>
    );
  }

  const handleReady: YouTubeProps['onReady'] = (event) => {
    if (onReady) onReady(event.target);
  };

  return (
    <div className={`relative bg-black aspect-video group ${className || ''}`}>
      <YouTube
        videoId={videoId}
        opts={youtubeOpts}
        onReady={handleReady}
        onStateChange={onStateChange}
        className="w-full h-full"
        iframeClassName={iframeClassName || 'w-full h-full'}
      />
    </div>
  );
}

export default VideoPlayer;


