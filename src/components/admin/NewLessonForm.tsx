'use client';

import { useCallback, useMemo, useState } from 'react';
import YouTube from 'react-youtube';

type Props = {
    onSubmit: (formData: FormData) => Promise<void>;
    defaultOrder: number;
};

function extractYouTubeVideoId(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname === 'youtu.be') {
            return u.pathname.slice(1) || null;
        }
        if (u.hostname.includes('youtube.com')) {
            const id = u.searchParams.get('v');
            if (id) return id;
            // Handle /embed/{id} or /shorts/{id}
            const parts = u.pathname.split('/').filter(Boolean);
            if (parts[0] === 'embed' || parts[0] === 'shorts') {
                return parts[1] || null;
            }
        }
        return null;
    } catch {
        return null;
    }
}

export default function NewLessonForm(props: Props) {
    const { onSubmit, defaultOrder } = props;

    const [title, setTitle] = useState('');
    const [order, setOrder] = useState<number>(Math.max(1, defaultOrder));
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoDuration, setVideoDuration] = useState<number | ''>('');
    const [isFree, setIsFree] = useState(false);

    const videoId = useMemo(() => extractYouTubeVideoId(videoUrl) || undefined, [videoUrl]);

    const handleYouTubeReady = useCallback((event: any) => {
        try {
            const player = event?.target;
            const duration = Math.round(Number(player?.getDuration?.() || 0));
            const data = player?.getVideoData?.();
            if (duration && !Number.isNaN(duration)) {
                setVideoDuration(duration);
            }
            const yTitle = data?.title;
            if (yTitle && !title) {
                setTitle(yTitle);
            }
        } catch {
            // ignore
        }
    }, [title]);

    return (
        <form action={onSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
            <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Title</label>
                        <input
                            name="title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
                        <input
                            name="order"
                            type="number"
                            min={1}
                            value={order}
                            onChange={(e) => {
                                const next = Number(e.target.value);
                                setOrder(Number.isFinite(next) && next > 0 ? next : 1);
                            }}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-3 py-2"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">YouTube URL</label>
                        <input
                            name="videoUrl"
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={videoUrl}
                            onChange={(e) => setVideoUrl(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2"
                        />
                        {videoId ? (
                            <div className="mt-3 aspect-video relative rounded-lg overflow-hidden border border-gray-200">
                                <YouTube
                                    videoId={videoId}
                                    onReady={handleYouTubeReady}
                                    iframeClassName="absolute inset-0 w-full h-full"
                                    opts={{
                                        height: '100%',
                                        width: '100%',
                                        playerVars: {
                                            modestbranding: 1,
                                            rel: 0,
                                            controls: 1,
                                        },
                                    }}
                                />
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Video Duration (seconds)</label>
                        <input
                            name="videoDuration"
                            type="number"
                            value={videoDuration}
                            onChange={(e) => setVideoDuration(e.target.value ? Number(e.target.value) : '')}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Auto-filled when the YouTube video loads; you can override.
                        </p>
                    </div>
                </div>

                <label className="inline-flex items-center gap-2">
                    <input
                        type="checkbox"
                        name="isFree"
                        checked={isFree}
                        onChange={(e) => setIsFree(e.target.checked)}
                    />
                    <span className="text-sm text-gray-700">Free Lesson</span>
                </label>

                <div className="flex justify-end">
                    <button type="submit" className="px-5 py-2.5 gradient-button-indigo text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                        Add Lesson
                    </button>
                </div>
            </div>
        </form>
    );
}


