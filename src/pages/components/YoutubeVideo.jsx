import { Ratio } from "react-bootstrap";

export default function YoutubeVideo({ title, url, ratio = "16x9" }) {
  return (
    <Ratio
      aspectRatio={ratio}
      className="border border-secondary rounded p-2 mb-3"
    >
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Ratio>
  );
}
