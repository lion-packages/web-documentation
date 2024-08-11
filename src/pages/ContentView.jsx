import { useParams } from "react-router-dom";
import Content from "../Tools/Content";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import ContentLoading from "./components/ContentLoading";

export default function ContentView() {
  const { item_version, tab, code, library = null } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  const fetchData = () => {
    const contentData = Content();

    if (!contentData) {
      setContent(<NotFound />);

      return;
    }

    let item;

    if (null === library) {
      item = contentData.framework?.[item_version]?.docs?.[tab]?.list?.[code];
    } else {
      item =
        contentData.library?.[library]?.[item_version]?.[tab]?.list?.[code];
    }

    if (item) {
      setContent(item.code);
    } else {
      setContent(<NotFound />);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchData();

    setLoading(false);
  }, [item_version, tab, code, library]);

  return <div>{loading ? <ContentLoading /> : content}</div>;
}
