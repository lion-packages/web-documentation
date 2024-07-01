import { Fragment } from "react";

export default function YoutubeVideo({ title, url, ratio = "16x9" }) {
  return (
    <div
      className={
        "border border-secondary rounded p-2 mb-3 ratio ratio-" + ratio
      }
    >
      <iframe
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      />
    </div>
  );
}
