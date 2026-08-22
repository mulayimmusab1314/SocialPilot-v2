import { VIDEO_URL } from "./video-config";

export default function VideoBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        poster=""
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
    </div>
  );
}
