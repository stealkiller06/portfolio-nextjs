"use client";
import Script from "next/script";
import { useEffect } from "react";

interface TikTokEmbedProps {
  videoUrl: string;
}

export function TikTokEmbed({ videoUrl }: TikTokEmbedProps) {
  const videoId = videoUrl.split("/").pop() || "";
  const username = videoUrl.split("@")[1]?.split("/")[0] || "";

  useEffect(() => {
    // Reload TikTok embed script when component mounts
    if ((window as any).tiktok) {
      (window as any).tiktok.reload();
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).tiktok) {
            (window as any).tiktok.reload();
          }
        }}
      />
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{ maxWidth: "100%", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title={`@${username}`}
            href={`https://www.tiktok.com/@${username}?refer=embed`}
            rel="noreferrer"
          >
            @{username}
          </a>
          <a
            title="greenscreen"
            target="_blank"
            href="https://www.tiktok.com/tag/greenscreen?refer=embed"
            rel="noreferrer"
          >
            #greenscreen
          </a>
        </section>
      </blockquote>
    </div>
  );
}
