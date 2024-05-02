import { useParams } from "react-router-dom";
import Content from "../Tools/Content";
import NotFound from "./NotFound";

export default function ContentView() {
  const { item_version, tab, code, library = null } = useParams();

  const Component = () => {
    if (!Content()) {
      return null;
    }

    if (null === library) {
      const item =
        Content().framework?.[item_version]?.docs?.[tab]?.list?.[code];
      if (item) {
        return item.code;
      }
    } else {
      const item =
        Content().library?.[library]?.[item_version]?.[tab]?.list?.[code];
      if (item) {
        return item.code;
      }
    }

    return <NotFound />;
  };

  return <Component />;
}
